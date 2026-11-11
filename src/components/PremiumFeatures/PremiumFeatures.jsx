import React from 'react';
import addPic from '../../images/addpic.png';

export default function PremiumFeatures() {
  const features = [
    { title: 'Custom Branded Domains', description: 'Use your custom domain for short links.', position: '33.33%' },
    { title: 'Password Protection', description: 'Secure sensitive links with private passwords.', position: '66.66%' },
    { title: 'Link Expiration', description: 'Schedule links to expire after dates or clicks.', position: '100%' },
    { title: 'UTM Campaign Builder', description: 'Add analytics parameters automatically.', position: '0%' },
  ];

  return (
    <section className="bg-white/[0.025] px-5 py-20 sm:px-8 lg:px-10" id="features">
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold   text-[#5b21f3]">Everything you need</p>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Built for better links</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300">0{index + 1}</div>
              <h3 className="font-semibold text-white">{feat.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{feat.description}</p>
              <div className="mt-5 h-44 w-full rounded-xl border border-white/10 bg-slate-950/30 bg-no-repeat" role="img" aria-label={`${feat.title} illustration`} style={{ backgroundImage: `url(${addPic})`, backgroundPosition: `${feat.position} bottom`, backgroundSize: '400% auto' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
