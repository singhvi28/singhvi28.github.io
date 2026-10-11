import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { Zap, Gauge, Rocket } from 'lucide-react';

export const Stack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Avionics' },
    { id: 'core', label: 'Core Engines (Backend & Systems)' },
    { id: 'protocols', label: 'Protocols & Networking' },
    { id: 'algo', label: 'Algorithmic & Agentic' },
    { id: 'infra', label: 'Infra & Reliability' }
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const filterCategory = (id: string) => {
    sound.playClick();
    setSelectedCategory(id);
  };

  return (
    <section
      id="stack"
      data-checkpoint="stack"
      data-title="Avionics"
      className="py-24 relative bg-[#070A14] border-t-4 border-slate-900 overflow-hidden"
    >
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head mb-12">
          <span className="tape bg-amber-400 text-black font-mono text-xs uppercase px-3.5 py-1.5 font-bold shadow-[3px_3px_0px_#070913]">
            CHECKPOINT #03 // PROPULSION AVIONICS
          </span>
          <div className="flex items-baseline gap-4 mt-3 mb-2">
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight uppercase">
              Avionics Stack
            </h2>
            <span className="font-mono text-sm text-amber-400 font-bold uppercase tracking-wider">
              specific impulse (Isp)
            </span>
          </div>
          <p className="text-slate-300 text-lg max-w-2xl font-sans">
            Specific Impulse (I<sub>sp</sub>) measures propulsion efficiency. Here it signifies battle-tested reliability: <strong className="text-amber-300">450s is mission-critical daily ignition</strong>, <strong className="text-cyan-300">380s has propelled shipped architectures</strong>, and <strong className="text-pink-300">320s is auxiliary built payload</strong>.
          </p>
        </div>

        {/* Thrust Tier Legend */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 font-mono text-xs">
          <div className="p-3.5 bg-[#0F1424] border-2 border-amber-400/50 rounded shadow-[3px_3px_0px_#FFB800] flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
              450s
            </div>
            <div>
              <div className="font-bold text-white uppercase">Primary Thrusters</div>
              <div className="text-slate-400 text-[11px]">Daily systems driver</div>
            </div>
          </div>

          <div className="p-3.5 bg-[#0F1424] border-2 border-cyan-400/50 rounded shadow-[3px_3px_0px_#00F0FF] flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-cyan-400/20 text-cyan-400 flex items-center justify-center font-bold">
              380s
            </div>
            <div>
              <div className="font-bold text-white uppercase">Orbital Maneuver</div>
              <div className="text-slate-400 text-[11px]">Shipped in real systems</div>
            </div>
          </div>

          <div className="p-3.5 bg-[#0F1424] border-2 border-pink-400/50 rounded shadow-[3px_3px_0px_#FF2E93] flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-pink-400/20 text-pink-400 flex items-center justify-center font-bold">
              320s
            </div>
            <div>
              <div className="font-bold text-white uppercase">Auxiliary Payload</div>
              <div className="text-slate-400 text-[11px]">Built with & tested</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => filterCategory(cat.id)}
              className={`font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-2 border-2 transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-400 text-black border-cyan-400 shadow-[3px_3px_0px_#FFF]'
                  : 'bg-black/50 text-slate-300 border-slate-700 hover:border-slate-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => {
            const isHigh = skill.isp === '450s';
            const isMid = skill.isp === '380s';
            const badgeColor = isHigh
              ? 'text-amber-400 border-amber-400/40 bg-amber-400/10'
              : isMid
              ? 'text-cyan-400 border-cyan-400/40 bg-cyan-400/10'
              : 'text-pink-400 border-pink-400/40 bg-pink-400/10';

            return (
              <div
                key={idx}
                onMouseEnter={() => sound.playClick()}
                className="group p-4 bg-[#0B0F1C] border-2 border-slate-800 hover:border-cyan-400 rounded transition-all duration-150 transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_#00F0FF]"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-display text-lg text-white group-hover:text-cyan-300 uppercase tracking-wide">
                    {skill.name}
                  </span>

                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${badgeColor}`}
                  >
                    {skill.isp} I<sub>sp</sub>
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                  <span className="text-slate-300">{skill.level}</span>
                  <span className="text-[11px] text-slate-500">{skill.shippedIn}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Continuous Propulsion Marquee Ticker */}
      <div className="mt-16 py-3 bg-black border-y-2 border-slate-800 overflow-hidden font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 select-none">
        <div className="marquee-content whitespace-nowrap flex gap-8 animate-marquee">
          <span>⚡ DISTRIBUTED SYSTEMS</span>
          <span>•</span>
          <span>HIGH-CONCURRENCY BACKENDS</span>
          <span>•</span>
          <span>LOW-LATENCY NETWORKING</span>
          <span>•</span>
          <span>ASYNC ARCHITECTURES</span>
          <span>•</span>
          <span>EVENT-DRIVEN PROTOCOLS</span>
          <span>•</span>
          <span>ALGORITHMIC OPTIMIZATION</span>
          <span>•</span>
          <span>CONTAINERIZATION & LINUX</span>
          <span>•</span>
          <span>LEETCODE GUARDIAN (2158)</span>
          <span>•</span>
          <span>CODEFORCES EXPERT (1675)</span>
          <span>•</span>
          <span>DISTRIBUTED SYSTEMS</span>
          <span>•</span>
          <span>HIGH-CONCURRENCY BACKENDS</span>
          <span>•</span>
          <span>LOW-LATENCY NETWORKING</span>
          <span>•</span>
          <span>ASYNC ARCHITECTURES</span>
        </div>
      </div>
    </section>
  );
};
