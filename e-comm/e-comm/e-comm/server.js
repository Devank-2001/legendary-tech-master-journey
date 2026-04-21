import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js"
import { connectDB } from "./config/db.js"
import productRouter from "./routes/product.route.js"
connectDB()
let app = express()

app.use(express.json())
app.use(cookieParser())

let port = process.env.PORT || 4000

app.use("/api/auth", authRouter);
app.use("/api/product",productRouter)
app.listen(port,()=>{
    console.log("server is running on",port);
    
})