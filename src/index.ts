import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/database';
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/test', async (req: Request, res: Response) => {
  res.json({ message: 'Hello!' });
});

app.listen(5050, () => {
  console.log(`Server Listening to port: ${5050}`);
});
