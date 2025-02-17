import { ObjectId } from "mongodb";
import Product from "../schemas/product.js";
import mongoose from "mongoose";

class ModelProducts {
// consulta para crear producto
    async create(product){
        return await Product.create(product);
    }
// consulta para actualizar un productp por id
    async update (id, product){
    return await Product.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, product )

    }
// Consulta para eliminar un productto por id
    async delete (id){
        return await Product.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)} );
    }
// Consulta para mostrar todos los productos
    async getAll(){
        return await Product.find();
       }

       async getOne(id){
        return await Product.findById(id);
       }

       // Consultas personalizadas

  // Obtener productos por categoría
  async getByCategory(category) {
    return await Product.find({ category });
  }

  // Obtener productos cuyo precio sea mayor a un valor
  async getByPriceGreaterThan(price) {
    return await Product.find({ price: { $gt: price } });
  }

  // Actualizar el precio de un producto por nombre
  async updatePriceByName(name, price) {
    return await Product.findOneAndUpdate(
      { name },
      { price },
      { new: true } // Retorna el documento actualizado
    );
  }

  // Eliminar un producto por nombre
  async deleteByName(name) {
    return await Product.findOneAndDelete({ name });
  }
}



export default new ModelProducts;