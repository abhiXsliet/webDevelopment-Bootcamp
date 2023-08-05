console.log('Chaliye suru karte hain')

//object creation -> oop
let rectangle = {

    //properties of object
    length : 1,
    breadth : 2,

    //this is called a method instead of calling it as a function
    //behaviour
    draw: function(){
        console.log('Drawing Rectangle');
    }

    // draw() {
    //     console.log('Drawing Rectangle');
    // }
};

//to access length => rectangle.length();
//to access breadth => rectangle.breadth();
//calling function => rectangle.draw();


// let rectangle2 = {

//     //properties of object
//     length : 1,
//     breadth : 2,

//     //this is called a method instead of calling it as a function
//     //behaviour
//     draw: function(){
//         console.log('Drawing Rectangle');
//     }
// };

// let rectangle3 = {

//     //properties of object
//     length : 1,
//     breadth : 2,

//     //this is called a method instead of calling it as a function
//     draw: function(){
//         console.log('Drawing Rectangle');
//     }
// };




//function is a set of program which perform a well defined task
// There are two ways of object creation 
// 1. Factory Function
// 2. Constructor Function

// 1. FACTORY FUNCTION 
// A function where object is created and returned after requesting as fn. call

function createRectangle() {

    return rectangle = {
        length : 1,
        breadth : 2,

        draw() {
            console.log('Drawing Rectangle');
        }
    };
}

//passing parameter to a function
function createRectangle(l, b) {

    return rectangle = {
        l, //length : l,
        b, //breadth : b,

        draw() {
            console.log('Drawing Rectangle');
        }
    };
}

// var rectangleObj1 = is storing & returning the object of factory fn.
let rectangleObj1 = createRectangle(); 
let rectangleObj2 = createRectangle(5, 4);


//REVISE
// //Here a is an empty object
// let a = {};

// //Here b is an object with one property 
// let b = {
//     value: 10
// };

// // Here b2 is an object with two properties
// let b2 = {
//     l : 1,
//     b : 2
// }

// //Here b3 is an object with two properties and one method
// let b3 = {
//     l : 1,
//     b : 2, 
//     draw () {
//         console.log('Drawing');
//     }

//     // draw : function(){
//     //     console.log('Drawing');
//     // }
// };

// 2. CONSTRUCTOR FUNCTION 
// Previously =>    //Camelcase -> numberOfStudents
// Pascal Notation -> first letter of every word is capital -> NumberOfStudents

// this keyword -> reference current object which one is working on
// this -> reference an empty object since it is referencing to nothing
// constructor function -> prop/methods ko initialise/Define kr rha hai 
// no return is done here since it is not required
function Rectangle() {
    this.length = 1;
    this.breadth = 2;
    this.draw = function() {
        console.log('drawing');
    }
}

function Rectangle2(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function() {
        console.log('drawing again');
    }
}


//object creation using constructor
        // new -> EMPTY OBJECT is created
        // for an EMPTY OBJECT const. fn. (Rectangle/Rectangle2) is invoked
        // EMPTY OBJECT -> is referred by this keyword
let rectangleObject = new Rectangle();
let rectangleObject2 = new Rectangle2(3, 5);

// //invoking constructor fn.
// rectangleObject;
// rectangleObject2.draw();

//One can you any of two methods for object creation



// DYNAMIC NATURE OF OBJECTS

// //adding a new property to an object
// rectangleObject.color = 'Yellow';
// console.log(rectangleObject);

// //remove
// delete rectangleObject.color;
// console.log(rectangleObject);


// CONSTRUCTOR PROPERTY
//function is also an object js and every object must have a property called constructor(either defined or default) which says how's the object created.

// rectangleObject.constructor -> Rectangle(){---} //try console printing for better understanding
// Rectangle.constructor -> ?   //-> it has a default constructor as -> Function() { [native code] }

//Internally Rectangle.constructor (default/inbuilt const.) working BTS are as mentioned below
// let Rectangle = new Function(___, ___, `entire code`);

                    //F -> use capital f since it is an inbuilt fn.
let Rectangle1 = new Function(
    'len', 'bre', //`` -> backtick character
`this.length = len;
this.breadth = bre;
this.draw = function() {
    console.log('drawing again');
}`);

//object creation using Rectangle1
let rect = new Rectangle1(2,3);
rect.length;

console.log(rect);


// FUNCTIONS ARE OBJECTS

            //after using dot opr. on Rectangle
//Rectangle. -> length
//           -> breadth
//           -> name
//           -> some methods
//           -> some properties
// functions are also an object in js


//TYPES IN JS
    //Primitive or Value Types => Number, String, Boolean, Undefined, Null 

    //Reference types or Objects => Functions, Objects, Arrays -> Everything is an object in reference type

//Difference b/w primitive and reference?
//primitive type -> copy banti hai
//reference type -> address pass hota h

//*Primitives are copied by their value
//*References are copied by their address/reference

//Primitive Type example
// let a = 10;
// let b = a;

// a++;
// console.log(a); //11
// console.log(b); //10


//pass by value concept -> creates another copy 
// let a1 = 10;
// function inc(a1){ //passing a primitive always makes a copy of that passed primitive
//     a++;
// }
// inc(a1);
// console.log(a1);


//Reference Types Example
// let a = {
//     value : 10
// };

// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);


//pass by reference concept -> function call -> same address ko different/same name se point kr rhe hote hai
let a = {value : 10 };

function inc(a){
    a.value++;
}
inc(a);
console.log(a.value);



//ITERATING THROUGH OBJECTS
    //for-of
    //for-in

let rectangleX = {
    length : 1,
    breadth : 4,
    //color : 3
};

//for-in loop
//Iterate over all property keys of an object
// for(let key in rectangleX) {
//     //keys are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key, rectangleX[key]);
// }


//for-of loop => only can be used on iterables (such as arrays, maps, etc.)
//can we use for-of loop on objects?
//No you can't but there is a hack ? (HW)
                    //.entries
// for(let key of Object.keys(rectangleX)) { //in this case an array is made of keys
//     console.log(key);
// }



// Is there any way to find any existing properties in an object?

// if('color' in rectangleX) {
//     console.log('Present');
// }else{
//     console.log('Absent');
// }



//IMPORTANT FOR MCQ'S

//OBJECT CLONING
    //Iteration
    //Assign
    //Spread

//object cloning #1 using for-in loop
let src = {
    a : 10,
    b : 20,
    c : 30
}

// let dest = { }

// for(let key in src) {
//     dest[key] = src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

//object cloning #2 using Assign
//{} -> empty dabba jisme src wala sari value copy ho rhi hai aur wo dest me save ho rha h

let src2 = { value : 25}

// let dest = Object.assign({}, src, src2); 
// console.log(dest);
// src.a++;
// console.log(dest);

//object cloning #3 using spread -> very simple
// let dest = {...src};
// console.log(dest);
// src.a++;
// console.log(dest);


//GARBAGE COLLECTION

//It de-allocate the memory automatically by finding those var/const which is not in use
//We have no control over garbage collector
//run in background