const app=require("./app");
const connect=require("./config/database");
const cors = require('cors');
connect();
app.use(cors());
  
const server=app.listen(4000,()=>
{
    console.log("Port Running");
})
