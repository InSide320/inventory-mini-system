import {Product} from "../types/product";


interface Props {
    product: Product | null;
    onClose: () => void;
}

export default function ProductDetails({product, onClose}: Props) {

    if (!product) return null;

    return (
        <div style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            background: "rgba(255, 255, 255, 0.5)",
        }}>
            <div style={{
                background: "silver",
                width: "50%",
                margin: "100px auto",
                padding: "20px",
                borderRadius: "15px",
            }}>
                <h2>Product Details</h2>
                <p>Name: {product.name}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Price: ${product.price}</p>
                <p>Status: {product.status}</p>
                <p>Created at: {new Date(product.createdAt).toLocaleDateString()}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}
