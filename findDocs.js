const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {

    try {
        var client = await mongoClient.connect()

        var dbName = client.db("dxcDb");
        var collName = dbName.collection("employees");
        /* // find with no search criteria
        const cursor=collName.find();
        var empArr=[];
         await cursor.forEach(element => {
            //console.log(element);
            empArr.push(element);
        }); 
        
        console.log(empArr);
 */
        /* // find of employees who have empId=101
        var searchObj={empId:101};
        const cursor=collName.find(searchObj);
        var empArr=[];
         await cursor.forEach(element => {
            //console.log(element);
            empArr.push(element);
        });  */

        /* //find of employees who have a empId> 200
        var searchObj={empId:{$gt:200}};
        const cursor=collName.find(searchObj);
        var empArr=[];
         await cursor.forEach(element => {
            //console.log(element);
            empArr.push(element);
        }); 
        
        console.log(empArr); */

        /* // find all employees who have empId > 200 and only project empId, empName
        var searchObj={empId:{$gt:200}};
        var projectionObj={empId:1,empName:1,_id:0}
        const cursor=collName.find(searchObj,{projection:projectionObj});
        var empArr=[];
         await cursor.forEach(element => {
            //console.log(element);
            empArr.push(element);
        }); 
         */
        /* // find all employees who have empId > 200 and only project empId, empName and 
        //sort the results based on empName
        var searchObj={empId:{$gt:200}};
        var projectionObj={empId:1,empName:1,_id:0};
        var sortObj= {empName:1}
        const cursor=collName.find(searchObj,{projection:projectionObj,sort:sortObj});
        var empArr=[];
         await cursor.forEach(element => {
            //console.log(element);
            empArr.push(element);
        }); 
        
        console.log(empArr);  */

        /* // find all employees who have empId > 200 and only project empId, empName and 
        //sort the results based on empName and limit the result set to 5
        var searchObj={empId:{$gt:200}};
        var projectionObj={empId:1,empName:1,_id:0};
        var sortObj= {empName:1}
        const cursor=collName.find(searchObj,{projection:projectionObj,sort:sortObj,limit:5});
        var empArr=[];
         await cursor.forEach(element => {
            //console.log(element);
            empArr.push(element);
        }); 
        console.log(empArr); 
         */

        /* // find one doc whose name starts "R"
        searchObj={empName:/^r/i};
        collName.findOne(searchObj)
        .then(data=>{ 
            console.log("Data ",data);
            mongoClient.close();
        })
        .catch(err=>{
            console.log("Error in findOne",err)
            mongoClient.close();
        })
 */
        mongoClient.close();

        
    
    }
    catch (err) {
        
        console.log("Error", err)
    }
        

}
run();
