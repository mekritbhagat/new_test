'use strict';
// import * as mongoose from "mongoose";
// import * as jwt from "jsonwebtoken";
import * as crypto from "crypto";
import * as path from "path";
import * as nodemailer from "nodemailer";
import * as async from "async";
import { Request, Response, NextFunction } from "express";
const hbs = require("nodemailer-express-handlebars");
const _ = require('lodash');
import User from "../user/user.modal";
const email = process.env.MAILER_EMAIL_ID || '';
const pass = process.env.MAILER_PASSWORD || '';


const smtpTransport = nodemailer.createTransport({
    service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
    auth: {
        user: '',
        pass: ''
    }
});

const handlebarsOptions = {
    viewEngine: 'handlebars',
    viewPath: path.resolve('./templates/'),
    extName: '.html'
};

export const index = async (req: Request, res: Response) => {
    return res.sendFile(path.resolve('./'));
};

export const forgot_password_template = async (req: Request, res: Response) => {
    return res.sendFile(path.resolve('.'));
}

export const forgot_reset_template = async (req: Request, res: Response) => {
    return res.sendFile(path.resolve())
}

export const forgot_password = async (req: Request, res: Response) => {
    async.waterfall([
        function(done: any) {
            User.findOne({
                email: req.body.email
            }).exec((err: any, user: any) => {
                if (user) {
                    done(err, user);
                } else {
                    done('user not found');
                }
            });
        },
        function(user: any, done: any) {
            crypto.randomBytes(20, function(err, buffer) {
                const token = buffer.toString('hex');
            });
        },
        function(user: any, token: string, done: any) {
            User.findByIdAndUpdate({ _id: user._id}, { reset_password_token: token, reset_password_expires: Date.now() + 86400000}, { upsert: true, new: true}).exec(function(err: any, new_user: any) {
                done(err, token, new_user);
            });
        },
        function(token: string, user: any, done: any) {
            const data = {
                to: user.email,
                from: email,
                template: 'forgot-password-email',
                subject: 'Change Password',
                context: {
                    url: 'http://localhost:3000/auth/reset_password?token='+ token,
                    name: user.username.split(' ')[0]
                }
            };
            smtpTransport.sendMail(data, function(err) {
                if (!err) {
                    return res.json({
                        message: 'Kindly check yout email for more information'
                    })
                } else {
                    return done(err);
                }
            });
        }
    ], function(err) {
        return res.status(422).json({ message: err });
    });
};

export const reset_password = async (req: Request, res: Response) => {
    User.findOne({
        reset_password_token: req.body.token,
        reset_password_expires: {
            $gt: Date.now()
        }
    }).exec(function(err: any, user: any) {
        if (!err && user) {
            if(req.body.newPassword === req.body.verifyPassword) {
                // user.password = bcrypt.hashSync(req.body.newPassword, 10);
                // user.reset_password_token = undefined;
                // user.reset_password_expires = undefined;
                // user.save(function(err) {
                //     if (err) {
                //         return res.status(422).send({
                //             message: err
                //         });
                //     } else {
                //         const data = {
                //             to: user.email,
                //             from: email,
                //             template: 'reset-password-email',
                //             subject: 'Password reset confirmation',
                //             context: {
                //                 name: user.email.split(' ')[0]
                //             }
                //         };
                //         smtpTransport.sendMail(data, function(err) {
                //             if (!err) {
                //                 return res.json({ message: 'Password reset'});
                //             } else {
                //                 return;
                //             }
                //         });
                //     }
                // });
            } else {
                return res.status(422).send({
                    message: 'Password do not match'
                });
            }
        } else {
            return res.status(400).send({
                message: 'Password reset token is invalid or has expired'
            });
        }
    });
};