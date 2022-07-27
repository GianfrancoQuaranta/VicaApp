// import librearies ;
import express from "express";

const router = express.Router();

// import productController.js;
import { list } from "../../controllers/productController.js";

router.get("/list", list);

export default router;
