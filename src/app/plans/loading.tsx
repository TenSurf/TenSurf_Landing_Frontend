import React from 'react';

export default function Loading() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-32 animate-pulse">
      <div className="h-12 w-48 bg-white/10 rounded-lg mb-12" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full px-4 mb-16">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-12 h-12 bg-white/10 rounded-xl" />
            <div className="h-4 w-20 bg-white/10 rounded" />
            <div className="h-3 w-24 bg-white/5 rounded" />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-10 w-24 bg-white/10 rounded-full" />
        ))}
      </div>
      <div className="flex gap-6 max-w-5xl w-full px-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1 flex flex-col gap-3 p-6 rounded-3xl bg-white/5 border border-white/5 h-96">
            <div className="h-8 w-32 bg-white/10 rounded-lg" />
            <div className="h-10 w-24 bg-white/10 rounded-lg mt-4" />
            <div className="h-12 w-full bg-white/10 rounded-lg mt-4" />
            <div className="space-y-2 mt-4">
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className="h-4 w-full bg-white/5 rounded" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
