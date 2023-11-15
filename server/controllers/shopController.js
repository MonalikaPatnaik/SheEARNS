const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Shop=require("../models/shopModel");
const ErrorHandler = require("../utils/errorHandler");
const ApiFeatures=require("../utils/apiFeatures");
const cloudinary=require('cloudinary');
cloudinary.v2.config({
    cloud_name:"dv6yivx37",
    api_key:"621242358315299",
    api_secret:"iN9F4OJ5nuSlOs5nOtGk2K_7Wj0"
});
exports.createShop = catchAsyncErrors(async (req, res, next) => {
    try {
        console.log("Request body:", req.body);
        console.log("Before Cloudinary upload"); 
        if (!req.files || !req.files.image) {
            console.log("No photo uploaded");
            return next(new ErrorHandler("No photo uploaded", 400));
        }
        // console.log("error");

        const file = req.files.image;

        cloudinary.uploader.upload(file.tempFilePath, async (result, err) => {
            console.log("Inside Cloudinary upload callback");

            if (err) {
                console.error("Cloudinary upload error:", err.message || err);
                return next(new ErrorHandler("Cloudinary upload error", 500));
            }

            if (!result || !result.secure_url) {
                console.error("Unexpected Cloudinary response:", result);
                return next(new ErrorHandler("Unexpected Cloudinary response", 500));
            }

            console.log("Cloudinary upload success. Image URL:", result.secure_url);

            const { name, category,user } = req.body;
            const shop = await Shop.create({
                name: name,
                category: category,
                user: user,
                // location: req.user.location,
                image: result.url,
            });

            console.log("Shop created:", shop);

            res.status(200).json({
                success: true,
                shop,
            });
        });
    } catch (error) {
        console.error(error);
        next(new ErrorHandler("Internal Server Error", 500));
    }
});


  
exports.createItems=catchAsyncErrors(async(req,res,next)=>
{
    const shop=await Shop.findById(req.query.shopId);
    if(!shop)
    {
        return next(new ErrorHandler("Shop Not Found",404))
    }
    // const{name,price,availability,Stock}=req.body;
    // shop.items.push({name:name,price:price,availability:availability,Stock:Stock});
    // await shop.save();
    // const items=shop.items;
    // res.status(200).json({
    //     success:true,
    //     items
    // })
    try {
        console.log("Request body:", req.body);
        console.log("Before Cloudinary upload"); 
        if (!req.files || !req.files.image) {
            console.log("No photo uploaded");
            return next(new ErrorHandler("No photo uploaded", 400));
        }

        const file = req.files.image;

        cloudinary.uploader.upload(file.tempFilePath, async (result, err) => {
            console.log("Inside Cloudinary upload callback");

            if (err) {
                console.error("Cloudinary upload error:", err.message || err);
                return next(new ErrorHandler("Cloudinary upload error", 500));
            }

            if (!result || !result.secure_url) {
                console.error("Unexpected Cloudinary response:", result);
                return next(new ErrorHandler("Unexpected Cloudinary response", 500));
            }

            console.log("Cloudinary upload success. Image URL:", result.secure_url);

            const { name, price, stock} = req.body;
            shop.items.push({
                name: name,
                price: price,
                stock: stock,
                // location: req.user.location,
                image: result.url,
            });

            console.log("Item added:", shop);
            await shop.save();
           const items= shop.items;
            res.status(200).json({
                success: true,
               items,
            });
        });
    } catch (error) {
        console.error(error);
        next(new ErrorHandler("Internal Server Error", 500));
    }

})
exports.items=catchAsyncErrors(async(req,res,next)=>{
    const shop=await Shop.findById(req.params.id);
    if(!shop)
    {
        return next(new ErrorHandler("Shop Not Found",404))
    }
    const items=shop.items;
    res.status(200).json({
        success:true,
        items
    })
})
exports.userShops=catchAsyncErrors(async(req,res,next)=>{
   const {user}=req.query;
    const shops=await Shop.find({user:user});
    if(!shops)
    {
        return next(new ErrorHandler("Shop Not Found",404))
    }
    res.status(200).json({
        success:true,
        shops
    })

})
exports.deleteItem=catchAsyncErrors(async(req,res,next)=>{
    const shop=await Shop.findById(req.query.shopId);

    if(!shop)
    {
        return next(new ErrorHandler("Shop Not Found",404))

    }
    const items=shop.items.filter(rev=>rev._id.toString()!=req.query.itemId.toString());
    console.log(items);
    await Shop.findByIdAndUpdate(req.query.shopId,{items},{new:true,runValidators:true,useFindAndModify:false});
    res.status(200).json({
        success:true,
        message:"Item deleted"
    })



})

exports.shops=catchAsyncErrors(async(req,res,next)=>{
   
    const apiFeature=new ApiFeatures(Shop.find(),req.query).search().filter();
    const shops= await apiFeature.query;
    console.log(shops);
    if(!shops)
    {
        return next(new ErrorHandler("Shop Not Found",404))
    } 
    res.status(200).json({
        success:true,
        shops
    })
})