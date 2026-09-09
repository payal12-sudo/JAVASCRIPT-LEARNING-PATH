//stack(primitive data types){isme value lene se copy milta h }  and heap(non primitive data types){isme value lene se reference milta h}
let myYoutubeName="code-with-payal";//stack created 
let anothername=myYoutubeName; // this comes upon myYoutubeName
anothername="jdnjsn";//updated

let userOne = {
    name : "paul",
    email : "userone@joke.com",

};
let usertwo=userOne;
console.log(usertwo.name);