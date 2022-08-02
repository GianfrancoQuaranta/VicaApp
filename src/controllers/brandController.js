//import schema;
import { Brand } from "../database/schemas/Brand.js";

const list = async (req, res) => {		// All brands;
	
	try{

		const allBrands = await Brand
			.find({})
			.populate(["products"]);

		// console.log("allBrands", allBrands);

		res.status(200).json(allBrands);

	} catch (e) {
		res.status(400).json(e);
	}

};

const detail = async (req, res) => {		// Detail brand;
	
	try {

		// console.log("req.params", req.params);
		
		const brand = await Brand.findById(req.params._id);

		// console.log("brand", brand);

		res.status(200).json(brand);
	
	} catch (e) {
		res.status(400).json(e);
	}

};


const create = async (req, res) => {		// Create brand;
	
	try {
		
		const newBrand = await Brand.create(req.body);

		res.status(200).json({status: 200, newBrand});

		
	
	} catch (e) {
		res.status(400).json(e);
	}

};


const update = async (req, res) => {		// Update brand;
	
	try {
		
		const brandToUpdate = await Brand.findByIdAndUpdate(req.params._id, req.body, {new: true});

		// console.log("brandToUpdate", brandToUpdate);

		res.status(200).json({status: 200, brandToUpdate});
	
	} catch (e) {
		res.status(400).json(e);
	}

};


const destroy = async (req, res) => {		// Destroy brand;
	
	try {
		
		const brandToDelete = await Brand.findByIdAndDelete(req.params._id);

		// console.log(brandToDelete, "brandToDelete");

		res.status(200).json({status: 200, brandDeleted: brandToDelete});
	
	} catch (e) {
		res.status(400).json(e);
	}

};

export { list, create, detail, update, destroy };
