import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/database';
connectDB();
//
import myUserRoute from './routes/myUserRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/my/user', myUserRoute);

app.listen(5050, () => {
  console.log(`Server Listening to port: ${5050}`);
});
