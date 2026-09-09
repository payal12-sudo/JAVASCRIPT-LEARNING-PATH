//primitive
//7 types: String,number,bolean,ull,undefined,symbol,BigInt

let a=Symbol();
let b=Symbol();
console.log(a==b);

let c=1239886867579868;
let d=123686986797575n;
console.log(typeof c);
console.log(typeof d);

//reference (non primitive )
//JAVASCRIPT IS A dynamically typed language
//arrays,objects,functions

const heros=["heyy","my","god"];

let myobj={
    name:"payal",
    age:21,
}
console.log(myobj.name);
//FUNCTIONS

const myFunction = function(){
console.log(2+672537);
}
const num=null;//******** typeof=> object ****
const num2=undefined;//typeof=> undefined
console.log(typeof num);
console.log(typeof myFunction);//function
console.log(typeof a);