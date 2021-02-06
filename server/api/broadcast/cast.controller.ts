import * as express from "express";
import Broad from "./cast.modal";
import * as socket from 'socket.io';
// import { io } from "../app";

export const castRouter = express.Router();

castRouter.get("/", async (req, res) => {
    try {
        const cast = await Broad.find();

        res.status(200).send(cast);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

castRouter.get("/:castId", async (req, res) => {
    // const id: number = parseInt(req.params.id, 10);
    const _id = req.body.castId;

    try {
        const item = await Broad.findById(_id);

        res.status(200).send(item);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

castRouter.post("/", async (req, res) => {
    try {
        const cast = new Broad({
            title: req.body.title,
            media: req.body.media,
            info: req.body.info,
            // icons: req.file.path,
            // comments: req.body.comments,
        });
        const broadcast = await cast.save();
        // res.status(201).json(broadcast);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

castRouter.patch("/:castId", async (req, res) => {
    try {
        const updateCast = await Broad.updateOne({
            _id: req.body.castId
        }, { $set: { title: req.body.title, info: req.body.info } });

        res.status(200).json(updateCast);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

castRouter.delete("/:castId", async (req, res) => {
    try {
        const id: any = req.params.castId;
        await Broad.remove(id);

        res.sendStatus(200);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// castRouter.get("/live", async (req, res) => {
//     const live = io.on('connection', socket => {
//         socket.on('room-join_request', payload => {
//             socket.join(payload.roomName, err => {
//                 if (!err) {
//                     io.in(payload.roomName).clients((err: any, clients: any) => {
//                         if (!err) {
//                             io.in(payload.roomName).emit('room_users', clients)
//                         }
//                     });
//                 }
//             })
//         });

//         socket.on('offer_signal', payload => {
//             io.to(payload.calleeId).emit('offer', { signalData: payload.signalData, callerId: payload.callerId });
//         });

//         socket.on('answer_signal', payload => {
//             io.to(payload.callerId).emit('answer', { signalData: payload.signalData, calleeId: payload.calleeId });
//         });

//         socket.on('stream', cast => {
//             socket.broadcast.emit('stream', cast);
//         });

//         socket.on('disconnect', () => {
//             io.emit('room-left', { type: 'disconnected', socketId: socket.id })
//         });
//     })
//     return live;
//     // res.send(<video src="" id="video" style="width: 600px; height: 500px" autoplay="true"></video> <br> <canvas id="preview"></canvas>)
// });