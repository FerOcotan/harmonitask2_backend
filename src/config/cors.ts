import { CorsOptions } from "cors";
import dotenv from 'dotenv';

dotenv.config();

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    const whitelist = [process.env.FRONTEND_URL];

    // Permitir undefined en entorno de producción o Render
    if (process.env.NODE_ENV === "production" || process.env.RENDER === "true") {
      whitelist.push(undefined);
    }

    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Error de cors"));
    }
  },
};
