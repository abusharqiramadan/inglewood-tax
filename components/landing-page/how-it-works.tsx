import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/motion-presets';

import { InboxIcon, ClipboardCheckIcon, PaperclipIcon, CheckCircle, Cloud, BrushCleaning, CalendarDaysIcon, Banknote } from 'lucide-react';

import { useState } from 'react';

const INDIVIDUAL_STEPS = [
    {
        number: 1,
        title: 'Send Us Your Stuff',
        icon: InboxIcon, // replace with your actual icon
        description:
            'You snap photos or upload PDFs of your tax slips and receipts — no spreadsheets required.',
        details: [
            'T4s, T5s, tuition slips, RRSPs, etc.',
            'Receipts for deductions and credits',
            'Secure online upload or email forwarding',
        ],
    },
    {
        number: 2,
        title: 'We Organize Everything',
        icon: ClipboardCheckIcon,
        description:
            'We categorize your income and expenses, clean up the mess, and chase anything that’s missing.',
        details: [
            'Sort and label all documents',
            'Identify missing slips or info',
            'Ask simple questions only when needed',
        ],
    },
    {
        number: 3,
        title: 'We Prepare Your Return',
        icon: PaperclipIcon,
        description:
            'We prepare your personal tax return to be CRA‑ready and optimized for every deduction you’re entitled to.',
        details: [
            'Apply relevant credits and deductions',
            'Double‑check for common CRA issues',
            'Walk you through any key choices',
        ],
    },
    {
        number: 4,
        title: 'You Review & File',
        icon: CheckCircle,
        description:
            'You review a plain‑English summary, sign off, and we handle the filing so you can relax.',
        details: [
            'Clear summary of your refund or balance',
            'E‑filed with CRA on your behalf',
            'Support if CRA has questions later',
        ],
    },
];

const BUSINESS_STEPS = [
    {
        number: 1,
        title: 'We Ingest Your Records',
        icon: Cloud,
        description:
            'You send us your invoices, receipts, bank statements, and whatever system (or shoebox) you’re using now.',
        details: [
            'Connect bank/credit card feeds where possible',
            'Export from your POS or invoicing tools',
            'Upload photos, PDFs, or spreadsheets',
        ],
    },
    {
        number: 2,
        title: 'We Clean & Set Up Books',
        icon: BrushCleaning,
        description:
            'We rebuild your books in QuickBooks or similar, fix past errors, and set up a clean chart of accounts.',
        details: [
            'Catch up bookkeeping for prior months/years',
            'Fix duplicated, missing, or miscoded entries',
            'Customize accounts for your industry',
        ],
    },
    {
        number: 3,
        title: 'Monthly Bookkeeping & Filings',
        icon: CalendarDaysIcon,
        description:
            'Each month we reconcile accounts, send you simple reports, and handle sales tax filings for you.',
        details: [
            'Bank and card reconciliations done for you',
            'Monthly P&L and balance sheet snapshots',
            'GST/HST and other filings prepared on time',
        ],
    },
    {
        number: 4,
        title: 'Year‑End & Tax Ready',
        icon: Banknote,
        description:
            'At year‑end, your books are already clean, so tax prep and working with your CPA is fast and painless.',
        details: [
            'Year‑end adjustments and review',
            'Package ready for your corporate tax return',
            'Support for CRA questions or reviews',
        ],
    },
];

export function HowItWorksSection() {
    const [audience, setAudience] = useState<'individual' | 'business'>('individual');
    const [hoveredStep, setHoveredStep] = useState<null | number>(null);

    const steps = audience === 'individual' ? INDIVIDUAL_STEPS : BUSINESS_STEPS;

    return (
        <section
            id="how"
            className="relative py-24 px-4 bg-gradient-to-b from-white via-blue-50 to-emerald-50"
        >
            <motion.div
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {/* Header */}
                <div className="text-center mb-8">
                    <motion.div
                        variants={itemVariants as any}
                        className="text-emerald-600 uppercase text-sm font-bold tracking-widest mb-4"
                    >
                        PROCESS
                    </motion.div>
                    <motion.h2 variants={itemVariants as any} className="text-5xl font-bold text-gray-900 mb-4">
                        How It Works
                    </motion.h2>
                    <motion.p variants={itemVariants as any} className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Four simple steps and you're done. No confusing forms, no back and forth — just send us
                        your stuff and we take it from there.
                    </motion.p>

                    {/* Audience toggle */}
                    <motion.div
                        variants={itemVariants as any}
                        className="mt-6 inline-flex items-center rounded-full bg-white shadow-sm border border-gray-200 p-1"
                    >
                        <button
                            type="button"
                            onClick={() => setAudience('individual')}
                            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${audience === 'individual'
                                ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Individual
                        </button>
                        <button
                            type="button"
                            onClick={() => setAudience('business')}
                            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${audience === 'business'
                                ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Business Entity
                        </button>
                    </motion.div>
                </div>

                {/* Steps Grid (your existing code, unchanged except using `steps`) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.number}
                                variants={itemVariants as any}
                                className="relative cursor-pointer"
                                onMouseEnter={() => setHoveredStep(step.number)}
                                onMouseLeave={() => setHoveredStep(null)}
                            >
                                <motion.div
                                    className={`rounded-2xl p-8 border transition-all duration-300 ${hoveredStep === step.number
                                        ? 'bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-300 shadow-lg'
                                        : 'bg-white border-gray-200 shadow-sm'
                                        }`}
                                    whileHover={{ y: -8 }}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Step number circle */}
                                        <div
                                            className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-lg border-4 transition-all ${hoveredStep === step.number
                                                ? 'bg-gradient-to-r from-emerald-500 to-blue-500 border-white scale-110 shadow-lg'
                                                : 'bg-gradient-to-r from-emerald-400 to-blue-400 border-white shadow-md'
                                                }`}
                                        >
                                            {step.number}
                                        </div>

                                        {/* Icon and content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div
                                                    className={`flex-shrink-0 p-2 rounded-lg transition-all ${hoveredStep === step.number
                                                        ? 'bg-gradient-to-br from-emerald-500 to-blue-500'
                                                        : 'bg-gradient-to-br from-emerald-100 to-blue-100'
                                                        }`}
                                                >
                                                    <Icon
                                                        className={`w-5 h-5 ${hoveredStep === step.number ? 'text-white' : 'text-emerald-600'
                                                            }`}
                                                    />
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                                            </div>
                                            <p className="text-gray-600 mb-4">{step.description}</p>
                                            <ul className="space-y-2">
                                                {step.details.map((detail, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                                        <div
                                                            className={`w-1.5 h-1.5 rounded-full ${hoveredStep === step.number ? 'bg-emerald-500' : 'bg-blue-400'
                                                                }`}
                                                        ></div>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
