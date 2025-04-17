import express from "express";
import { addBook, getBooks, deleteBook } from "../controller/book.controller.js";


const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.delete("/:id",  deleteBook);
export default router;
