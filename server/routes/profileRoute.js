const express=require("express");
const { createProfile,updateProfileImg,getProfile } = require("../controllers/profileController");
const router=express.Router();
router.route("/createProfile").post(createProfile);
router.route("/updateProfileImg").put(updateProfileImg);
router.route("/getProfile").get(getProfile);
module.exports=router;