import Product from '../models/productModel.js'
const productDAO={}
productDAO.getAll = async()=>{
    const products=await Product.find()
    return products
}

export default productDAO;