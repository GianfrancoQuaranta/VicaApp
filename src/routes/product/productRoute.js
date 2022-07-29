// import librearies ;
import express from "express";

const router = express.Router();

// import productController.js;
import { list, create } from "../../controllers/productController.js";

// get
router.get("/list", list);

// post
router.post("/create", create);

export default router;
