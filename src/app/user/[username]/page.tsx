'use client';

import { FC, useContext, useEffect, useState } from 'react';
import { StateContext } from '@/context/StateContext';
import { ActionType } from '@/context/reducer';
import { useHttpClient } from '@/hooks/http-hook';
import UserCard from '@/components/UserCard/UserCard';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import useTranslate from '@/hooks/translate-hook';
import { GitHubUser } from '@/definitions/interfaces';

const DetailsPage: FC<{ params: { username: string } }> = ({ params }) => {
    const { isLoading, error, sendRequest } = useHttpClient();
    const [initialLoadComplete, setInitialLoadComplete] = useState(false);
    const appCtx = useContext(StateContext);
    const translate = useTranslate();

    useEffect(() => {
        async function fetchDetails() {
            if (appCtx.user) return;

            const responseData: GitHubUser = await sendRequest(
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

    if (appCtx.user && initialLoadComplete) {
        return <UserCard user={appCtx.user} username={params.username} />;
    }
};

export default DetailsPage;
