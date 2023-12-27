const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Profile=require("../models/profileModel");

exports.createProfile = catchAsyncErrors(async(req,res,next)=>{
    const userf=await Profile.findOne({user:req.query.email});
    const {contact,about}=req.body  
    const email=req.query.email;
    if(!userf)
    {
       const profile=  new Profile({user:email,contact:contact,about:about});
       await profile.save();
       console.log("New Profile Created")
       return res.json({message:"New profile created"});

       }


    userf.contact=contact;
    userf.about=about;
    await userf.save();
    console.log("Profile Updated")
    return res.json({message:"Profile Updated"});
    



})
exports.updateProfileImg = catchAsyncErrors(async(req,res,next)=>{
    console.log('agaya')
    const userf=await Profile.findOne({user:req.body.email});
    const {picture,email}=req.body  
    if(!userf)
    {
       const profile=new Profile({user:email,img:picture});
       await profile.save();
       console.log("New profileImg created")
       return res.json({message:"New profileImg created"});

       }


    
    userf.img=picture;
    await userf.save();
    console.log(" profileImg Updated")
    return res.json({message:"ProfileImg Updated"});
    



})
exports.getProfile = catchAsyncErrors(async(req,res,next)=>{
    
   const email=req.query.email;
    const userf=await Profile.findOne({user:email});
    //  console.log(userf);
    if(!userf)
    {
       const profile=new Profile({user:email});
       await profile.save();
       console.log("New Profile Created")
       return res.status(200).json(profile);
      

       }


    
    
    //    console.log("Profile found")
    return res.status(200).json(userf);
    



})