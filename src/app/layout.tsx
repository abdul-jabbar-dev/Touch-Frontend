import React from 'react'
import "./globals.css";
import { Inter } from "next/font/google"; 
import ClientProvider from '@/components/ClientProvider';
import "react-toastify/dist/ReactToastify.css";
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
