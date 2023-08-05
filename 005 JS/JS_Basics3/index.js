//IN-BUILT OBJECTS & ARRAYS

//MATH:
//It is an inbuilt object that has properties & methods for mathematical constants and function.
//It's not a function object

// console.log(Math.random());
// console.log(Math.PI);
// console.log(Math.round(1.8));
// console.log(Math.round(1.2));
// console.log(Math.round(1.6));
// console.log(Math.max(2,1,4,3));
// console.log(Math.min(5,2,8,1,9));
// console.log(Math.abs(2));
// console.log(Math.abs(-2));

//STRING

let lastName = 'Babbar';
let lastName2 = '       Babbar      '
let firstName = new String('Love');

// console.log(typeof "John");     //string
// console.log(typeof lastName);   //string
// console.log(typeof firstName);  //object

// console.log(lastName.length);
// console.log(lastName[0]);
// console.log(lastName.includes ('Ba'));
// console.log(lastName.startsWith('Babb'));
// console.log(lastName.startsWith('love'));
// console.log(lastName.endsWith('ar'));
// console.log(lastName.toUpperCase());
// console.log(lastName.toLowerCase());
// console.log(lastName2.trim());
// console.log(lastName2.trimStart());
// console.log(lastName2.trimEnd());
// console.log(lastName.replace('Babb', 'Car'));

// string js mdn 

let message = 'This is my first message';
let words = message.split(' ');
// console.log(words);
// console.log(message.replace('first', 'second'));

//escape notation/sequence
let message1 = 'This is \n my \' "first" \n Message';
// console.log(message1);


//TEMPLATE LITERAL
let message2 = 
`Hello Abhi,

Thanks for the opportunity

Regards,
Babbar`;
// console.log(message2);

//place holder -> {--}
let message3 = 
`Hello ${lastName},

Thanks for hanging up 

Kind Regards,
Jai Hind`;
// console.log(message3);


//DATE AND TIME -> Inbuilt
let date = new Date();
// console.log(date);

let date2 = new Date ('June 20 1998 07:15'); 
// console.log(date2);

let date3 = new Date(1998, 11, 20, 7);
// console.log(date3);

date3.setFullYear(1947);
// console.log(date3.getDate());
// console.log(date3.getFullYear());
// console.log(date3);



//ARRAYS -> In js it is an object/reference type
//       -> It is a bucket which stores collection of items of different types (Numbers, booleans)
//-> Adding new Elements
//-> Finding Elements
//-> Removing Elements
//-> Splitting Elements
//-> Combining Elements

//ARRAY CREATION
// let numbers = [1, 4, 5, 7];
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[3]);

//INSERTION IN ARRAY
    //insert at end -> push
// numbers.push(9);
// numbers.push('z');  
// console.log(numbers)
    //insert at begining -> unshift
// numbers.unshift(10);
// numbers.unshift(20);
// numbers.unshift('X');
// console.log(numbers); 
    //insert at middle -> splice
// numbers.splice(2, 0, 'a', 'b', 'c', 'd');   
// console.log(numbers);


//SEARCHING IN ARRAY -> (on primitive)
// console.log(numbers.indexOf(4));
// console.log(numbers.indexOf(7));
// console.log(numbers.indexOf(100));

// //we want to check if a numbers exists in a array

//Bad Practice
// if(numbers.indexOf(4) != -1)
//     console.log('present');

//Use this to find
// console.log(numbers.includes(7));

// console.log(numbers.indexOf(4, 2));


//SEARCHING IN ARRAY -> on references
//array of object
// let courses = [
//     {no:1, naam: 'Love'},
//     {no:2, naam: 'Rahul'}
// ];

// console.log(courses);

//wrong way of finding object using indexOf/includes since both are different objects having different references
// console.log(courses.indexOf({no:1, naam: 'Rahul'}));
// console.log(courses.includes({no: 1, naam: 'Rahul'})); 


//call back functions are used to find into the objects
//A call back fn. or predicate fn is a fn. passed into another fn. which is then invoked inside the outer fn.
                        //arrow function
// let course = courses.find(course => course.naam === 'Kilvish');
// console.log(course);  //undefined

// let course1 = courses.find(function(course) {
//     return course.naam == 'Love';
// })
// console.log(course1);


// REMOVING ELEMENT

