// const  products=[
//     {productId:123,quantity:10,operation:"add"},

//     {productId:143,quantity:14,operation:"add"},
    
//     {productId:193,quantity:17,operation:”subtract”}]
const Product=require('../models/products');

module.exports.add= function(req, res){
    
    Product.findByIdAndUpdate(req.body.productId, function(err, product){
        if(err){
            return res.status(500).json({"msg" : "error in finding product"});
        }

        if(!product){
            return res.status(200).json({"msg": "product is not in your database"});
        }
        else{
            Product.create({
                product_name: req.body.name,
                quantity: req.body.quantity
            });
            return res.status(200).json({"msg": "product added successfully"});
        }
    });
}


module.exports.remove= function(req, res){
    
    Product.deleteOne(req.body.productId, function(err, product){
        if(err){
            return res.status(500).json({"msg" : "error in finding product"});
        }

        if(!product){
            
            return res.status(200).json({"msg": "product is  not in your database"});
        }
        else{
            
            return res.status(200).json({"msg": "product deleted successfully"});
        }
    });
}
    