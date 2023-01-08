import express from "express";
import path from "path";
import dotenv from "dotenv";

const app = express();

//環境變數
dotenv.config({
  path: path.resolve(__dirname, `./environments/${process.env.NODE_ENV}.env`),
});

app.get("/", (req, res, next) => {
  res.send("Hello, world!!");
});

app.listen(process.env.PORT, () =>
  console.log(`http server is running at port ${process.env.PORT}`)
);
