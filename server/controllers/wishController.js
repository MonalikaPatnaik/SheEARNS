const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Wish=require("../models/wishModel");

exports.addWish = catchAsyncErrors(async(req,res,next)=>{
    // console.log('hemlo')
    const wishf=await Wish.findOne({user:req.query.email});
    const {shops,items}=req.body  
    console.log(req.body);
    // console.log(wishf);
    const email=req.query.email;
    if(!wishf)
    {
       const wish=  new Wish({user:email,shops:shops,items:items});
       await wish.save();
       console.log("New Wish Created", wish)
       return res.json({message:"New Wish created"});

       }
console.log(shops[0]);
if(shops[0]){
    wishf.shops.push(shops[0]);
    await wishf.save();
    // console.log(wishf);
}
// if(items[0]){
//     wishf.items.push(items[0]);
//     await wishf.save();
//     console.log('items');
// }  
    console.log("Wish Updated",wishf)
     return res.json({message:"Wish Updated"});
    



})
exports.deleteWish=catchAsyncErrors(async(req,res,next)=>{
    // console.log('entered');
    console.log('hemlo');
   const wishf=await Wish.findOne({user:req.query.email});
   const id=req.query.shopid;
   
   wishf.shops.map(async(shop)=>{
    if(shop.shopid==id)
    {
        const index = wishf.shops.indexOf(shop);
if (index > -1) { // only splice array when item is found
  wishf.shops.splice(index, 1); // 2nd parameter means remove one item only
  return
}

    }
 
   })
   await wishf.save();
   return res.json('deleted');
    
    })
exports.getWish=catchAsyncErrors(async(req,res,next)=>{
                const wishf = await Wish.findOne({user:req.query.email});
                return res.json(wishf);
    })
exports.getWishAll=catchAsyncErrors(async(req,res,next)=>{
const email=req.query.email;
        const all=await Wish.findOne({user:email});
        
        return res.status(200).json(all);
    })