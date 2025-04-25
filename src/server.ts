import express from "express";
import dontenv from "dotenv";

import connectDB from "./config/db";
import projectRoutes from "./routes/projectRoutes";

dontenv.config()
connectDB()


const app = express()

app.use(express.json())

//routes
app.use('/api/projects', projectRoutes)

export default app