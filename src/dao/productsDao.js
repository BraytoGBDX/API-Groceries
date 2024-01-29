import Product from '../models/productModel.js'

const C = console.log.bind(console.log)
const productDAO={}
productDAO.getAll = async()=>{
    const products=await Product.find()
    return products
}

productDAO.getOne = async(barcodeProduct)=>{
    const product=await Product.findOne({barcode:barcodeProduct})
    return product
}

productDAO.insertProduct=async(product)=>{
    const productSaved=new Product(product)
    await productSaved.save()
    return true
}

export default productDAO;