const express = require('express');

const eobj = express();

eobj.listen(5100, function(req, res){
    console.log("Started your server root /");
});

eobj.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");

    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

eobj.get('/', MarvellousInfoGet);

function MarvellousInfoGet(req, res){
    res.send("MarvellousInfo is on");
}
eobj.get('/getBatches',MarvellousInfoGetBatches);

function MarvellousInfoGetBatches(req, res){
    res.json({"Batch":"python", "Fees":20000});
}

const {MongoClient} = require('mongodb');

const URL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URL);

async function getConnection()
{
    let result = await client.connect();
    let db = result.db("MarvellousInfo");
    return db.collection("Batches");
}

async function readData()
{
    let data = await getConnection();
    data = await data.find().toArray();
    console.log("Data frrom Marvellous Databse is : ");
    console.log(data);
}

function main(){
    readData();
}

main();



// / http://localhost:5100/Angular
// eobj.get('/Angular', function(req, res){
//     res.send("this is angular batch /");
// });

// // http://localhost:5100/PPA
// eobj.get('/PPA', function(req, res){
//     res.send("this is PPA batch /");
// });