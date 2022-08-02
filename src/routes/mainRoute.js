// import librearies ;
import express from "express";

const router = express.Router();

 
// productRoute;
import productRoute from "./product/productRoute.js";
router.use("/p", productRoute);

// brandRoute;
import brandRoute from "./brand/brandRoute.js";
router.use("/b", brandRoute);

// userRoute;
// import userRoute from "./user/userRoute.js";
// router.use("/u", userRoute);

// ruta main;
router.get("/", (req, res) => {
	res.send("Hi, I'm the main.");
});

export default router;
