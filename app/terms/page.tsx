'use client';

import React from 'react';
import { ChevronLeft, FileText } from 'lucide-react';

// 如果你在 Next.js 中使用 Link 组件
import Link from 'next/link'; 
// 使用 <Link href="/">...</Link> 替换下面的 <a href="/">

const TermsOfService = () => {
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
            <span className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">Manku LLC</span>
          </div>
          </Link>
          <Link href="/" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 transition-colors">
            <ChevronLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6 text-indigo-600 dark:text-indigo-400">
            <FileText size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-slate-500 dark:text-slate-400">Last Updated: November 20, 2024</p>
        </header>

        <div className="space-y-12 bg-white/50 dark:bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800/50 shadow-sm">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">1</span>
              Acceptance of Terms
            </h2>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              By accessing and using the applications and services provided by Manku LLC ("Company", "we", "us", or "our"), 
              including but not limited to our Palmistry AI application, you agree to comply with and be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">2</span>
              Description of Service
            </h2>
            <p className="leading-relaxed mb-4 text-slate-700 dark:text-slate-300">
              Manku LLC provides lifestyle and entertainment applications powered by Artificial Intelligence. 
              Our services, including the Palmistry AI app, use computer vision and machine learning to provide insights.
            </p>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border-l-4 border-indigo-500">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong>Disclaimer:</strong> All readings, predictions, and insights provided by our AI are for entertainment purposes only. 
                They should not be considered as professional advice (medical, legal, financial, or psychological).
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">3</span>
              Privacy & Data Usage
            </h2>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              We take your privacy seriously. While our app scans your palm to analyze lines, 
              this biometric data is processed securely. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your data.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">4</span>
              User Conduct
            </h2>
            <p className="leading-relaxed mb-2 text-slate-700 dark:text-slate-300">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Use the service for any illegal or unauthorized purpose.</li>
              <li>Attempt to reverse engineer the AI algorithms or app code.</li>
              <li>Harass, abuse, or harm another person via our platforms.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm">5</span>
              Changes to Terms
            </h2>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              Manku LLC reserves the right to modify these terms at any time. We will notify users of any significant changes via the app or email. 
              Continued use of the service constitutes acceptance of the new terms.
            </p>
          </section>

        </div>

        <div className="mt-12 text-center border-t border-slate-200 dark:border-slate-800 pt-8">
          <p className="text-slate-500 text-sm">
            Questions? Contact us at <Link href="mailto:legal@mankullc.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">legal@mankullc.com</Link>
          </p>
        </div>
      </main>

    </div>
  );
};

export default TermsOfService;