import { ProductEntity } from "./entities/product.entity";
import { CreateProductDto } from "./dto/create.product.dto";
import { BadRequestError, NotFoundError } from "./errors";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateProductDto } from "./dto/update.product.dto";
import { productUtils } from "./utils/product.utils";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>
  ) {}

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundError("Product not found");
    }
    return product;
  }

  async create(dto: CreateProductDto) {
    if (!dto.name.trim()) {
      throw new BadRequestError("Product name is required");
    }
    if (dto.quantity < 0) {
      throw new BadRequestError("Quantity cannot be negative");
    }
    if (Number(dto.price) < 0) {
      throw new BadRequestError("Price cannot be negative");
    }

    const product = this.productRepository.create({
      ...dto,
      status: productUtils(dto.quantity),
    });
    return this.productRepository.save(product);
  }

  async update(id: number, dto: UpdateProductDto) {
    const product = await this.findOne(id);

    if (dto.name !== undefined && !dto.name.trim()) {
      throw new BadRequestError("Product name is required");
    }

    if (dto.quantity !== undefined && dto.quantity < 0) {
      throw new BadRequestError("Quantity cannot be negative");
    }

    const nextQuantity = dto.quantity ?? product.quantity;

    this.productRepository.merge(product, {
      ...dto,
      status: productUtils(nextQuantity),
    });

    const updatedProduct = await this.productRepository.save(product);

    return { message: "Product Updated", product: updatedProduct };
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);

    return { message: "Product deleted successfully" };
  }
}
