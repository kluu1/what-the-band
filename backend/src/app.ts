import * as dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import serverless from 'serverless-http';
import helmet from 'helmet';

const app: Application = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Hello from root!',
  });
});

app.get('/hello', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Hello from path!',
  });
});

app.use((req: Request, res: Response) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

// TODO: Create endpoints to get chuck norris facts
// https://api.chucknorris.io/

module.exports.handler = serverless(app);
