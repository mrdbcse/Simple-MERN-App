import express from "express";
import mongoose from "mongoose";
import User from "./models/user.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

const dbUrl = process.env.ATLAS_URL;
// "";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};

// Connect Database

connectDB();

app.post("/api/register", async (req, res) => {
  try {
    await User.create({
      name: req.body.userName,
      description: req.body.userDescription,
      email: req.body.userEmail,
      phoneNumber: req.body.userPhoneNumber,
      address: req.body.userAddress,
      dateOfBirth: req.body.userDateOfBirth,
      gender: req.body.userGender,
      tenthSchoolName: req.body.userTenthSchoolName,
      tenthPercentage: req.body.userTenthPercentage,
      twelfthSchoolName: req.body.userTwelfthSchoolName,
      twelfthPercentage: req.body.userTwelfthPercentage,
      stream: req.body.userStream,
    });
  } catch (error) {
    if (error) {
      console.log(error);
    } else {
      res.json({
        message: " User Registered!",
      });
    }
  }
});
app.get("/api/users", async (req, res) => {
  try {
    const user = await User.find({}).select("name stream");
    res.json({
      users: user,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
