"use strict";  // treat all JS code as newer version

//alert('payal baghel');   // we are using node.js not browser
console.log(3+3)
//boolean,undefined ,number ,Null,String
let name="payal"
let age=19
let isNum=false;

//  number  => 2 to 53
//  bigint
//  string  => ""
//  boolean => true/false
//  null    => standalone value
//  undefined=>
//  symbol  => unique
//  typeof
console.log(typeof name);
console.log(typeof null);


//concatenation
console.log('my name is '+name+' and my age is '+age);

//template string 
console.log(`my name is ${name} and ${age}`);

//length of string
console.log(name.length);

console.log(name.toUpperCase());

console.log(name.substring(0,2));//takes the element from last



//split method
console.log(name.split(''));


const n='coco, melon, happy, dress';


console.log(name.split(n.split(',')));




