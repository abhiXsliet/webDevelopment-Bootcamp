////////////////////////////////////////
//Very Important Interview Perspective//
////////////////////////////////////////

//Example of Synchronous code
// function sync() {
//     console.log('first');
// }
// sync();
// console.log('second');


//Async -> Execute kab hoga pata nhi lekin ho jaayega

//Async func() always return function
//Example of Asynchronous code

// setTimeout(function(){
//     console.log('third');
// }, 3000)

// function sync() {
//     console.log('first');
// }
// console.log('second');


//js is a single threaded language
//concurrency is handled by async code using event loop
//when call stack is empty then the callback queue fn. sends and get executed into call stack
//setTimeout() is non-blocking. It will execute only after all the statements outside it it have been executed as opposed to blocking code that blocks the further execution until that operation is finished.


////////////
//// API /// => Interface means Mediatator  
//////////// 
// A software intermediary that allows two applications to talk to each other. 
// APIs are an accessible way to extract and share data within and across organizations.

//FEATURES OF ASYNC CODE
// -> Clean and concise
// -> Better Error Handling
// -> Easier Debugging
// -> Increase Performance and responsiveness of application

///////////
//PROMISE// => Promise object represent the failure or completion of Async code/operation
/////////// => Promise can be pending, fulfilled, rejected
//  => Anything one want to execute parallelly in js, can use PROMISES
//  => Parallely executing in background and is an async code meaning the code gets executed when their time arrives

// Whenever you use Async code considering writting it into a promise for Best Practice
// let meraPromise1 = new Promise( function(resolve, reject) {
//   setTimeout(function() {
//     console.log('I am Inside Promise 1');
//   }, 3000);
//   // resolve('Resolved');
//   // reject('Bhaishab Error is here');
//   reject(new Error('Received an error and called using .catch() method'));
// })
// // console.log(meraPromise1);

// // 2-methods for promise
// // meraPromise1.then(value => {console.log(value)}); //then method is used to do something after completion of Promise process 
// meraPromise1.catch((error) => {console.log(error)});
// // meraPromise1.catch((error) => {console.log("Received an error")});

//other way of catching error or executing something after promise being successfully completed
// meraPromise1.then(value => {console.log(value)}, error => {console.log(error)});
// meraPromise1.then(value => {console.log(value)}, error => {console.log('Received an error')});



// let meraPromise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside Promise2');
//     }, 3000);
//     resolve(22333);
//     //reject(new Error('Bhaisahab error aaye hai'));
// });
// console.log('Pehla');


//Anything which can run in background can be a promise 
//MULTIPLE PROMISES (which has dependency on each other)
//PROMISE CHAINING -> .then

// let waadaa1 = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log('settingTimeout-1 started');
//   }, 2000);
//   resolve(true);
// })

// let output = waadaa1.then(() => {
//   let waadaa2 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       console.log("settingTimeout-2 started");
//     },3000);
//     resolve("waadaa-2 resolved");
//   })
//   return waadaa2;
// })
// output.then((value) => console.log(value));


// Do you use repeatdly(50-times) .then method ?? => No, One can use async-await method instead
// Await meaning rukwana / wait karwana

//////////////////
// Async-await /// => Special Syntax used to work with promises
////////////////// => for e.g relay race

//async function declaration
// async function abcd() {
//   return 7;
// }
// console.log(abcd()); //here async function is returning a PROMISE although its not visible in the written code

// async function abcd() {
//     return "kya hua tera";
// }
// console.log(abcd());

//calling something from Network or api calling can be considered as an example of async function

// One can code like this whenever multiple dependent promises are available

// async function utility() {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Delhi is really Hot");
//     }, 5000);
//   });
  
//   let hydWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hyderabad is Cool");
//     }, 6000);
//   });

//   //both executing parallelly
//   let dW = delhiWeather; 
//   let hW = hydWeather;

//   //second line 'hW' will not be executed untill & unless 'dW' not executes
//   // let dW = await delhiWeather;
//   // let hW = await hydWeather;

//   return [dW, hW];
// }
// console.log(utility());


////////////////
/// FETCH API // => To send or receive data from Network
//////////////// -> returns a promise

// LINK USED FOR API : https://jsonplaceholder.typicode.com/guide/
// same format is available for json like js object
// let obj = { //object literal
//     heading : "head"
// };

// async function utility() {//using async function since it is a N/w call

//   //calling fetch api incase of get where we need to retrieve data 
//   let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   let output = await content.json(); //Javascript Object Notation
// //   console.log(output);
// }
// console.log(utility());


// //.ok & .status are not functions but a property which is accessible.
// //Also once you consumed the methods like .json() or .text(). You can't access them again, you can only consume them once
// //Here we are cloning the response using .clone() before accessing the instance method .json() so that we ca access .text() on cloned response
// async function utilityD() {
//     let content = await fetch ('https://jsonplaceholder.typicode.com/posts/1');
//     let clonedContent = content.clone();
//     let output = await content.json();
//     console.log(output);
//     let output2 = content.ok;
//     console.log(output2);
//     let output3 = content.status;
//     console.log(output3);
//     let output4 = await clonedContent.text();
//     console.log(output4);
// }
// utilityD();

// POST CALL FOR API
// SYNTAX
// fetch('url') -> to get
// fetch('url', options) -> we should convert options to make it as a post

// async function helper() {
//   let options = {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'abhishek',
//       body: 'healty',
//       userId: 007,
//       weight: 100,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   };

//   let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//   let response = content.json();
//   return response;
// }

// async function utility() {
//   let ans = await helper();
//   console.log(ans);
// }
// utility();


////////////
//CLOSURE // => A Top level entity which holds the whole logic of function + hold information of all variables/parameters which function is using from its surrounding (Lexical environment )
//////////// => A closure is the combination of a function bundled together(enclosed) with REFERENCES to its surrounding state (the lexical environment).

// //variable scope => let = block sope => var = global scope

// //Example-1
// let name = "Kumar";
// function init() {
//   let name = "Mozilla"; //name is a local variable created by init() fn.
  
//   //displayName() is the inner function, that forms the closure
//   function displayName() {
//     let name = "Abhishek";
    
//     console.log(name);  //use variable declard in the parent function
//   }
//   displayName();
// }
// init();

//  //Example-2
// function init() {
//   let name = "OPERA";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }
// let func1 = init();
// func1();

///////////////////////////////////////////////////////////
/// IMPORTANT                                           ///
/// NESTED FUNCTION -> CLOSURE -> REFERENCE (NOT COPY)  ///
///////////////////////////////////////////////////////////

// //Example - 3
// let name = "What is in the name";
// function nested() {
//   let name = "name";
  
//   function n1() {
//     name = "nameN1";
//     console.log(name);

//     function n2() {
//       name = "nameN2";
//       console.log(name);

//       function n3() {
//         name = "nameN3";
//         console.log(name);
//       }
//     }
//   }
//   return n1;
// }
// let outerFunc = nested();
// outerFunc();


//HW ? -> Classes and Export Modules in JS
// JavaScript modules allow you to break up your code into separate files.
// This makes it easier to maintain a code-base.