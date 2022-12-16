const express=require("express")
const Router=express.Router()

const homecontroller=require("../controller/controller")
Router.get("/",homecontroller.allProduct)
Router.post("/createProduct",homecontroller.createProduct)
Router.post("/editproduct/:id",homecontroller.editProduct)
Router.get("/deleteProduct/:id",homecontroller.deleteProduct)



module.exports=Router