

// const express = require('express');
// const app = express();
// const reqFilter = require('./middleware');
// const route = express.Router();
const dbConnect = require('./mongodb')
// dbConnect().then((resp) => {
//     resp.find({brand:'Apple'}).toArray().then((data) => {
//         console.warn(data);
//     });
// });
const main = async ()=>{
    let data = await dbConnect();
        data = await data.find().toArray();
        console.warn(data);
}
main();
// app.use(reqFilter);

// route.use(reqFilter);

// app.get('/',(req,res) => {
//     res.send('Welcome to Home page');
// });

// app.get('/user',(req,res) => {
//     res.send('Welcome to user');
// });

// route.get('/about',(req,res) =>{
//     res.send('Welcome to about page');
// });
// route.get('/contact',(req,res)=>{
//     res.send('This is a contact page');
// });

// app.use('/',route);

// app.listen(6001);


//monggose database use

// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//     name:String,
//     price:Number,
//     brand:String,
//     category:String
// });
// const main = async ()=>{
//     await mongoose.connect("mongodb://localhost:27017/e-com");
   
//     const ProductModel = new mongoose.model('products',ProductSchema);
//     let data = new ProductModel({name:"redmi 10",price:250,brand:'Redmi',category:'mobile'});
//     let result = await data.save();
//     console.log(result);
// }
// main();
// const updateDb = async()=>{
//     const Product = mongoose.model('products',ProductSchema);
//     let data = await Product.updateOne(
//         {name:'redmi 10'},
//             { $set:{price:275}
//         }
//     )
//     console.log(data);
// }
// updateDb();
// const deleteDb = async()=>{
//     const Product = mongoose.model('products',ProductSchema);
//     let data  = await Product.deleteMany({name:"redmi 10"});
//     console.log(data);
// }
// deleteDb();