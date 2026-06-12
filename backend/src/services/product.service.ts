import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";
import { CreateProductDto } from "../dto/CreateProductDto";

const productRepository = AppDataSource.getRepository(Product);

export const getProducts = () => {
  return productRepository.find();
};
export const getProductById = (id: number) => {
  return productRepository.findOneBy({ id }); // select * from products where id = (number)
};

export const createProduct = async (product: CreateProductDto) => {
  const newProduct = productRepository.create(product);
  return productRepository.save(newProduct);
};

export const updateProduct = async (id: number, product: Partial<CreateProductDto>) => {
  await productRepository.update(id, product);
  return productRepository.findOneBy({ id });
};

export const deleteProduct = async (id: number) => {
  return productRepository.delete(id);
};
