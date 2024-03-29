'use client';

import { JSX, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { StateContext } from '@/context/StateContext';

export default function UserPage(): JSX.Element {
    const router = useRouter();
    const appCtx = useContext(StateContext);

    useEffect(() => {
        if (!appCtx.user) {
            router.push('/');
        } else {
            router.push(`/user/${appCtx.user.login}`);
        }
    }, [appCtx.user, router]);

    return <></>;
}
