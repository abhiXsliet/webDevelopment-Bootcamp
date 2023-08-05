// chrome js => v8
// firefox => spidermonkey
// js + cpp => Node which can be used to execute outside the browser, previously it was only for server-side/client side 

//line below is used to print on the console window
console.log('Namaste Duniya version 3');

//Hw? difference & similarity b/w java & javascript?
//java is a oop lang. while javascript is an oop scripting language


//Variable => named memory location (dynamic typed lang.)
// Rules:
// * cannot used a reserved keyword(let, if, var, etc.)
// * cannot contain space or - (hypen)
// * variable name should be meaningful
// * Always use camelcase(firstName)

//Primitve Types
//String -> string literal = values
//Number -> number literal = values
//Boolean -> boolean literal = values
//Undefined
//Null

// let a = true;
// console.log(a);

// a = 3;
// console.log(a);

//var -> global 
//let -> nearest code block
//let = 5 again let = 5 we cannot define let variable again and again

//HW
//var = 4 again var = 4 possible or not?
//let let = 5 => find out ?
//why cross line name was coming there?

// const num = 12;
// num = 13;

let lastName = 'Babbar';
console.log(lastName);

lastName = 1;
console.log(lastName);

//js is a dynamically typed language => if you defined a variable then you can change it into a different variable type 
//Dynamic Typing 

//Reference Types
// Objects
// Arrays
// Functions

//object creation
let person = { // person is a object literal or variable name
    firstName : 'love',  //firstName -> key/properties
    age : 24             //age -> key
};                       // key - values pairs
                         // { } -> object literal

//Array => DS used to contain a list of items of different types
let names = ['love', 'abhishek', 'sangram'];
console.log(names[0]);
names[1] = 'swaha'; //overwrite
console.log(names[1]);

//ECMA -> An organization who sets the standards for the js for all browser type

//OPERATORS
// Arithematic -> +, -, *, %, ** => (x**y = x^y)
// Assignment  -> =,/
// Comparison  -> <, >, >=, <=, ===, !=
// Bitwise     -> Bitwise AND (&), Bitwise OR (|)
// Logical     -> AND(&&), OR(||), NOR(~)

// let x = 2;
// let y = 3;
// let z = x + y;
// console.log(z);

// 3-2
// 12%5
// 2**10

// let a = 5;
// let b = 10;

// let ans1 = (++a)*(--b); //54
// console.log(ans1);
// let ans2 = (a++)*(--b); //48
// console.log(ans2);
// let ans3 = (a++)*(b--); //56
// console.log(ans3);
// let ans4 = (++a)*(b--); //63
// console.log(ans4);

// console.log(3>=3);
// console.log(5 > 3);
// console.log(3 > 4);
// console.log(5 !== 3);

//strict equality(comparison of both value and data type) and loose equality(comparison only value)

//Ternary Operator (also called conditional operator)

let age = 27;
let status = (age >= 18) ? 'Yes Vote' : 'No Vote';
console.log(status); //strike means depricated


//LOGICAL OPERATOR
// && => all condn should be true to become true; (dono 1 hoga tabhi 1 aayega)
// || => any single condn should be true then it will be true (koi bhi ek 1)
// !  => true -> false , false -> true

console.log(true || false);
console.log(false || 5 || 1); //short-circuiting
console.log(false|| 'love'); //with non-booleans


//HW : and me falsy/truthy concept aata hai find it?

//falsy => undefined null => 0 false , '', NaN
//Truthy => anything that is not falsy 

//BITWISE OPERATOR
// AND ->  agar dono bit 1 hai tabhi 1 aayega otherwise 0
// OR  ->  agar koi ek bit 1 ho jaaye tab o/p 1- aayega

//OPERATOR PRECEDENCE => use brackets without remembering any order of precedence


// CONTROL STATEMENTS
// let marks = 98;
// if(marks >= 90)
//     console.log('A');
// else if(marks >= 80)
//     console.log('B');
// else if(marks >= 70)
//     console.log('C');
// else if(marks >= 60)
//     console.log('D');
// else 
//     console.log('E');


// let number = 3;

// switch(number){
//     case 1: console.log('A');
//             break; // don't ever forget to use break statement

//     case 2: console.log('B');
//             break;

//     case 3: console.log('C');
//             break;

//     case 4: console.log('D');
//             break;

//     default: console.log('A');

// }

//LOOPS => USE TO DO REPEATION OF TASKS
// for loop
// for(initialisation, condition, updation){
//     //---;
//     //---;
// }

for(let i = 0; i<=5; i++){
    console.log(i);
}

// //while loop
// let i = 0;       //initialisation
// while(i <= 10){  //condition
//     console.log(i);
//     i++;        //updation
// }               

//do-while loop (execute atlease one time)

// let y = 1;                //initialisation
// do{
//     console.log(y);
//     y++;                 //updation
// }while(y<=10);           //condition