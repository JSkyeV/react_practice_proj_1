import { useState, useEffect } from "react";
import BookEntry from "./BookEntry";
import type { Book } from "../types";
import AddBookForm from "./AddBookForm";

// Mocks the books response from an api call
const mockBooks: Book[] = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        rating: 5,
        publishedDate: "1937-09-21",
        description:
            "A timeless fantasy adventure that sets the standard for the genre.",
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        rating: 4,
        publishedDate: "1965-08-01",
        description:
            "Incredible world-building and political intrigue on a desert planet.",
    },
    {
        title: "Project Hail Mary",
        author: "Andy Weir",
        rating: 5,
        publishedDate: "2021-05-04",
        description:
            "A thrilling sci-fi ride with fantastic problem-solving and heart.",
    },
];

export default function BookList() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loadingBooks, setLoadingBooks] = useState(true);

    // Would typically handle the API call
    useEffect(() => {
        // Mock api call result
        setTimeout(() => {
            setBooks(mockBooks);
            setLoadingBooks(false);
        }, 2500);
    }, []);

    // Deletes a book from the books list state
    const deleteBook = (bookTitle: string) => {
        const newBooks = books.filter((book) => book.title !== bookTitle);
        setBooks(newBooks);
    };

    // Adds a new book to the books list state
    const createBook = (book: Book) => {
        setBooks((prevBooks) => [...prevBooks, book]);
    };

    return (
        <div className="booksContainer">
            {loadingBooks ? (
                <h2>Loading books...</h2>
            ) : (
                <>
                    {books.map((book) => {
                        return (
                            <BookEntry
                                key={book.title}
                                {...book}
                                deleteBook={deleteBook}
                            />
                        );
                    })}
                    <AddBookForm createBook={createBook} />
                </>
            )}
        </div>
    );
}
