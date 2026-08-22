const accountId=232;
let accountEmail='payal@gmail.com';
/*let over var because let is block-scoped, which makes variable behavior
 more predictable and helps avoid accidental access or modification 
 outside the intended block. Also, let doesn’t allow redeclaration in the 
 same scope, which helps catch errors early. var is function-scoped and allows 
 redeclaration, which can sometimes lead to unexpected behavior. That’s why modern
  JavaScript generally prefers let and const*/
var accountPassword='12345';
accountCity='jaipur';//javascript provides this type of declaration also but not allowed
// accountId=12;
accountEmail='pb@g.com';

/*
Prefer not to use var beacuse of block scope and function scope
*/
let accountState;



console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);