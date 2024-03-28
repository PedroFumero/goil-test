'use client';

import { FC, useContext, useEffect, useState } from 'react';
import { StateContext } from '@/context/StateContext';
import { ActionType } from '@/context/reducer';
import { useHttpClient } from '@/hooks/http-hook';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import ReposList from '@/components/ReposList/ReposList';
import useTranslate from '@/hooks/translate-hook';

const UserReposList: FC<{ [key: string]: any }> = ({ params }) => {
    const { isLoading, error, sendRequest } = useHttpClient();
    const [initialLoadComplete, setInitialLoadComplete] = useState(false);
    const appCtx = useContext(StateContext);
    const translate = useTranslate();

    useEffect(() => {
        if (appCtx.state.repos?.length) return;

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

    useEffect(() => {
        if (!isLoading) {
            setInitialLoadComplete(true);
        }
    }, [isLoading]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <h3 className="center error">{error}</h3>;
    }

    if (!appCtx.state.repos?.length && initialLoadComplete) {
        return <h3 className="center error">{translate('noRepos')}</h3>;
    }

    return <ReposList repos={appCtx.state.repos} />;
};

export default UserReposList;
