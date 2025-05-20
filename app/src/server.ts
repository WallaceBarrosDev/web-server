import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.get('/', (_req: Request, res: Response) => {
    res.json({message: 'Hello World!'});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});