'use strict';
// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation 2^3

// 3. Increment and decrement operators
let preCounter = 2;
const preIncrement = ++preCounter;
// preCounter = preCounter + 1;
// preIncrement = preCounter;
console.log(`preIncrement(++counter): ${preIncrement}, counter: ${preCounter}`);

let postCounter = 2;
const postIncrement = postCounter++;
// postIncrement = postCounter;
// postCounter = postCounter + 1;
console.log(`postIncrement(counter++): ${postIncrement}, counter: ${postCounter}`);

let preDecreCounter = 2;
const preDecrement = --preDecreCounter;
// preDecreCounter = preDecreCounter - 1;
// preDecrement = preDecreCounter;
console.log(`preDecrement(--counter): ${preDecrement}, counter: ${preDecreCounter}`);

let postDecreCounter = 2;
const postDecrement = postDecreCounter--;
// postDecrement = postDecreCounter;
// postDecreCounter = postDecreCounter - 1;
console.log(`postDecrement(postDecreCounter--): ${postDecrement}, counter: ${postDecreCounter}`);


// 4. Assignment operators
let x = 3;
let y = 6;

// x = x + y;
// x = x - y;
// x = x * y;
// x = x / y;
console.log(x += y); // 9
console.log(x -= y); // 3
console.log(x *= y); // 18
console.log(x /= y); // 3

// 5. Comparison operators
// >, < 초과, 미만
// >=, <= 이상, 이하
console.log(10 < 6); 
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


// 6. logical oprators: || (or), && (and), ! (not)

const value1 = false;
// value1이 true 나오면 멈춘다.
// true값이 나오는 것을 맨 뒤에 두어야한다 -> check() 가 true!
const value2 = 4 < 2;

// || (or) : true 나오면 멈춤
console.log(`or: ${value1 || value2 || check()}`);

// && (and) : 다 true여야 멈춤
// value1 즉 앞에 있는 애가 false면 상관없이 false임(실행 안됨)
// null 체크할때 많이 쓰임
console.log(`and: ${value1 && value2 && check()}`);

// ! (not) false -> true / true -> false
console.log(!value1);

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('😱');
    }
    return true;
}

// 7. Equality
// 웬만하면 strict로!

const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
// 타입까지 같아야 true
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const a = { name: 'soo'};
const b = { name: 'soo'};
const c = a;

console.log(a == b);    // false, 각각 다른 레퍼런스가 저장되는 것임
console.log(a === b);   // false
// a의 레퍼런스의 값을 c에 할당했기 때문에 같은거임
console.log(a == c);    // true
console.log(a === c);   // true

// euquality
console.log(0 == false);    // true
console.log(0 === false);   // false
console.log('' == false);   // true
console.log('' === false);  // false
console.log(null == undefined); // true
console.log(null === undefined);    // false

// 8. Conditional operators: if
// if, else if, else
const name = 'soo';
if (name === 'soo') {
    console.log('Welcome Soo!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('Who are U!!');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
// name === 'soo'가 true면 'yes', false면 'no'
console.log(name === 'soo' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Firefox';
switch (browser) {
    case 'IE':
        console.log('Go away,,');
        break;
    // 같은 결과 나타낼때는 연달아 써도 됨
    case 'Chrome':
    case 'Firefox':
        console.log('Love you~');
        break;
    default:
        console.log('same all');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
} 

// do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0)

// for loop, for(begin; condition; step)
// begin 한번만 실행됨
// 그 다음 i > 0 이야? i - 2해 반복
for (i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for ${i}`);
}

// nested loops
// O(n^2) -> CPU에 좋지 않음
// 0일때 0 ~ 9 실행, 1일때 0 ~ 9 실행, ...
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. 0 ~ 10까지 짝수만 출력, use continue 
for(let i = 0; i <= 10; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// Q2. 0 ~ 10까지 루프, 숫자 8에서 멈추기(8까지 출력), use break
for (let i = 0; i < 11; i++) {
    if(i > 8) {
        break;
    }
    console.log(i);
}

