const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {

    try {
        var client = await mongoClient.connect()

        var dbName = client.db("dxcDb");
        var collName = dbName.collection("employees");
        /* // update employees  set salary=1000 for empId:203
        var filterObj={empId:204}
        //var updateOp={$set:{salary:1000}}
        var updateOp = {$set: {empName: "sara"}, $inc:{salary:10000}}
        collName.updateOne(filterObj,updateOp)
        .then((res)=>{
            //console.log(res);
            if(res.modifiedCount== res.matchedCount && res.matchedCount==1)
            {
                console.log("Document modified successfully");
            }
            if(res.modifiedCount ==0 && res.matchedCount==1)
            {
                console.log("No modifications made to the data")
            }
            if(res.matchedCount==0)
            {
                console.log("Data to be updated not found")
            }
            mongoClient.close();
        })
        .catch((err)=>{
            console.log("Error during updation ",err);
            mongoClient.close();
        }) */
        //        Update all docs where empId=205 to set salary=200000

        var filterObj={empId:205}
        //var updateOp={$set:{salary:1000}}
        var updateOp = {$set: {salary:10000}}
        collName.updateMany(filterObj,updateOp)
        .then((res)=>{
            //console.log(res);
            if(res.matchedCount >0)
            {
                console.log("Number of docs matched " + res.matchedCount)
            }
            if(res.modifiedCount >0)
            {
                console.log("Number of docs matched " + res.modifiedCount)
            }
            if(res.matchedCount ==0)
            {
                console.log("No docs matched the search criteria" )
            }
            if(res.modifiedCount ==0)
            {
                console.log("No docs modified")
            }
        })
        .catch((err)=>{
            console.log("Error during updation ",err);
            mongoClient.close();
        }) 
    

   }
    catch (err) {
        console.log("Error", err)
    }
}
run();
