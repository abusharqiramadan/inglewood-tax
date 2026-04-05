'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ShieldCheck, Eye, EyeOff, AlertTriangle, Mail, Key } from 'lucide-react'
import NavigationBar from '@/components/landing-page/nav-bar'

export default function ClientAuthPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [secretKey, setSecretKey] = useState('')
    const [showKey, setShowKey] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // Auto-redirect if already logged in
    useEffect(() => {
        const clientSession = document.cookie
            .split('; ')
            .find(row => row.startsWith('client_session='))

        if (clientSession) {
            router.push('/client/dashboard')
        }
    }, [router])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const res = await fetch('/api/client/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, secretKey }),
        })

        if (res.ok) {
            router.push('/client/dashboard')
            router.refresh() // Refresh to pick up new cookies
        } else {
            const data = await res.json()
            setError(data.error || 'Invalid email or secret key')
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-white flex items-center justify-center px-6">
            {/* Background glows */}
            <div className="pointer-events-none fixed -left-32 top-[-10rem] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="pointer-events-none fixed -right-24 bottom-[-6rem] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <NavigationBar />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 w-full max-w-md"
            >
                {/* Logo / Brand */}
                <div className="mb-8 flex flex-col items-center gap-3 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-400 to-blue-400 shadow-lg shadow-emerald-500/30">
                        <ShieldCheck className="h-7 w-7 text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                            Inglewood Tax
                        </p>
                        <h1 className="mt-1 text-2xl font-bold text-gray-900">
                            Client Portal
                        </h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Access your tax documents and status updates
                        </p>
                    </div>
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-emerald-100/50 bg-white/80 p-8 shadow-2xl shadow-emerald-500/10 backdrop-blur-sm">
                    <div className="mb-6 flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-emerald-500" />
                        <span className="text-sm font-semibold text-gray-900">
                            Client Access
                        </span>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {/* Email */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <Mail className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your.email@company.com"
                                required
                                className="w-full rounded-2xl border border-gray-200 bg-white pl-11 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 hover:border-emerald-300"
                            />
                        </div>

                        {/* Secret Key */}
                        <div className="relative">
                            <div className="absolute left-4 top-3">
                                <Key className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type={showKey ? 'text' : 'password'}
                                value={secretKey}
                                onChange={(e) => setSecretKey(e.target.value)}
                                placeholder="Secret key (provided by our team)"
                                required
                                className="w-full rounded-2xl border border-gray-200 bg-white pl-11 pr-12 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 hover:border-emerald-300"
                            />
                            <button
                                type="button"
                                onClick={() => setShowKey(!showKey)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-500 transition"
                            >
                                {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                            <p className="mt-2 text-xs text-gray-500 leading-tight">
                                <span className="font-medium">Tip:</span> This secret key was provided by our team.
                                Don't have one?{' '}
                                <a
                                    href="/contact-us"
                                    className="font-medium text-emerald-600 hover:text-emerald-700 underline"
                                >
                                    Email us
                                </a>{' '}
                                or call{' '}
                                <a
                                    href="/contact-us"
                                    className="font-medium text-emerald-600 hover:text-emerald-700 underline"
                                >
                                    780-xxx-xxxx
                                </a>
                            </p>
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                            >
                                <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                                {error}
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={loading || !email || !secretKey}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-400/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            {loading ? 'Accessing Portal...' : 'Access My Portal'}
                        </button>
                    </form>
                </div>

                <p className="mt-6 text-center text-xs text-gray-500">
                    Inglewood Tax · Secure client access
                </p>
            </motion.div>
        </main>
    )
}