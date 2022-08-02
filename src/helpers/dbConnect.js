// import modules
import mongoose from "mongoose";

const dbConnect = () => {

	const urlDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_NAME}.3jykcid.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;


	mongoose.Promise = global.Promise;
	mongoose.connect(urlDB, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
		.then(mongoose => console.log("MONGO ATLAS CONNECTED"))
		.catch((e) => console.log("El error de conexión es: " + e));

};


export { dbConnect };
