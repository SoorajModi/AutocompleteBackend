import express, { Request, Response , Application } from 'express';

const app: Application = express();
const port = 3000;

app.get('/health', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`[server]: Server has started at http://localhost:${port}`);
});