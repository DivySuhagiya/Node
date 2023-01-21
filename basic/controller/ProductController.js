const productSchema = require("../model/ProductSchema");

exports.createProduct = (req, res) => {
  const Product = new productSchema(req.body);
  Product.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in adding product",
      });
    } else {
      res.status(201).json({
        data: data,
        message: "Product added successfully",
      });
    }
  });
};

exports.getAllProduct = (req,res)=>{
    productSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in fetching data"
            })
        }
        else{
            res.status(200).json({
                data:data,
                message:"Data fetched successfully"
            })
        }
    })
}


