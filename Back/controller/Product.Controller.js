const Product=require("../models/Product.model")

const ProductController={
    getAll:async(req,res)=>{
        try{
            const products=await Product.find()
            res.send(products)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
        const target=await Product.findById(id)
        res.status(200).send(target)
        }
        catch(error){
            res.status(404).send("error")
        }
        
    },
    delete:async(req,res)=>{
        try{
             const {id}=req.params
        await Product.findByIdAndDelete(id)
        const prod=await Product.find({})
        res.status(200).send(prod)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    add:async(req,res)=>{
        try{
            const{image,name,price}=req.body
            const newProduct= new Product({image,name,price})
            await newProduct.save()
            res.status(201).send(newProduct)
        }
        catch(error){
            res.status(404).send("error")
        }
        
    },
    edit:async(req,res)=>{
        try{
            const{id}=req.params
            const{image,name,price}=req.body
            await Product.findByIdAndUpdate(id,{image,name,price})
            res.status(200).send("succes")
        }
        catch(error){
            res.status(404).send("error")
        }
    }
}

module.exports=ProductController