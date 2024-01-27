import { Router } from "express";
import { getAllProducts, getOneProduct } from "../controllers/productsController.js";
const router=Router()

router.get('/getAll',getAllProducts)
router.get('/getOne/:barcode',getOneProduct)


export default router