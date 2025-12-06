'use client';

import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Smartphone, 
  Sparkles, 
  Menu, 
  X, 
  ChevronRight, 
  Mail, 
  ScanLine, 
  Fingerprint, 
  Zap,
  Globe,
  ShieldCheck,
  Sun,
  Moon,
  Heart
} from 'lucide-react';
import Link from 'next/link';

// 注意：请确保你的 icon.tsx 或 svg 组件颜色也能适配这个主题
// 这里我主要使用 lucide-react 的图标，它们会自动继承 currentColor

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // 默认改为浅色，符合 Pastel 主题

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // 初始化主题
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 overflow-x-hidden selection:bg-accent selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b-[4px] border-secondary/20 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-primary border-[3px] border-text rounded-xl flex items-center justify-center text-white shadow-[4px_4px_0px_0px_var(--color-text)] dark:shadow-[4px_4px_0px_0px_var(--color-secondary)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
              <span className="font-heading font-black text-xl">M</span>
            </div>
            <span className="text-2xl font-heading font-bold tracking-tight text-text">Manku</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('products')} className="text-text font-bold hover:text-primary transition-colors">Products</button>
            <button onClick={() => scrollToSection('about')} className="text-text font-bold hover:text-primary transition-colors">About Us</button>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full border-[3px] border-secondary bg-surface text-secondary hover:border-primary hover:text-primary transition-all"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link href="mailto:admin@manku.org" className="btn-primary text-sm py-2 px-6">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-text">
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-text">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b-[4px] border-secondary p-6 flex flex-col gap-4 shadow-none">
            <button onClick={() => scrollToSection('products')} className="text-left font-bold text-lg text-text py-2">Products</button>
            <button onClick={() => scrollToSection('about')} className="text-left font-bold text-lg text-text py-2">About Us</button>
            <Link href="mailto:admin@manku.org" className="btn-primary w-full text-center">Contact Us</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Abstract Background Shapes (Pastel Blobs) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]">
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"></div>
          <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[3px] border-dashed border-secondary/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white dark:bg-surface border-[3px] border-text mb-8 animate-fade-in-up">
            <Heart size={18} className="text-primary fill-primary" />
            <span className="text-sm font-bold text-text dark:text-primary uppercase tracking-wider">Lifestyle meets Tech</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-black mb-8 text-text leading-[1.1]">
            Elevating Daily Life <br />
            <span className="text-primary relative inline-block">
              With AI
              {/* Underline decoration */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            Cute, smart, and insightful apps designed to bring ancient wisdom and modern technology into your pocket.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => scrollToSection('products')} className="btn-primary w-full sm:w-auto text-lg">
              Explore Apps
            </button>
            <button onClick={() => scrollToSection('vision')} className="btn-outline w-full sm:w-auto text-lg">
              Our Vision
            </button>
          </div>
        </div>
      </header>

      {/* Featured Product: Palmistry */}
      <section id="products" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card-pastel p-8 md:p-12 flex flex-col lg:flex-row items-center gap-16 bg-surface">
            
            {/* Text Content */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="flex items-center gap-3 text-accent font-black mb-4">
                <Smartphone size={28} strokeWidth={3} />
                <span className="tracking-widest uppercase">New Release</span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-6xl font-black mb-6 text-text">Palmistry AI</h2>
              <p className="text-text/70 text-lg mb-8 font-medium">
                Unlock the secrets of your future with a touch of magic and a lot of code. 
                Snap a photo, and let our AI trace your lines to reveal personalized daily insights.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  { icon: ScanLine, text: "Instant AI Palm Scanning", color: "text-primary" },
                  { icon: Brain, text: "Smart Pattern Recognition", color: "text-accent" },
                  { icon: Sparkles, text: "Daily Cute Insights", color: "text-warning" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-text font-bold text-lg">
                    <div className={`w-12 h-12 rounded-full bg-background border-[3px] border-secondary flex items-center justify-center ${item.color}`}>
                      <item.icon size={24} strokeWidth={2.5} />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-background rounded-[1.5rem] border-[3px] border-secondary/30">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-text font-black text-lg mb-1">Coming Soon</p>
                    <p className="text-sm text-secondary font-bold">Join the waitlist for early access!</p>
                  </div>
                  <button className="py-2 px-6 text-sm font-bold whitespace-nowrap rounded-[var(--radius)] border-[4px] transition-all bg-text text-primary border-text hover:bg-primary hover:border-primary hover:text-white dark:bg-primary dark:text-white dark:border-primary dark:hover:bg-text dark:hover:text-primary dark:hover:border-text">
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Mockup (Stylized for Pastel Theme) */}
            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <div className="relative w-[320px] h-[640px] bg-text border-[8px] border-text rounded-[3rem] overflow-hidden shadow-[12px_12px_0px_0px_var(--color-secondary)]">
                {/* Dynamic Island (灵动岛) */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[120px] h-[32px] bg-black rounded-full z-20"></div>
                
                {/* Screen */}
                <div className="w-full h-full bg-background flex flex-col relative overflow-hidden">
                  {/* App Header */}
                  <div className="pt-14 px-6 pb-4 flex justify-between items-center bg-surface border-b-[3px] border-muted">
                    <Menu size={24} className="text-text" />
                    <span className="font-heading font-black text-xl text-primary">Palmistry</span>
                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <Heart size={16} className="text-primary fill-primary" />
                    </div>
                  </div>

                  {/* App Body */}
                  <div className="flex-1 flex flex-col items-center justify-center p-6">
                    <div className="w-full aspect-[3/4] border-[4px] border-dashed border-primary/40 rounded-[2rem] relative flex items-center justify-center bg-surface">
                      <Fingerprint size={140} className="text-secondary/20" strokeWidth={1} />
                      
                      {/* Scanning Bar (Restyled) */}
                      <div className="absolute top-0 left-0 w-full h-2 bg-accent rounded-full animate-[scan_3s_ease-in-out_infinite] shadow-[0_0_20px_var(--color-accent)]"></div>
                      
                      <div className="absolute bottom-6 bg-text px-4 py-2 rounded-xl font-bold text-xs tracking-wider text-white dark:text-primary">
                        SCANNING...
                      </div>
                    </div>
                    
                    <div className="w-full mt-8 space-y-4">
                      <div className="h-4 bg-muted/50 rounded-full w-3/4 mx-auto"></div>
                      <div className="h-4 bg-muted/50 rounded-full w-1/2 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision / Features Cards */}
      <section id="vision" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 text-text">Why We Build?</h2>
            <p className="text-xl text-secondary font-medium max-w-2xl mx-auto">
              Technology shouldn't feel cold. We build apps that feel like a warm hug, powered by cold, hard data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Safe & Secure",
                desc: "Your data is yours. We treat privacy like a secret diary—locked and respected.",
                color: "bg-info"
              },
              {
                icon: Zap,
                title: "Super Fast",
                desc: "No loading spinners here. Get your insights faster than you can say 'AI'.",
                color: "bg-warning"
              },
              {
                icon: Globe,
                title: "For Everyone",
                desc: "Designed to be universally understood, bridging cultures with cute tech.",
                color: "bg-success"
              }
            ].map((feature, idx) => (
              <div key={idx} className="card-pastel p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-14 h-14 rounded-2xl border-[3px] border-text flex items-center justify-center text-text mb-6 shadow-[4px_4px_0px_0px_var(--color-text)] dark:shadow-[4px_4px_0px_0px_var(--color-secondary)] ${feature.color}`}>
                  <feature.icon size={28} strokeWidth={2.5} />
                </div>
                <h3 className="font-heading text-2xl font-black mb-3 text-text">{feature.title}</h3>
                <p className="text-text/70 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us (Simple Text) */}
      <section id="about" className="py-24 bg-surface border-y-[4px] border-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl font-black mb-8 text-text">The Studio</h2>
          <p className="text-xl text-text/80 font-medium mb-8 leading-relaxed">
            Manku LLC is a tiny but mighty studio. We love pastel colors, clean code, and making AI accessible to non-techies.
          </p>
          <div className="inline-block p-4 border-[3px] border-surface rounded-[2rem] bg-background text-primary font-bold">
            📍 Based in the Cloud (and occasionally a coffee shop)
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="card-pastel p-12 border-none flex flex-col md:flex-row justify-between items-start gap-12 bg-text text-white dark:bg-surface dark:text-text">
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-heading font-black text-white">M</div>
                <span className="font-heading font-bold text-2xl">Manku LLC</span>
              </div>
              <p className="text-white/70 dark:text-text/70 max-w-sm mb-6 font-medium leading-relaxed">
                Crafting digital lifestyle products<br />with love and logic.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 dark:bg-text/10 flex items-center justify-center hover:bg-primary cursor-pointer transition-colors font-bold text-sm">X</div>
                <div className="w-10 h-10 rounded-full bg-white/10 dark:bg-text/10 flex items-center justify-center hover:bg-primary cursor-pointer transition-colors font-bold text-sm">In</div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-bold text-xl text-primary mb-2">Get in Touch</h4>
              <Link href="mailto:admin@manku.org" className="flex items-center gap-2 hover:text-primary transition-colors font-medium text-white/90 dark:text-text/90">
                <Mail size={18} /> admin@manku.org
              </Link>
              <div className="flex items-center gap-2 text-success font-bold text-sm">
                <span className="w-3 h-3 bg-success rounded-full animate-pulse"></span>
                Open for Collabs
              </div>
            </div>

          </div>

          <div className="mt-12 text-center text-text/50 font-bold text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Manku LLC.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary">Privacy</Link>
              <Link href="/terms" className="hover:text-primary">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;