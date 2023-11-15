const mongoose=require("mongoose");
const shopSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    items:[{
        name:{
            type:String,
           
        },
        price:{
            type:Number,
            
        },
        stock:{
            type:Number
        },
        image:{
            type:String
        }
      
    }],
    category:{
        type:String,
        required:true
    },
    image:{
        type:String

    },
    user:{
        type:String

    },
    location:{
        type:String,
  
    }
})
module.exports=mongoose.model("Shop",shopSchema);