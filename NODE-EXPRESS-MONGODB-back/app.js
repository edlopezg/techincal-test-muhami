import "dotenv/config";
import express from "express";
import route from "./routes/products.js"; 
import dbClient from "./config/dbClient.js";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json()); 
app.use("/products", route);


try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));   
} catch (error) {
    console.log(error);

    process.on("SIGINT", async() => {
        dbClient.closeConection();
        process.exit(0);
    });
}


