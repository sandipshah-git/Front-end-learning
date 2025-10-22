//  we call a dynamic to the object cause we can change its properti at run time


// let obj = {
//     age : 23,
//     wt  :  62,
//     ht  :  6 
// };

// console.log(obj)
// obj.color = "white";
// console.log(obj)   // that's why obj is dynamic in nature 


//    object cloning
// let src = {
//     age : 23,
//     wt  :  62,
//     ht  :  6 
// };

// let src2 = {
//     name : "sandip",
//     value : 69
// };


// // let dest = {...src};  // cloning object with spread operator(...)

// let dest = Object.assign({},src,src2);  // cloning by assign operator (   Object.assign({},src)    )

// src.age= 55;   // there object is cloned that's why its change only in src object not in dest object

// console.log("source : ", src);
// console.log("destination : ", dest);



// iteration cloning

let src = {
    age:12,
    wt:68,
    ht:180
};

let dest = {};
//cloning using iteration
for(let key in src) {
    let newKey = key;
    let newValue = src[key];
    //insert newKey and value in dest and create a clone
    dest[newKey] = newValue;
}

src.age = 90;

console.log("src: ", src);
console.log("dest: ", dest);
