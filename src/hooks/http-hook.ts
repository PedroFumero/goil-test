import { useCallback, useState } from 'react';

export function useHttpClient() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(
        async (
            url,
            method = 'GET',
            body = null,
            headers = {
                Authorization: 'token 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',
            }
        ) => {
            setIsLoading(true);
            try {
                const response = await fetch(url, {
                    method,
                    body,
                    headers,
                });
                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message);
                }

                return responseData;
            } catch (e) {
                setError(e.message);
                // throw e;
            } finally {
                setIsLoading(false);
            }
        },
        []
    );

    const clearError = () => {
        setError(null);
    };

    return { isLoading, error, sendRequest, clearError };
}
