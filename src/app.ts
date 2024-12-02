import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

// CORS
app.use(cors());

// PARSER
app.use(express.json());

// ROUTER
// app.use('/api/cars', carRouter);
// app.use('/api/orders', orderRouter);

// Response Message
app.get('/', (req: Request, res: Response) => {
  let b;
  const a =10;
  res.status(200).json({ message: 'Hello World! 👋' });
});
export default app;
