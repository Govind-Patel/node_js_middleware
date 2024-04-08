

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