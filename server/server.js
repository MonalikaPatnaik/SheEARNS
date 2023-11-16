const app=require("./app");
const connect=require("./config/database");
const cors = require('cors');
const PORT = process.env.PORT || 4000;
connect();
app.use(cors());
  
const server=app.listen(PORT,()=>
{
    console.log("Port Running");
})
