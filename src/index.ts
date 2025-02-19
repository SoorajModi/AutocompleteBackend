import express, { Request, Response , Application } from 'express';
import healthRoutes from './routes/health';

const app: Application = express();
const port = 3000;

app.use("/health", healthRoutes);

app.listen(port, () => {
  console.log(`[server]: Server has started at http://localhost:${port}`);
});
