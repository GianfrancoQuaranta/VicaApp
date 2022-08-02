// import libraries;
import express from "express";

const router = express.Router();

// import brandController.js;
import { list, create, detail, update, destroy } from "../../controllers/brandController.js";

// get;
router.get("/list", list); // All brands;
router.get("/:_id", detail); // Detail brand;

// post;
router.post("/create", create); // Brand create;

// put;
router.put("/:_id", update); // Update brand;

// delete;
router.delete("/:_id", destroy) // Destroy brand;

export default router;
