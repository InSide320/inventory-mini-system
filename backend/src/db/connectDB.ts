import {AppDataSource} from "../data-source";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function connectDB(retries = 5, retryDelay = 5000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            await AppDataSource.initialize();
            console.log("Database connected successfully");
            return;
        } catch (error) {
            console.error("Database connection error", error);
            if (attempt === retries) {
                throw error;
            }
            await delay(retryDelay);
        }
    }

}

export default connectDB;