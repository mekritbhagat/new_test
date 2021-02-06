import * as express from "express";
import * as bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import mongoose from "mongoose";
import User from "./user.modal";

export const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
    try {
        const users = await User.find().lean();

        res.status(200).send(users);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

userRouter.get("/:userId", async (req, res) => {
    const email: any = req.params.userId;

    try {
        const user = await User.findById(email);

        res.status(200).send(user);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

userRouter.post("/", async (req, res) => {
    User.find({
        email: req.body.email
    }).exec().then(function (user: any) {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Try with another email ID"
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: hash,
                            // userImage: req.path,
                            phone: req.body.phone,
                            roles: req.body.roles
                        });
                        user.save().then(result => {
                            res.status(201).json({
                                message: "User created successfully"
                            });
                        });
                    }
                });
            }
        })
});

// userRouter.post("/", async (req, res) => {
//     try {
//         const hashPass = bcrypt.hash(req.body.password, 10);
//         const user = new User({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             email: req.body.email,
//             password: hashPass,
//             // userImage: req.path,
//             phone: req.body.phone,
//             roles: req.body.roles
//         });

// //     //Validate the new values on model
// //     user.username = username;
// //     user.role = role;
// //     const errors = await validate(user);
// //     if (errors.length > 0) {
// //       res.status(400).send(errors);
// //       return;
// //     }

//         await user.save().then(result => {
//             console.log(result);
//             res.status(201).json(result);
//         });


//     } catch (e) {
//         res.status(404).send(e.message);
//     }
// });


userRouter.put("/:id", async (req, res) => {
    try {
        const user = req.body.item;

        await User.findByIdAndUpdate(user, {})

        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

userRouter.delete("/:userId", async (req, res) => {
    try {
        const _id: any = req.params.userId;
        await User.findByIdAndRemove(_id);

        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(e.message);
    }
});