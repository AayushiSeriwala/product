const express = require('express');
const router = express.Router();
const tokenVerification =require('../middleware/token.verification');
const Category = require('../model/category.model');
router.post('/add',tokenVerification.verifyToken, (request, response) => {
    Category.create({
        categoryName: request.body.categoryName  
    })
        .then(result => {
            console.log(result);
            return response.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ message: "Oops! Something went wrong" });

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

