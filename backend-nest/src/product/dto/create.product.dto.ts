import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateProductDto {
  @IsString({ message: "Name must be a string" })
  @MinLength(3, { message: "Name must be at least 3 characters long" })
  name!: string;
  @IsNumber()
  quantity!: number;
  @IsString()
  price!: string;
}
