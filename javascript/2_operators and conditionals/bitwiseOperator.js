//  1_Bitwish  OR ( | )

// let num1 = 5;
// // Binary representation of 5 : 0 1 0 1

// let num2 = 9;
// // Binary representation of 9  : 1 0 0 1

// console.log(num1 | num2);         // 13        : 1 1 0 1

// 2_Bitwish AND (&)

// let num1 = 5;
// // Binary representation of 5 : 0 1 0 1

// let num2 = 7;
// // Binary representation of 7 : 0 1 1 1

// console.log(num1 & num2);         // 5

// 3_Bitwish NOT (~)

// let num1 = 5;
// // Binary representation of 5 : 0 0 0 0 1 0 1

// let num2 = 8;
// // Binary representation of 7 : 0 0 0 1 0 0 0

// let num3 = -8; (adding 1 becomes -7 and change sign)
// // Binary representation of -8 : 1 1 1 1 0 0 0

// console.log(~num1);    // -6 (using 2's complemet : adding 1 and change sign)
// console.log(~num2);    // -9
// console.log(~num3);    // 7 

// 4_Bitwise XOR (^)   (it gives zero with same same value " 0  0 = 0 ,  1  1 = 0,  0  1 = 1"  & 1 for different value)

// let num1 = 5;
// // Binary representation of 5 : 0 0 0 0 1 0 1

// let num2 = 8;
// // Binary representation of 7 : 0 0 0 1 0 0 0

// console.log(num1 ^ num2);     // 13

// 5_Left Shift (<<)

// let num1 = 5;
// // Binary representation of 5 : 0 0 0 0 1 0 1 (shifting << 3 becomes :  0 1 0 1 0 0 0 = 40)

// let num2 = 8;
// // Binary representation of 7 : 0 0 0 1 0 0 0

// console.log(num1 << 3);     // 40
// console.log(num2 << 2);     // 32

// 6_Right Shift (>>)

let num1 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1 (shifting shis with >> 3 goes out out of  8 4 2 1 form so it should be zero)

let num2 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0  (shifting >>2 becomes : 0 0 0 0 1 0 = 2)

console.log(num1 >> 3);     // 0
console.log(num2 >> 2);     // 2


