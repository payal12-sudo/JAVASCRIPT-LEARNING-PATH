//arrays-that variables usees for multiple values//7:33PM

const num = new Array(1,2,3,4,5);
const fruit = ['apple','banana','cherry',10,true];
fruit[3]=20;

console.log(fruit);

const classes = [2,3,4,'gab'];


classes.push('23ab');

classes.unshift('apple');

// classes.pop();

console.log(Array.isArray('fruit'));//if string writern it will check in aaray and give answer 

console.log(Array.isArray(fruit));//this we have writtern the array ok to check array is present or not

console.log(fruit.indexOf(10));

console.log(classes);
