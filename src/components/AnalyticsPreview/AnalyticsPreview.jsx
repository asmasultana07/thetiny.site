import React from 'react';
import { Copy, QrCode, Trash2, Zap } from 'lucide-react';

const sessions = [
  { url: 'https://thetiny.site/spring26', source: 'https://company.com/announcement/2026-launch-keynote', clicks: '1,248' },
  { url: 'https://thetiny.site/react19', source: 'https://github.com/facebook/react/releases/tag/v19.0.0', clicks: '642' },
  { url: 'https://thetiny.site/url-api', source: 'https://developer.mozilla.org/en-US/docs/Web/API/URL_API', clicks: '389' },
];

const chartValues = [35, 52, 75, 74, 66, 43, 34];
const referrers = [
  { name: 'X / Twitter', value: '42%', width: '82%' },
  { name: 'Substack Newsletter', value: '28%', width: '62%' },
  { name: 'Direct / Messaging', value: '15%', width: '42%' },
  { name: 'LinkedIn Post', value: '12%', width: '34%' },
];

export default function AnalyticsPreview() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10" id="analytics">
      <div className="mx-auto max-w-7xl rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 to-cyan-500/5 p-5 sm:p-8 lg:p-10">
        <p className="mb-2 text-sm font-medium text-[#5b21f3]">Know what works</p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Real-time link analytics</h2>
        <p className="mt-3 text-slate-400">Monitor click locations, referrers, and device types instantly.</p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-4 px-1 pb-4">
            <div><p className="text-xs font-bold uppercase tracking-wide text-white">Active session links <span className="ml-1 font-normal text-slate-500">· 3 total</span></p></div>
            <span className="hidden text-[10px] text-slate-500 sm:block">Saved to browser storage</span>
          </div>

          <div className="space-y-2">
            {sessions.map((session) => (
              <div key={session.url} className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
                <div className="min-w-0">
                  <p className="truncate font-mono text-xs font-semibold text-[#5b21f3]">{session.url} <span className="ml-1 font-sans text-[9px] font-normal text-slate-500">(custom)</span></p>
                  <p className="mt-1 truncate text-[10px] text-slate-500">{session.source}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2 self-end text-[10px] sm:self-auto"><span className="inline-flex items-center gap-1 text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {session.clicks} clicks</span><button type="button" className="rounded-md border border-white/10 p-1.5 text-slate-400 transition hover:text-white" aria-label={`Copy ${session.url}`}><Copy size={12} /></button><button type="button" className="rounded-md border border-white/10 p-1.5 text-slate-400 transition hover:text-white" aria-label={`QR code for ${session.url}`}><QrCode size={12} /></button><span className="rounded-md bg-amber-400/10 px-2 py-1 text-amber-300">⚡ +1</span><button type="button" className="p-1.5 text-slate-500 transition hover:text-red-400" aria-label={`Delete ${session.url}`}><Trash2 size={12} /></button></div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-start justify-between"><div><h3 className="text-xs font-semibold text-white">Click Distribution Over Time</h3><p className="text-[9px] text-slate-500">7-day rolling window</p></div><span className="text-[9px] text-slate-500">Peak: <b className="text-violet-300">6,839 clicks</b></span></div>
              <div className="mt-6 flex h-28 items-end gap-2 sm:h-32">{chartValues.map((height, index) => <div key={index} className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600 to-cyan-300 opacity-80" style={{ height: `${height}%` }} />)}</div>
              <div className="mt-2 grid grid-cols-7 text-center text-[9px] text-slate-500">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => <span key={day}>{day}</span>)}</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4"><div className="flex items-start justify-between"><div><h3 className="text-xs font-semibold text-white">Top Referrers</h3><p className="text-[9px] text-slate-500">Where audience originated</p></div><Zap size={13} className="text-cyan-300" /></div><div className="mt-5 space-y-3">{referrers.map((referrer) => <div key={referrer.name}><div className="mb-1 flex justify-between text-[9px] text-slate-400"><span>{referrer.name}</span><span>{referrer.value}</span></div><div className="h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-300" style={{ width: referrer.width }} /></div></div>)}</div><p className="mt-4 text-[9px] text-slate-500">Privacy: <span className="text-emerald-400">✓ masked</span><span className="float-right">Last 24h · 256</span></p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
