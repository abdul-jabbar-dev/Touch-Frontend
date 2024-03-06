import React from 'react'
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import ClientProvider from '@/components/ClientProvider';

const inter = Inter({ subsets: ["latin"] });
export default function layout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <html lang="en">
            <body  >
                <ClientProvider>
                    {children}
                </ClientProvider>
            </body>
        </html>
    )
}
