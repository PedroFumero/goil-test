import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { StateContextProvider } from '@/context/StateContext';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import LangPicker from '@/components/LangPicker/LangPicker';

export const metadata: Metadata = {
    title: 'Github - User Searcher',
    description: 'Allow to search Github users and look their repos.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <StateContextProvider>
                <body>
                    <NavigationBar>
                        <li>
                            <Link href="/">
                                <img
                                    className="home-icon"
                                    src="/home.svg"
                                    alt="Home Icon"
                                />
                            </Link>
                        </li>
                        <li>
                            <LangPicker />
                        </li>
                    </NavigationBar>
                    {children}
                </body>
            </StateContextProvider>
        </html>
    );
}
