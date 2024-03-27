'use client';

import { FC, useContext, useEffect, useState } from 'react';
import { StateContext } from '@/context/StateContext';
import { ActionType } from '@/context/reducer';
import { useHttpClient } from '@/hooks/http-hook';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import ReposList from '@/components/ReposList/ReposList';

const UserReposList: FC<{ [key: string]: any }> = ({ params }) => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const appCtx = useContext(StateContext);

    useEffect(() => {
        if (appCtx.state.repos?.length) {
            return;
        }

        async function fetchDetails() {
            const responseData = await sendRequest(
                `https://api.github.com/users/${params.username}/repos`
            );

            appCtx.dispatch({
                type: ActionType.UPDATE_REPOS,
                payload: responseData,
            });
        }

        fetchDetails();
    }, [params.username]);

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LoadingSpinner />
            </div>
        );
    }

    if (!appCtx.state.repos?.length) {
        return <p>This user has not any repo</p>;
    }

    return <ReposList repos={appCtx.state.repos} />;
};

export default UserReposList;
