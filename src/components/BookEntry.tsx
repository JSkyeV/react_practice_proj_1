import type { Book } from "../types";

interface BookEntryProps extends Book {
    deleteBook: (bookTitle: string) => void;
}

export default function BookEntry({
    title,
    author,
    rating,
    publishedDate,
    description,
    deleteBook,
}: BookEntryProps) {
    return (
        <div className="bookEntry">
            <span>Title: {title}</span>
            <span>Author: {author}</span>
            <span>Rating: {rating}</span>
            <span>Date Published: {publishedDate}</span>
            <br />
            {description && <span>{description}</span>}
            <button onClick={() => deleteBook(title)}>Delete Book</button>
        </div>
    );
}
