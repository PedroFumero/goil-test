'use client';

import { createContext, useReducer } from 'react';
import { appReducer } from '@/context/reducer';

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, {
        user: null,
        repos: [],
        lang: 'en',
    });

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};
