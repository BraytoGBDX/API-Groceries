import { Router } from "express";
import { getAllProducts, getOneProduct, insertProduct } from "../controllers/productsController.js";
const router=Router()

router.get('/getAll',getAllProducts)
router.get('/getOne/:barcode',getOneProduct)
router.post('/insertProduct',insertProduct)


export default router