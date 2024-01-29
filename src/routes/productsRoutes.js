import { Router } from "express";
import { getAllProducts, getOneProduct, insertProduct, updateProduct } from "../controllers/productsController.js";
const router=Router()

router.get('/getAll',getAllProducts)
router.get('/getOne/:barcode',getOneProduct)
router.post('/insertProduct',insertProduct)
router.put('/updateProduct/:barcode',updateProduct)


export default router