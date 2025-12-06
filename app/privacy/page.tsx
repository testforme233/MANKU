'use client';

import React from 'react';
import { ChevronLeft, ShieldCheck, Mail } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-text font-sans selection:bg-accent selection:text-white">
      
      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b-[4px] border-secondary/20 py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo and Home Link */}
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
            <ShieldCheck size={40} strokeWidth={2.5} />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-black text-text mb-4">Privacy Policy</h1>
          <div className="inline-block px-4 py-1 bg-secondary/20 rounded-full text-secondary font-bold text-sm">
            Last Updated: November 20, 2024
          </div>
        </header>

        <div className="card-pastel p-8 md:p-12 space-y-12 bg-surface">
          
          {/* Section 1 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">1</span>
              Introduction
            </h2>
            <p className="leading-relaxed text-lg text-text/80">
              <span className="font-bold text-primary">Manku LLC</span> ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile applications, including <span className="font-bold">Palmistry AI</span>. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or our applications.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">2</span>
              Information We Collect
            </h2>
            <p className="leading-relaxed mb-4 text-lg text-text/80">
              We may collect information about you in a variety of ways. The information we may collect via the Application depends on the content and materials you use, and includes:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Personal Data:</strong> Demographic and other personally identifiable information (such as your name and email address) that you voluntarily give to us when choosing to participate in various activities related to the Application.</div>
              </li>
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Derivative Data:</strong> Information our servers automatically collect when you access the Application, such as your native actions that are integral to the Application, including liking, re-blogging, or replying to a post, as well as other interactions with the Application and other users via the server log files.</div>
              </li>
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Mobile Device Access:</strong> We may request access or permission to certain features from your mobile device, including your mobile device's camera, storage, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</div>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">3</span>
              Use of Your Information
            </h2>
            <p className="leading-relaxed text-lg text-text/80 mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                "Create and manage your account.",
                "Compile anonymous statistical data and analysis for use internally or with third parties.",
                "Email you regarding your account or order.",
                "Enable user-to-user communications.",
                "Generate a personal profile about you to make future visits to the Application more personalized.",
                "Increase the efficiency and operation of the Application."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text/70 font-medium">
                  <div className="w-2 h-2 rounded-full bg-text"></div>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">4</span>
              Disclosure of Your Information
            </h2>
            <p className="leading-relaxed mb-4 text-lg text-text/80">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</div>
              </li>
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</div>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">5</span>
              Security of Your Information
            </h2>
            <p className="leading-relaxed text-lg text-text/80">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

        </div>

        <div className="mt-16 text-center border-t-[4px] border-secondary/20 pt-10">
          <p className="text-secondary font-bold mb-4">Questions about this Privacy Policy?</p>
          <Link href="mailto:admin@manku.org" className="btn-primary py-2 px-6 inline-flex items-center gap-2">
            <Mail size={18} />
            Contact Legal Team
          </Link>
        </div>
      </main>

    </div>
  );
};

export default PrivacyPolicy;
