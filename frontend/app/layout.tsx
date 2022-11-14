import './globals.css';
// import Head from "next/head";
import NavBar from "../components/navbar";

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <title>Tyler Marques</title>
            <link rel="icon" href="/frontend/public/favicon.ico"/>
        </head>
        <body className="flex h-full flex-col bg-oxford-900">
            <NavBar/>
            {children}
        </body>
        </html>
    );
}
