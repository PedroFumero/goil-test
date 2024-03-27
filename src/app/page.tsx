'use client';

import { FormEvent, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { StateContext } from '@/context/StateContext';
import { ActionType } from '@/context/reducer';
import Input from '@/components/Input/Input';

import logo from 'github-mark.svg';
import SearchForm from '@/components/SearchForm/SearchForm';
import { useHttpClient } from '@/hooks/http-hook';
import Button from '@/components/Button/Button';

export default function Home() {
    const router = useRouter();
    const appCtx = useContext(StateContext);

    if (appCtx.state.user) {
        appCtx.dispatch({
            type: ActionType.UPDATE_USER,
            payload: null,
        });
    }

    if (appCtx.state.repos.length) {
        appCtx.dispatch({
            type: ActionType.UPDATE_REPOS,
            payload: [],
        });
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username');

        router.push(`/user/${username}`);
    }

    return (
        <main
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
            }}
        >
            <form onSubmit={handleSubmit}>
                <Input
                    id="username"
                    type="search"
                    placeholder="Enter Github username"
                    className="fs-18 p-5rem"
                />
                <Button className="ml-5 p-5rem fs-18" type="submit">
                    Search
                </Button>
            </form>
        </main>
    );
}
