import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path: ".env",
});

const PORT = process.env.PORT;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});