import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { Radio, ArrowDown, ExternalLink, Terminal } from 'lucide-react';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  const firstName = 'AKSHIT';
  const lastName = 'SINGHVI';

  return (
    <section
      id="start"
      data-checkpoint="start"
      className="hero-section min-h-screen relative flex flex-col justify-between pt-16 pb-12 overflow-hidden"
    >
      {/* Background Mission Grid & Radar Reticle */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-cyan-500/30 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-dashed border-cyan-400/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[900px] w-[1px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
      </div>

      <div className="wrap relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* Top Mission Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/60 border border-cyan-400/40 rounded shadow-[2px_2px_0px_#00F0FF] backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-xs text-cyan-300 font-semibold tracking-wider uppercase">
              STATUS: MISSION CRITICAL ORBIT
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 font-mono text-xs text-slate-400">
            <span>FLIGHT REG: {PERSONAL_INFO.callsign}</span>
            <span>•</span>
            <span>COORD: MNNIT PRAYAGRAJ</span>
            <span>•</span>
            <span className="text-amber-400 font-bold">LC GUARDIAN 2158</span>
          </div>
        </div>

        {/* Focus Area Tags */}
        <ul
          className="flex flex-wrap gap-2.5 mb-6 list-none p-0"
          aria-label="Focus Areas"
        >
          {PERSONAL_INFO.focusTags.map((tag, idx) => (
            <li
              key={idx}
              className="font-mono text-xs tracking-wider uppercase font-bold px-3 py-1.5 bg-[#0F1424] text-cyan-300 border-2 border-cyan-400/80 shadow-[3px_3px_0px_#00F0FF] transform hover:-translate-y-0.5 transition-transform"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Giant Monolithic Name */}
        <div className="hero-name-block select-none mb-6">
          <h1 className="font-display tracking-tight leading-[0.88] text-white uppercase text-[clamp(2.8rem,9vw,8.5rem)] flex flex-wrap items-baseline gap-x-4">
            <span className="name-first inline-flex text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[4px_4px_0px_#070913]">
              {firstName.split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block hover:text-cyan-400 hover:-translate-y-2 transition-transform cursor-default"
                  onMouseEnter={() => sound.playClick()}
                >
                  {char}
                </span>
              ))}
            </span>

            <span className="name-last inline-block text-cyan-400 drop-shadow-[5px_5px_0px_#FF2E93] hover:text-amber-300 transition-colors">
              {lastName}
            </span>
          </h1>

          <div className="flex items-center gap-3 mt-2">
            <span className="tape bg-solar-gold text-black font-mono text-xs uppercase px-3 py-1 font-bold">
              SYS-ENG // V.2026.10
            </span>
            <span className="font-mono text-xs text-slate-400 tracking-wider">
              NIT ALLAHABAD (MNNIT) '27 • CODEFORCES EXPERT
            </span>
          </div>
        </div>

        {/* Intro Mission Briefing */}
        <div className="max-w-2xl mb-8">
          <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-sans font-medium">
            I architect resilient distributed systems, high-performance network engines, and{' '}
            <strong className="text-cyan-300 font-bold underline decoration-cyan-400/50 underline-offset-4">
              scalable backend architectures
            </strong>{' '}
            that thrive under mission-critical loads. Guardian at LeetCode{' '}
            <span className="text-amber-400 font-bold">(2158, Top 1.15%)</span> and Expert on Codeforces.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="font-marker text-pink-400 text-lg sm:text-xl transform -rotate-2 inline-block">
              scroll to blast off ↓
            </span>
            <div className="h-[2px] w-24 bg-gradient-to-r from-pink-500 to-transparent" />
          </div>
        </div>

        {/* CTA Buttons & Flight Dock */}
        <div className="hero-ctas flex flex-wrap items-center gap-4">
          <button
            onClick={() => {
              sound.playWarp();
              onScrollTo('experience');
            }}
            className="btn btn-primary"
            data-primary="true"
          >
            <span className="flex items-center gap-2">
              DEPLOY TRAJECTORY <ArrowDown size={18} />
            </span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onScrollTo('projects');
            }}
            className="btn btn-secondary"
          >
            <span className="flex items-center gap-2">
              ORBITAL MODULES <Terminal size={18} />
            </span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onScrollTo('contact');
            }}
            className="btn btn-outline"
          >
            <span className="flex items-center gap-2">
              COMM RELAY <Radio size={18} />
            </span>
          </button>
        </div>

        {/* Launchpad Platform Telemetry Dock */}
        <div className="mt-12 pt-6 border-t border-cyan-500/20 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-3 bg-[#0B0F19]/80 border border-slate-800 rounded">
            <div className="text-slate-400 text-[10px] uppercase">Distributed Systems</div>
            <div className="text-cyan-300 text-sm font-bold mt-0.5">High Concurrency</div>
            <div className="text-emerald-400 text-[10px]">Zero Drop Rate</div>
          </div>

          <div className="p-3 bg-[#0B0F19]/80 border border-slate-800 rounded">
            <div className="text-slate-400 text-[10px] uppercase">LeetCode Rating</div>
            <div className="text-amber-300 text-sm font-bold mt-0.5">2158 Guardian</div>
            <div className="text-slate-400 text-[10px]">Top 1.15% Global</div>
          </div>

          <div className="p-3 bg-[#0B0F19]/80 border border-slate-800 rounded">
            <div className="text-slate-400 text-[10px] uppercase">Codeforces</div>
            <div className="text-cyan-300 text-sm font-bold mt-0.5">1675 Expert</div>
            <div className="text-slate-400 text-[10px]">Algorithmic R&D</div>
          </div>

          <div className="p-3 bg-[#0B0F19]/80 border border-slate-800 rounded">
            <div className="text-slate-400 text-[10px] uppercase">JEE Main Rank</div>
            <div className="text-pink-400 text-sm font-bold mt-0.5">AIR 7889</div>
            <div className="text-slate-400 text-[10px]">99.33 Percentile</div>
          </div>
        </div>
      </div>
    </section>
  );
};
