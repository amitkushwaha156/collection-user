const express= require('express');
const app = express();
const TodoRouter=require("./routes/TodoRoute")

const cors= require("cors")
require("dotenv").config()
const connect=require("./coonection")




app.use(cors());
app.use(express.json())
app.use("/",TodoRouter);

app.get("/",(req,res)=>{
     res.send("data");
})

app.listen(process.env.PORT,async ()=>{
   await connect()
    console.log(`listining... 8080`);
})