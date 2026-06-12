import {ProductStatus} from "../enum/ProductStatus";

export type CreateProductDto = {
    name: string;
    quantity: number;
    price: string;
    status?: ProductStatus;
};