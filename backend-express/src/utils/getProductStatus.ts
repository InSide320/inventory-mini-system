import { ProductStatus } from "../enum/ProductStatus";

export const getProductStatus = (quantity: number) => {
  if (quantity === 0) return ProductStatus.OUT_OF_STOCK;

  if (quantity >= 1 && quantity <= 5) return ProductStatus.LOW_STOCK;

  return ProductStatus.IN_STOCK;
};
