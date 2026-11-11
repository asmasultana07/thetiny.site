import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Button from '../ui/button';

const tiers = [
  {
    name: 'Free',
    description: 'Zero friction link shortening for individuals, creators, and personal sharing.',
    monthly: '$0',
    annual: '$0',
    features: ['Unlimited short links', '30-day click analytics', 'Dynamic high-res QR codes', 'Instant browser sync', 'Standard edge routing'],
    action: 'Get Started Free',
  },
  {
    name: 'Pro',
    description: 'Full analytics, custom branded domains, and campaign tools for marketers.',
    monthly: '$9',
    annual: '$7',
    features: ['Everything in Free', 'Custom branded domains', 'Unlimited analytics history', 'UTM campaign generator', 'Password-protected links', 'REST API access'],
    action: 'Upgrade to Pro',
    popular: true,
  },
  {
    name: 'Team & Scale',
    description: 'Dedicated edge bandwidth, unlimited domains, and workflows for organizations.',
    monthly: '$49',
    annual: '$39',
    features: ['Everything in Pro', 'Unlimited custom domains', 'Multi-member workspaces', 'Real-time webhook events', 'Unlimited API capacity', '99.99% edge SLA'],
    action: 'Get Team Plan',
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10" id="pricing">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs  font-semibold uppercase tracking-[0.2em] text-violet-300">Simple pricing</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">Transparent pricing that scales with your traffic.</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">Start free without credit card details. Upgrade whenever you need custom domains or deep API integration.</p>

          <div className="mx-auto mt-8 inline-flex rounded-xl border border-white/10 bg-white/[0.06] p-1 text-xs font-semibold">
            <button type="button" onClick={() => setAnnual(false)} className={`rounded-lg px-4 py-2 transition ${!annual ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'}`}>Monthly Billing</button>
            <button type="button" onClick={() => setAnnual(true)} className={`rounded-lg px-4 py-2 transition ${annual ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'}`}>Annual Billing <span className="ml-1 text-emerald-400">Save 20%</span></button>
          </div>
        </div>

        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-3 lg:gap-5">
          {tiers.map((tier) => (
            <article key={tier.name} className={`relative flex flex-col rounded-2xl border p-6 ${tier.popular ? 'border-violet-400/60 bg-slate-950 shadow-2xl shadow-violet-950/30 md:-translate-y-2' : 'border-white/10 bg-white/[0.04]'}`}>
              {tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-4 py-1 text-[10px] font-extrabold uppercase tracking-wide text-slate-950">Most popular</span>}
              <h3 className={`text-base font-bold ${tier.popular ? 'text-white' : 'text-white'}`}>{tier.name}</h3>
              <p className={`mt-3 min-h-16 text-xs leading-5 ${tier.popular ? 'text-slate-400' : 'text-slate-400'}`}>{tier.description}</p>
              <div className="mt-5 flex items-end gap-2 border-b border-white/10 pb-5"><span className="text-4xl font-bold text-white">{annual ? tier.annual : tier.monthly}</span><span className="pb-1 text-[10px] text-slate-500">/ per month</span></div>
              <p className="mt-5 text-[10px] font-semibold text-slate-400">Plan inclusions:</p>
              <ul className="mt-3 flex-1 space-y-3 text-xs text-slate-400">
                {tier.features.map((feature) => <li key={feature} className="flex gap-2"><Check size={14} className="shrink-0 text-emerald-400" /> <span>{feature}</span></li>)}
              </ul>
              <Button className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition ${tier.popular ? 'bg-white text-slate-950 hover:bg-slate-200' : 'bg-slate-950 text-white hover:bg-slate-800'}`}>{tier.action} <ArrowRight size={13} /></Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