// let numbers1 = [1, 2, 3, 4 , 5, 6, 7];
// console.log(numbers1);

//end -> pop()
// numbers1.pop(); 
// console.log(numbers1);

//beginning -> shift()
// numbers1.shift();
// console.log(numbers1);

//middle -> splice()
// numbers1.splice(2, 1);
// console.log(numbers1);


//EMPTYING AN ARRAY
// let numbers = [1, 2, 3, 4, 5];

//address of numbers get copied to numbers2
// let numbers2 = numbers;

//wrong way of emptying an array
// numbers = [];
// console.log(numbers);
// console.log(numbers2);

//Right way of emptying an array
    //1st way 
// numbers.length = 0; //ye jada use hoti hai
    //2nd way
// numbers.splice(0, numbers.length); 
// console.log(numbers);
// console.log(numbers2);

    //3rd way -> by using while loop
// while(numbers.length > 0){
//     numbers.pop();
// }
// console.log(numbers);
// console.log(numbers2);



//COMBINING AND SLICING/SPLITTING ARRAYS
    
    //combining and slicing done here on array
// let first = [1, 2, 3,];
// let second = [4, 5, 6];

// let combined = first.concat(second);
// console.log(combined);


// let marks = [10, 20, 30, 40, 50, 60, 70, 80];

// //full slicing
// let sliced = marks.slice(); // original array copy made here
// console.log(sliced);

// let sliced = marks.slice(2); //30, 40, 50, 60, 70, 80
// console.log(sliced);

// let sliced = marks.slice(2, 6); //30, 40, 50, 60 
// //slice(x,y) -> x is included but y is excluded
// console.log(sliced);

    ///////////////////////////////////////////
    //combining and slicing on objects (HW) ?
    //////////////////////////////////////////



// //SPREAD OPERATOR

// let first = [1, 2, 3,];
// let second = [4, 5, 6];

// //2nd method of combining other than concat
// let combined = [...first, ...second];
// console.log(combined);
// let combined1 = [...first, 'a', ...second, 'b'];
// console.log(combined1);

// //Copy creation of an/combined array
// let another = [...combined];
// console.log(another);


// //TRAVERSING
// let arr = [10, 20, 30, 40, 50];

// for(let value of arr) {
//     console.log(value);
// }
//     //a call back fn. must be written inside a for-each loop
// arr.forEach(function(number){ 
//     console.log(number);
// })
    //above for-each loop replaced in arrow function form
// arr.forEach(number => console.log(number));



// JOINING ARRAYS

// let numbers = [10, 20, 30, 40, 50];
// const joined = numbers.join(',');
// console.log(joined);

// let messages = 'This is my first message';
// let parts = messages.split(' ');
// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);



//SORTING ARRAYS
// let number = [40, 30, 20, 10];
    //WRONG -> correct using predicate (HW)
// let number = [5, 10, 4, 40];
// console.log(number.sort());
// console.log(number.reverse());

/////////////////////////////////////////////////////
//HW -> sort using predicate fn. /Custom comparator//
/////////////////////////////////////////////////////

//SORTING
// let a = [10, 5, 4, 25];
// a.sort(function(a, b){
//     return b-a;
// })
// console.log(a);



//FILTERING ARRAYS

// let numbers = [1, 2, -1, -4];

// //filtering only poisitive value
// let filtered = numbers.filter(function(value){
//     return value >=0;
// });
// console.log(filtered);

// //converting in arrow fn.
// let filtered1 = numbers.filter(value => value <= 0);
// console.log(filtered1);



//MAPPING ARRAYS
//maps each elements of array to something else

// let numbers = [7, 8, 9, 10];
// console.log(numbers);

// let items = numbers.map(function(value){
//     return 'student_no ' + value;
// })
// //converting above into arrow fn.
// // let items = numbers.map(value => 'student_no ' + value);
// console.log(items);


//MAPPING WITH OBJECTS

// let numbers = [1, 2, -6, -9];
// let filtered = numbers.filter(value => value >= 0);
// console.log(filtered);

// // let items = filtered.map(function( m){
// //     return {value : num};
// // })
// // //converting in arrow fn.
// let items = filtered.map(num => {value: num}); //not working
// console.log(items);

// //CHAINING
// let numbers = [1, 2, -6, -9];

// let items = numbers
//                 .filter(value => value >= 0)
//                 .map(num => {value : num});
// console.log(items);