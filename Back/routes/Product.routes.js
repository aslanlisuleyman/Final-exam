const express=require("express")
const router=express.Router()

const ProductController=require("../controller/Product.Controller")


router.get("/",ProductController.getAll)
router.get("/:id",ProductController.getById)
router.delete("/:id",ProductController.delete)
router.post("/",ProductController.add)
router.put("/:id",ProductController.edit)

module.exports=router
