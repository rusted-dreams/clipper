import express from "express";
const app = express();
import userRouter from "./routes/user.routes"


app.get("/", (req, res) => {
    res.send("Hello World!");
  });

app.use("/api/v1/usr/", userRouter);

// handle all routes:
app.all("*",(req, res) =>{
    res.status(404).json({
        success: false,
        status: 404,
        message: "404 Page not found!!"
    });
})

export default app;