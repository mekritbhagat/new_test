import express, { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { validate } from "class-validator";
// import * as bcrypt from "bcrypt";
// import * as ResetController from "./reset.controller";
import { authCheck } from "../middleware/check-auth";
import User from "../user/user.modal";
// import Auth from "./auth.modal";
import config from "./../../config";
export const authRouter = express.Router();


// authRouter.get("/sign", async (req: Request, res: Response) => {
//     User.find({ email: req.body.email }).exec().then(user => {
//         if (user.length < 1) {
//             return res.status(404).json({
//                 message: "User not exists"
//             });
//         }
//         bcrypt.compare(req.body.password, user[0].password, (err, result) => {
//             if (err) {
//                 return res.status(401).json({
//                     message: "User auth failed"
//                 });
//             }
//             if (result) {
//                 const token = jwt.sign({
//                     email: user[0].email,
//                     userId: user[0]._id
//                 }, process.env.JWT_KEY, {
//                     expiresIn: '12h'
//                 });
//                 return res.status(200).json({
//                     message: "Auth successful", token: token
//                 });
//             }
//             res.status(401).json({
//                 message: "Auth failed"
//             });
//         })
//     })
// });

authRouter.post("/login", async (req: Request, res: Response) => {
    //Check if username and password are set
    let { email, password } = req.body;
    if (!(email && password)) {
        res.status(400).send();
    }
    //Get user from database
    let users;
    try {
        users = await User.findOne({ where: { email } });
    } catch (error) {
        res.status(401).send();
    }
    //Check if encrypted password match
    if (!users.checkIfUnencryptedPasswordIsValid(password)) {
        res.status(401).send();
        return;
    }
    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
        { userId: users.id, username: users.email },
        config.jwtSecret,
        { expiresIn: "1h" }
    );
    //Send the jwt in the response
    res.send(token);
    // res.redirect('/');
});

authRouter.post("/change-password", [authCheck], async (req: Request, res: Response) => {
    //Get ID from JWT
    const id = res.locals.jwtPayload.userId;
    //Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
        res.status(400).send();
    }
    //Get user from the database
    let user;
    try {
        const user = await User.findOne(id);
    } catch (id) {
        res.status(401).send();
    }
    // //Check if old password matchs
    // if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
    //     res.status(401).send();
    //     return;
    // }
    // //Validate de model (password lenght)
    // user.password = newPassword;
    // const errors = await validate(user);
    // if (errors.length > 0) {
    //     res.status(400).send(errors);
    //     return;
    // }
    // //Hash the new password and save
    // user.hashPassword();
    // user.save(user);

    res.status(204).send();
});
