import {Product} from "../types/product";
import ProductItem from "./ProductItem";

interface Props {
    products: Product[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onView: (product: Product) => void;
}

export default function ProductList({products, onEdit, onDelete, onView}: Readonly<Props>) {
    return (
        <>
            <h2>Product Lists</h2>
            {products.map(product => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onView={onView}
                />
            ))}
        </>
    )
}