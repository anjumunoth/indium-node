var {myFunc1}=require("./module1")
var myFunc3=require("./module2");

console.log(myFunc1(100,200))
console.log(myFunc3("good morning",2,6))

/*
modules can export function,var or object
modules can import from other modules
"require" is used for imports
"require" --- exceute the module if its not there in the cache 
*/