// Array is a collections of items

// creation of array
// let arr = [1,2,4,5,6,7];
// console.log(arr);

// array constructor
// let brr = new Array(3, "ram ", true, 'sita',4);
// brr.push("sandip");  //  goes at last side of array
// brr.pop();   // it removes last item of array
// brr.shift();  // removes first item of array
// brr.unshift("sandip");   // add item at first side of array
// console.log(brr.slice(1,4));   //  taking out some part/slice from array
// brr.splice(2,4,'shah');  //  'shah' goes at position of 2 index and no. of 4 item will remove  (-> splice can change content or insert,replace,remove
// brr.splice(3,0,false); // revore 0 no. of items & false goes at 3 index position

// console.log(brr);

// console.log(brr[3]);


                        // map 

// let arr1 = [10, 20, 30];

// let ansArray = arr1.map( (Number) => {     // map is for functioning of array items
//     return Number * Number;
// })
// console.log(ansArray)

// arr1.map( (Number , index) => {
//     console.log(Number);
//     console.log(index);
// })

          //    filter

// let arr = [2,10,23,13,50,34,26];

// let result = arr.filter((number)=>{  
//     // if(number % 2 === 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
//     return number % 2 ==0;
// });
// console.log(result);


// let arr = [2,5,90,24,10, 'sandip',true,"shah",false,null];

// let result = arr.filter((value) => {
//     if (typeof(value) === 'string'){
//         return true;
//     }else false;
// } );
// console.log(result);

      //   reduce 

// let arr = [10, 20 , 30 , 40, 50]; // logic -> if acc. is 0 then all values are adding one by one (if u don't initialize acc as 0 then automatically start with first value as 10 and adding others value in it)

// let ans = arr.reduce( (acc,curr) =>{
//     return acc + curr; // accumulator and current value
// }, 0); // initialize acc. value as 0

// console.log(ans);  //  150

//  sorting
// const arr = [2, 7, 1, 0, 8];
// console.log(arr.indexOf(8));
// // arr.sort();
// arr.sort((a , b) => b - a);  //  for decending ( a - b is for accending)

// console.log(arr);


//  find()

// let array = [3, 6, 1, 8, 9];
// let ans = array.find((num)=>{
//      return num == 8;
// } );
// console.log(ans);


// const users = [{ id: 1, name: "Ram" },  { id: 2, name: "Shyam" },  { id: 3, name: "Hari" } ];
// const user = users.find((u) => {
//     return u.name === "Shyam"
// });
// // const user = users.find((u) =>
// //      u.name === "Shyam"
// // );

// console.log(user);  // Output: { id: 2, name: "Shyam" }



//   for each loop 

// let arr = [10, 20, 30];
// arr.forEach((value , index)=>{
//     console.log("Number : ", value , "Index : ",index);
// });

// for-in loop

// let obj = {
//     Name : "sandip",
//     // "full name" : "sandip shah" // if variable has space the use " " ("full name")
//     age : 23,
//     wight : 62,
//     height : "5' 11 inch ",
//     greet : function( ){
//         console.log("Namaste");
//     }
// };

// for(let key in obj){
//     // console.log(key);  // key prints keys : means data types
//     console.log(key , " ", obj[key]) // obj [key] is print values
// }


//  for-of loop

// let arr = [10, 20, 30, 40];
// for(let value of arr){
//     console.log(value);
// }

// let fullName = "sandip shah";
// for(let val of fullName){
//     console.log(val); // print every letter seperatly
// }



//   arrays with function

let arr = [10, 20, 30, 40, 50];

// function getSum(arr){
//     let len = arr.length;
//     let sum = 0;
//     for(let i = 0; i < len; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
function getSum(arr){
    let sum = 0;
    arr.forEach((value)=>{
        sum += value;
    })
    return sum;
}


let result = getSum(arr);
console.log(result);

