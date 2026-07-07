import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";
import { CreateProductDto } from "../dto/CreateProductDto";
import { getProductStatus } from "../utils/getProductStatus";
import { BadRequestError, NotFoundError } from "../errors";

const productRepository = AppDataSource.getRepository(Product);

export const getProducts = async () => {
  return await productRepository.find();
};
export const getProductById = async (id: number) => {
  const entity = await productRepository.findOneBy({ id });
  if (!entity) {
    throw new NotFoundError("Product not found");
  }
  return entity;
};

export const createProduct = async (dto: CreateProductDto) => {
  if (!dto.name.trim()) {
    throw new BadRequestError("Product name is required");
  }
  if (dto.quantity < 0) {
    throw new BadRequestError("Quantity cannot be negative");
  }
  if (Number(dto.price) < 0) {
    throw new BadRequestError("Price cannot be negative");
  }

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
    throw new NotFoundError("Product not found");
  }

  if (dto.name !== undefined && !dto.name.trim()) {
    throw new BadRequestError("Product name is required");
  }

  if (dto.quantity !== undefined && dto.quantity < 0) {
    throw new BadRequestError("Quantity cannot be negative");
  }

  product.name = dto.name;
  product.quantity = dto.quantity;
  product.price = dto.price;
  product.status = getProductStatus(dto.quantity);

  await product.save();

  return product;
};

export const deleteProduct = async (id: number) => {
  const product = await productRepository.findOneBy({ id });

  if (!product) {
    throw new NotFoundError("Product not found");
  }

  return productRepository.delete(id);
};
