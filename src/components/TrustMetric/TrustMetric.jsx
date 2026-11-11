import React from 'react';

export default function TrustMetric() {
  const metrics = [
    { label: 'Links Shortened', value: '10M+' },
    { label: 'Happy Users', value: '500K+' },
    { label: 'Clicks Tracked', value: '100M+' },
    { label: 'Uptime', value: '99.9%' },
  ];

  return (
    <section className="trust-metric bg-[#5b21f3] text-white border-y border-white/10 px-4 py-8 lg:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 sm:grid-cols-4">
        {metrics.map((item, index) => (
          <div key={index} className="text-center">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">{item.value}</h3>
            <p className="mt-1 text-xs text-white sm:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
