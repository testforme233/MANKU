'use client';

import React from 'react';
import { ChevronLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-300 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo and Home Link */}
          <Link href="/"><div className="flex items-center gap-2" >
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="font-bold text-white">M</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">Manku</span>
          </div>
          </Link>
          <Link href="/" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 transition-colors">
            <ChevronLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6 text-indigo-600 dark:text-indigo-400">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400">Last Updated: November 20, 2024</p>
        </header>

        <div className="space-y-12 bg-white/50 dark:bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800/50 shadow-sm">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">1</span>
              Introduction
            </h2>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              Manku LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile applications, including Palmistry AI. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or our applications.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">2</span>
              Information We Collect
            </h2>
            <p className="leading-relaxed mb-4 text-slate-700 dark:text-slate-300">
              We may collect information about you in a variety of ways. The information we may collect via the Application depends on the content and materials you use, and includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li><strong>Personal Data:</strong> Demographic and other personally identifiable information (such as your name and email address) that you voluntarily give to us when choosing to participate in various activities related to the Application.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Application, such as your native actions that are integral to the Application, including liking, re-blogging, or replying to a post, as well as other interactions with the Application and other users via the server log files.</li>
              <li><strong>Mobile Device Access:</strong> We may request access or permission to certain features from your mobile device, including your mobile device's camera, storage, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">3</span>
              Use of Your Information
            </h2>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Create and manage your account.</li>
              <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
              <li>Email you regarding your account or order.</li>
              <li>Enable user-to-user communications.</li>
              <li>Generate a personal profile about you to make future visits to the Application more personalized.</li>
              <li>Increase the efficiency and operation of the Application.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">4</span>
              Disclosure of Your Information
            </h2>
            <p className="leading-relaxed mb-2 text-slate-700 dark:text-slate-300">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">5</span>
              Security of Your Information
            </h2>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

        </div>

        <div className="mt-12 text-center border-t border-slate-200 dark:border-slate-800 pt-8">
          <p className="text-slate-500 text-sm">
            Questions about this Privacy Policy? Contact us at <Link href="mailto:legal@mankullc.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">legal@mankullc.com</Link>
          </p>
        </div>
      </main>

    </div>
  );
};

export default PrivacyPolicy;
