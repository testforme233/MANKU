'use client';

import React from 'react';
import { ChevronLeft, ShieldCheck, Mail, HeartPulse } from 'lucide-react';
import Link from 'next/link';

const LifeTrackPrivacyPolicy = () => {
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
            <ShieldCheck size={40} strokeWidth={2.5} />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-black text-text mb-4">LifeTrack Privacy Policy</h1>
          <div className="inline-block px-4 py-1 bg-secondary/20 rounded-full text-secondary font-bold text-sm">
            Last Updated: August 16, 2026
          </div>
        </header>

        {/* Summary callout */}
        <div className="card-pastel p-8 mb-10 bg-surface">
          <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-white shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">
              <HeartPulse size={20} strokeWidth={2.5} />
            </span>
            The Short Version
          </h2>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-3 text-text/70 font-medium">
              <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
              <div><strong className="text-text">We operate no servers for LifeTrack.</strong> We do not collect, receive, or store any of your data.</div>
            </li>
            <li className="flex items-start gap-3 text-text/70 font-medium">
              <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
              <div><strong className="text-text">Your health data stays on your device</strong>, and in your own private iCloud if you enable sync. We cannot see it.</div>
            </li>
            <li className="flex items-start gap-3 text-text/70 font-medium">
              <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
              <div><strong className="text-text">Only when you ask a question</strong> is a relevant summary sent to the AI provider you configured, using your own API credentials, solely to answer that question.</div>
            </li>
            <li className="flex items-start gap-3 text-text/70 font-medium">
              <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
              <div><strong className="text-text">Health data is never used for advertising or marketing</strong> — by us or by anyone on our behalf.</div>
            </li>
          </ul>
        </div>

        <div className="card-pastel p-8 md:p-12 space-y-12 bg-surface">

          {/* 1 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">1</span>
              Scope
            </h2>
            <p className="leading-relaxed text-lg text-text/80">
              This policy applies specifically to <span className="font-bold text-primary">LifeTrack</span>, an iOS application published by <span className="font-bold">Manku LLC</span> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). LifeTrack is a personal health-analysis app that reads data from Apple Health and helps you understand it through an AI assistant. This policy governs LifeTrack only and supersedes any general policy for this application.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">2</span>
              Information We Collect
            </h2>
            <p className="leading-relaxed mb-4 text-lg text-text/80">
              <strong className="text-text">We collect nothing.</strong> LifeTrack has no backend service, no account system, no analytics SDK, and no crash-reporting SDK. There is no server operated by us that your data is transmitted to, and we have no technical means of accessing your information.
            </p>
            <p className="leading-relaxed text-lg text-text/80">
              All data created or used by LifeTrack — conversations, saved memories, scheduled tasks, settings, and any health data read from Apple Health — is stored locally on your device.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">3</span>
              Health and Fitness Data (HealthKit)
            </h2>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Read-only:</strong> LifeTrack reads data from HealthKit (such as sleep, heart rate, workouts, and vital signs). It never writes data to HealthKit.</div>
              </li>
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Explicit permission:</strong> Access requires your explicit authorization through the standard iOS permission prompt, and can be revoked at any time in the Health app or iOS Settings.</div>
              </li>
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Never used for advertising:</strong> Health and fitness data is never used for advertising, marketing, data brokering, or any purpose other than providing the health-management features you requested. It is never sold, and never shared with third parties for their own purposes.</div>
              </li>
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Not used for research:</strong> Your health data is not used for human-subject research of any kind.</div>
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">4</span>
              AI Processing and Third Parties
            </h2>
            <p className="leading-relaxed mb-4 text-lg text-text/80">
              LifeTrack requires you to supply your own AI provider credentials (an Anthropic API key, or your existing ChatGPT subscription). This is the only circumstance in which data leaves your device to a third party, and it happens under your own account, not ours.
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">What is sent:</strong> When you ask a question, LifeTrack sends your message plus the specific health data relevant to answering it, along with any memories you have saved, to the AI provider you configured. Health data is not sent in the background or on any schedule — only in response to an action you take.</div>
              </li>
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Under your credentials:</strong> Requests are made directly from your device to the provider using your own API key or subscription. We are not a party to that request and never see its contents.</div>
              </li>
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Provider policies:</strong> The handling of that data is governed by your provider&apos;s own terms — see the <a href="https://www.anthropic.com/legal/privacy" className="font-bold text-primary underline" target="_blank" rel="noopener noreferrer">Anthropic Privacy Policy</a> and the <a href="https://openai.com/policies/privacy-policy/" className="font-bold text-primary underline" target="_blank" rel="noopener noreferrer">OpenAI Privacy Policy</a>. We encourage you to read the policy of whichever provider you choose.</div>
              </li>
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Optional web search:</strong> If you enable web search, your search query (not your health data) is sent to the search provider you configured.</div>
              </li>
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">No other third parties:</strong> LifeTrack contains no advertising networks, no analytics providers, and no tracking of any kind.</div>
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">5</span>
              iCloud Sync
            </h2>
            <p className="leading-relaxed text-lg text-text/80">
              LifeTrack offers optional iCloud sync so your conversations and memories are available across your own devices. When enabled, this data is stored in <strong className="text-text">your private CloudKit database</strong>, which is tied to your Apple Account and governed by Apple&apos;s privacy policy. We have no access to it. Sync is off unless you turn it on, and can be disabled at any time in Settings.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">6</span>
              Your API Keys
            </h2>
            <p className="leading-relaxed text-lg text-text/80">
              API keys and access tokens you enter are stored in the <strong className="text-text">iOS Keychain</strong> on your device. They are never transmitted anywhere except to the corresponding provider when making a request on your behalf. You can remove them at any time in Settings.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">7</span>
              Your Control and Data Retention
            </h2>
            <p className="leading-relaxed mb-4 text-lg text-text/80">
              Because we hold none of your data, you retain complete control over all of it:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Delete:</strong> Remove individual conversations or memories in the app, or delete everything at once by uninstalling. Uninstalling removes all local data.</div>
              </li>
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Export:</strong> Settings includes a full data export to a JSON file you own, and a matching import.</div>
              </li>
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Revoke:</strong> Withdraw HealthKit permission at any time in the Health app; disable iCloud sync at any time in Settings.</div>
              </li>
              <li className="flex items-start gap-3 text-text/70 font-medium">
                <div className="w-2 h-2 rounded-full bg-text shrink-0 mt-2"></div>
                <div><strong className="text-text">Retention:</strong> Data persists on your device until you delete it. We have no retention period because we retain nothing.</div>
              </li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">8</span>
              Children
            </h2>
            <p className="leading-relaxed text-lg text-text/80">
              LifeTrack is not directed to children under 13, and we do not knowingly collect information from children. Because the app collects no data at all, there is no children&apos;s data for us to hold or delete.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">9</span>
              Medical Disclaimer
            </h2>
            <p className="leading-relaxed text-lg text-text/80">
              LifeTrack is not a medical device. It does not diagnose, treat, cure, or prevent any disease, and its output is not medical advice. Information produced by the AI assistant may be incomplete or incorrect. Always consult a qualified healthcare professional before making any health decision, and never disregard professional medical advice because of something you read in this app.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-text mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-white text-lg shadow-[3px_3px_0px_0px_var(--color-text)] border-2 border-text">10</span>
              Changes to This Policy
            </h2>
            <p className="leading-relaxed text-lg text-text/80">
              We may update this policy as the app evolves. The &quot;Last Updated&quot; date at the top reflects the most recent revision. Material changes affecting how your data is handled will be communicated in the app before taking effect.
            </p>
          </section>

        </div>

        <div className="mt-16 text-center border-t-[4px] border-secondary/20 pt-10">
          <p className="text-secondary font-bold mb-4">Questions about LifeTrack&apos;s privacy practices?</p>
          <Link href="mailto:admin@manku.org" className="btn-primary py-2 px-6 inline-flex items-center gap-2">
            <Mail size={18} />
            Contact Us
          </Link>
        </div>
      </main>

    </div>
  );
};

export default LifeTrackPrivacyPolicy;
