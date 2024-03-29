import { useCallback, useState } from 'react';
import useTranslate from '@/hooks/translate-hook';

export function useHttpClient() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const translate = useTranslate();

    const sendRequest = useCallback(
        async (
            url: string,
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
            } catch (e: unknown) {
                // @ts-ignore
                setError(e.message || translate('somethingWentWrong'));
            } finally {
                setIsLoading(false);
            }
        },
        []
    );

    return { isLoading, error, sendRequest };
}
