import {AppDataSource} from "../data-source";
import {Product} from "../entities/Product";

const productRepository = AppDataSource.getRepository("Product");

export const getProducts = () => productRepository.find();

export const getProductById = (id: number) => productRepository.findOneBy({id});

export const createProduct = async (product: Partial<Product>) => {
    productRepository.create(product)
    return productRepository.save(product);
};


