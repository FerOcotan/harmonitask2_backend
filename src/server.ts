import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import { corsConfig } from "./config/cors";
import  connectDB  from "./config/db";
import authRoutes from './routes/authRoutes';
import projectRoutes from './routes/projectRoutes';
import { Request, Response, NextFunction } from 'express';
import './models/User'; // Importa el modelo User primero
import './models/Project';
import './models/Task';


dotenv.config();
 
 
connectDB();
 
const app = express();
app.use(cors(corsConfig));
app.use(express.json());
 
// Routes 
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Error stack:', err.stack);
    res.status(500).json({
      error: err.message || 'Hubo un error',
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  });
 
export default app;