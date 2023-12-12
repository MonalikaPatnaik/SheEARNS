const mongoose=require("mongoose");
mongoose.set('strictQuery',true);
const connectDatabase=()=>
{
    
    return mongoose.connect("mongodb+srv://User:kVpv1N06cYYbTnle@mycluster.lon5f5v.mongodb.net/mydb?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
        console.log('Connected to MongoDB');
    })
}

    

module.exports=connectDatabase;