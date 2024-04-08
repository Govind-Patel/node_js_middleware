
// use momgodb connection in nodejs 
const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db('e-com');
    return db.collection('products');
    // let collection = db.collection('products');
    // let respose = await collection.find({}).toArray();
    // console.log(respose);
}
module.exports = dbConnect;