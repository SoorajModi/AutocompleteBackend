import express, { Request, Response , Application } from 'express';
import healthRoutes from './routes/health';
import searchRoutes from './routes/search';

const app: Application = express();
const port = 3000;

app.use("/health", healthRoutes);
app.use("/search", searchRoutes);

app.listen(port, () => {
  console.log(`[server]: Server has started at http://localhost:${port}`);
});
