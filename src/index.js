const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Use env var if available (Docker), else localhost (normal npm start)
const MONGO_URI = process.env.MONGO_URL || "mongodb://localhost:27017/userdb";

app.use(express.json());

// connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}

app.get("/", (req, res) => {
  res.json({ message: "API with MongoDB is running 🚀" });
});

// POST /users -> save to Mongo
app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "name and email are required" });
    }

    const user = await User.create({ name, email });
    res.status(201).json({ message: "user created", user });
  } catch (err) {
    console.error("❌ Error creating user:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /users -> fetch from Mongo
app.get("/users", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json({ users });
  } catch (err) {
    console.error("❌ Error fetching users:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  connectDB();
});
