// import schemas;
import { Product } from "../database/schemas/Product.js";
import { Brand } from "../database/schemas/Brand.js";

const list = async (req, res) => {		// Todos los productos;

	try {

		const allProducts = await Product
		.find({})
		.populate(["brand"]);

		// console.log(allProducts);

		res.status(200).json(allProducts);

	} catch (e) {
		res.status(400).json(e);
	};
};

const detail = async (req, res) => {		// Un producto en especifico;
	
	try {

		// console.log("req.params", req.params._id);

		const product = await Product.findById(req.params._id);

		res.status(200).json(product);

	} catch (e) {
		res.status(400).json(e);
	}

};


const create = async (req, res) => { 		// Crear un producto;	
	try {

		const newProduct = await Product.create({
			...req.body,
			brand: req.body.brand
		});

		// console.log("newProduct", newProduct._id);

		if(newProduct){

			const brandId = req.body.brand;

			const productId = newProduct._id;

			const brand = await Brand.findByIdAndUpdate(brandId, {$push:{"products": {_id: productId}}}, {new: true});

			// console.log("brandId", brandId);
			// console.log("brand", brand);

		};

		// console.log(newProduct);  
		
		//  --> Agregar que, al hacerse el res.json, también nos devuelva el producto creado con el populate de brand.

		res.status(200).json({status: 200, newProduct});
	} catch (e) {
		res.json(e)
	};
};

const update = async (req, res) => { 		// Actualizar un producto;	

	try {

		const product = await Product.findByIdAndUpdate(req.params._id, req.body, { new: true });

		res.status(200).json(product);

	} catch (e) {
		res.status(400).json(e);
	};

};

const destroy = async (req, res) => {		// Eliminar un producto;
	
	try {

		const product = await Product.findByIdAndDelete(req.params._id);

		res.status(200).json(product);

	} catch (e) {
		res.status(400).json(e);
	}

};



export { list, create, detail, update, destroy };
