'use client';
import Link from "next/link";
import {useState} from "react";

export default function NavBar() {
    const [navActive, setNavActive] = useState('/');
    const linkClasses = "block py-2 pr-4 pl-3 hover:underline md:border-0 p-0 ";
    return (
        <nav className="px-2 sm:px-4 py-2.5 text-2xl max-w-4xl mx-auto">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="hidden w-full md:block md:w-auto items-center " id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 text-slate-50 rounded-lg border border-slate-100 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 ">
                        <li>
                            <Link href="/"
                               className={navActive === '/' ? linkClasses + "underline" : linkClasses}
                                  onClick={() => setNavActive("/")}>Home</Link>
                        </li>
                        <li>
                            <Link href="/blog"
                               className={navActive === '/blog' ? linkClasses + "underline" : linkClasses}
                                  onClick={() => setNavActive("/blog")}>
                                Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact"
                               className={navActive === '/contact' ? linkClasses + "underline" : linkClasses}
                                  onClick={() => setNavActive("/contact")}>
                                Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}