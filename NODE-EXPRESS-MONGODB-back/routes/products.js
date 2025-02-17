import express from "express";
const route = express.Router();
import productController from "../controllers/products.js";
route.use(express.json()); 

route.post("/" , productController.create);
route.get("/:id", productController.getOne);
route.get("/", productController.getAll);
route.put("/:id", productController.update);
route.delete("/:id", productController.delete);

//Rutas personalizadas

route.get("/Tecnologia", productController.getByCategory);
route.get("/products/precio-mayor/:price", productController.getByPrice);
route.put("/products/actualizar-precio/:name/:price", productController.updatePrice);
route.delete("/products/eliminar/:name", productController.deleteByName);


export default route;


