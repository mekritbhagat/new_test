import * as express from "express";
import Quote from "./quote.modal";
export const quoteRouter = express.Router();

quoteRouter.get("/", async (req, res) => {
    try {
        const quote = await Quote.find().lean();

        console.log(quote);
        res.status(200).send(quote);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

quoteRouter.get("/:id", async (req, res) => {
    // const id: number = parseInt(req.params.id, 10);
    const id = req.body.id;
    try {
        const quote = await Quote.findById(id);

        res.status(200).send(quote);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

quoteRouter.post("/", async (req, res) => {
    try {
        const quote = new Quote({
            quote: req.body.quote,
            published: req.body.published
        });
        quote.save().then(data => {
            res.json(data);
        });
        console.log(quote);
        // res.sendStatus(201);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

quoteRouter.patch("/:id", async (req, res) => {
    try {
        const quote = await Quote.updateOne({
            _id: req.params.id
        }, { $set: { quote: req.body.quote, published: req.body.published }});

        res.status(quote);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

quoteRouter.delete("/:id", async (req, res) => {
    try {
        const _id: any = req.params.id;
        await Quote.remove(_id);

        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(e.message);
    }
});
