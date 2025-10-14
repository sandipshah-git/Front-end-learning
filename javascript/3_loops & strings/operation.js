let op1 = 'English ';
let op2 = 'HINDI ';

console.log(op2.length);

// let finalAns = `${op1}${op2}`;
// console.log(finalAns)

// let ans = op1 + op2;
// console.log(ans);

// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase())

// let str = "Babbar";
// console.log(str.substring(2,4));  //(last index is exclusive)

//console.log(str.substring(2));

let sentence = "Hello \\k \\xa\\ \\hali \\chali";

let words = sentence.split('\\');

console.log(words);

console.log(words.join('-'));