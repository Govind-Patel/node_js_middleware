const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    let result =await data.updateMany(
        { name: 'nokia 1' }, {
        $set:{brand:'Nokia',price:550}
        }
    )
    if(result.acknowledged){
        console.log(result);
    }
}
updateData();