import express from "express";
import { config } from "dotenv";
import { connectDB } from "./database/data.js";
import router from "./routes/user.js";
import cors from "cors";

const port = 3000;
const app = express();

config({
    path: "./database/config.env",
  });

connectDB();//Database connect

// Middleware for parsing JSON bodies
app.use(express.json());

// Use the user route
app.use("/api/v1/user", router);

app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["GET", "POST", "PUT", "DELETE"],
      // credentials: true,
    })
  );


app.get('/', (req, res) => {
    res.send("Hello WORLD");
    // console.log("Hello World");
})

app.listen(port,()=>{
    console.log("Server is Working");
})