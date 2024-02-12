import { Router } from "express";
import { deleteProduct, getAllProducts, getOneProduct, insertProduct, loadUpdatePage, updateProduct } from "../controllers/productsController.js";
const router=Router()

router.get('/',getAllProducts)
router.get('/:barcode',getOneProduct)
router.post('/',insertProduct)
router.post('/:barcode',updateProduct)
router.delete('/:barcode',deleteProduct)

router.get('/updateProduct', loadUpdatePage)


export default router