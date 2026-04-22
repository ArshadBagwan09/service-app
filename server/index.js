const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const workerRoutes = require("./routes/workerRoutes");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/workers", workerRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// Error middleware
const errorHandler = require("./middleware/errorMiddleware");
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});