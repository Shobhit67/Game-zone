const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/GamezoneDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model(
  "UserDetail",
  new mongoose.Schema({
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
  })
);

const JWT_SECRET = "your-secret-key"; // Replace with a secure secret key

// Your existing registration endpoint remains the same
app.post("/register", async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const alreadyExists = await User.findOne({ Email });

    if (alreadyExists) {
      return res.json("exist");
    } else {
      await User.create({ Email, Password });
      return res.json("notexists");
    }
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json("An error occurred during registration");
  }
});




// Your existing login endpoint
app.post("/login", async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await User.findOne({ Email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
        details: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(Password, user.Password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
        details: "Invalid password",
      });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Internal Server Error",
      details: error.message,
    });
  }
});




app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
