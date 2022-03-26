// 자료구조란?
// 비슷한 종류의 데이터를 묶어서 한 곳에다가 보관해 놓는 것들
// 어떤 방식, 어떤 형식으로 데이터를 담느냐에 따라 다양한 타입들이 있다.
// Object VS 자료구조
// Object: 서로 연관된 특징과 행동들을 묶어 놓는 것
// 자료구조: 다양한 종류의 Object들을 묶는 것 -> 비슷한것끼리 묶어야 좋은 프로그래밍!

'use strict';

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undeifned
console.log(fruits[fruits.length - 1]); // last index '🍌'

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}
// c. forEach
fruits.forEach((fruit, index, array) => console.log(fruit));

// 4. Addition, deletion, copy
// note!! shift, unshift are slower than pop, push
// -> 앞에서부터 진행하려면 앞에 있던 아이템을 옮기고 넣고 빼야하기 때문
// push: add an item to the end
fruits.push('🍓', '🍋', '🥬');
console.log(fruits);    // (5) ["🍎", "🍌", "🍓", "🍋", "🥬"]

// pop: remove an otem from the end
fruits.pop();
console.log(fruits);    // (4) ["🍎", "🍌", "🍓", "🍋"]

// unshift: add an item to the beginning
fruits.unshift('🥕', '🥔');
console.log(fruits);    // (6) ["🥕", "🥔", "🍎", "🍌", "🍓", "🍋"]

// shift: remove an item to the beginning
fruits.shift();
fruits.shift();
console.log(fruits) // (4) ["🍎", "🍌", "🍓", "🍋"]




