// import librearies ;
import express from "express";

const router = express.Router();

// import routes; 
import productRoute from "./product/productRoute.js";
// import userRoute from "./user/userRoute.js";

// productRoute;
router.use("/p", productRoute);

// userRoute;
// router.use("/u", userRoute);

// ruta main;
router.get("/", (req, res) => {
	res.send("Hi, I'm the main.");
});

export default router;
