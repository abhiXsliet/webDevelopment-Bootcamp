//window-> it is a global object -> created by browser -> it represents a browser window
//DOM, BOM, JS Engine lies in Window
//window.console(--) //it will run too
//It'll provide a way to controls the browser window (which is displaying)

//DOM(Document object model) -> Whole HTML code converted into a js object called document -> Tree like structure
//BOM(Browser Object Model)  -> It allow js to talk to browser without matter other than content of page

//How DOM created?
//characters -> tags -> converted into Tokens with the help of tokenizer -> then converted into a Nodes through a process -> finally DOM ready

//METHOD TO FETCH AN ELEMENT 
//-> It is called on Document object
//-> It returns a single object since the ID is unique
//1. getElementById('heading')
//2. document.getElementsByClassName('--')
//3. document.getElementsByTagName('h1')

//keep in Mind :- 1. both method use document object
//                2. both returns multiple items
//                3. the list returned is not an Array

//wrong ID enters -> returns NULL

//  A SIMPLE HACK
// -> If we select an element in the element section then writing $0 in console will the whole html code
//e.g., $0  
//      let para = $0 -> para.className/$0.className


//METHOD OF SELCTION -> querySelector for single object
//we can use querySelector method to select elements that just we do in css
//we use querySelector method and pass it to string that is just like a css selector
//querySelector -> single object output (return always first one in case of multiple objects)

//let a = querySelector('#header') -> for selecting all respective id code
//querySelector('.header') -> for selecting all respective class code
//querySelector('header')  -> for selecting all respective tag's code

//  querySelectorAll -> document.querySelectorAll('hidden')


//UPDATE EXISTING CONTENT
//properties -> 1. Inner HTML -> get/fetch an element or returns all of its descendends HTML content 
//                            -> set an element's HTML content 
//                            -> let a = document.querySelector('.text-textpara');
//                            -> a.innerHTML; 
//                            -> a.innerHTML = ' ';
//                            -> it renders the added tags 

//           -> 2. Outer HTML -> HW?

//           -> 3. Text Content -> get/set textual content
//                              -> every thing gets printed here text content including if there is a html hidden tag available (tags are also treated as text here)

//           -> 4. Inner Text   -> get/set textual content
//                              -> whatever the content inside a html hidden tag will not be visible here if gets printed on console


//ADDING NEW ELEMENT/CONTENT using js
//createElement();
//let newChild = document.createElement('span');
//content.appendChild(newChild);
//after appending the element gets added to the end.
  
//for e.g., let content = document.querySelector('.paraClass'); //paraClass created self
//          content;
//          let newPara = document.createElement('p');
//          newPara; //<p> </p>
//          content.appendChild(newPara);
//          content; //new para added to the end of the paraClass content


//HOW TO CREATE A TEXT NODE
//2-ways ->1. Bewakoof way  ->2. Badhiya way/smart way

//       -> 1.Bewakoof way
// let newPara = document.createElement('p');
// let textPara = document.createTextNode('I am the text');
// newPara = append.child(textPara); //-> <p> I am the text </p>
// content.appendChild(newPara);

//       -> 2.Smart way
//let myPara = document.createElement('p');
//myPara.textContent = "I am the total";
//content.appendChild(myPara);

// -> it create a last sibling (for e.g, p has anchor,button,div, div then an extra anchor tag is added at the last)
// middle?
// begin?


//METHOD TO Position our newly created element
// -> insertAdjacentHTML()
// -> it has to be called with two arguments
// -> 1. location/position -> where
// -> 2. HTML content/text to be inserted -> what

//1. Where?
//   -> beforebegin -> it adds html text as previous sibling
//   -> afterbegin  -> it insert html text as first child
//   -> beforeend   -> it insert html text as last child
//   -> afterend    -> it insert html text as following sibling


// // BeforeBegin
// <p>
//     {/* AfterBegin */}
//
//     <div>
//
//     </div>
//
//     {/* Before End */}
// </p>
// // AfterEnd

//example
// let content = $0 //(or by using querySelector)
// let myText = document.createElement('h3')
// myText.textContent = "Adding a heading 3"
// content.insertAdjacentElement('beforeBegin/afterBegin/beforeEnd/afterEnd', myText)


//REMOVE 
//  -> exactly opposite of append child
//conditons to be fullfilled here -> 1. know parent element
//                                -> 2. the child element to remove
//                                   *  parent.removechild(childElement)

//confusing to fetch parent use this ninja technique
// parent = childElement.parentElement;
// childElement.parentElement.removeChild(childElement); //parent.removeChild(childElement)



//CSS -> changing in css using js
//specificity 
// -> External Spreadsheet
// -> Inline CSS -> It has the highest power
// -> Internal CSS

//we can make changes in css by using different properties
// -> .style 
//           -> at a time only single style property can change
//           -> content.style.color = 'red';
//           -> content.style.backgroundColor = 'white';

// -> .cssText
//          -> at a time can impact more the one style property 
//          -> content.style.cssText = 'color: green; background-color: white, font-size: 4em'; 
// -> .setAttribute
//          -> we can set ID, class(it may lead to changing of prior entered class of the first place) and many more using setAttribute as well as styling
//          -> content.setAttribute("style", "background-color: pink; color: orange; font-size: 3em;")
//          -> content.setAttribute("id", "id_name"); //breaking separation of concern rule

// -> .className
//          -> it return a string with space separated classes
//          -> first one has to convert obtained string into an array using split(' ') method so that individual class can be obtained
//          -> after converting it into an array one can add or delete class from it  -> can iteratate using for loops
//          -> Better to use classList why? below explained

// -> .classList
//          -> it returns an array of class object
//          -> can easily iterate over it using loops
//          -> Methods Available
//                               -> add()
//                               -> remove()
//                               -> toggle()   -> if element is present then it'll delete the element or vice versa
//                               -> contains() -> if element is present then it returns true or vice-versa

