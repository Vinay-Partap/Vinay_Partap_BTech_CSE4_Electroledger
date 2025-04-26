require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ElectroLedger";

// Middleware to parse JSON requests
app.use(express.json());

const transactionRoutes = require("./routes/transactions");
app.use("/api/transactions", transactionRoutes);


// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Define a simple API route
app.get("/", (req, res) => {
  res.send("ElectroLedger API is running...");
});

app.use((req, res) => {
    res.status(404).json({ error: "❌ Route not found!", path: req.url });
  });

  const transactionRoutes = require("./routes/transactions");
app.use("/api/transactions", transactionRoutes);

  
// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

app.post("/", (req, res) => {
    res.json({ message: "POST request successful!" });
  });
  