import { Request, Response, NextFunction } from "express";

import User from "../user/user.modal";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const id = res.locals.jwtPayload.userId;
    let user;
    try {
      user = await User.findById(id);
    } catch (id) {
      res.status(401).send();
    }
    if (roles.indexOf(user.roles) > -1) next();
    else res.status(401).send();
  };
};