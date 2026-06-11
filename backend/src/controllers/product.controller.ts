import {Request, Response} from "express";
import * as productService from "../services/product.service";

export const getProducts = async (_req: Request, res: Response) => {
    const products = await productService.getProducts();
    res.json(products);
}
