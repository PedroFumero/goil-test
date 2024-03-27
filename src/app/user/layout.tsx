import { StateContextProvider } from '@/context/StateContext';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import Link from 'next/link';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavigationBar>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/user">User</Link>
                </li>
            </NavigationBar>
            {children}
        </>
    );
}
