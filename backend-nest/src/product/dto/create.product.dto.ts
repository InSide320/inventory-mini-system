import { ProductStatus } from "../enum/product.status.enum";

export class CreateProductDto {
  name!: string;
  quantity!: number;
  price!: string;
  status?: ProductStatus;
}
