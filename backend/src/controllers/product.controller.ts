import {Request, Response} from "express";
import * as productService from "../services/product.service";

export const getProducts = async (_req: Request, res: Response) => {
    const products = await productService.getProducts();
    res.json(products);
}

export const getProductById = async (req: Request, res: Response) => {
    const productId = Number(req.params.id);
    if (Number.isNaN(productId)) {
        return res.status(400).json({message: "Invalid product ID"});
    }
    const product = await productService.getProductById(productId);

    if (!product) {
        return res.status(404).json({message: "Product not found"});
    }

    res.json(product);
}
