import { useState, useEffect } from "react";

const useCustomFetch = (url) => {
    const [userName, setUserName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    async function customFetch() {
        try {
            let response = await fetch(url);
            let data = await response.json();
            setUserName({ data });
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            if (url) {
                customFetch(url);
            }
        }, 3000);
    }, [url]);

    return [userName, loading, error];
};

export default useCustomFetch;
