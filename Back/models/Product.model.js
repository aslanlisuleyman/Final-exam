const mongoose=require("mongoose")

const Product=mongoose.model("Suleyman",new mongoose.Schema({
    image:String,
    name:String,
    price:Number
}))

module.exports=Product