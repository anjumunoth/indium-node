var fs=require("fs")

fs.writeFile("text3.txt","welcome indium",(err)=>{
    if(err)
    {
        console.log("Error",err)
    }
    else
    {
        console.log("Successfully written into the file")
    }

})