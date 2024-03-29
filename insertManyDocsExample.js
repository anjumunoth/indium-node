//using async and await
const fs = require("fs");
const { readFile } = require("fs");

const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });

var entries =[{"empId":203, "empName":"Ram","salary":"10000"},
{"empId":204, "empName":"Wilson","salary":"15000"},
{"empId":205, "empName":"varun","salary":"50000"},
{"empId":999, "empName":"pavan","salary":"70000","_id":777},
{"empId":207, "empName":"Eswar","salary":"40000"},
{"empId":208, "empName":"mohan","salary":"80000"}]
// 103,104,105,107,108 
async function run() {

    try {
        var client = await mongoClient.connect()

        // switch over to the db : dxcDb
        var dbName = client.db("dxcDb");
        // select the collection
        var collName = dbName.collection("employees");
        //const insertDoc = { "empId": 202, "empName": "tara" };
          collName.insertMany(entries)
          .then((res)=>{
            console.log("Response of insertOne: Inserted Count:", res.insertedCount);
          })
          .catch((err)=>{
           console.log("Error in insertMany",err);
            console.log("Number of docs inserted",err.result.result.nInserted);
            console.log("Error occured at ",err.writeErrors[0])
          })
          
          
        
    }
    catch (err) {
        if(res.result.insertedCount >0)
        {
            console.log("Response of InsertMany count", res.result.insertedCount)
        }
        console.log("Error", err)
    }

}
run();
