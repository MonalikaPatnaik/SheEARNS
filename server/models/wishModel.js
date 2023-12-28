const mongoose=require("mongoose");
const wishSchema=new mongoose.Schema({
  
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
        },
        itemid:{
            type:String,
            required:true
        }
      
    }],
    shops:[{
        name:{
            type:String,
           
        },
        category:{
            type:String,
            
        },
        description:{
            type:String
        },
        image:{
            type:String
        }, 
        shopid:{
            type:String,
            required:true
        }
      
      
    }],

})
module.exports=mongoose.model("Wish",wishSchema);