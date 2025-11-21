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
  Moon
} from 'lucide-react';

// 如果使用了 Next.js 的 Link 组件，请取消下面的注释并替换 <a href...>
import Link from 'next/link';
import { useTheme } from './components/ThemeProvider';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  // 初始化主题逻辑
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-md">
              <span className="font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Manku</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('products')} className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition-colors text-sm font-medium">Products</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition-colors text-sm font-medium">About Us</button>
            <button onClick={() => scrollToSection('vision')} className="text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition-colors text-sm font-medium">Vision</button>
            
            {/* Theme Toggle Button (Desktop) */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button onClick={() => scrollToSection('contact')} className="px-5 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full font-bold text-sm hover:bg-indigo-600 dark:hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-500/20">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 focus:outline-none"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900 dark:text-white focus:outline-none">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
            <button onClick={() => scrollToSection('products')} className="text-left text-slate-600 dark:text-slate-300 py-2">Products</button>
            <button onClick={() => scrollToSection('about')} className="text-left text-slate-600 dark:text-slate-300 py-2">About Us</button>
            <button onClick={() => scrollToSection('vision')} className="text-left text-slate-600 dark:text-slate-300 py-2">Vision</button>
            <button onClick={() => scrollToSection('contact')} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold shadow-md">Contact Us</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-8 backdrop-blur-sm animate-fade-in-up shadow-sm">
            <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs md:text-sm text-indigo-700 dark:text-indigo-200 font-medium uppercase tracking-wider">Lifestyle meets Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 leading-tight">
            Elevating Daily Life <br /> Through <span className="text-indigo-600 dark:text-indigo-400">Artificial Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Manku LLC creates intuitive mobile applications that blend ancient wisdom with cutting-edge AI technology to provide personalized lifestyle insights.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollToSection('products')} className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group">
              Discover Our Apps
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scrollToSection('vision')} className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-bold transition-all shadow-sm">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Featured Product: Palmistry */}
      <section id="products" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Content */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold mb-4">
                <Smartphone size={20} />
                <span>FEATURED APP</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Palmistry AI</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                Unlock the secrets of your future with the power of Computer Vision. 
                Our upcoming app combines traditional palm reading methodologies with advanced 
                machine learning algorithms to provide instant, personalized analysis of your palm lines.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  { icon: ScanLine, text: "Real-time AI Palm Scanning" },
                  { icon: Brain, text: "Deep Learning Interpretation" },
                  { icon: Sparkles, text: "Daily Personalized Insights" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <item.icon size={20} />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-slate-900 dark:text-white font-semibold mb-1">Coming Soon</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Get notified when we launch on the App Store.</p>
                  </div>
                  <button className="px-6 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold rounded-lg text-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors w-full sm:w-auto">
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-indigo-600/20 blur-[80px] rounded-full"></div>
              <div className="relative w-[300px] h-[600px] bg-slate-950 border-8 border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
                <div className="flex-1 bg-slate-900 relative flex flex-col">
                  <div className="pt-12 px-6 pb-4 flex justify-between items-center">
                    <Menu size={20} className="text-white" />
                    <span className="font-bold text-indigo-400">Palmistry AI</span>
                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center relative p-6">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                    <div className="w-full aspect-[3/4] border-2 border-dashed border-indigo-500/50 rounded-2xl relative flex items-center justify-center overflow-hidden bg-slate-800/30">
                      <Fingerprint size={120} className="text-slate-600 opacity-50" />
                      <div className="absolute top-0 left-0 w-full h-1 bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.8)] animate-[scan_3s_ease-in-out_infinite]"></div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700">
                        <p className="text-xs text-indigo-300 font-mono">ANALYZING LIFE LINE...</p>
                      </div>
                    </div>
                    <div className="w-full mt-8 space-y-3">
                      <div className="h-2 bg-slate-800 rounded-full w-3/4"></div>
                      <div className="h-2 bg-slate-800 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  <div className="h-20 bg-slate-950 flex items-center justify-around px-6 border-t border-slate-800">
                     <div className="text-indigo-400 flex flex-col items-center gap-1">
                        <ScanLine size={20} />
                        <span className="text-[10px]">Scan</span>
                     </div>
                     <div className="text-slate-600 flex flex-col items-center gap-1">
                        <Sparkles size={20} />
                        <span className="text-[10px]">Insights</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Philosophy */}
      <section id="vision" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Technology for a Better Lifestyle</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We don't just build apps; we build companions that help you understand yourself and the world around you better through data and intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Privacy First",
                desc: "Your personal data and biometric information are processed securely. We believe in transparency and user control."
              },
              {
                icon: Zap,
                title: "Instant Analysis",
                desc: "Leveraging edge computing to provide results in milliseconds, directly on your device without unnecessary delays."
              },
              {
                icon: Globe,
                title: "Universal Wisdom",
                desc: "Bridging cultural heritage with modern technology to create tools that are relevant across borders."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-white dark:bg-slate-900 rounded-2xl hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800 group">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/10">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">About Manku LLC</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Founded with a passion for mobile innovation, Manku LLC is a boutique software development firm specializing in the intersection of lifestyle and Artificial Intelligence. 
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
            Our mission is to demystify AI and make it a practical, enriching part of everyday human experience. 
            Starting with <strong>Palmistry</strong>, we are building a suite of applications designed to entertain, enlighten, and empower.
          </p>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-slate-100 dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="font-bold text-white">M</span>
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-white">Manku LLC</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">
                Creating the next generation of lifestyle AI applications. Based in the cloud, available worldwide.
              </p>
              <div className="flex items-center gap-4 text-slate-400">
                {/* Social placeholders */}
                <div className="w-8 h-8 bg-white dark:bg-slate-900 rounded flex items-center justify-center hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors cursor-pointer shadow-sm border border-slate-200 dark:border-transparent">X</div>
                <div className="w-8 h-8 bg-white dark:bg-slate-900 rounded flex items-center justify-center hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors cursor-pointer shadow-sm border border-slate-200 dark:border-transparent">in</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Products</button></li>
                <li><span className="text-slate-400 dark:text-slate-600 cursor-not-allowed">Careers (Hiring Soon)</span></li>
                <li><span className="text-slate-400 dark:text-slate-600 cursor-not-allowed">Press Kit</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6">Contact</h4>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-indigo-600 dark:text-indigo-400" />
                  <Link href="mailto:contact@mankullc.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">contact@mankullc.com</Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  </div>
                  <span>Support Online</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-600">
            <p>&copy; {new Date().getFullYear()} Manku LLC. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-slate-400">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-900 dark:hover:text-slate-400">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Inline Custom Animation for the scanning bar */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;