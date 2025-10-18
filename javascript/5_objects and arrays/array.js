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

// let result = arr.filter((Number)=>{
//     // if(Number % 2 === 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
//     return Number % 2 ==0;
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


