import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import config from "../common/config";


export const authCheck = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const token = req.headers.authorization.split("")[1];
//         const decoded = jwt.verify(token, process.env.JWT_TOKEN);
//         req.userData = decoded;
//         next();
//     } catch (error) {
//         return res.status(500).json({
//             message: 'Auth failed'
//         });
//     }
// }
    
    //Get the jwt token from the head
    const token = <string>req.headers["auth"];
    let jwtPayload;

    //Try to validate the token and get data
    try {
        jwtPayload = <any>jwt.verify(token, config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        res.status(401).send();
        return;
    }

    //The token is valid for 1 hour
    //We want to send a new token on every request
    const { userId, username } = jwtPayload;
    const newToken = jwt.sign({ userId, username }, config.jwtSecret, {
        expiresIn: "1h"
    });
    res.setHeader("token", newToken);
    next();
}