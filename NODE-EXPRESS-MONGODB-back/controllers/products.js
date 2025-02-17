import productsModel from "../models/products.js"
class ProductController {
    constructor() {

    }
    async create(req, res){
        try {
            const data = await productsModel.create(req.body);
            res.status(201).json({data});
        } catch (error) {
            res.status(500).send(error);
        }
    }
    async update(req, res){
        try {
            const { id } = req.params;
            const data = await productsModel.update(id, req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }
    async delete(req, res){
        try {
            const { id } = req.params;
            const data = await productsModel.delete(id);
            res.status(206).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getAll(req, res){
        try {
            const data = await productsModel.getAll();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getOne(req, res){
        try {
            const { id } = req.params;
            const data = await productsModel.getOne(id);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getByCategory(req, res) {
        try {
          const { category } = req.params;
          const data = await productsModel.findByCategory(category);
          res.status(200).json(data);
        } catch (error) {
          res.status(500).send(error);
        }
      }

      async getByPrice(req, res) {
        try {
          const { price } = req.params;
          const data = await productsModel.findByPriceGreaterThan(price);
          res.status(200).json(data);
        } catch (error) {
          res.status(500).send(error);
        }
      }

      async updatePrice(req, res) {
        try {
          const { name, price } = req.params;
          const data = await productsModel.updatePrice(name, price);
          if (!data) {
            return res.status(404).send("Producto no encontrado");
          }
          res.status(200).json(data);
        } catch (error) {
          res.status(500).send(error);
        }
      }

      async deleteByName(req, res) {
        try {
          const { name } = req.params;
          const data = await productsModel.deleteProductByName(name);
          if (!data) {
            return res.status(404).send("Producto no encontrado");
          }
          res.status(200).json({ message: "Producto eliminado" });
        } catch (error) {
          res.status(500).send(error);
        }
      }
};

export default new ProductController();