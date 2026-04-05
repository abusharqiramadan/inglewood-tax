'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, FileText, Clock, AlertTriangle } from 'lucide-react'

export default function NotFound() {
    const pathname = usePathname()

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-white flex items-center justify-center px-6 py-12">
            {/* Background glows - matching dashboard */}
            <div className="pointer-events-none fixed -left-32 top-[-10rem] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="pointer-events-none fixed -right-24 bottom-[-6rem] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="w-full max-w-md">
                {/* Brand Header - exact dashboard match */}
                <div className="mb-8 flex flex-col items-center gap-3 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-400 to-blue-400 shadow-lg shadow-emerald-500/30">
                        <FileText className="h-7 w-7 text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                            Inglewood Tax
                        </p>
                        <h1 className="mt-1 text-2xl font-bold text-gray-900">
                            Page Not Found 🚧
                        </h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Oops! Looks like we took a wrong turn on the tax forms. 📄
                        </p>
                    </div>
                </div>

                {/* Main Card */}
                <div className="rounded-3xl border border-emerald-100/50 bg-white/80 p-8 shadow-2xl shadow-emerald-500/10 backdrop-blur-sm">
                    <div className="mb-6 flex items-center justify-center gap-3 text-emerald-600">
                        <AlertTriangle className="h-8 w-8" />
                        <span className="text-lg font-semibold text-gray-900">
                            Lost Route {pathname}
                        </span>
                    </div>

                    <div className="space-y-4 text-center">
                        <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 border-2 border-orange-200 rounded-2xl p-6">
                            <p className="text-gray-700 font-medium">
                                😅 Don't worry - happens to the best of us! Try the dashboard or upload docs instead.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-4">
                            <Link
                                href="/client/dashboard"
                                className="group flex flex-col items-center p-4 rounded-xl border border-emerald-100 hover:border-emerald-200 hover:shadow-md transition-all bg-emerald-50 hover:bg-emerald-100"
                            >
                                <Clock className="h-6 w-6 text-emerald-600 mb-1 group-hover:scale-110 transition" />
                                <span className="text-xs font-medium text-gray-700">Client Portal</span>
                            </Link>
                            <Link
                                href="/admin/dashboard"
                                className="group flex flex-col items-center p-4 rounded-xl border border-blue-100 hover:border-blue-200 hover:shadow-md transition-all bg-blue-50 hover:bg-blue-100"
                            >
                                <FileText className="h-6 w-6 text-blue-600 mb-1 group-hover:scale-110 transition" />
                                <span className="text-xs font-medium text-gray-700">Admin Panel</span>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-emerald-100">
                        <Link
                            href="/"
                            className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 via-emerald-400 to-blue-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-emerald-400/30 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Dashboard
                        </Link>
                    </div>
                </div>

                <p className="mt-8 text-center text-xs text-gray-500">
                    Inglewood Tax Portal · Need help? 📞 780-xxx-xxxx
                </p>
            </div>
        </div>
    )
}