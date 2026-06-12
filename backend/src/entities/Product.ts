import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ProductStatus } from "../enum/ProductStatus";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  name!: string;

  @Column("int", { default: 0 })
  quantity!: number;

  @Column("decimal", { precision: 10, scale: 2, default: 0 })
  price!: string;

  @Column({
    type: "enum",
    enum: ProductStatus,
    default: ProductStatus.OUT_OF_STOCK,
  })
  status!: ProductStatus;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;
}
