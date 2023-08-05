//PERFORMANCE -> Measure speed of code
//            -> how to write efficient and performing code
//            -> event loop



//PERFORMANCE -> Standard way to measure how long your code takes to run
//            -> METHOD -> performance.now(); //-> VERY ACCURATE METHOD not like c++ functions
//                      -> .timeEnd()
//            -> This method provides a time-stamp, by which one can find the amount of time taken by the code to run

// //eg., (Adding 100 Para)
// const t1 = performance.now();
// for(let i = 1; i<=100; i++){
//   let newElement = document.createElement('p');
//   newElement.textContent = 'This is para ' + i;

//   document.body.appendChild(newElement);
// }

// const t2 = performance.now();
// console.log("This took " + (t2-t1) + " ms");

// //eg,.=> (optimized version)
// const t3 = performance.now();
// let myDiv = document.createElement('div');
// for(let i=1; i<=100; i++){
//   let newElement = document.createElement('p');
//   newElement.textContent = 'This is a para ' + i;

//   myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("This another way took me around "+ (t4-t3) + " ms");


//REFLOW  -> All the mathematical calculations being done under reflow (such as calculating dimension, position of new Element)
//        -> It is the process of calculating the dimensions and position of page element. This is a computationally intensive task.

//REPAINT -> After all those calculation, showing information, new layout pixel by pixel on screen/display comes under repaint
//        -> This is a process of drawing pixels to the screen. This is faster than reflow

//Updation of 100 para in code leads to 100-reflows and 100-repaints
//Best Practice is to minimize the Reflows and Repaints
////////////////////////
//DOCUMENT FRAGEMENT//// => Light weight document object
//////////////////////// => 0-reflow and 0-repaint happens when updation happens here (on document fragmentation)
//                       => 1-reflow and 1-repaint happens when it (documentFragementation) added on the document

// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++){
//     let newElement = querySelector.document('p');
//     newElement.textContent = 'This is para ' + i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment); // 1-Reflow, 1-Repaint happened here



// JS is a single threaded language, (i.e., one command at a time)
// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = 'This is a para in addPara function ';
//     document.body.appendChild(para);
// }

// function appendNewMessage() {
//     let para = document.createElement('p');
//     para.textContent = 'Kya haal chaal appendNewMessage function ';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();

//Execution is happening here top to bottom (in a particular sequence of instructions given in the program) 
//-> this is called SYNCHRONOUS (Occuring at the same time. for eg., live video and sound)
// ASYNC -> For. eg., addEventListener
//OBSERVATIONS HERE -> run-to-completion nature of code
//                -> js doesn't execute multiple lines/functions at the same time



///////////////
//CALL STACK///     => List to keep to track the functions
///////////////

// -> JS engine keeps a call stack of the function that are running. when a function is invoked it is added to list. when all of the code inside a fn. has been done then the fn. is removed from the call stack


//////////////////
//EVENT LOOP /////
//////////////////

// 1.console.log('ABCD')
// 2.element.addEventListener('click', function() {
//     function() {
//         console.log('1234')
//     }
// })
// 3. console.log('xyz')

//explanation of above written code
// 1. console.log('ABCD') went to call stack and after printing ABCD it empty/leave the call stack
// 2. addEventListener fn. went to call stack and it handed  addEventListener to the browser at event of on click then it empty/leaves the call stack
// 3. console.log('1234') went to call stack and after printing 1234 it empty/leaves the call stack
// 4. when there is a click on event happens/fired the addEventListener fn. sent to queue. Finally queue checks if the call stack is empty then it sends the to get executed

// Pure Brahmand me -> Event Loop -> Philip Robert ?
// Loupe tool by Philip Robert ?

//Whole ASYNC CODE is using event loop of JS 
//      -> Handling of async code is done by browser for any async code
//      -> when this async code is ready to be executed, it is moved to the Queue/callback Queue where it waits until the call stack becomes emtpy
//      -> Whenever call stack is empty code moves from Queue and gets executed


/////////////////////////////
// METHOD -> .setTimeout() // => Two parameters (function, time) passed here
/////////////////////////////

setTimeout(function() {
    console.log('What is up Everyone ');
}, 3000); //3ms

//A setTimeout fn. is given to the browser and after a cetain setTime the browser send the fn. to the callback queue and if the call stack is empty then callback queue sends fn. to the call stack and get executed



//Will it start execting instantly -> ? The answer is No. Since it is an async code so it went to the event loop -> handover to Browser -> handover to Queue -> if call stack is empty -> handover to call stack and get executed
setTimeout(function() {
    console.log('What is up Everyone ');
}, 0); 

// Whenever you are trying to defer(taalna) something until the stack is clear then this function can be used..

//setTimeout() is non-blocking. It will execute only after all the statements outside it it have been executed as opposed to blocking code that blocks the further execution until that operation is finished.
// Medium Article 
//https://medium.com/swlh/playing-with-javascript-settimeout-11201cd0d0c
// MDN docs on this
// StackOverFlow on this

