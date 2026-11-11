import React, { useState } from 'react';
import { Check, Copy, MousePointerClick, QrCode } from 'lucide-react';

const links = [
  { shortUrl: 'https://thetiny.site/ARL5en', source: 'https://api.whatsapp.com/send?phone=8801880110484&text=I+want+to+be+a...', clicks: 428 },
  { shortUrl: 'https://thetiny.site/BArxCj', source: 'https://leena4595.soft.app', clicks: 271 },
  { shortUrl: 'https://thetiny.site/kLnXd', source: 'https://supportersframe.com/blog/supportersframecom-introduces-qr-code...', clicks: 87 },
  { shortUrl: 'https://thetiny.site/Q0nTp0', source: 'https://docs.google.com/document/d/1eFAlqSL5a3BiGp4uunk8sQvLz_WcWkWh...', clicks: 67 },
  { shortUrl: 'https://thetiny.site/k4dIp8', source: 'https://solverfirm.com/', clicks: 37 },
];

export default function PopularLinks() {
  const [copied, setCopied] = useState(null);

  const copyLink = async (link, index) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(index);
      window.setTimeout(() => setCopied(null), 1500);
    } catch {
      setCopied(null);
    }
  };

  return (
    <section className="bg-white px-5 py-16 text-slate-900 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-[#5b21f3]">Trending now</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Popular shortened links</h2>
          </div>
          <span className="hidden rounded-lg bg-slate-200 px-4 py-2 text-xs font-medium text-slate-500 sm:block">Updated just now</span>
        </div>

        <ul className="space-y-3">
          {links.map((link, index) => (
            <li key={link.shortUrl} className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 shadow-sm transition hover:border-violet-300 hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:px-4">
              <div className="min-w-0">
                <p className="truncate font-mono text-xs font-medium text-[#5b21f3] sm:text-sm">{link.shortUrl}</p>
                <p className="mt-1 truncate text-[10px] text-slate-400 sm:text-xs">{link.source}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-600 shadow-sm sm:text-xs"><MousePointerClick size={12} /> {link.clicks} clicks</span>
                <button type="button" onClick={() => copyLink(link.shortUrl, index)} className="popular-links-copy inline-flex items-center gap-1.5 rounded-lg bg-[#5b21f3] px-3 py-1.5 text-[10px] font-semibold text-white transition hover:bg-violet-500 sm:text-xs" aria-label={`Copy ${link.shortUrl}`}>
                  {copied === index ? <Check size={13} /> : <Copy size={13} />} {copied === index ? 'Copied' : 'Copy'}
                </button>
                <button type="button" className="inline-flex items-center gap-1.5 rounded-lg bg-slate-200 px-3 py-1.5 text-[10px] font-semibold text-violet-600 transition hover:bg-slate-300 sm:text-xs" aria-label={`Show QR code for ${link.shortUrl}`}><QrCode size={13} /> QR</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
