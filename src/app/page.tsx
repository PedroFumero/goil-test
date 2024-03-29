'use client';

import { useContext } from 'react';
import { StateContext } from '@/context/StateContext';
import { ActionType } from '@/context/reducer';
import SearchForm from '@/components/SearchForm/SearchForm';

export default function Home() {
    const appCtx = useContext(StateContext);

    if (appCtx.user) {
        appCtx.dispatch({
            type: ActionType.UPDATE_USER,
            payload: null,
        });
    }

    if (appCtx.repos?.length) {
        appCtx.dispatch({
            type: ActionType.UPDATE_REPOS,
            payload: [],
        });
    }

    return <SearchForm />;
}
