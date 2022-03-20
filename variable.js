// 1. Use strict
// added in ES5
// Vanilla Javscript에 쓰임
// 상식적인 범위 내의 문법에 관한 문제를 잡아줌
// Javascript 엔진이 효율적으로 더 빠르게 자바스크립트를 분석할 수 있음
'use strict';

// 2. Variable rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'soo';
    console.log(name);
    name = 'bebe';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!!)
console.log(age);
age = 4;
console.log(age);
var age;
// hoisting -> 어디에 선언이 돼있는지 상관 없이 항상 제일 위로 선언을 끌어올려주는 것
// age 나중에 var로 선언해줘도 호이스팅이 되어 에러가 나지 않음.. 
// has no block scope

// names = 5;
// let names;
// let은 에러남

// 3. Constant r(read Only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// 못바꿈 Error!
// daysInWeek = 8;
console.log(daysInWeek);

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// -> data 자체 변경 불가
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always 
// - security
// - thread safety (한꺼번에 여러개의 쓰레드에 할당되면 좋지 않기 때문)
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// 숫자는 다 number 
const count = 17;   // Integer
const size = 17.1;  // Decimal number
console.log(`value: ${count}, type: ${typeof count}`);

// number
// -> infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (새로생김, 아직 대중적으로 쓰이지 않음, firefox, chrome만 지원)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type ${typeof bigInt}`);


// String
// `${}` -> template literals (string) 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// Boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// ''
let y = '';
console.log(`value: ${y}, type: ${typeof y}`);


// symbol
// object에 식별 가능한 아이디 값을 준다
const symbol1 = Symbol("a");
const symbol2 = Symbol("a");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// Object, real-life object, data structure
// const로 선언했어도 object 안에 참조값은 변경 가능
const who = {name: 'soo', age: 26};
who.name = 'bebe';
who.age = 6;
console.log(who);

// 5. Dynamic typing: dynamically typed language
// <-> Static typed language
// 변수를 선언할때 타입인지 선언하지 않고 프로그램이 동작할때 할당된 값에 따라 타입이 변경된다.
// -> Error 발생 이유임 -> typescript가 나온 이유!!!
let text = 'hello';
console.log(text.charAt(0));    // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 'a'+'b'='ab'처럼 75값이 출력
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // 숫자로 인식, 연산 됨
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));    // 다른 사람이 숫자로 바꿔놨어도 모르고 string으로 생각하면 에러가 남