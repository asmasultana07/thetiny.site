import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import Button from '../ui/button';
import Loading from '../ui/loading';

export default function HeroShortener() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    window.setTimeout(() => setIsLoading(false), 700);
  };

  return (
    <section className="relative px-4 py-8 sm:py-18  " id="shorten">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10    p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-7">
        <div className="max-w-xl text-left lg:pl-4">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-xs font-medium text-[#5b21f3]">Trusted by thousands of users</div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">URL Shortener, Branded<br className="hidden sm:block" /> Short Links &amp; Analytics</h1>
          <p className="mt-6 max-w-lg text-sm leading-6 text-slate-400">Welcome to the original link shortener — simplifying the internet through the power of the URL. You can use branded domains for fully custom links, track link analytics, and enjoy other powerful features with our paid plans.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button type="button" className="rounded-sm bg-white border border-violet-600 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-slate-200" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>View Plans</Button>
            <Button type="button" className="rounded-full border border-violet-400/60 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-violet-400/20 transition hover:border-violet-300 hover:bg-slate-900" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>Explore features <span aria-hidden="true">-&gt;</span></Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg rounded-2xl border border-violet-400/20 bg-white/[0.06] p-2 shadow-2xl shadow-violet-950/30 lg:max-w-none">
          <div className="rounded-xl border border-slate-200/80 bg-white px-6 py-10 text-center shadow-inner sm:px-12 sm:py-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600"><Lock size={26} strokeWidth={2} /></div>
            <h2 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">Login to make your URL short</h2>
            <p className="mx-6 mt-5  text-xs leading-5 text-slate-500 sm:text-sm">Sign in or create a free account to start shortening links, generating QR codes, and tracking every click in real time.</p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button type="submit" className="hero-primary-cta rounded-sm bg-[#5b21f3] px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-500">Login to Make URL</Button>
              <Button type="button" className="rounded-sm border border-violet-600 px-4 py-2.5 text-xs font-semibold text-violet-600 transition hover:bg-violet-50">Sign Up Free </Button>
            </form>
            {isLoading && <Loading message="Generating short link..." />}
          </div>
        </div>
      </div>
    </section>
  );
}
