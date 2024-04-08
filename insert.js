const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {name:'nokia 1',brand:'micromax',price:240,category:'mobile'},
            // {name:'nokia 2',brand:'micromax',price:280,category:'mobile'},
            // {name:'nokia 3',brand:'micromax',price:520,category:'mobile'},
            // {name:'max 4',brand:'micromax',price:440,category:'mobile'}
        ]
    );
    if(result.acknowledged){
        console.log('insert data successfully');
    }
}
insert();