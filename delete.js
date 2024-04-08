const { red } = require('colors');
const dbConnect = require('./mongodb');

const deleteData =async () =>{
    let data = await dbConnect();
    let result =await data.deleteMany({name:'max 4'});
    if(result.acknowledged){
        console.log('Record delete successfully');
    }
}
deleteData();