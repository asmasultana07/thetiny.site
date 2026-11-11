import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { quote: 'A good platform for Link management.', author: 'Nadim Majid', role: 'User' },
  { quote: 'The analytics are clear, fast, and incredibly useful for our campaigns.', author: 'Alex R.', role: 'Growth Lead' },
  { quote: 'Simple to use, reliable, and the branded links look fantastic.', author: 'Sarah K.', role: 'Content Creator' },
];

export default function Testimonials() {
  return (
    <section className="bg-white/[0.025] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Testimonials</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Loved by 80,000+ users worldwide.</h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review.author} className="flex min-h-52 flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.07]">
              <div className="flex gap-1 text-violet-400" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" />)}</div>
              <p className="mt-5 text-sm leading-6 text-slate-200">“{review.quote}”</p>
              <footer className="mt-auto pt-8"><p className="text-sm font-bold text-white">{review.author}</p><p className="mt-1 text-xs text-slate-500">{review.role}</p></footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2" aria-label="Testimonial pages">
          <span className="h-2.5 w-7 rounded-full bg-violet-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        </div>
      </div>
    </section>
  );
}
