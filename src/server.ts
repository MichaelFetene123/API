import express from "express";
import morgan from "morgan";
import router from "./router";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


 
app.get("/", (req, res) => {
  console.log("hi express server");
  res.status(200).json({ message: "Hello" });
});

app.use("/api", router);

export default app;
