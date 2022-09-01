const mongoose=require('mongoose');

const productSchema= new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required: true
    },
},{
    timestamps:true
});


const Product=mongoose.model('products', productSchema);
module.exports=Product;