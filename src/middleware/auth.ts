import type { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import User, { IUser } from '../models/User'

declare global {
    namespace Express {
        interface Request {
            user?: IUser
        }
    }
}

export const authenticate: RequestHandler = async (req, res, next) => {
    const bearer = req.headers.authorization

    console.log('Authorization Header:', req.headers.authorization);

    if (!bearer || !bearer.startsWith('Bearer ')) {
        res.status(401).json({ error: 'No autorizado: token ausente o mal formado' })
        return
    }

    const [, token] = bearer.split(' ')

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string }

        const user = await User.findById(decoded.id).select('_id name email')
        if (!user) {
            res.status(401).json({ error: 'Usuario no encontrado' })
            return
        }

        req.user = user
        next()
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' })
        return
    }
}
