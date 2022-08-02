// Import mongoose;
import mongoose from "mongoose";

// Schema mongoose;
const { Schema } = mongoose;

const brandSchema = new Schema ({

	name: {
		type: String,
		required: true,
		unique: true
	},
	products: [{
			_id: {
				type: Schema.ObjectId,
				ref: "product"
			}
	}],
	quantityProducts: {
		type: Number,
	},
	state: {
		type: Number,
		default: 1,
		required: false
	},
	description: {
		type: String,
		default:"",
		required: true
	},
	image: {
		type: String,
		required: false,
		default: "https://i.postimg.cc/3wZGShPP/avatar-default-brand.png"
	}
},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at"
		}
	}
);

const Brand = mongoose.model("brand", brandSchema);

export { Brand };
