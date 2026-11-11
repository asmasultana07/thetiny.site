import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: 'Do shortened links ever expire on the free plan?', a: 'No. Links generated on thetiny.site remain permanently active by default. You can create short links for documentation, books, or marketing without worrying about sudden 404 dead links.' },
  { q: 'How do you track clicks without tracking cookies?', a: 'We use privacy-first, aggregated redirect events rather than invasive tracking cookies or personal profiles.' },
  { q: 'Can I connect my own custom apex or subdomain?', a: 'Yes. Custom branded domains and subdomains are available with our Pro plan.' },
  { q: 'What are the rate limits for the developer REST API?', a: 'API rate limits depend on your plan and are designed to keep links fast and reliable for every customer.' },
  { q: 'Can I update the target destination URL after sharing?', a: 'Yes. You can update destinations for links that you own without changing the short URL you already shared.' },
  { q: 'Are the generated QR codes dynamic or static?', a: 'QR codes are dynamic, so the destination can be updated while the printed code stays the same.' },
];

export default function FQA() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="bg-white/[0.025] px-5 py-20 sm:px-8 sm:py-24 lg:px-10" id="faq">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5b21f3]">Got questions? 
            <span className="mx-1">·</span> Everything clarified
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Frequently Asked Questions</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">Clear, straightforward answers about how thetiny.site handles routing, reliability, and privacy.</p></div>
        <div className="mt-10 space-y-3">{faqs.map((faq, index) => { const isOpen = openIndex === index; return <div key={faq.q} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-sm transition hover:border-violet-400/30"><button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white sm:px-6" aria-expanded={isOpen}><span>{faq.q}</span>{isOpen ? <ChevronUp size={16} className="shrink-0 text-slate-400" /> : <ChevronDown size={16} className="shrink-0 text-slate-400" />}</button>{isOpen && <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-6 text-slate-400 sm:px-6">{faq.a}</div>}</div>; })}</div>
      </div>
    </section>
  );
}
