'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function NavigationBar() {
    const pathname = usePathname()

    // Only prefix with "/" on non-homepage routes
    const isHomepage = pathname === '/'

    return (
        <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-6">
            <Link href='/'>
                <div className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    <span className="text-emerald-500">◆</span> Inglewood Tax
                </div>
            </Link>

            <div className="hidden md:flex items-center gap-12">
                {/* Navigation Links */}
                <div className="flex gap-8 text-gray-700">
                    <Link
                        href={isHomepage ? "#home" : "/#home"}
                        className="hover:text-emerald-600 transition font-medium"
                        scroll={true}
                    >
                        Home
                    </Link>
                    <Link
                        href={isHomepage ? "#team" : "/#team"}
                        className="hover:text-emerald-600 transition font-medium"
                        scroll={true}
                    >
                        Our Team
                    </Link>
                    <Link
                        href={isHomepage ? "#how" : "/#how"}
                        className="hover:text-emerald-600 transition font-medium"
                        scroll={true}
                    >
                        How It Works
                    </Link>
                    <Link
                        href={isHomepage ? "#contact" : "/#contact"}
                        className="hover:text-emerald-600 transition font-medium"
                        scroll={true}
                    >
                        Contact
                    </Link>
                </div>

                {/* Login Button + Tip */}
                <div className="flex flex-col items-end gap-1 text-sm">
                    <Link
                        href="/client/auth"
                        className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-blue-500 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Client Portal
                    </Link>
                </div>
            </div>
        </nav>
    )
}
