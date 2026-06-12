import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";
import { CreateProductDto } from "../dto/CreateProductDto";
import { getProductStatus } from "../utils/getProductStatus";

const productRepository = AppDataSource.getRepository(Product);

export const getProducts = () => {
  return productRepository.find();
};
export const getProductById = (id: number) => {
  return productRepository.findOneBy({ id }); // select * from products where id = (number)
};

export const createProduct = async (dto: CreateProductDto) => {
  const newProduct = productRepository.create({
    name: dto.name,
    quantity: dto.quantity,
    price: dto.price,
    status: getProductStatus(dto.quantity),
  });
  return productRepository.save(newProduct);
};

export const updateProduct = async (id: number, dto: CreateProductDto) => {
  const product = await productRepository.findOneBy({ id });

  if (!product) {
    throw new Error("Product not found");
  }

  product.name = dto.name;
  product.quantity = dto.quantity;
  product.price = dto.price;
  product.status = getProductStatus(dto.quantity);

  await product.save();

  return product;
};

export const deleteProduct = async (id: number) => {
  return productRepository.delete(id);
};
