import { useState, useEffect } from "react";
import allCommentsData from "../data/comments.json";

export function useComment(bookId = -1, userId = -1) {
    const [allComments, setAllComments] = useState([]);
    const [filteredComments, setFilteredComments] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [metaData, setMetadata] = useState({});

    // Carga inicial
    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            try {
                setAllComments(allCommentsData);
                setLoading(false);
            } catch (e) {
                setError("Comments not found");
                setLoading(false);
            }
        }, 900); // Mismo delay que en useBooks

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Si no hay comentarios cargados aún, no ejecutamos lógica
        if (allComments.length === 0) return;

        try {
            let results = [...allComments];

            if (bookId !== -1) {
                results = results.filter(
                    (c) => c.Book === Number(bookId)
                );
            }

            if (userId !== -1) {
                results = results.filter(
                    (c) => c.User === Number(userId)
                );
            }

            setFilteredComments(results);

            setMetadata({
                totalCount: results.length,
                hasComments: results.length > 0
            });

        } catch (e) {
            setError("Error filtering comments");
        }
    }, [allComments, bookId, userId]);

    return {
        comments: filteredComments,
        allComments,
        metaData,
        loading,
        error,
    };
}