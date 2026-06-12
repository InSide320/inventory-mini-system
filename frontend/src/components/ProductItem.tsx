import { Product } from "../types/product";
import { statusLabels } from "../../constants/ProductStatus";

interface Props {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
  onView: (product: Product) => void;
}

export default function ProductItem({ product, onEdit, onDelete, onView }: Readonly<Props>) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Quantity: {product.quantity}</p>
      <p>Price: ${product.price}</p>
      <p>Status: {statusLabels[product.status]}</p>
      <p>Created at: {new Date(product.createdAt).toLocaleDateString()}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => onEdit(product)}>Edit</button>
        <button onClick={() => onDelete(product.id)}>Delete</button>
        <button onClick={() => onView(product)}>View</button>
      </div>
    </div>
  );
}
