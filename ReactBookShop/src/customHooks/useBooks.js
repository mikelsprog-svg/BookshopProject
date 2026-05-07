import { useState, useEffect } from "react";
import {
    allItems,
    getProductsMock,
    getProductsMockFakeElastiSearch,
} from "../data/books.js";

export function useBooks(categoryId, page, searchVal, bookId) {
    const [allBooks, setAllBooks] = useState([]);
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [bookFromId, setGetBookFromId] = useState({});
    const [booksPaged, setBooksPaged] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [metaData, setMetadata] = useState({});

    // carga inicial
    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            try {
                setAllBooks(allItems);
                setLoading(false);
            } catch (e) {
                setError("Book not found");
                setLoading(false);
            }
        }, 900);

        return () => clearTimeout(timer);
    }, []);

    // lógica principal
    useEffect(() => {
        if (allBooks.length === 0) return;

        try {
            // búsqueda
            if (searchVal && searchVal.length > 0) {
                const { metadata, items } =
                    getProductsMockFakeElastiSearch(page, searchVal);

                setSearchedBooks(items);
                setMetadata(metadata);

                return;
            }

            // paginación normal
            const { metadata, items } = getProductsMock(page);

            // filtro categoría
            const filteredBooks =
                categoryId === "any"
                    ? items
                    : items.filter(
                        (f) => f.Category === Number(categoryId)
                    );

            setBooksPaged(filteredBooks);
            setMetadata(metadata);

            // búsqueda por id
            if (bookId !== -1) {
                const foundBook = allBooks.find(
                    (e) => e.Id === bookId
                );

                setGetBookFromId(foundBook || {});
            }
        } catch (e) {
            setError("Error loading books");
        }
    }, [allBooks, categoryId, page, searchVal, bookId]);

    return {
        booksPaged,
        allBooks,
        searchedBooks,
        bookFromId,
        metaData,
        loading,
        error,
    };
}