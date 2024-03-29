'use client';

import React, { createContext, useReducer, FC, ReactNode } from 'react';
import { appReducer } from '@/context/reducer';
import { ContextType } from '@/definitions/types';
import { Language } from '@/definitions/enums';

export const defaultValue: ContextType = {
    user: null,
    repos: [],
    lang: Language.English,
    dispatch: () => {},
};

export const StateContext = createContext<ContextType>(defaultValue);

export const StateContextProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(appReducer, defaultValue);

    return (
        <StateContext.Provider value={{ ...state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};
