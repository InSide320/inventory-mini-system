import api from "./axios";
import { CreateProductDto, Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  const res = await api.get("/products");
  return res.data;
};

export const deleteProduct = async (id: number) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};

export const createProduct = async (product: Omit<CreateProductDto, "id">) => {
  const res = await api.post("/products/new-product", product);
  return res.data;
};

export const updateProduct = async (id: number, product: Omit<CreateProductDto, "id">) => {
  const res = await api.put(`/products/${id}`, product);
  return res.data;
};
