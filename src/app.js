// Require libraries;
import express from "express"; 
const app = express(); 
import path from "path";
import { fileURLToPath } from "url";
import method from "method-override";

// import enviroment variables;
import dotenv from "dotenv"
dotenv.config({ path: `.env`});

// Create __dirname;
const __filename= fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Require mainController;
import mainRouter from "./routes/mainRoute.js";

// Set port;
app.set("port", process.env.PORT || 9090);
app.listen(app.get("port"),()=>console.log("Server start http://127.0.0.1:" + app.get("port"))); 

// express.static();
app.use(express.static(path.resolve(__dirname,"../public")));

// method-override;
app.use(express.urlencoded({extended:false}));
app.use(method("method"));

// app.use();
app.use(mainRouter);

// db connect;
import { dbConnect } from "./helpers/dbConnect.js";
dbConnect();
