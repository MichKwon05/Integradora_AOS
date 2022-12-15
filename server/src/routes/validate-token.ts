import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next: NextFunction) =>{
    const headerToken = req.headers['authorization']

    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        const bearerToken = headerToken.slice(7);
        console.log(bearerToken);
        

        //jwt.verify(bearerToken, process.env.SECRET_KEY)

        next()
    }else{
        res.status(401).json({
            msg: 'acceso denegado'
        })
    }
}

export default validateToken;
