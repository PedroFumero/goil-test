'use client';

import { FC, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { StateContext } from '@/context/StateContext';
import { ActionType } from '@/context/reducer';
import { useHttpClient } from '@/hooks/http-hook';
import UserCard from '@/components/UserCard/UserCard';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import useTranslate from '@/hooks/translate-hook';

const DetailsPage: FC<{ [params: string]: any }> = ({ params }) => {
    const { isLoading, error, sendRequest } = useHttpClient();
    const [initialLoadComplete, setInitialLoadComplete] = useState(false);
    const appCtx = useContext(StateContext);
    const translate = useTranslate();

    useEffect(() => {
        async function fetchDetails() {
            if (appCtx.state.user) return;

            const responseData = await sendRequest(
                `https://api.github.com/users/${params.username}`
            );

            appCtx.dispatch({
                type: ActionType.UPDATE_USER,
                payload: responseData,
            });
        }

        fetchDetails();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            setInitialLoadComplete(true);
        }
    }, [isLoading]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <h3 className="center error">
                {error === 'Not Found' ? translate('notFound') : error}
            </h3>
        );
    }

    if (appCtx.state.user && initialLoadComplete) {
        return <UserCard user={appCtx.state.user} username={params.username} />;
    }
};

export default DetailsPage;
