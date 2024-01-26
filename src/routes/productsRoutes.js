import { Router } from "express";
import { getAllProducts } from "../controllers/productsController.js";
const router=Router()

router.get('/getAll',getAllProducts)


export default router