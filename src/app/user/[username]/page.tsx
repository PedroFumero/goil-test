'use client';

import { FC, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { StateContext } from '@/context/StateContext';
import { ActionType } from '@/context/reducer';
import { useHttpClient } from '@/hooks/http-hook';
import UserCard from '@/components/UserCard/UserCard';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

const DetailsPage: FC<{ [params: string]: any }> = ({ params }) => {
    const appCtx = useContext(StateContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

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

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <h3>User Not Found</h3>;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {!isLoading && appCtx.state.user && (
                <UserCard user={appCtx.state.user} username={params.username} />
            )}
        </div>
    );
};

export default DetailsPage;
