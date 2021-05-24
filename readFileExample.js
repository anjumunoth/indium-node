var fs=require("fs")
var path=require("path");

var fileUrl=path.join(__dirname,"text1.txt")
var res=fs.readFile(fileUrl,(err,data)=>{
    if(err)
        console.log("Error",err)
    else
    {
        console.log("Contents of the file : ",data.toString());
    }

})
console.log("Result" + res);// undefined

console.log("End of app")