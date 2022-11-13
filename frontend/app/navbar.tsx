export default function NavBar() {
    return (
        <nav className="px-2 sm:px-4 py-2.5 text-2xl max-w-4xl mx-auto">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="hidden w-full md:block md:w-auto items-center " id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 text-slate-50 rounded-lg border border-slate-100 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 ">
                        <li>
                            <a href="/"
                               className="block py-2 pr-4 pl-3 hover:underline p-0"
                               aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/blog"
                               className="block py-2 pr-4 pl-3 hover:underline hover:bg-slate-100 md:border-0 p-0 ">
                                Blog</a>
                        </li>
                        <li>
                            <a href="/contact"
                               className="block py-2 pr-4 pl-3 hover:underline hover:bg-slate-100 md:border-0 p-0">
                                Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}