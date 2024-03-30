'use client';

import { useRouter } from 'next/navigation';
import useTranslate from '@/hooks/translate-hook';
import Button from '@/components/Button/Button';

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
                <Button className="center back-button" onClick={handleBack}>
                    {translate('back')}
                </Button>
            </div>
            {children}
        </>
    );
}
