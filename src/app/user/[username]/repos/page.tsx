'use client';

import { FC, useContext, useEffect, useState } from 'react';
import { StateContext } from '@/context/StateContext';
import { ActionType } from '@/context/reducer';
import { useHttpClient } from '@/hooks/http-hook';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import ReposList from '@/components/ReposList/ReposList';
import useTranslate from '@/hooks/translate-hook';
import { GitHubRepository } from '@/definitions/interfaces';

const UserReposList: FC<{
    params: {
        username: string;
    };
}> = ({ params }) => {
    const { isLoading, error, sendRequest } = useHttpClient();
    const [initialLoadComplete, setInitialLoadComplete] = useState(false);
    const appCtx = useContext(StateContext);
    const translate = useTranslate();

    useEffect(() => {
        if (appCtx.repos?.length) return;

        async function fetchDetails() {
            const responseData: GitHubRepository[] = await sendRequest(
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

    if (!appCtx.repos?.length && initialLoadComplete) {
        return <h3 className="center error">{translate('noRepos')}</h3>;
    }

    return <ReposList repos={appCtx.repos} />;
};

export default UserReposList;
