import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import app from "./app.js";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer(app);

// Serve static files from dist/public in production
// This logic is ONLY for when running the server directly (dev/prod),
// NOT when running as a Vercel serverless function.
const staticPath =
  process.env.NODE_ENV === "production"
    ? __dirname
    : path.resolve(__dirname, "..", "dist");

app.use(express.static(staticPath));

// Handle client-side routing - serve index.html for all routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

const port = process.env.PORT || 5000;

// Only start server if running directly
const isMainModule = process.argv[1] === fileURLToPath(import.meta.url);

if (isMainModule) {
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

export default app;
