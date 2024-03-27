'use client';

import { JSX, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { StateContext } from '@/context/StateContext';

export default function UserPage(): JSX.Element {
    const router = useRouter();
    const appCtx = useContext(StateContext);

    useEffect(() => {
        // If no user data available, redirect to root page
        if (!appCtx.state.user) {
            router.push('/');
        } else {
            // Redirect to user profile page if user data exists
            router.push(`/user/${appCtx.state.user.login}`);
        }
    }, [appCtx.state.user, router]);

    return <></>; // No content to render on this page
}
