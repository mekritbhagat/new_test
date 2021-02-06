import * as express from "express";
import Multer from "multer";
import Path from "path";
import Post from "./post.modal";
import { checkPermissions } from "../middleware/permissions";
import { PostPermissions } from "./post.permission";

export const postRouter = express.Router();

const storage = Multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + Path.extname(file.originalname));
    }
});

const imageFilter = async (req: any, file: any, cb: any) => {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

const single_upload = async (req: any, res: any) => {
    // 'profile_pic' is the name of our file input field in the HTML form
    let upload = Multer({ storage: storage, fileFilter: imageFilter }).single('profile_pic');

    upload(req, res, function (err: any) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof Multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        // Display uploaded image for user validation
        res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
    });
}

const multi_upload = async (req: any, res: any) => {
        // 'multiple_images' is the name of our file input field
        let upload = Multer({ storage: storage, fileFilter: imageFilter }).array('multiple_images', 10);

        upload(req, res, function (err: any) {
            if (req.fileValidationError) {
                return res.send(req.fileValidationError);
            }
            // else if (..) {} // The same as when uploading single images
    
        let result = "You have uploaded these images: <hr />";
        const files = req.files;
        let index, len;
    
        // Loop through all the uploaded images and display them on frontend
        for (index = 0, len = files.length; index < len; ++index) {
            result += `<img src="${files[index].path}" width="300" style="margin-right: 20px;">`;
        }
        result += '<hr/><a href="./">Upload more images</a>';
        res.send(result);
    });
}

// const getOneById = async (req: Request, res: Response) => {
//     const _id = req.params.id;
//     try {
//         const user = await Post.findById(_id, {
//             select: ["id", "username", "roles"]
//         });
//     } catch (error) {
//         res.status(404).send("User not found");
//     }
// };

postRouter.get("/", async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).send(posts);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

postRouter.get("/:id", async (req, res) => {
    const _id: any = req.params.id;

    try {
        const post = await Post.findById(_id);

        res.status(200).send(post);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

postRouter.post("/", async (req, res) => {

    try {
        const post = new Post({
            title: req.body.title,
            // author: req.body.author,
            image: req.file,
            contents: req.body.contents,
            cate: req.body.cate,
            status: req.body.status,
            address: req.body.address,
            // comments: req.body.comments,
            // meta: req.body.meta
        })

        const check = await post.save();
        console.log(check);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

postRouter.patch("/:postId", checkPermissions(PostPermissions.UpdatePost), async (req, res) => {
    try {
        const post = await Post.updateOne({
            id: req.params.postId
        }, {
            $set: {
                title: req.body.title,
                // Image: req.file.path,
                Contents: req.body.Contents,
                author: req.body.author,
                status: req.body.status,
                address: req.body.address
            }
        });

        res.json(post)
        res.status(200);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

postRouter.delete("/:postId", checkPermissions(PostPermissions.DeletePost), async (req, res) => {
    try {
        const _id: any = req.params.postId;
        const look = await Post.remove(_id);

        res.sendStatus(200).json(look);
    } catch (e) {
        res.status(500).send(e.message);
    }
});


postRouter.get("/", async (req, res) => {
    const postByUsers = await Post.aggregate(
        [
            {
                $match: {
                    'address.country': {
                        $exists: true,
                    },
                },
            },
            {
                $group: {
                    _id: {
                        country: '$address.country',
                    },
                    users: {
                        $push: {
                            _id: '$_id',
                            name: '$name',
                        },
                    },
                    count: {
                        $sum: 1,
                    },
                },
            },
            {
                $lookup: {
                    from: 'posts',
                    localField: 'users._id',
                    foreignField: 'author',
                    as: 'articles',
                },
            },
            {
                $addFields: {
                    amountOfArticles: {
                        $size: '$articles',
                    },
                },
            },
            {
                $sort: {
                    amountOfArticles: 1,
                },
            },
        ],
    );
    res.send({
        postByUsers,
    });
});

postRouter.get("/:id", async (req, res) => {
    // const userId = request.params.id;
    // if (userId === request.user._id.toString()) {
    //   const posts = await Post.find({ author: userId });
    //   response.send(posts);
    // }
});


