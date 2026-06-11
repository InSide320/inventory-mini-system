import ProductList from "./components/ProductList";
import {useEffect, useState} from "react";
import {Product} from "./types/product";
import {getProducts} from "./api/products.api";
import ProductDetails from "./components/ProductDetails";

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    // const [editProduct, setEditProduct] = useState<Product | null>(null);
    // const [deleteProductId, setDeleteProductId] = useState<Product | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const loadProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    }

    useEffect(() => {
        loadProducts();
    }, []);


    return (
        <>
            <ProductList
                products={products}
                onEdit={() => {
                }}
                onDelete={() => {
                }}
                onView={setSelectedProduct}
            />
            <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)}/>
        </>

    );
}

export default App;