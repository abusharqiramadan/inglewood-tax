'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import NavigationBar from './NavigationBar' // adjust path

export default function ContactUsPage() {
    const [userTz, setUserTz] = useState('')
    const [now, setNow] = useState(new Date())
    const [isAvailable, setIsAvailable] = useState(false)

    // Edmonton business hours (MDT): Mon-Fri 9AM-5PM
    const OFFICE_HOURS = {
        open: 9,    // 9:00 AM
        close: 17,  // 5:00 PM
        timezone: 'America/Edmonton'
    }

    // Alberta statutory holidays 2026
    const HOLIDAYS_2026 = [
        '2026-01-01', // New Year's Day
        '2026-02-16', // Family Day  
        '2026-04-03', // Good Friday
        '2026-05-18', // Victoria Day
        '2026-07-01', // Canada Day
        '2026-09-07', // Labour Day
        '2026-10-12', // Thanksgiving
        '2026-11-11', // Remembrance Day
        '2026-12-25', // Christmas
    ]

    useEffect(() => {
        // Get user's timezone
        setUserTz(Intl.DateTimeFormat().resolvedOptions().timeZone)

        // Update time every minute
        const interval = setInterval(() => setNow(new Date()), 60000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const edmontonTime = new Date(now.toLocaleString('en-US', {
            timeZone: OFFICE_HOURS.timezone
        }))

        const hour = edmontonTime.getHours()
        const day = edmontonTime.getDay()
        const dateStr = edmontonTime.toISOString().split('T')[0]

        // Closed on weekends (Sat=6, Sun=0) or holidays
        const isWeekend = day === 0 || day === 6
        const isHoliday = HOLIDAYS_2026.includes(dateStr)

        setIsAvailable(!isWeekend && !isHoliday && hour >= OFFICE_HOURS.open && hour < OFFICE_HOURS.close)
    }, [now])

    const formatTime = (hour: number) => {
        return new Intl.DateTimeFormat('en-CA', {
            timeZone: OFFICE_HOURS.timezone,
            hour: 'numeric',
            minute: '2-digit',
            hour12: false
        }).format(new Date(2026, 0, 1, hour))
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-white">
            <NavigationBar />

            <div className="max-w-6xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                        Let's Talk Taxes
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 bg-white/60 py-4 px-6 rounded-2xl backdrop-blur-sm">
                        Need help with your secret key, have questions about your return, or want to book a consultation?
                    </p>

                    {/* Availability Status */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg ${isAvailable
                                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-500/30'
                                : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 border-2 border-gray-300'
                            }`}
                    >
                        <Clock className="w-6 h-6" />
                        {isAvailable ? '🟢 We\'re available now!' : '🔴 Office hours: 9AM - 5PM MDT'}
                        <span className="text-sm ml-2">({userTz})</span>
                    </motion.div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-emerald-100/50 shadow-2xl">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Phone className="w-8 h-8 text-emerald-500" />
                                Get In Touch
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-50 to-blue-50/50 rounded-2xl border border-emerald-100">
                                    <Mail className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-lg mb-1">Email Us</p>
                                        <a
                                            href="mailto:inglewoodtax@gmail.com"
                                            className="text-emerald-600 hover:text-emerald-700 font-semibold text-xl block"
                                        >
                                            inglewoodtax@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-50 to-blue-50/50 rounded-2xl border border-emerald-100">
                                    <Phone className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-lg mb-1">Call Us</p>
                                        <a href="tel:780-xxx-xxxx" className="text-emerald-600 hover:text-emerald-700 font-semibold text-xl block">
                                            780-xxx-xxxx
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 bg-white/50 border border-emerald-100 rounded-2xl backdrop-blur-sm">
                                    <h3 className="font-bold text-gray-900 text-xl mb-4">Office Hours</h3>
                                    <div className="space-y-3">
                                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                                            <div key={day} className="flex items-center justify-between py-2">
                                                <span className="font-medium text-gray-900">{day}</span>
                                                <span className={`font-semibold px-4 py-2 rounded-xl text-sm ${isAvailable
                                                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                                        : 'bg-gray-100 text-gray-700 border border-gray-200'
                                                    }`}>
                                                    {formatTime(OFFICE_HOURS.open)} - {formatTime(OFFICE_HOURS.close)}
                                                </span>
                                            </div>
                                        ))}
                                        <div className="flex items-center justify-between py-2 text-gray-500">
                                            <span className="font-medium">Saturday & Sunday</span>
                                            <span className="font-semibold text-sm bg-gray-100 px-4 py-2 rounded-xl border border-gray-200">Closed</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Holiday Notice */}
                                <div className="p-6 bg-orange-50/80 border-2 border-orange-200/50 rounded-2xl backdrop-blur-sm">
                                    <p className="font-bold text-orange-800 mb-3 flex items-center gap-2 text-lg">
                                        📅 Upcoming Holidays (Closed)
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 text-sm text-orange-800">
                                        <div>Family Day<br /><span className="text-orange-700 font-medium">Feb 16</span></div>
                                        <div>Good Friday<br /><span className="text-orange-700 font-medium">Apr 3</span></div>
                                        <div>Canada Day<br /><span className="text-orange-700 font-medium">Jul 1</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hours Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-emerald-100/50 shadow-2xl"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Available Times Today
                        </h3>

                        <div className="space-y-3">
                            {[9, 10, 11, 12, 13, 14, 15, 16].map((hour) => {
                                const isActive = now.getHours() === hour && isAvailable
                                return (
                                    <div
                                        key={hour}
                                        className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all cursor-pointer group hover:shadow-xl ${isActive
                                                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-500/50 border-emerald-400'
                                                : 'border-gray-200 hover:border-emerald-300 bg-white hover:bg-gray-50'
                                            }`}
                                    >
                                        <span className="font-bold text-lg">{formatTime(hour)}</span>
                                        <div className={`w-4 h-4 rounded-full shadow-lg transition-all ${isActive
                                                ? 'bg-white scale-125 shadow-white/50'
                                                : 'bg-gray-300 group-hover:bg-emerald-400 group-hover:scale-110'
                                            }`} />
                                    </div>
                                )
                            })}
                        </div>

                        <p className="mt-8 text-center text-sm text-gray-600 bg-gray-50/50 py-3 px-4 rounded-xl border border-gray-200 backdrop-blur-sm">
                            All times MDT (Edmonton). We'll respond within 2 business hours.
                        </p>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}