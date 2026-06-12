import app from '../app';
import connectDB from "../db/connectDB";

const PORT = process.env.PORT || 4000;

(async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server started http://localhost:${PORT}/products`);
        });
    } catch (error) {
        console.error("Error during server startup", error);
        process.exit(1);
    }
})();