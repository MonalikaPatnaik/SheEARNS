const mongoose=require("mongoose");
mongoose.set('strictQuery',true);
const connectDatabase=()=>
{
    const mongodbUri = process.env.MONGODB_URI;
    return mongoose.connect(mongodbUri,{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
        console.log('Connected to MongoDB');
    })
}

    

module.exports=connectDatabase;