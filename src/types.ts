/**
 * Declares types used universally within this project.
 */

// Book Type
export interface Book {
    title: string;
    author: string;
    rating: number;
    publishedDate: string;
    description?: string;
}
