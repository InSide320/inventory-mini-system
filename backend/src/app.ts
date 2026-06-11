import express from 'express';
import cors from 'cors';


const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT || 4000, () => console.log(`Server started http://localhost:${PORT}`))

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/health", (req, res) => res.json("OK"))

export default app;