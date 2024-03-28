'use client';

import { useRouter } from 'next/navigation';
import useTranslate from '@/hooks/translate-hook';

export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const translate = useTranslate();

    function handleBack() {
        router.back();
    }

    return (
        <>
            <div className="center mb-5">
                <span className="center back-button" onClick={handleBack}>
                    {translate('back')}
                </span>
            </div>
            {children}
        </>
    );
}
