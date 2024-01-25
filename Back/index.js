const express=require("express")
require("dotenv").config()
const mongoose=require("mongoose")
const cors=require("cors")
const ProductRouter=require("./routes/Product.routes")
const app=express()
const PORT=process.env.PORT || 4001
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Suleyman:suleyman123@suleyman.vyltqxp.mongodb.net/test").then(res=>{
    console.log("app running")
})

app.use("/products",ProductRouter)

app.listen(PORT,()=>{
    console.log("running Mongo Db")
})

