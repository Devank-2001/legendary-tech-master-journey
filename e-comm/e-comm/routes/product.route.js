import express from "express"

import {authMiddleware} from "../middleware/auth.middleware.js"
import { upload } from "../config/multer.js"
import { createProductController } from "../controllers/product.controller.js"

const router = express.Router()


router.post("/create",upload.array("images",5), authMiddleware,createProductController)

export default router;
