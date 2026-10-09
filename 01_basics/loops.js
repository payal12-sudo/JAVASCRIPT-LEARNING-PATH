//loops


//for

for( let i=0;i<10;i++){
  console.log(`i = ${i}`);
}

//while

let i = 0;
while(i<10){
  console.log(`i = = ${10+i}`);
  i++;
}

const todos={
  firstname:'John',
  lastname:'Mathews',
  age:23,
  hobbies:['football','swim'],
  address: {
    pincode: 201020,
    city: 'New york'
  },
  text:{
    s: 'fox',
    a: 'dog'
  },
  age:[21,21,32,43,54,76]

};


for(let i=0;i<todos.hobbies.length;i++){
  console.log(`i = ${100  + todos.hobbies[i]}`)
}

//for...of was introduced in ES6 (ECMAScript 2015).

for(let todo of todos.hobbies){
  console.log(todo)
}

//forEach loop, map, filter, 

//forEach
console.log('')
todos.hobbies.forEach(function(todo)
{
  console.log(todo);
}
);

//map
const todoAns = todos.hobbies.map(function(todo){

  return todo;

});

console.log(todoAns);

const todoRes = todos.age.map(function(todoe){
  return todoe*100;
})
console.log(todoRes);


const todoResult = todos.age.filter(function(todoe){
  return todoe > 50;

})

console.log(todoResult)

return 







