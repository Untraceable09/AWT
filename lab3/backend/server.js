const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Hardcoded user for demo
const VALID_USER = { username: "admin", password: "password123" };

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === VALID_USER.username && password === VALID_USER.password) {
    return res.json({ success: true, message: "Login successful!" });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
