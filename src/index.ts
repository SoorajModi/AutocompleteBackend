import express, { Express } from "express";
import healthRoutes from './routes/health';
import searchRoutes from './routes/search';

const app: Express = express();
const port = 3001;

app.use("/health", healthRoutes);
app.use("/search", searchRoutes);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
