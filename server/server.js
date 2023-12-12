const app=require("./app");
const connect=require("./config/database");
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const start=async()=>{
    try{
        await connect()
        const server=app.listen(PORT,()=>
        {
     console.log("Port Running");
    })
    }
    catch(err){
        console.log(`${err}`)
    }
    }

app.use(cors());
start()