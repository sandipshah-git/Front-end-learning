// variables........


// let

let a = 10;

a = 15; // can re-assign

// let a = 30; --> can't re-define

console.log(a);

// const 

// x = 370;  (0ps , its also working)
const x = 30;

console.log(x);

// var

var b = 40;
b = 90;
var b = 80;

// function example(){
//     var z = 60;
//     // console.log(z);
// }
// example();
// console.log(z);

console.log(b);

console.log(typeof(z));
console.log(typeof(a));


// examples 1
console.log();

///////////////////////
const person = {
    name: 'Mayank',
    age: 21
};

console.log(person.name);    // Output: Mayank

// Modifying object properties is allowed
person.name = 'Love';
console.log(person.name);    // Output: Love

// Attempting to reassign the variable will throw an error
person = {};    // Throws TypeError: Assignment to constant variable.


//  example 2

////////////////

const numbers = [1, 2, 3];
console.log(numbers);    // Output: [1, 2, 3]

// Modifying array elements is allowed
numbers.push(4);
console.log(numbers);    // Output: [1, 2, 3, 4]

// Attempting to reassign the variable will throw an error
numbers = []; // Throws TypeError: Assignment to constant variable.



// symbol data-types

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");


console.log(sym2);