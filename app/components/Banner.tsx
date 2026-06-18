"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Banner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative flex min-h-screen flex-col justify-between bg-[#0a0a0a] text-white antialiased overflow-hidden"
    >
      {/* Background Image with Parallax feel */}
      <div 
        className={`absolute inset-0 z-0 transition-transform duration-[2000ms] ease-out ${mounted ? 'scale-100' : 'scale-105'}`}
        style={{
          backgroundImage: "url('/sad.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Sophisticated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40"></div>
        
        {/* Subtle Brand Glow */}
        <div className="absolute right-0 top-1/4 h-3/4 w-1/2 bg-gradient-to-bl from-orange-600/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* ═══════════════════ HERO CONTENT ═══════════════════ */}
      <div className="relative z-10 flex flex-1 items-center pt-24 pb-12">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            {/* Overline */}
           

            {/* Main Headline */}
            <h1 className="mt-8 text-[3rem] font-light leading-[1.1] tracking-tighter sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem]">
              <span className={`block transition-all duration-1000 delay-200 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Play
              </span>
              <span className={`block transition-all duration-1000 delay-300 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Beyond</span>
              </span>
              <span className={`block transition-all duration-1000 delay-400 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Limits.
              </span>
            </h1>

            {/* Minimal Subtitle & CTA */}
            <div className={`mt-12 flex flex-col sm:flex-row sm:items-center gap-8 transition-all duration-1000 delay-500 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <p className="max-w-sm text-base leading-relaxed text-white/60 font-light">
                Premium gaming and entertainment experiences crafted exclusively for true players.
              </p>

              <div className="hidden sm:block h-12 w-[1px] bg-white/20"></div>

              <a
                href="https://www.instagram.com/armaan_games_and_entertainment/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-5 text-white transition-all hover:text-orange-400"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">Follow Us</span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-orange-400 group-hover:bg-orange-500/20">
                  <svg className="h-5 w-5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Line ── */}
      <div className={`relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-md transition-all duration-1000 delay-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row md:px-12 lg:px-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            © {new Date().getFullYear()} Armaan Games &amp; Entertainment
          </p>
          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/armaan_games_and_entertainment/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 transition-colors hover:text-white"
            >
              <span className="h-1 w-1 rounded-full bg-orange-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}