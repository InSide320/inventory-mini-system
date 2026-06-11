import app from '../app';
import {AppDataSource} from "../data-source";
import productRoutes from "../routes/product.routes";

const PORT = process.env.PORT || 4000;


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")

        app.use((req, res, next) => {
            console.log(`${req.method} ${req.url}`);
            next();
        })

        // use routes
        app.use('/products', productRoutes);

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    }).catch(err => {
    console.error("Error during Data Source initialization", err)
});