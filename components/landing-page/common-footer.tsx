import Link from "next/link"
import { motion } from 'framer-motion'

export function CommonFooter() {
    return (
        <footer className="bg-white pt-24 -mt-24">
            <div className="max-w-6xl mx-auto px-6 pb-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

                    {/* Inglewood Tax Branding */}
                    <div className="space-y-4">
                        <Link href="/" className="group block">
                            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-all">
                                <span className="text-emerald-600 mr-2">◆</span> Inglewood Tax
                            </div>
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                            Modern tax preparation for Edmonton businesses. Clean books, maximum refunds, zero stress.
                        </p>
                        {/* <div className="flex gap-4 pt-4">
                            <a
                                href="mailto:inglewoodtax@gmail.com"
                                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all"
                            >
                                ✉️
                            </a>
                            <a
                                href="tel:780-xxx-xxxx"
                                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all"
                            >
                                📞
                            </a>
                        </div> */}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-black font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li><Link href="/#how" className="hover:text-black transition">How It Works</Link></li>
                            <li><Link href="/contact-us" className="hover:text-black transition">Contact Us</Link></li>
                            <li><Link href="/client/auth" className="hover:text-black transition">Client Portal</Link></li>
                            <li><Link href="/pricing" className="hover:text-black transition">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-black font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-3 text-gray-600 text-sm">
                            <li><span className="hover:text-black transition cursor-default">Individual Taxes</span></li>
                            <li><span className="hover:text-black transition cursor-default">Corporate T2</span></li>
                            <li><span className="hover:text-black transition cursor-default">Bookkeeping</span></li>
                            <li><span className="hover:text-black transition cursor-default">CRA Support</span></li>
                        </ul>
                    </div>

                    {/* Easy Technologies CTA 
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-400/20 transition-all group"
                    >
                        <div className="flex items-center gap-3 mb-4 group-hover:scale-105 transition-transform">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-sm">ET</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Powered by</h4>
                                <p className="text-emerald-300 font-semibold text-sm uppercase tracking-wide">Easy Technologies</p>
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            Custom client portals & accounting software built for Edmonton firms.
                        </p>

                        <div className="space-y-2">
                            <a
                                href="https://easytech.design"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl text-center transition-all border border-white/20 hover:shadow-lg"
                            >
                                Visit EasyTech.design
                            </a>
                            <a
                                href="mailto:hello@easytech.design?subject=Inglewood%20Tax%20Portal"
                                className="text-xs text-emerald-300 hover:text-white underline transition block"
                            >
                                hello@easytech.design
                            </a>
                        </div>
                    </motion.div>*/}

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all group"
                    >
                        <div className="flex items-center gap-3 mb-4 group-hover:scale-105 transition-transform">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-sm">ET</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-black text-lg">Powered by</h4>
                                <p className="text-emerald-700 font-semibold text-sm uppercase tracking-wide">Easy Technologies</p>
                            </div>
                        </div>

                        <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                            Custom client portals & accounting software built for Edmonton firms.
                        </p>

                        <div className="space-y-2">
                            <p
                                className="block w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-xl text-center transition-all border border-emerald-600 hover:shadow-lg cursor-default"
                            >
                                Call Us: <br /> 780-616-9824
                            </p>
                            <p className="cursor-text text-sm text-gray-600 block text-center">
                                Call us anytime! You're guaranteed to hear a response from one of our team members. : )
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-12 mt-16">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>© 2026 Inglewood Tax. Edmonton, AB. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-black transition">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-black transition">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}