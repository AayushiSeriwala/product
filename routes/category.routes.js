const express = require('express');
const router = express.Router();
const multer = require('multer');
const Category = require('../model/category.model');
var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);

    }
});
var upload = multer({ storage: storage });


router.post("/add", upload.single('categoryImage'), (request, response) => {
    Category.create({
        categoryName: request.body.categoryName,
        categoryImage: "http//localhost:3000/images" + request.file.filename
    })
        .then(result => {
            console.log(result);
            return response.status(201).json(result);

        })
        .catch(err => {
            console.log(err);
            return response.status(403).json({ message: "Oops! Something went wrong" });

        });
})

router.get("/Category-List", (request, response) => {
    Category.find()

        .then(result => {
            console.log(result);
            return response.status(200).json(result);
        })

        .catch(err => {
            console.log(err);
            return response.status(500).json({ message: "Something went wrong" });

        });
})














module.exports = router;

