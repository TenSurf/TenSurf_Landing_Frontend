import React from 'react';

export default function Loading() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 py-16 animate-pulse">
      <div className="flex flex-col items-center gap-4 mb-16">
        <div className="h-4 w-24 bg-white/10 rounded-full" />
        <div className="h-10 w-96 max-w-full bg-white/10 rounded-lg" />
        <div className="h-5 w-64 bg-white/5 rounded-lg" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-4 p-8 rounded-2xl bg-white/5 border border-white/5">
            <div className="h-12 w-12 bg-white/10 rounded-xl" />
            <div className="h-6 w-3/4 bg-white/10 rounded-lg" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-white/5 rounded" />
              <div className="h-4 w-5/6 bg-white/5 rounded" />
              <div className="h-4 w-4/6 bg-white/5 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
