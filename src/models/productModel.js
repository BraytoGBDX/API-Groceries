import { Schema } from "mongoose";

const productSchema=new Schema({
    barcode:{
        type:String,
        unique:true,
        require:true
    },
    description:String,
    brand:String,
    price:Number,
    cost:Number,
    stock:Number,
    expiredDate:String,
    status:Number
})

export default model('products', productSchema);