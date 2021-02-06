import express, { Request, Response } from "express";
const multer = require('multer');
const path = require("path");

export default {
    jwtSecret: "@QEGTUI"
};

const storage = multer.diskStorage({
    destination: function (req: Request, file: any, cb: any) {
        cb(null, './uploads/');
    },
    filename: function (req: Request, file: any, cb: any) {
        cb(null, new Date().toISOString + file.originalname);
    }
});

const fileFilter = (req: Request, file: any, cb: any) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Unable to load files'), false)
    }

};

const upload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

// export const upload = multer({storage: store}).single('file');

export const store_image = multer.diskStorage({
    destination: function(req: any, file: any, cb: any) {
        cb(null, 'uploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req: any, file: any, cb: any) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

export const imageFilter = function(req: any, file: any, cb: any) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};


// app.post('/upload-profile-pic', (req, res) => {
//     // 'profile_pic' is the name of our file input field in the HTML form
//     let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('profile_pic');

//     upload(req, res, function(err) {
//         // req.file contains information of uploaded file
//         // req.body contains information of text fields, if there were any

//         if (req.fileValidationError) {
//             return res.send(req.fileValidationError);
//         }
//         else if (!req.file) {
//             return res.send('Please select an image to upload');
//         }
//         else if (err instanceof multer.MulterError) {
//             return res.send(err);
//         }
//         else if (err) {
//             return res.send(err);
//         }

//         // Display uploaded image for user validation
//         res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
//     });
// });


// const imageFilter = function(req, file, cb) {
//     // Accept images only
//     if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
//         req.fileValidationError = 'Only image files are allowed!';
//         return cb(new Error('Only image files are allowed!'), false);
//     }
//     cb(null, true);
// };
// exports.imageFilter = imageFilter;

// const helpers = require('./helpers');



// app.post('/upload-multiple-images', (req, res) => {
//     // 10 is the limit I've defined for number of uploaded files at once
//     // 'multiple_images' is the name of our file input field
//     let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).array('multiple_images', 10);

//     upload(req, res, function(err) {
//         if (req.fileValidationError) {
//             return res.send(req.fileValidationError);
//         }
//         else if (...) // The same as when uploading single images

//         let result = "You have uploaded these images: <hr />";
//         const files = req.files;
//         let index, len;

//         // Loop through all the uploaded images and display them on frontend
//         for (index = 0, len = files.length; index < len; ++index) {
//             result += `<img src="${files[index].path}" width="300" style="margin-right: 20px;">`;
//         }
//         result += '<hr/><a href="./">Upload more images</a>';
//         res.send(result);
//     });
// });

