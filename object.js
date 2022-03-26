// Objects
// One of the Javascript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// ---------------------------------------------------------------------------------------------

// 1. Literals and properties
const obj1 = {};    // 'Object literal' syntax
const obj2 = new Object();  // 'Obeject constructor' syntax

function print(name, age) {
    console.log(name);
    console.log(age);
}

const soo = {name: 'soo', age: '26'};

print(soo);

// dynamically typed language
// can add properties later
soo.hasJob = true;
console.log(soo.hasJob);    // true

// can delete properties later -> crrrrrrazy
// delete soo.hasJob;
// console.log(soo.hasJob);    // undefined

// ---------------------------------------------------------------------------------------------

// 2. Computer properties
// key should be always string

const sooyoung = {name: 'sooyoung', age: '25'};

console.log(sooyoung.name);
console.log(sooyoung['name']);
sooyoung['hasJob'] = true;
console.log(sooyoung.hasJob);

function printValue(obj, key) {
    // console.log(obj.key);    ->  undefined
    console.log(obj[key]);  // soo
}

printValue(sooyoung, 'name');
printValue(sooyoung, "age");

// ---------------------------------------------------------------------------------------------

// 3. Property value shorthand\
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('soo', 56);
console.log(person4);

// ---------------------------------------------------------------------------------------------

// 4. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
    return this;
}

// ---------------------------------------------------------------------------------------------

// 5. in operator: property existence check (key in obj)
// 해당하는 키가 object 안에 있는 지 확인할 수 있는 property 'in'
console.log('name' in soo);     // true
console.log('age' in soo);      // true
console.log('random' in soo);   // false
console.log(soo.random);        // undefined

// ---------------------------------------------------------------------------------------------

// 6. for..in vs for..of
// for(key in obj)
console.clear();    // Console was cleared
for(key in soo) {
    console.log(key);
}

//  for (value of iterable)
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// 1 2 4 5

for(value of array) {
    console.log(value);
}   // 1 2 4 5

// ---------------------------------------------------------------------------------------------

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name:'young', age: '20'}
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for(key in user) {
    user3[key] = user[key];
}
console.log(user3);

// New way
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
// 값이 계속 덮어 씌여짐
console.log(mixed.color);   // blue
console.log(mixed.size);    // big
