import React from 'react';
import { BADGES_DATA } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { Award, Star, ExternalLink } from 'lucide-react';

export const Badges: React.FC = () => {
  return (
    <section
      id="badges"
      data-checkpoint="badges"
      data-title="Commendations"
      className="py-24 relative bg-[#090D1C] border-t-4 border-slate-900"
    >
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head mb-14">
          <span className="tape bg-purple-500 text-white font-mono text-xs uppercase px-3.5 py-1.5 font-bold shadow-[3px_3px_0px_#070913]">
            CHECKPOINT #04 // FLIGHT COMMENDATIONS
          </span>
          <div className="flex items-baseline gap-4 mt-3 mb-2">
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight uppercase">
              Flight Badges
            </h2>
            <span className="font-mono text-sm text-purple-400 font-bold uppercase tracking-wider">
              trading cards
            </span>
          </div>
          <p className="text-slate-300 text-lg max-w-xl font-sans">
            Competitive honors, contest rankings, and engineering milestones collected like astronaut trading cards. Starred rares mark Guardian and Expert classifications.
          </p>
        </div>

        {/* Trading Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BADGES_DATA.map((badge, idx) => (
            <a
              key={badge.id}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playClick()}
              className="holo-card group block relative p-6 bg-[#0E1326] border-2 rounded-lg transition-all duration-200 transform hover:-translate-y-2 hover:rotate-1"
              style={{
                borderColor: badge.color,
                boxShadow: `5px 5px 0px ${badge.color}`
              }}
            >
              {/* Rare Foil Tag */}
              {badge.rare && (
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 bg-amber-400 text-black font-mono text-[10px] font-bold rounded uppercase shadow-sm">
                  <Star size={10} fill="currentColor" /> RARE
                </div>
              )}

              {/* Card Serial Number */}
              <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: badge.color }}
                />
                <span>PASS #{idx + 1 < 10 ? `00${idx + 1}` : `0${idx + 1}`} / 005</span>
              </div>

              {/* Icon / Emblem */}
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-black/60 border border-white/10 group-hover:scale-110 transition-transform">
                <Award size={26} style={{ color: badge.color }} />
              </div>

              {/* Title & Platform */}
              <h3 className="font-display text-2xl uppercase tracking-wide text-white group-hover:text-cyan-300 transition-colors mb-1">
                {badge.title}
              </h3>
              <div
                className="font-mono text-xs font-bold uppercase tracking-wider mb-4"
                style={{ color: badge.color }}
              >
                {badge.platform}
              </div>

              {/* Core Metric Banner */}
              <div className="p-3 bg-black/60 rounded border border-white/10 font-mono mb-4">
                <div className="text-[10px] text-slate-400 uppercase">CLASSIFICATION</div>
                <div className="text-sm font-bold text-white mt-0.5">{badge.rank}</div>
              </div>

              {/* Sub-Metric / Details */}
              <p className="font-sans text-xs text-slate-300 leading-relaxed mb-6">
                {badge.metric}
              </p>

              {/* Card Footer Link */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 font-mono text-xs text-slate-400 group-hover:text-white">
                <span>VERIFY ON-CHAIN ↗</span>
                <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
