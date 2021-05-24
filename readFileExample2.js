var fs=require("fs");
var myBuffer=Buffer.alloc(1024);
// open, read, close

fs.open("Node_Contents.pdf","r",(err,fd)=>{
    if(err)
    {
        console.log("Error opening the file")
    }
    else
    {
        // read partial file
        fs.read(fd,myBuffer,0,myBuffer.length,0,(err,bytesRead)=>{
            if(err)
            {
                console.log("Error reading the file")
            }
            else
            {
                console.log(myBuffer.toString());
                console.log("Number of byted read"+bytesRead)
            }
            fs.close(fd,(err)=>{
                if(err)
                {
                    console.log("Error closing the file")
                }
                else
                {
                    console.log("File has been closed successfully")
                }

            })
        })
    }

})