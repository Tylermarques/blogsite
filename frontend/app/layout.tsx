// These styles apply to every route in the application
import './globals.css';
import Head from "next/head";
import NavBar from "./navbar";

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <Head>
            <title>Tyler Marques</title>
            <link rel="icon" href="/frontend/public/favicon.ico"/>
        </Head>
        <body className="flex h-full flex-col bg-gray-900">
            <NavBar/>
            {children}
        </body>
        </html>
    );
}
