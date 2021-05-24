// import React from "react"
/* var obj=require("./module1");// execute the module and get the exports

var res=obj.myFunc1("hello","indium")
console.log("Res "+res);

res=obj.myFunc2(20);
console.log("Res "+res);// true */

var {myFunc1,myFunc2}=require("./module1");// execute the module and get the exports

var res=myFunc1("hello","indium")
console.log("Res "+res);

res=myFunc2(20);
console.log("Res "+res);// true

function myFunc3(str1,start,end)
{
    return str1.substring(start,end);
}

module.exports=myFunc3;
