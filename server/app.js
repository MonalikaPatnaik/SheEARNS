const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
// const user=require("./routes/userRoute");
const shop=require("./routes/shopRoute");
const profile=require("./routes/profileRoute");
const fileUpload=require('express-fileupload');
const errorMiddleware=require("./middleware/error");
const bodyParser=require("body-parser");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true
}))

app.use(shop);
app.use(profile);

app.use(errorMiddleware);

module.exports=app;