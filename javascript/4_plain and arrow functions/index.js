// function

// function functionName (){
//     console.log("love you !");
// }

// functionName();

// function printNumber (num){   // also can write parameter without data type : let , const
//     for(let i = 0;i<=5; i++);
//     console.log("Number is : " , num);
// }
// printNumber(4); // argument is 4       
 

// function Expression ( can also store function in variable)

// const functionName = function (a, b){
//     return a * b;
// }
// console.log(functionName(2,5));


// Arrow function (use this for best practice)
const functionName =  (a, b) => {
    return a * b;
}
console.log(functionName(2,5));
