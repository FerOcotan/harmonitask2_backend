import jwt from 'jsonwebtoken'
import { Types } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

type UserPayload = {
    id: Types.ObjectId | string;
}

export const generateJWT = (payload: UserPayload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '180d'
    })
    return token
}