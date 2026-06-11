import {Product} from "../types/product";

interface Props {
    product: Product;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onView: (product: Product) => void;
}

export default function ProductItem({product, onEdit, onDelete, onView}: Props) {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ${product.price}</p>
            <p>Status: {product.status}</p>
            <p>Created at: {new Date(product.createdAt).toLocaleDateString()}</p>
            <div style={{display: "flex", gap: "10px"}}>
                <button onClick={() => onEdit(product.id)}>Edit</button>
                <button onClick={() => onDelete(product.id)}>Delete</button>
                <button onClick={() => onView(product)}>View</button>
            </div>
        </div>
    );
}