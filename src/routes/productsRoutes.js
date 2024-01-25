import { Router } from "express";
import { getAll } from "../controllers/productsController.js";
const router=Router()

router.get('/getAll',getAll)


export default router