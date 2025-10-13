// Assignment Operators
// The assignment operator assigns value to the variables. The most common assignment operator we use is '='.


let firstName = "Sandip";
let z = 4;

console.log(firstName);      // Sandip
console.log(z);              // 4

// Comparison Operators   
//  (>),  (<), (>=), (<=),  (==), (!=) are used to compare values and determine the relationship between them. 
// These return a boolean value in the output.

//   Strict Equality v/s Loose Equality

let x = "10";
console.log(typeof(x));        // string

let y = 10;
console.log(typeof(y));         // number

console.log(x == y);            // true  (compare only value)

console.log(x === y);           // false  (compare value and data type also)