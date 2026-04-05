'use client'

import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { motion } from 'framer-motion';
import { CheckCircle, FileText, BarChart3, Send, Zap, Shield, File, Receipt, Wallet, LockIcon, Plus, Calendar, Calendar1, Calendar1Icon, CalendarCheck } from 'lucide-react';
import { GiMapleLeaf } from 'react-icons/gi'

import { containerVariants, itemVariants } from '@/lib/motion-presets';
import { HowItWorksSection } from '@/components/landing-page/how-it-works';
import NavigationBar from '@/components/landing-page/nav-bar';
import { CommonFooter } from '@/components/landing-page/common-footer';

import Link from 'next/link';

export default function InglewoodTaxLanding() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeNav, setActiveNav] = useState('home');

  const paperShuffleVariants = {
    animate: {
      y: [-10, 10, -5, 8, -8, 5, -10],
      rotate: [-5, 8, -3, 6, -4, 3, -5],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const paperIcons = [
    { Icon: FileText, color: 'text-blue-500', delay: 0 },
    { Icon: Receipt, color: 'text-emerald-500', delay: 0.2 },
    { Icon: File, color: 'text-blue-400', delay: 0.4 },
    { Icon: Wallet, color: 'text-emerald-400', delay: 0.6 },
  ];

  const steps = [
    {
      number: 1,
      title: "Send Us Your Papers",
      description: "Drop your documents into our secure upload — takes about 5 minutes",
      icon: FileText,
      details: ["T4 slips", "Investment statements", "Receipts you want to claim", "Any other income"]
    },
    {
      number: 2,
      title: "We Go Through Everything",
      description: "Our team reviews your info, catches anything off, and looks for savings you might have missed",
      icon: Shield,
      details: ["Full review of your documents", "We flag any missing pieces", "We find deductions that apply to you", "We double check the numbers"]
    },
    {
      number: 3,
      title: "We Find You the Most Money Back",
      description: "We make sure every deduction and credit that applies to you gets used",
      icon: BarChart3,
      details: ["Every eligible deduction claimed", "Credits you qualify for", "Nothing left on the table", "Clear summary of your return"]
    },
    {
      number: 4,
      title: "Filed and Done",
      description: "We send your return to the CRA electronically and let you know once it's in",
      icon: Send,
      details: ["EFILE submission to CRA", "Confirmation sent to you", "Your documents saved securely", "Refund on its way"]
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(240, 253, 250, 0.85)), var(--bg-image)', backgroundSize: 'cover', backgroundPosition: 'center' } as React.CSSProperties}>
        {/* Navigation */}
        <NavigationBar />

        {/* Paper Shuffling Animation */}
        <div className="absolute top-32 right-12 w-40 h-40 opacity-20 pointer-events-none" aria-hidden="true">
          {paperIcons.map(({ Icon, color, delay }, idx) => (
            <motion.div
              key={idx}
              className="absolute"
              style={{
                left: `${idx * 8}px`,
                top: `${idx * 8}px`,
              }}
              variants={paperShuffleVariants}
              animate="animate"
              transition={{ delay }}
            >
              <div className={`${color} p-6 bg-white rounded-lg shadow-lg`}>
                <Icon size={48} strokeWidth={1.5} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative z-10 text-center max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex gap-5 lg:flex-row justify-center flex-wrap">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 border border-sky-400">
              <CalendarCheck className="w-4 h-4 text-sky-600" />
              <span className="text-sky-700 text-sm font-semibold">Open 7 Days A Week</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-400">
              <GiMapleLeaf className="w-4 h-4 text-red-600" />
              <span className="text-red-700 text-sm font-semibold">Edmonton Based</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-400">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 text-sm font-semibold">Done Quick & Easy</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Get every dollar you're owed.
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> We handle the rest.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            We look at every deduction, get your return filed fast, and keep it simple the whole way through. You just send us your papers — we do the rest 😌
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href='#pricing'
            >
              <button className="cursor-pointer px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-300/50 transition transform hover:scale-101">
                Start Your Return
              </button>
            </Link>
            <Link
              href='#team'
            >
              <button className="cursor-pointer px-8 py-4 border-2 border-blue-500 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
                Learn More
              </button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-8 text-gray-600 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="font-medium">EFILE Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="font-medium">100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="font-medium">Fast Turnaround</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="relative py-24 px-4 bg-gradient-to-b from-white via-blue-50 to-emerald-50">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <motion.div variants={itemVariants} className="text-emerald-600 uppercase text-sm font-bold tracking-widest mb-4">
              OUR TEAM
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-5xl font-bold text-gray-900 mb-4">
              Meet the people behind your return
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-2xl mx-auto">
              A small, local team that actually knows your name — and works hard to get you every dollar back.
            </motion.p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Betty Juan */}
            <motion.article
              variants={itemVariants}
              className="rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 hover:shadow-xl transition"
              whileHover={{ y: -8 }}
            >
              <div className="h-64 bg-gradient-to-br from-emerald-400 to-blue-400 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white">BJ</div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Betty Juan</h3>
                <p className="text-emerald-600 font-semibold mb-4">Lead Tax Specialist</p>
                <p className="text-gray-600 mb-4">
                  Betty has been helping Edmonton families with their taxes for years. She started by keeping her own family's finances on track, and now brings that same care and attention to every client she works with. She makes the whole process feel easy.
                </p>
                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">Community-Trusted</span>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Family-Focused</span>
                </div>
              </div>
            </motion.article>

            {/* Noel Ramadan */}
            <motion.article
              variants={itemVariants}
              className="rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 hover:shadow-xl transition"
              whileHover={{ y: -8 }}
            >
              <div className="h-64 bg-gradient-to-br from-emerald-400 to-blue-400 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white">NR</div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Noel Ramadan</h3>
                <p className="text-blue-600 font-semibold mb-4">Tax Associate</p>
                <p className="text-gray-600 mb-4">
                  Noel brings fresh energy and a sharp eye to every return he works on. He takes the time to understand each client's situation and makes sure nothing gets missed. If you have questions, Noel's the kind of person who will actually explain things clearly.
                </p>
                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Detail-Oriented</span>
                  <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">Client Support</span>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Trust Statement */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200"
          >
            <p className="text-center text-gray-700 text-lg">
              "We're a small local team and we take that seriously. Every return gets our full attention — because to us, it's not just a file, it's someone's hard-earned money."
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Security & Trust Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-emerald-50 to-blue-50">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <motion.div variants={itemVariants} className="text-emerald-600 uppercase text-sm font-bold tracking-widest mb-4">
              YOUR DATA IS SAFE
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-5xl font-bold text-gray-900 mb-4">
              Security You Can Trust
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="rounded-2xl p-8 bg-white border border-gray-200 text-center">
              <GiMapleLeaf className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">CRA Compliant</h3>
              <p className="text-gray-600">We follow all Canada Revenue Agency rules and regulations</p>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-2xl p-8 bg-white border border-gray-200 text-center">
              <LockIcon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy Protected</h3>
              <p className="text-gray-600">Your information is never shared with third parties</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-white via-emerald-50 to-blue-50">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <motion.div variants={itemVariants} className="text-emerald-600 uppercase text-sm font-bold tracking-widest mb-4">
              Our Track Record
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-5xl font-bold text-gray-900 mb-4">
              Every client. Every return. Done right.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're a growing local service, and we're proud that every client we've worked with has been satisfied with their experience — and their results.
            </motion.p>
          </div>

          {/* Honest satisfaction statement */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto mb-16 rounded-2xl p-8 bg-white border border-gray-200 shadow-lg border-l-4 border-l-emerald-500"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              We don't have a wall of reviews we're proud enough to brag about yet — we're still growing. What we can tell you is that every person we've helped has walked away happy with the work we did for them. We'd love for you to be next.
            </p>
            <p className="mt-4 text-emerald-600 font-medium text-sm">Inglewood Tax · Edmonton, AB</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200">
              <p className="text-4xl font-bold text-emerald-600 mb-2">Local</p>
              <p className="text-gray-700 font-medium">Edmonton based, not a call centre</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200">
              <p className="text-4xl font-bold text-blue-600 mb-2">Fast</p>
              <p className="text-gray-700 font-medium">Most returns filed within 48 hours</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-100 to-blue-50 border border-emerald-200">
              <p className="text-4xl font-bold text-emerald-600 mb-2">Thorough</p>
              <p className="text-gray-700 font-medium">We check every deduction, every time</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Comparison Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="text-emerald-600 uppercase text-sm font-bold tracking-widest mb-4"
            >
              WHY CHOOSE US
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              DIY vs. Inglewood Tax
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              You can DIY with tax software, or you can hand everything to us and know it was done right. Here’s what that really looks like side‑by‑side.
            </motion.p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-emerald-200">
                  <th className="text-left py-4 px-6 text-gray-900 font-bold">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 text-gray-700 font-semibold">
                    DIY (Tax Software)
                  </th>
                  <th className="text-center py-4 px-6 text-gray-700 font-semibold">
                    Inglewood Tax
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-900 font-medium">
                    Time it takes you
                  </td>
                  <td className="text-center py-4 px-6 text-slate-900">
                    2–4+ hours of your own time
                  </td>
                  <td className="text-center py-4 px-6 text-emerald-600 font-bold">
                    ~5 minutes to upload, we do the rest
                  </td>
                </tr>

                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 text-gray-900 font-medium">
                    Who is doing the thinking
                  </td>
                  <td className="text-center py-4 px-6 text-slate-900">
                    You follow software prompts and hope you answered correctly
                  </td>
                  <td className="text-center py-4 px-6 text-emerald-600 font-bold">
                    A trained preparer reviews your full situation
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-900 font-medium">
                    Deductions & credits
                  </td>
                  <td className="text-center py-4 px-6 text-slate-900">
                    Only what you know to look for
                  </td>
                  <td className="text-center py-4 px-6 text-emerald-600 font-bold">
                    We proactively look for every deduction that applies
                  </td>
                </tr>

                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 text-gray-900 font-medium">
                    Handling messy records
                  </td>
                  <td className="text-center py-4 px-6 text-slate-900">
                    You manually enter and organize everything yourself
                  </td>
                  <td className="text-center py-4 px-6 text-emerald-600 font-bold">
                    We sort, organize, and clean up your paperwork for you
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-900 font-medium">
                    Expert support
                  </td>
                  <td className="text-center py-4 px-6 text-slate-900">
                    Limited help, usually via generic FAQs or chatbots
                  </td>
                  <td className="text-center py-4 px-6 text-emerald-600 font-bold">
                    Real humans who can explain things in plain English
                  </td>
                </tr>

                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 text-gray-900 font-medium">
                    CRA audit or review
                  </td>
                  <td className="text-center py-4 px-6 text-slate-900">
                    You respond on your own to every CRA letter
                  </td>
                  <td className="text-center py-4 px-6 text-emerald-600 font-bold">
                    We help prepare responses and explain what CRA wants
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 text-gray-900 font-medium">
                    Risk of missing something important
                  </td>
                  <td className="text-center py-4 px-6 text-slate-900">
                    Higher — easy to misread questions or skip forms
                  </td>
                  <td className="text-center py-4 px-6 text-emerald-600 font-bold">
                    Lower — every file is reviewed before it’s filed
                  </td>
                </tr>

                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 text-gray-900 font-medium">
                    Stress level
                  </td>
                  <td className="text-center py-4 px-6 text-slate-900">
                    😬 Second‑guessing every screen and number
                  </td>
                  <td className="text-center py-4 px-6 text-emerald-600 font-bold">
                    😌 Upload, approve, and get on with your life
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 text-gray-900 font-medium">
                    Who it’s best for
                  </td>
                  <td className="text-center py-4 px-6 text-slate-900">
                    Very simple returns and people who like doing it themselves
                  </td>
                  <td className="text-center py-4 px-6 text-emerald-600 font-bold">
                    Anyone who wants it done right, with minimal time and hassle
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>


      {/* Pricing Section */}
      <section id="pricing" className="relative py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <motion.div variants={itemVariants} className="text-emerald-600 uppercase text-sm font-bold tracking-widest mb-4">
              SIMPLE PRICING
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-5xl font-bold text-gray-900 mb-4">
              Straightforward Prices, No Surprises
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-2xl mx-auto">
              Pick what fits your situation. Every plan includes a full review and EFILE submission — no hidden fees, ever.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {/* Basic */}
            <motion.article
              variants={itemVariants}
              className="rounded-2xl p-8 bg-white border border-gray-200 shadow-lg"
              whileHover={{ y: -8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Return</h3>
              <p className="text-gray-600 mb-6">Perfect if your taxes are fairly simple</p>
              <p className="text-4xl font-bold text-emerald-600 mb-2">$49<span className="text-lg text-gray-600">/year</span></p>
              <p className="text-gray-500 text-sm mb-8">One flat fee — nothing extra</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  Basic T4 income
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  Standard deductions
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  EFILE submission included
                </li>
              </ul>
              <Link
                href='#contact'
              >
                <button className="w-full py-3 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition cursor-pointer">
                  Get Started
                </button>
              </Link>
              <p className="text-center text-gray-400 text-xs mt-3">No payment until we review your file</p>
            </motion.article>

            {/* Popular */}
            <motion.article
              variants={itemVariants}
              className="rounded-2xl p-8 bg-gradient-to-br from-emerald-500 to-blue-500 shadow-xl relative md:scale-105"
              whileHover={{ y: -8 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Full Return</h3>
              <p className="text-emerald-100 mb-6">Best for most Albertans</p>
              <p className="text-4xl font-bold text-white mb-2">
                $199<span className="text-lg text-emerald-100">/year</span>
              </p>
              <p className="text-emerald-100 text-sm mb-8">Great value for complex returns</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-white" />
                  Multiple income sources
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-white" />
                  Investment income
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-white" />
                  Rental properties
                </li>
                <li className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-white" />
                  Full deduction review
                </li>
              </ul>

              <Link
                href='#contact'
              >
                <button className="w-full py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition cursor-pointer">
                  Get Started
                </button>
              </Link>

              <p className="text-center text-emerald-100 text-xs mt-3">No payment until we review your file</p>
            </motion.article>

            {/* Business */}
            <motion.article
              variants={itemVariants}
              className="rounded-2xl p-8 bg-white border border-gray-200 shadow-lg"
              whileHover={{ y: -8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
              <p className="text-gray-600 mb-6">For self-employed and small business owners</p>
              <p className="text-4xl font-bold text-blue-600 mb-2">$399<span className="text-lg text-gray-600">/year</span></p>
              <p className="text-gray-500 text-sm mb-8">Includes year-round support</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  Business income + expenses
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  GST/HST guidance
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  Quarterly planning calls
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  Year-round support
                </li>
              </ul>

              <Link
                href='#contact'
              >
                <button className="w-full py-3 border-2 border-blue-500 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition cursor-pointer">
                  Get Started
                </button>
              </Link>

              <p className="text-center text-gray-400 text-xs mt-3">No payment until we review your file</p>
            </motion.article>

          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <motion.div variants={itemVariants} className="text-emerald-600 uppercase text-sm font-bold tracking-widest mb-4">
              FAQ
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-5xl font-bold text-gray-900 mb-4">
              Common Questions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 text-lg">
              Can't find what you're looking for? Just reach out — we're happy to help.
            </motion.p>
          </div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What documents do I need to send you?",
                  a: "The basics are your T4 slips, any investment statements, and receipts for things you want to claim. We'll send you a simple checklist so you know exactly what to gather — no guessing."
                },
                {
                  q: "Is my information kept private?",
                  a: "Yes, completely. Your documents are stored securely and never shared with anyone outside our team. We follow all CRA privacy requirements and take your data seriously."
                },
                {
                  q: "What if my taxes are complicated?",
                  a: "That's totally fine — complicated returns are actually where we shine. Whether you have a side business, rental income, investments, or multiple jobs, we handle it all the time. Just send us what you have and we'll take it from there."
                },
                {
                  q: "How long until I get my refund?",
                  a: "Once we file your return, most CRA refunds land within 2 weeks. We'll keep you updated along the way so you're never left wondering what's happening."
                },
                {
                  q: "What if CRA contacts me or audits me?",
                  a: "Don't stress — CRA audits are rare, and if it ever happens we've got you covered at no extra charge. We keep your documents organized and on hand so we can respond quickly on your behalf."
                },
                {
                  q: "Can I reach you outside of tax season?",
                  a: "Absolutely. You can reach out anytime with questions after your return is filed. If you're on our Business plan, you also get quarterly check-in calls so you're never caught off guard."
                },
                {
                  q: "I've never used a tax service before — is this easy?",
                  a: "Really easy. You just upload your documents through our secure link, we review everything, and we let you know if we need anything else. Most clients are done on their end in under 10 minutes."
                }
              ].map((faq, idx) => (
                <motion.div key={idx} variants={itemVariants} className="mb-4">
                  <AccordionItem value={`faq-${idx}`} className="rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition overflow-hidden">
                    <AccordionTrigger className="p-6 text-left hover:bg-emerald-50 transition [&[data-state=open]>svg]:rotate-45 group">
                      <h3 className="text-lg font-bold text-gray-900 text-left">{faq.q}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="p-6 border-t border-gray-200 text-slate-900">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </section>

      {/* Limited Time Offer Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-emerald-600 to-blue-600">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-2 rounded-full bg-white/20 border border-white/50">
            <span className="text-white font-bold">🕐 Tax Season Offer</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            20% off your first return — this tax season only
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
            We're offering 20% off for new clients this tax season. Spots are limited since we review every return personally — we'd rather do it right than rush through a hundred files.
          </motion.p>

          <motion.p variants={itemVariants} className="text-white/70 text-md mb-10 max-w-xl mx-auto">
            You also get a free 15-minute consultation so we can make sure we're the right fit before you commit to anything.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer px-10 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition transform hover:scale-105">
              Claim Your Discount
            </button>
            <Link
              href='#contact'
            >
              <button className="cursor-pointer px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
                Book a Free Consultation
              </button>
            </Link>
          </motion.div>

          <motion.p variants={itemVariants} className="text-white/60 text-sm mt-8">
            No pressure, no commitment. Just a quick chat to see how we can help.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact + Footer Section */}
      <section id="contact" className="relative py-24 px-4 bg-white border-t border-gray-200">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <motion.div variants={itemVariants} className="text-emerald-600 uppercase text-sm font-bold tracking-widest mb-4">
              CONTACT
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
              Ready to reach out?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-xl mx-auto">
              Whether it's a question, or your ready for your paperwork to be done, reach out in any way that works for you.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
              <p className="text-emerald-600 font-bold text-lg mb-1">📧 Email</p>
              <p className="text-gray-700">inglewoodtax@gmail.com</p>
              <p className="text-gray-400 text-sm mt-1">We reply within a few hours</p>
            </div>
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200">
              <p className="text-blue-600 font-bold text-lg mb-1">📞 Phone</p>
              <p className="text-gray-700">+1 (780) 616-9824</p>
              <p className="text-gray-400 text-sm mt-1">Open 7 days a week</p>
            </div>
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
              <p className="text-emerald-600 font-bold text-lg mb-1">📍 Location</p>
              <p className="text-gray-700">Edmonton, Alberta</p>
              <p className="text-gray-400 text-sm mt-1">Serving all of Alberta</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600 text-sm border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            <span className="text-emerald-500">◆</span> Inglewood Tax
          </p>
          <p className="mb-4 text-gray-500">Edmonton, Alberta — Open 7 Days A Week</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-xs text-gray-400 mb-4">
            <a href="#" className="hover:text-emerald-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-600 transition">Terms of Service</a>
            <a href="#contact" className="hover:text-emerald-600 transition">Contact Us</a>
          </div>
          <p className="text-gray-400 text-xs">© 2026 Inglewood Tax. All rights reserved.</p>
        </div>
      </footer>

      <CommonFooter />
    </main>
  );
}