"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateToken = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        const bearerToken = headerToken.slice(7);
        console.log(bearerToken);
        //jwt.verify(bearerToken, process.env.SECRET_KEY)
        next();
    }
    else {
        res.status(401).json({
            msg: 'acceso denegado'
        });
    }
};
exports.default = validateToken;
