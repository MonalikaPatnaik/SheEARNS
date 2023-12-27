const mongoose=require("mongoose");
const shopSchema=new mongoose.Schema({
  
    user:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        default:'Please Enter Contact'
    },
    about:{
        type:String,
        default:'Hey Tell us About Yourself'
    },
    img:{
        type:String,
        default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    }

 
})
module.exports=mongoose.model("Profile",shopSchema);