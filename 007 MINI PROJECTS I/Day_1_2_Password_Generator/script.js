const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyMsg = document.querySelector("[data-copyMsg]");
const copyBtn = document.querySelector("[data-copy]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type = checkbox]");
let symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

//Initially
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//set stength circle to grey
setIndicator("#ccc");


//set password length
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min) *100/(max - min) ) + "% 100%"
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`; //shadow
}

function getRndInteger(min, max) {
    return Math.floor(Math.random()*(max-min)) + min; //(0->1)*(max-min) = less than max || min+(0->1)*(max-min) = range(min->max)
}

function generateRndNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97, 123)); //ascii -> 97-123 = a-z
}

function generateUpperCase() {
    return String.fromCharCode(getRndInteger(65,91)); //ascii -> 65-91 = A-Z
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    }else if(
        (hasLower || hasUpper) &&
        (hasNum || hasSym) &&
        password >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

async function copyContent() {

    try{
        //method to copy on clipboard which return a promise
        await navigator.clipboard.writeText(passwordDisplay.value);

        copyMsg.innerText = "Copied";

    }catch(e) {

        copyMsg.innerText = "Failed";
    }
    
    //to make span-> copyMsg visible
    copyMsg.classList.add('active');

    setTimeout(() => {
        copyMsg.classList.remove('active');
    }, 2000)
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked) 
            checkCount++;
    });

    //corner case (Special condition)
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

function shufflePassword(array) {
    //Fisher Yates Method
    for(let i=array.length-1; i>0; i--) {
        const j = Math.floor(Math.random() * i+1);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach( (el) => { str += el});
    return str;
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
        copyContent();
})

generateBtn.addEventListener('click', () => {

    if(checkCount == 0) 
        return;

    if(passwordLength < checkCount)
        passwordLength = checkCount;
        handleSlider();

    //Finding New Password
    password = "";

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRndNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0; i<funcArr.length; i++){
        password += funcArr[i]();
    }

    //remaining addition
    for(let i=0; i<passwordLength - funcArr.length; i++){
        let randomIndex = getRndInteger(0, funcArr.length);
        console.log("randomIndex " + randomIndex);
        password += funcArr[randomIndex]();
    }

    //shuffle the password
    password = shufflePassword(Array.from(password));

    //Display Password in UI
    passwordDisplay.value = password;

    //strength of password
    calcStrength();
});