import * as express from "express";
import Stock from "./stock.modal";

export const stockRouter = express.Router();

stockRouter.get("/", async (req, res) => {
    try {
        const stock = await Stock.find();

        res.status(200).send(stock);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

stockRouter.get("/:stockId", async (req, res) => {
    const id: any = req.params.stockId;

    try {
        const stock = await Stock.findById(id);

        res.status(200).send(stock);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

stockRouter.post("/", async (req, res) => {
    try {
        const stock = new Stock({
            stockMarket: req.body.stockMarket,
            currentMarket: req.body.currentMarket,
            previous: req.body.previous,
            current: req.body.current,
            status: req.body.status,
            thumbs: req.body.thumbs,
        });

        // const check = stock.save();

        stock.save().then(data => {
            res.json(data);
        });
        console.log(stock);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

stockRouter.patch("/:stockId", async (req, res) => {
    try {
        const market = await Stock.updateOne({
            _id: req.body.stockId
        }, { $set: { status: req.body.status, thumbs: req.body.thumbs, current: req.body.current, previous: req.body.previous }});

        res.status(200).json(market);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

stockRouter.delete("/:id", async (req, res) => {
    try {
        const id: any = req.params.id;
        await Stock.remove(id);

        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(e.message);
    }
});
