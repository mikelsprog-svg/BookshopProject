import { useState, useEffect } from "react";
import allUsersData from "../data/users.json";

export function useUser(userId = -1) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const timer = setTimeout(() => {
            try {
                const foundUser = allUsersData.find(u => u.Id === Number(userId));

                if (foundUser) {
                    setUser(foundUser);
                } else {
                    setUser(null);
                    setError("User not found");
                }

                setLoading(false);
            } catch (e) {
                console.error("Error loading user data", e);
                setError("Error connection database");
                setLoading(false);
            }
        }, 800);

        return () => clearTimeout(timer);
    }, [userId]);

    return { user, loading, error };
}