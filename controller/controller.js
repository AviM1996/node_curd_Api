const productModel=require("../model/app")

const allProduct=(req,res)=>{
    try {
        productModel.find((err,data)=>{
            if(!err){
                res.status(200).send({
                    sucess:true,
                    msg:"All Data find Sucessfully",
                    product:data
                })
            }
        })
    } catch (error) {
        res.status(404).send({sucess:false,msg:"Somthing Wrong Please Check"})
        console.log(error,"Somthing Wrong Please Check");
    }
}

const createProduct=async(req,res)=>{
    try {
        const productData=await new productModel ({
            productName:req.body.productName,
            productPrice:req.body.productPrice,
            productDetails:req.body.productDetails,
            productBrand:req.body.productBrand,
        })
        const data=await productData.save();
        res.status(200).send({sucess:true,msg:"Product Create Successfully",product:data})

    } catch (error) {
        res.status(404).send({sucess:false,msg:"Product not Added"})
        console.log(error,"Somthing Wrong Please Check");
    }
}

// const editProduct=async(req,res)=>{
//     try {
//         const pid=await productModel.findByIdAndUpdate(req.params.id,{
//             productName:req.body.productName,
//             productPrice:req.body.productPrice,
//             productDetails:req.body.productDetails,
//             productBrand:req.body.productBrand
//         })
//         res.json(pid)
//     } catch (error) {
//         res.status(400).send({sucess:false,msg:"not edit"})
//         console.log(error);
//     }
// }


const editProduct = (req, res) => {
   
        if (!req.body.productName && req.body.productPrice && req.body.productDetails && req.body.productBrand) {
      res.status(400).send({ massage: "Please fill all the input fields!!" });
    }
    const aid = req.params.id;
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const productDetails = req.body.productDetails;
    const productBrand = req.body.productBrand;
  
    productModel.findById(aid).then(async (result) => {
      result.productName = productName;
      result.productPrice = productPrice;
      result.productDetails = productDetails;
      result.productBrand = productBrand;
  
      await result
        .save()
        .then((data) => {
          res.status(200).send({
            success: true,
            msg: `${productName}'s data edited successfully!`,
            product: data,
          });
        })
        .catch((err) => {
          res.status(500).send({
            massage: err.massage || "Some error occurred while creating User",
          });
        });
    });

  };

  const deleteProduct=(req,res)=>{
    try {
        productModel.findByIdAndDelete({_id:req.params.id})
        .then((result)=>{
            res.status(200).send({
                success:true,
                msg:"product delete",
                product:result
            })
        })
    } catch (error) {
        res.status(404).send({sucess:false,msg:"product not delete"})
        console.log(error);
    }

  }


module.exports={
    allProduct,
    createProduct,
    editProduct,
    deleteProduct
}