import ProductList from "./components/ProductList";
import {useEffect, useState} from "react";
import {CreateProductDto, Product} from "./types/product";
import {createProduct, deleteProduct, getProducts, updateProduct} from "./api/products.api";
import ProductDetails from "./components/ProductDetails";
import ProductForm from "./components/ProductForm";

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const loadProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    const handleDelete = async (id: number) => {
        await deleteProduct(id);
        await loadProducts();
    }

    const handleEditOrUpdate = async (product: CreateProductDto) => {
        if (editingProduct) {
            await updateProduct(editingProduct.id, product);
        } else {
            await createProduct(product);
        }
        await loadProducts();
    }


    return (
        <>
            <ProductForm onSubmit={handleEditOrUpdate} onClose={() => setEditingProduct(null)}
                         editingProduct={editingProduct}/>
            <ProductList
                products={products}
                onEdit={setEditingProduct}
                onDelete={handleDelete}
                onView={setSelectedProduct}
            />
            <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)}/>
        </>

    );
}

export default App;