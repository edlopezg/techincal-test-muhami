import { useState, useEffect } from "react";
import "../Products/products.css";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado

  // Obtener los productos desde la API
  useEffect(() => {
    fetch("http://localhost:5200/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json(); // Convierte la respuesta a JSON
      })
      .then((data) => {
        setProducts(data); // Guarda los productos en el estado
        setFilteredProducts(data); // Muestra todos los productos inicialmente
      })
      .catch((error) => {
        setError("Error al obtener los productos");
        console.error(error);
      });
  }, []); // Este efecto solo se ejecutará una vez cuando se monte el componente

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    // Filtrar los productos por categoría
    if (event.target.value === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === event.target.value)
      );
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Actualiza el estado con el producto seleccionado
  };

  const handleCloseModal = () => {
    setSelectedProduct(null); // Cierra el modal (restablece el estado del producto)
  };

  return (
    <div className="container">
      <h1 className="title">Productos</h1>
      {error && <p className="text-danger">{error}</p>}

      {/* Dropdown de categoría */}
      <div className="mb-4">
        <label htmlFor="category" className="form-label">
          Filtrar por categoría
        </label>
        <select
          id="category"
          className="form-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Todas</option>
          <option value="Tecnologia">Tecnología</option>
          <option value="Muebles">Muebles</option>
        </select>
      </div>

      {/* Mostrar productos filtrados */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="card-container" key={product._id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Categoría: {product.category}</p>
                <p className="card-text">Precio: ${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleProductClick(product)}
                >
                  Más información
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de detalle del producto */}
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <div className="card">
              <div className="card-body">
                <button
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Cerrar"
                >
                  &times;
                </button>
                <h2>Detalles del producto</h2>
                <p><strong>Nombre:</strong> {selectedProduct.name}</p>
                <p><strong>Categoría:</strong> {selectedProduct.category}</p>
                <p><strong>Precio:</strong> ${selectedProduct.price}</p>
                <p><strong>Descripción:</strong> {selectedProduct.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
