// import librearies ;
import express from "express";

const router = express.Router();

// import productController.js;
import { list, create, detail, update, destroy } from "../../controllers/productController.js";

// get;
router.get("/list", list); // Todos los productos;
router.get("/:_id", detail); // Un producto en especifico;

// post;
router.post("/create", create); // Crear un producto;

// put;
router.put("/:_id", update); // Actualizar un producto;

// delete;
router.delete("/:_id", destroy); // Eliminar un producto;

export default router;
