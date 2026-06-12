export interface Product {
    id: number;
    name: string;
    quantity: number;
    price: string;
    status: string;
    createdAt: string;
}

export interface CreateProductDto {
    name: string;
    quantity: number;
    price: string;
}