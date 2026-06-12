import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import { CreateProductDto, Product } from "./types/product";
import { createProduct, deleteProduct, getProducts, updateProduct } from "./api/products.api";
import ProductDetails from "./components/ProductDetails";
import ProductForm from "./components/ProductForm";
import { AxiosError } from "axios";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError("Failed to load products: " + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      setError(null);

      await deleteProduct(id);
      await loadProducts();
    } catch (err) {
      setError("Failed to delete product" + err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditOrUpdate = async (product: CreateProductDto) => {
    try {
      setLoading(true);
      setError(null);

      if (editingProduct) {
        await updateProduct(editingProduct.id, product);
      } else {
        await createProduct(product);
      }

      await loadProducts();
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setError(error.response?.data?.message || error.message || "Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ProductForm
        onSubmit={handleEditOrUpdate}
        onClose={() => setEditingProduct(null)}
        editingProduct={editingProduct}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red", fontWeight: "bold", fontSize: "xx-large" }}>{error}</p>}
      <ProductList
        products={products}
        onEdit={setEditingProduct}
        onDelete={handleDelete}
        onView={setSelectedProduct}
      />
      <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}

export default App;
