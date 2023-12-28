const express=require("express");
const {addWish ,deleteWish,getWish,getWishAll } = require("../controllers/wishController");
const router=express.Router();
router.route("/addWish").post(addWish);
router.route("/deleteWish").put(deleteWish);
// router.route("/getWish").get(getWish);
router.route("/getWishAll").get(getWishAll);
module.exports=router;