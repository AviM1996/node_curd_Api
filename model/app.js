const mongoose=require("mongoose")

const Schema=mongoose.Schema

const ProductModel=new Schema({
    productName:{
        type:String,
        require:true
    },
    productPrice:{
        type:String,
        require:true
    },
    productDetails:{
        type:String,
        require:true
    },
    productBrand:{
        type:String,
        require:true,
    },
    status:{
        type:Number
    }
})

const product=mongoose.model("product",ProductModel)

module.exports=product