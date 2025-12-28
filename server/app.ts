import express from "express";
import { registerRoutes } from "./routes.js";
import "dotenv/config";

const app = express();
app.use(express.json());

// Register API routes
registerRoutes(app);

// Catch-all for undefined routes
app.use((_req, res) => {
  res.status(404).json({ success: false, error: "Route not found" });
});

// Global error handler
app.use(
  (
    err: any,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error(err);
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ success: false, error: message });
  }
);

export default app;
