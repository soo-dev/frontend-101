'use strict';
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello');

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name='coder';
}

const soo = { name: 'soo'};
changeName(soo);
console.log(soo);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream', 'conding', 'soo');

// 5. Local scope 
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage)
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); -> not defined
}
printMessage();
// console.log(message); -> not defined

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUserBad(user) {
    if(user.point > 10) {
        // ...
    }
}

// good
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // ...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted) 
// a function expression is created when the execution reached it.
const print = function () {
    console.log('print');   // anonymous function
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback functio using function expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint');

const add = (a, b) => a + b;

const simpleMiutiply = (a, b) => {
    return a * b;
};

// IIFE
// Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE')
})();

// ===
// function hello() {
//     console.log('IIFE');
// }
// hello();