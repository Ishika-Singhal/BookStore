const express = require('express');
const Book = require('../models/book');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('../controllers/book');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router =  express.Router();

// post a book
router.post("/create-book", verifyAdminToken, postABook)

// get all books
router.get("/", getAllBooks);

// single book endpoint
router.get("/:id", getSingleBook);

// update a book endpoint
router.put("/edit/:id", verifyAdminToken, UpdateBook);

router.delete("/:id", verifyAdminToken, deleteABook)


module.exports = router;