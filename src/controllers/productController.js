// import schemas;
import { Product } from "../database/schemas/Product.js";

const list = (req, res) => {
		res.send("Hi, soy el list del productController");
	};

const create = async (req, res) => {
	try{
			
		const newProduct = await Product.create(req.body);

		console.log(newProduct);

		res.status(200).json(newProduct);

	} catch (e) {
		res.json(e)
	}
}


export { list, create };
