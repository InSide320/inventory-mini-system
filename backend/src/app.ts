import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);

app.use(errorHandler);

export default app;
