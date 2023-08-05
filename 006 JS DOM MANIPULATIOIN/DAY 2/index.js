//BROWSER EVENTS
// ->Announcement made by browser is known as events
// ->World of Events are Invisible
// ->By using method ->monitorEvents,  (to turn ON events) we can watch trigged event
//                   ->unmonitorEvents (to turn OFF events)

//classes are like blueprint
//objects are like reality
//INTERFACES are blueprint in js

// -> events
// -> how to respond to event
// -> what data stored in event
// -> how to stop an event
// -> what are life-cycle/different phases of events

//EVENT-TARGET
//-> It is a type of interface (->Top-level-entity), implemented by object that can receive events & may have listeners for them
//-> Listeners defines the type of action to be taken in case of a fired event
//3-Methods -> addEventListener();
//          -> removeEventListner();
//          -> dispatchEvents();
//Every Element comes under Event-Target for eg., -> document, para, article, video, etc

//Event-Target --> Node --> Element
//Node inherits properties from Event-Target 
//Element inherits prop. from both Event-Target and Node


//addEventListner()
//we can -> listen to event
//       -> respond to event
//       -> hook into event

//PSEUDO CODE
//<event-target>-addEventListner(<event-to-listen-for>, <function-to-run-when-event-happened>);

//event-target -> defines on which component one should apply Listener
//             -> for e.g., -> on document, article, para, div, video element, etc.
//event-type   -> click, double-click, scroll, etc     
//function     -> defines what to do when event happens


// APPLYING EVENT LISTENER ON DOCUMENT 
// document.addEventListener('click', function() {
//     console.log('Mujhe kyu click kiya');
// })

//another way
// function eventFunction() {
//     console.log('Another Event fired');
// }
// document.addEventListener('click', eventFunction);

// REVISING CONCEPT -> loose equality (==) : 1 == '1' => true;   -> type coercion is allowed
//                  -> strict equality(===): 1 === '1' => false; -> type coercion not allowed
//                  TYPE COERCION -> where js will try to convert the items being compared to same type (ekhi type me convert krke value compare hota hai sirf)


//  REMOVE EVENT LISTENER
//  Removing an Event Listener requires -> same target, -> same type, -> same function
//It requires you to pass the same event listener function that you have passed while applying add event listener function
// {id : 2} -> 106
// {id : 2} -> 208 -> both are different objects since they are on the different memory locations


// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function() {
//     console.log('I clicked on document');
// });

// content.addEventListener('click', function() {
//     content.style.backgroundColor = 'red';
// });




// //WRONG WAY of removing a Event Listener
// document.addEventListener('click', function() {
//     console.log('Hi');
// })

// document.removeEventListener('click', function() {
//     console.log('Hi');
// })

// All function in js is an object
//Here both addEventListener & removeEventListener are creating a different object since they have created two different functions for their own


//CORRECT WAY of removing a Event Listener
// function print() {
//     console.log('Hi');
// }

// document.addEventListener('click', print);
// document.removeEventListener('click', print);
//Here both addEventListener & removeEventListener are refering to the same function which means the same/single object 



//DISPATCH EVENT LISTENER -> MDN?

//PHASES OF AN EVENT
//Types -> Capturing Phase -> .addEvent('click', print, true) //true determines the Capturing Phase here but if nothing is passing then it'll be in default Bubbling Phase
//      -> At Target Phase
//      -> Bubbling Phase

//Syntax 
//<event-target>.addEventListener(--type--, --listener--, --true--);
//event-target = click, double-click, scroll, etc
//listener = function()-> what should happens after an event trigger
//true = use capture phase if there is blank then it'll be in default Bubbling Phase

//HW? -> AT Target Phase me bhi event listener apply kr sakte hai?



//THE EVENT OBJECT
//When an event occurs, then .addEventListener function() encounter an event object -> where has a lot of information about event

// const content = document.querySelector('#wrapper');
// content.addEventListener('click', function(abhi) {
//     console.log(abhi);
// })



//THE DEFAULT ACTION
//restrict the default action 
//method -> preventDefault()

// let content = document.querySelectorAll('a');
// let third = content[2];
// third.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('maja aaya default action ko rok kar');
// });

//AVOID TOO MANY EVENTS

// let myDiv = document.createElement('div');

// for(let i=0; i<=100; i++){
//     let myElement = document.createElement('p');
//     myElement.textContent = 'This is text content in myElement(p) ' + i;

//     myElement.addEventListener('click', function(event) {
//         console.log('myElement(p) pr Event Listener laga diya hu guyz');
//     })
//     myDiv.appendChild(myElement);
// }
// document.body.appendChild(myDiv);


//optimizing the above code 
//one problem -> above code was working for only para but optimized code is working for whole div

// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('I clicked guyz');
// }
// myDiv.addEventListener('click', paraStatus);

// for(let i=0; i<=100; i++) {
//     let myElement = document.createElement('p');
//     myElement.textContent = 'This is text content in myElement(p) ' + i;

//     myDiv.appendChild(myElement);
// }
// document.body.appendChild(myDiv);


//Just Wow -> div pr event Listener laga kr individual para ko access kr sakte hai.

// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('I clicked on ' + event.target.textContent);
// }

// myDiv.addEventListener('click', paraStatus);

// for(let i=0; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);



//Here para and span both are printing when click but it should print only on span not para
// let element = document.querySelector('#wrapper');

// element.addEventListener('click', function(event) {
//     console.log('I clicked on ' + event.target.textContent);
// });


//above problem resolved using a method called .nodeName
//now only when we click on span then it'll be printing
let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN'){
        console.log('I click on ' + event.target.textContent);
    }
})


//why we don't use script inside the head tag
//since it'll be executed prior which may create issues
//If someone want to add script to head tag then do this way -> not a best practice at all
{/* 
//after loading all DOMContent your script should be executing by this way
<script>document.addEventListener('DOMContentLoaded', 
        function() {
        --------------
        --------------
        --------------
    });
</script> 
*/}

//best practice is to use at the end of the body content so that it'll be executing at the end