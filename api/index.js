import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/User.js";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import cookieParser from "cookie-parser";

//Initializations
const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = "secret";

//Middlewares
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

//Db connect
mongoose.connect(
  "mongodb+srv://dharmadeepmadisetty:iamdharmathelegend@cluster0.zldooer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

////////////////////////
/////Get requests///////
///////////////////////

app.get("/test", (req, res) => {
  res.json("Test ok");
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jsonwebtoken.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

////////////////////////
/////Post requests///////
///////////////////////

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    // console.log("userDoc: " + userDoc);
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
    // res.status(400).json(e.errorResponse.errmsg);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      //Logged in
      jsonwebtoken.sign(
        { username, id: userDoc._id },
        secret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json({
            id: userDoc._id,
            username,
          });
        }
      );
    } else {
      res.status(400).json("Wrong creds");
    }
  } catch (error) {
    res.status(400).json("Error");
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("Logged out");
});

app.listen(4000);
