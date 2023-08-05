// console.log('Kya haal');

// //function call or invoke

// //function -> a block of code that fulfills a specific tasks

// //FUNCTION DECLARATION -> it supports function call above or below
// function run(){
//     console.log('running')  ; 
// }    
// //run(); //fn. call can be called above because of hoisting



// //NAMED FUNCTION ASSIGNMENT -> it supports function call always below
// let stand = function wallk(){
//     console.log('Walking');
// }

// //function call must be below in case of function assignment
// stand(); 
// //walk(); -> walk is not defined

// let jump = stand;
// jump();

// //ANONYMOUS FUNCTION ASSIGNMENT -> it supports function call always below
// let stand2 = function() {
//     console.log('walking anonymous');
// };
// stand2();



//Hoisting  => It is the process of moving function declarations to the top of the file
//          => done automatically by JS engine 
//          => JS Engine => spider monkey

// js is a dynamic language
// let x = 1;
// x = 'a';
// console.log(x);

// function sum(a, b){
//     return a + b;
// }
// console.log(sum(1,3)); //4
// console.log(sum(1)); // NaN
// console.log(sum());  // NaN
// console.log(sum(1,2,3,4,5)); // 3 => no error in js as compared to cpp

//JS has a special object called Arguments
// function sum(a,b) {
//     console.log(arguments);
//     return a+b;
// }
// let ans = sum(1,2,3,4,5); //It's not an Array it is just an object which has some key-value pairs
// console.log(ans);

// Above function is converted into a dynamic function
// function sum(a, b){
//     let total = 0;
//     for(let value of arguments)
//         total = total + value;
//     return total;
// }  
// let ans = sum(1,2,3,4,5);
// let ans1 = sum(1,3);
// console.log(ans); 
// console.log(ans1);
// console.log(sum());




///////////////////////
//  REST OPERATOR   //
//////////////////////

// function sum(...args) {
//     console.log(args);
// }
// //Here args is a variable in which whole values will be stored in form of Array
// sum(1, 2, 3, 4, 5, 6);


// //1st name is num, second name is value, rest's name are args, after rest(i.e, args) there'll be no more parameter
// function sum(num, value, ...args){ 
//     console.log(args);
// }
// sum(1, 2, 3, 4, 5, 6);   //1->num, 2->value, & rest->args


/////////////////////////////
////  DEFAULT PARAMETER  ////
/////////////////////////////

// function interest(p, r, y) {
//     return p*r*y/100;
// }
//                 //bekaar chiz - hack => undefined
// console.log(interest(1000, 10, 8));
// console.log(interest(1000, 3)); //NaN
// console.log(interest(10, 5)); //NaN
// console.log(interest()); //NaN

//default parameter -> if r=5 & y=10 is default value when nothing is given
//rule:- if r is a default parameter then going onwards are all will be a default parameter
// function interest(p, r=5, y = 10) {
//     return p*r*y/100;
// }
// console.log(interest(1000, 10, 5));
// console.log(interest(5000)); 
// console.log(interest()); //NaN

// //hack -> not recommended bad practice
// console.log(interest(8000, undefined, 10));
// console.log(interest(7000,undefined, undefined));


// GETTER -> access properties
// SETTER -> change ya mutate properties

// let person = {
//     fName : 'Abhishek', 
//     lName : 'Kumar'
// };
// console.log(person);

//issue -> read only function
// function fullName() {
//     return `${person.fName}       ${person.lName}`;
// }
// console.log(fullName());

// let person1 = {
//     fName : 'Oliver',
//     lName : 'Ethan',

//     get fullName() {
//         return `${person1.fName}         ${person1.lName}`;
//     },

//     set fullName(value) {
//         let parts = value.split(' '); //parts is an array now
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };
// console.log(person1.fName);
// console.log(person1.fullName);
// person1.fullName = 'Flying Beast';
// console.log(person1.fullName);



// //ERROR HANDLING
// TRY AND CATCH 

let person = {
    fName : 'Guru',
    lName : 'Randhawa',

    get fullName() { 
        return `${person.fName} ${person.lName}`;
    },

    set fullName(value) {
        if(typeof value != String){
            throw new Error ("You have not sent a string");
        }
        let parts = value.split(' ');
        fName = parts[0];
        lName = parts[1];
    }
};
// console.log(person);
// console.log(person.fullName);
// person.fullName = 1;
// console.log(person.fullName); //error since fullName supports a string

// try{
//     person.fullName = 1;
// }
// catch(e) {
//     alert('You have sent a number in the full Name');
// }
// console.log(person.fullName); //alerting before reaching here

//other way of alerting
// try{
//     person.fullName = true;
// }
// catch(e) {
//     alert(e);
// }

///////////////////
//HW : Finally ?
///////////////////////


/////////
//SCOPE//
/////////

//let -> scope to the nearest code block
//var -> scope inside the defined function/if not any then it can be accessed anywhere to the file

{
    let a = 5;
}
// console.log(a); //cannot access -> let = scope to the nearest code block

{
    var a = 5;

}    
// console.log(a); //can be accessed -> var = global variable

function walk() {
    var a = 5;
}
// console.log(a); //can be accessed

for(let i=0; i<10; i++) {}
// console.log(i); //can't be accessed since 'let' has limited scope

for(var i =0; i<10; i++){   }
// console.log(i); //can be accessed since 'var' has global scope


// if(true){
//     let a = 5;
// }
// console.log(a); //can't be accessed

// if(true){
//     var a = 10;
// }
// console.log(a); //can be accessed


// function a() {
//     const ab = 5;
// }
// const ab = 5; 
// function b() {
//     const ab = 5;
// }


//REDUCING AN ARRAY

let arr = [1, 2, 3, 4, 5];
let total = 0;
for(let value of arr){
    total = total + value;
}
// console.log(total);

//other way by using reduce
let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('PRINTING TOTAL SUM:');
console.log(totalSum);

let arr1 = [-1, -3, -5, -7, 16];

//here no value is given at the end of arr1.reduce()but working. 
//Since accumulator -> starts from firstValue and currentValue -> starts from the second value
let totalS = arr1.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(totalS);

//SORTING
// let a = [10, 5, 4, 25];
// a.sort(function(a, b){
//     return b-a;
// })
// console.log(a);
