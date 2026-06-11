import {ProductStatus} from "../enum/ProductStatus";
import {AppDataSource} from "../data-source";
import {Product} from "../entities/Product";

const products = [
    {
        name: "Laptop Lenovo ThinkPad",
        quantity: 10,
        price: "1200.00",
        status: ProductStatus.ACTIVE,
    },
    {
        name: "Mouse Logitech M185",
        quantity: 35,
        price: "18.50",
        status: ProductStatus.ACTIVE,
    },
    {
        name: "Keyboard HyperX Alloy",
        quantity: 15,
        price: "75.99",
        status: ProductStatus.INACTIVE,
    },
];

async function seed() {
    await AppDataSource.initialize();
    const productRepository = AppDataSource.getRepository(Product);

    for (const product of products) {
        const existingProduct = await productRepository.findOneBy({name: product.name});
        if (!existingProduct) {
            await productRepository.save(productRepository.create(product));
        }
    }

    await AppDataSource.destroy();
    console.log("Products seeded successfully");
}

seed().catch(async (error) => {
    if (AppDataSource.isInitialized) {
        await AppDataSource.destroy();
    }
    console.error("Error seeding products:", error);
    process.exit(1);
});
