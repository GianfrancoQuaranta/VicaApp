// Require el schema de Mongoose;
import mongoose from "mongoose";

// Create el schema de Mongoose;
const { Schema } = mongoose;

const productSchema = new Schema ({

	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
		default: 0.0
	},
	description: {
		type: String,
		required: false,
	},
	quantity: {
		type: Number,
		required: false,
		default: 0
	},
	discount: {
		type: Number,
		required: false,
		default: 0
	},
	brand: {
		type: Schema.ObjectId,
		ref: "brand"
	},
	image: [
			{
				type: String
			}
	]
}, {
	timestamps: {
		createdAt: "created_at",
		updatedAt: "updated_at"
	}
});

const Product = mongoose.model("product", productSchema);

export { Product };




