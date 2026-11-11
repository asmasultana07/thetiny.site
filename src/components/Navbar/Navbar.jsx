import React from 'react';
import { ArrowUpRight, Moon, Sun } from 'lucide-react';

export default function Navbar({ isDark, onToggle }) {

  const navTheme = isDark
    ? 'border-violet-400/30 bg-slate-950/90 text-white shadow-[0_5px_22px_rgba(139,92,246,0.34)]'
    : 'border-violet-200/70 bg-white/95 text-slate-900 shadow-[0_4px_18px_rgba(124,58,237,0.14)]';

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors ${navTheme}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3.5 sm:px-8 lg:px-10">
        <a href="/" className="shrink-0 text-[12px] font-bold uppercase tracking-[0.3em]  ">
          thetiny<span className={isDark ? 'text-violet-300' : 'text-violet-600'}>.site</span>
        </a> 

        <ul className={`hidden items-center gap-6 text-[14px] font-medium sm:flex lg:gap-8 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          <li><a className="transition hover:text-violet-500" href="#shorten">Shorten</a></li>
          <li><a className="transition hover:text-violet-500" href="#features">Features</a></li>
          <li><a className="transition hover:text-violet-500" href="#analytics">Analytics</a></li>
          <li><a className="transition hover:text-violet-500" href="#pricing">Pricing</a></li>
        </ul>

        <div className="flex items-center gap-3">
          <button type="button" onClick={onToggle} className={`rounded-full p-2 transition hover:bg-slate-100 ${isDark ? 'text-slate-300 hover:bg-white/10' : 'text-slate-700'}`} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a href="#pricing" className={`navbar-cta inline-flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-semibold shadow-sm transition hover:-translate-y-0.5 
            ${isDark ? 'bg-white text-slate-950 hover:bg-slate-200' : 'bg-[#5b21f3] text-white   '}`}>
            Get Started <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}
