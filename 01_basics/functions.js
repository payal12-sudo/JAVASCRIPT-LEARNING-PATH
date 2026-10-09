// functions

//syntax function variable(parameters){body}
//old method
function addNum(num1 ,num2){
  return num1*num2;
}

console.log(addNum(35,4));

//new method
const addnumbers = (num1,num2) => num1*num2;
console.log(addnumbers(34,5));