import Book from "../model/book.model.js";

export const addBook = async (req, res) => {
    try {
        const { title, author, description } = req.body;
        const newBook = new Book({
            title,
            author,
            description,
            createdBy: req.userId, // from auth middleware
        });
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({ message: "Failed to add book", error: error.message });
    }
};

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find().populate("createdBy", "fullname email");
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch books", error: error.message });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) return res.status(404).json({ message: "Book not found" });
        if (book.createdBy.toString() !== req.userId)
            return res.status(403).json({ message: "Unauthorized" });

        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete book", error: error.message });
    }
};
