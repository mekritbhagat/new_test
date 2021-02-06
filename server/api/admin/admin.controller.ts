import * as express from "express";
import * as bcrypt from "bcrypt";
import Admin from "./admin.modal";

export const adminRouter = express.Router();

adminRouter.get("/", async (req, res) => {
    try {
        const users = await Admin.find().lean();

        res.status(200).send(users);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

adminRouter.get("/:userId", async (req, res) => {
    const email: any = req.params.userId;

    try {
        const user = await Admin.findById(email);

        res.status(200).send(user);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

adminRouter.post("/", async (req, res) => {
    try {
        const hashPass = bcrypt.hash(req.body.password, 10);
        const user = new Admin({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPass,
            // userImage: req.path,
            phone: req.body.phone,
            roles: req.body.roles
        });

//     //Validate the new values on model
//     user.username = username;
//     user.role = role;
//     const errors = await validate(user);
//     if (errors.length > 0) {
//       res.status(400).send(errors);
//       return;
//     }

        await user.save().then(result => {
            console.log(result);
            res.status(201).json(result);
        });


    } catch (e) {
        res.status(404).send(e.message);
    }
});


adminRouter.put("/:id", async (req, res) => {
    try {
        const user = req.body.item;

        await Admin.findByIdAndUpdate(user, {})

        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

adminRouter.delete("/:userId", async (req, res) => {
    try {
        const _id: any = req.params.userId;
        await Admin.findByIdAndRemove(_id);

        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(e.message);
    }
});