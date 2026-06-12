import React, { useEffect, useState } from "react";
import { CreateProductDto, Product } from "../types/product";

interface Props {
  onSubmit: (product: CreateProductDto) => void;
  onClose: () => void;
  editingProduct?: Product | null;
}

export default function ProductForm({ onSubmit, onClose, editingProduct }: Readonly<Props>) {
  const [form, setForm] = useState<CreateProductDto>({
    name: "",
    quantity: 0,
    price: "0.00",
  });

  useEffect(() => {
    if (!editingProduct) return;
    setForm(editingProduct);
  }, [editingProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    onSubmit(form);

    setForm({
      name: "",
      quantity: 0,
      price: "0.00",
    });

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="quantity" type="number" min="0" value={form.quantity} onChange={handleChange} />
      <input
        name="price"
        type="number"
        min="0"
        step="0.01"
        value={form.price}
        onChange={handleChange}
      />

      <button type="submit">{editingProduct ? "Update Product" : "Add Product"}</button>

      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}
