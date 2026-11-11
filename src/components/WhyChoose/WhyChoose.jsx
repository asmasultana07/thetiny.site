import React from 'react';
import { BarChart3, Clock3, Globe2, LockKeyholeOpen, QrCode, Zap } from 'lucide-react';

const points = [
  { title: 'Lightning Fast', desc: 'Shorten URLs instantly with our optimized infrastructure.', icon: Zap },
  { title: 'Detailed Analytics', desc: 'Track clicks, referrers, locations, and devices.', icon: BarChart3 },
  { title: 'Global CDN', desc: 'Fast redirects from anywhere in the world.', icon: Globe2 },
  { title: 'QR Codes', desc: 'Generate QR codes for any shortened link.', icon: QrCode },
  { title: 'Secure', desc: 'All links are encrypted and malware scanned.', icon: LockKeyholeOpen },
  { title: 'Expiration Control', desc: 'Set expiry dates or click limits.', icon: Clock3 },
];

export default function WhyChoose() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Why Choose Our Platform?</h2>
          <p className="mt-5 text-sm text-slate-400 sm:text-base">Everything you need to manage and track your links</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ title, desc, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.07]">
              <Icon size={32} strokeWidth={1.8} className="text-violet-400" />
              <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
