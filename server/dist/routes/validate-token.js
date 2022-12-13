"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import jwt from 'jsonwebtoken';
const validateToken = (req, res, next) => {
    console.log('validate token');
    const headerToken = req.headers['authorization'];
    console.log(headerToken); ///imprime el token
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        const bearerToken = headerToken.slice(7);
        //jwt.verify(bearerToken, process.env.SECRET_KEY)
        next();
    }
    else {
        res.status(401).json({
            msg: 'acceso denegado'
        });
    }
    next();
};
exports.default = validateToken;
