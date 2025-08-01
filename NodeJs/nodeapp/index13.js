import express from "express";
import mongoose from "mongoose";
import userRouter from "./userRoute.js";

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);

mongoose.connect("mongodb://127.0.0.1:27017/lpu").then(() => {
  app.listen(8080, () => {
    console.log("Server started at 8080");
  });
});

