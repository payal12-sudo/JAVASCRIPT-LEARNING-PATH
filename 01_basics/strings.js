const name="paul";
const name2 =1213;
console.log(name + name2);//outdated 
//modern uses backticks string interpolation
console.log(`hello my name is ${name} and your name is ${name2}`);

//string declaration
let getName=new String('payal-baghel');//run in in console in chrome 
console.log(getName.length)
console.log(getName.toUpperCase())
console.log(getName.charAt(8));
console.log(getName.italics());


const anotherNamie=getName.substring(0,4);
console.log(anotherNamie);
const anotherNamee=getName.slice(0,4);
console.log(anotherNamee);
const anotherNameee=getName.slice(-8,4);// only this allows negatives values

console.log(anotherNameee);


//deleting space
const one="   payal    ";
console.log(one);
console.log(one.trim())

const url="https://payal.com/payal%20baghel";
console.log(url.replace('%20','-'));
console.log(getName.split('-'));

