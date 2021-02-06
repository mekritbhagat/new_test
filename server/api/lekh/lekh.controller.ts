import * as express from "express";
// import { fileURLToPath } from "url";
// import { FILE } from "dns";
import multer from "multer";
import path from "path";
import Lekh from "./lekh.modal";

const upload = multer({
    dest: 'uploads/'
});

export const lekhRouter = express.Router();

lekhRouter.get("/", async (req, res) => {
    try {
        const lekh = await Lekh.find().lean();

        console.log(lekh);
        res.status(200).send(lekh);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

lekhRouter.get("/:lekhId", async (req, res) => {
    const _id: any = req.params.lekhId;

    try {
        const lekh = await Lekh.findById(_id);

        res.status(200).send(lekh);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

lekhRouter.post("/", upload.single(''), async (req, res) => {
    try {
        
        const newLekh = new Lekh({
            author: req.body.author,
            title: req.body.title,
            phone: req.body.phone,
            story: req.body.story,
            // uploadImage: req.file.path
        })
        const lekh = await newLekh.save();
        console.log(lekh);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

lekhRouter.patch("/:lekhId", async (req, res) => {
    try {
        const updateLekh = await Lekh.updateOne({
            _id: req.body.lekhId},
            {
                $set: 
                { author: req.body.author,
                    title: req.body.title,
                    phone: req.body.phone,
                    // uploadImage: req.file.path
                }
            });

        res.sendStatus(200).json(updateLekh);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

lekhRouter.delete("/:lekhId", async (req, res) => {
    try {
        const id: any = req.params.lekhId;
        await Lekh.deleteOne(id);

        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(e.message);
    }
});
