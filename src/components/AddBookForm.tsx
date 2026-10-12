import { useRef, useState } from "react";
import type { Book } from "../types";

export default function AddBookForm({
    createBook,
}: {
    createBook: (book: Book) => void;
}) {
    // Error warning state
    const [errors, setErrors] = useState<string[]>([]);
    const formRef = useRef<HTMLFormElement>(null);

    const isValidRating = (rating: number): boolean => {
        const errors = [];
        if (isNaN(rating)) {
            errors.push("Rating must be a number.");
        }
        if (rating < 1 || rating > 5) {
            errors.push("Rating must be a number in the range 1 to 5.");
        }
        // More gating can go below...

        // Set error state
        setErrors(errors);

        return errors.length === 0;
    };

    const handleSubmit = (inputs: FormData) => {
        const ratingInput = inputs.get("rating") as string;
        const ratingParsed = parseInt(ratingInput);
        if (!isValidRating(ratingParsed)) return;
        const book: Book = {
            title: inputs.get("title") as string,
            author: inputs.get("author") as string,
            rating: ratingParsed,
            publishedDate: inputs.get("publishedDate") as string,
            description: inputs.get("description") as string,
        };
        createBook(book);

        // Clear form fields
        formRef.current?.reset();

        // Creation successful, clear any errors.
        setErrors([]);
    };

    return (
        <>
            <br />
            <br />
            {errors.map((err) => (
                <h2 key={err}>{err}</h2>
            ))}
            <form
                className="createBookForm"
                action={handleSubmit}
                ref={formRef}
            >
                <label>
                    Book Title: <input name="title" required={true} />
                </label>
                <label>
                    Author: <input name="author" required={true} />
                </label>
                <label>
                    Rating (1-5): <input name="rating" required={true} />
                </label>
                <label>
                    Published Date:{" "}
                    <input name="publishedDate" required={true} />
                </label>
                <label>
                    Description: <input name="description" required={true} />
                </label>

                <button type="submit">Create Book Entry</button>
            </form>
        </>
    );
}
