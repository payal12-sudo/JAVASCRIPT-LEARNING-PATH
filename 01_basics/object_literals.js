//objects. : this is used to combined multiple values in key: value forms.
//to store related information together using key: vlaue forms.

const person={
  firstname:'John',
  lastname:'Mathews',
  age:23,
  hobbies:['football','swim'],
  address: {
    pincode: 201020,
    city: 'New york'
  }

};

console.log(person);
console.log(person.hobbies[1]);
console.log(person.address.city);

//arrays of objects

const students= [
  {
    name:'Payal',
    StuId:21
  },
  {
    name:'Nisha',
    StuId:22
  },
  {
    name:'Param',
    StuId:23
  }
]

console.log(students[2].name);
/*. output
{
  firstname: 'John',
  lastname: 'Mathews',
  age: 23,
  hobbies: [ 'football', 'swim' ],
  address: { pincode: 201020, city: 'New york' }
}
swim
New york
{ name: 'Param', StuId: 23 }
 */

