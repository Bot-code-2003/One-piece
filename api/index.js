import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/User.js";
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://dharmadeepmadisetty:iamdharmathelegend@cluster0.zldooer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/test", (req, res) => {
  res.json("Test ok");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.create({ username, password });
  res.json(userDoc);
});
app.listen(4000);
