import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const productLinks = ['Features', 'Pricing', 'API Docs', 'Browser Extension', 'Report Malicious URL'];
const companyLinks = ['About Us', 'Blog', 'Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Refund Policy'];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.7fr_0.7fr] lg:gap-20">
          <div>
            <a href="/" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">thetiny<span className={ 'text-violet-600'}>.site</span></a>
            <p className="mt-8 max-w-sm text-sm leading-6 text-slate-400">The fastest way to shorten, track, and manage your URLs. Trusted by thousands of marketers, developers, and businesses across Bangladesh and beyond.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#facebook" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-400/[0.09] text-sm font-bold text-slate-400 transition hover:bg-violet-500 hover:text-white">f</a>
              <a href="#linkedin" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-400/[0.09] text-xs font-bold text-slate-400 transition hover:bg-violet-500 hover:text-white">in</a>
              <a href="#youtube" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-400/[0.09] text-[10px] font-bold text-slate-400 transition hover:bg-violet-500 hover:text-white">YT</a>
              <a href="#whatsapp" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-400/[0.09] text-slate-400 transition hover:bg-violet-500 hover:text-white"><MessageCircle size={16} /></a>
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <a href="mailto:banglapuzzle@gmail.com" className="flex items-center gap-2 transition hover:text-violet-400"><Mail size={16} className="text-violet-400" /> banglapuzzle@gmail.com</a>
              <a href="tel:+8801880811048" className="flex items-center gap-2 transition hover:text-violet-400"><Phone size={16} className="text-violet-400" /> +880 1880-811048</a>
            </div>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} <span className="text-violet-400">Asma.</span> All rights reserved</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#privacy" className="transition hover:text-violet-400">Privacy Policy</a>
            <a href="#refund" className="transition hover:text-violet-400">Refund Policy</a>
            <a href="#cookies" className="transition hover:text-violet-400">Cookie Policy</a>
            <a href="#terms" className="transition hover:text-violet-400">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{title}</h2>
      <ul className="mt-6 space-y-4 text-sm text-slate-400">
        {links.map((link) => <li key={link}><a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="transition hover:text-violet-400">{link}</a></li>)}
      </ul>
    </div>
  );
}
