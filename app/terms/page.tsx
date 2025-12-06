'use client';

import React from 'react';
import { ChevronLeft, FileText, Shield, Scale, AlertCircle } from 'lucide-react';

// 如果你在 Next.js 中使用 Link 组件
import Link from 'next/link'; 
// 使用 <Link href="/">...</Link> 替换下面的 <a href="/">

const TermsOfService = () => {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-text font-sans selection:bg-accent selection:text-white">
      
      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b-[4px] border-secondary/20 py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/">
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary border-[3px] border-text rounded-xl flex items-center justify-center text-white shadow-[3px_3px_0px_0px_var(--color-text)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
              <span className="font-heading font-black text-xl">M</span>
            </div>
            <span className="text-xl font-heading font-bold text-text tracking-tight">Manku</span>
          </div>
          </Link>
          <Link href="/" className="btn-outline py-2 px-4 text-sm flex items-center gap-2">
            <ChevronLeft size={16} />
            Back Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-surface border-[4px] border-secondary mb-6 text-primary shadow-[6px_6px_0px_0px_var(--color-secondary)]">
            <FileText size={40} strokeWidth={2.5} />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-black text-text mb-4">Terms of Service</h1>
          <div className="inline-block px-4 py-1 bg-secondary/20 rounded-full text-secondary font-bold text-sm">
            Last Updated: November 20, 2024
          </div>
        </header>

        <div className="card-pastel p-8 md:p-12 space-y-12 bg-surface">
          
          {/* Section 1 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">1</span>
              Acceptance of Terms
            </h2>
            <p className="leading-relaxed text-lg text-text/80">
              By accessing and using the applications provided by <span className="font-bold text-primary">Manku LLC</span> ("we", "us"), 
              specifically our <span className="font-bold">Palmistry AI</span> app, you agree to comply with these Terms. 
              Basically: play nice, don't hack us, and enjoy the app!
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">2</span>
              Entertainment Purposes Only
            </h2>
            <p className="leading-relaxed mb-6 text-lg text-text/80">
              Our AI is smart, but it's not a doctor or a financial advisor. All insights provided are for entertainment and self-reflection purposes only.
            </p>
            <div className="p-6 bg-background border-[3px] border-warning rounded-[1.5rem] flex gap-4 items-start">
              <AlertCircle className="text-warning shrink-0" size={28} strokeWidth={3} />
              <div>
                <h4 className="font-heading font-bold text-lg text-text mb-1">Important Disclaimer</h4>
                <p className="text-text/70 text-sm font-medium">
                  Do not use our app for critical life decisions (medical, legal, or financial). 
                  We are not responsible for any actions taken based on our AI's readings.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">3</span>
              User Accounts
            </h2>
            <p className="leading-relaxed text-lg text-text/80">
              You are responsible for maintaining the confidentiality of your account. 
              You must be at least 13 years old to use our services. If you're a ghost or a time traveler, please contact support for special exemptions.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">4</span>
              Prohibited Conduct
            </h2>
            <p className="leading-relaxed mb-4 text-lg text-text/80">You agree not to:</p>
            <ul className="space-y-3 pl-2">
              {[
                "Reverse engineer the app or try to steal our AI logic.",
                "Use the app for anything illegal or creepy.",
                "Harass other users or our support team.",
                "Spam us with automated requests."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text/70 font-medium">
                  <div className="w-2 h-2 rounded-full bg-text"></div>
                  {item}
                </li>
              ))}
            </ul>
          </section>

        </div>

        <div className="mt-16 text-center border-t-[4px] border-secondary/20 pt-10">
          <p className="text-secondary font-bold mb-4">Have questions about the rules?</p>
          <Link href="mailto:admin@manku.org" className="btn-primary py-2 px-6 inline-flex items-center gap-2">
            <MailIcon size={18} />
            Contact Legal Team
          </Link>
        </div>
      </main>

    </div>
  );
};

// Helper Icon for footer
const MailIcon = ({size}: {size: number}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export default TermsOfService;