import "reflect-metadata";
import "dotenv/config";
import {DataSource} from "typeorm";
import {Product} from "./entities/Product";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: [Product],
    migrations: ["src/migrations/*.ts"],
});