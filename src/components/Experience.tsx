import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { sound } from '../utils/audio';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [stampedRows, setStampedRows] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rowIndex = Number(entry.target.getAttribute('data-row-index'));
            if (!stampedRows[rowIndex]) {
              setStampedRows((prev) => ({ ...prev, [rowIndex]: true }));
              sound.playStamp();
            }
          }
        });
      },
      { threshold: 0.35 }
    );

    const rows = document.querySelectorAll('.experience-table-row');
    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, [stampedRows]);

  const toggleExpand = (index: number) => {
    sound.playClick();
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <section
      id="experience"
      data-checkpoint="experience"
      data-title="Flight Log"
      ref={sectionRef}
      className="py-24 relative border-t-4 border-slate-900 bg-[#070A14]"
    >
      {/* SVG Displacement Filter for Vintage Ink Mission Stamps */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="cosmic-stamp-ink" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="3"
              seed="11"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.8" />
          </filter>
        </defs>
      </svg>

      <div className="wrap">
        {/* Section Header */}
        <div className="section-head mb-12">
          <span className="tape bg-cyan-400 text-black font-mono text-xs uppercase px-3.5 py-1.5 font-bold shadow-[3px_3px_0px_#070913]">
            CHECKPOINT #01 // FLIGHT LOG
          </span>
          <div className="flex items-baseline gap-4 mt-3 mb-2">
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight uppercase">
              Flight Log
            </h2>
            <span className="font-mono text-sm text-cyan-400 font-bold uppercase tracking-wider">
              trajectory record
            </span>
          </div>
          <p className="text-slate-300 text-lg max-w-xl font-sans">
            Where the thrusters burned, systems were stress-tested, and architectures went into orbit.
          </p>
        </div>

        {/* Experience Log Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b-2 border-slate-800 font-mono text-xs text-slate-400 uppercase tracking-widest">
                <th className="py-4 pr-6 w-[22%]">Epoch / When</th>
                <th className="py-4 px-6 w-[28%]">Sector / Station</th>
                <th className="py-4 pl-6 w-[50%]">Payload Deployed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {EXPERIENCE_DATA.map((row, idx) => {
                const isStamped = stampedRows[idx];
                const isExpanded = expandedRow === idx;

                return (
                  <tr
                    key={idx}
                    data-row-index={idx}
                    className="experience-table-row group hover:bg-[#0E1528]/60 transition-colors align-top"
                  >
                    {/* Period */}
                    <td className="py-8 pr-6 font-mono text-sm text-slate-300">
                      <div className="font-bold flex items-center gap-2">
                        {row.period}
                        {row.isCurrent && (
                          <span className="inline-block px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 text-[10px] rounded uppercase font-bold animate-pulse">
                            Active
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Role & Org */}
                    <td className="py-8 px-6">
                      <div className="font-sans font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                        {row.role}
                      </div>

                      <div className="text-sm text-slate-300 mt-1 font-mono flex items-center gap-1.5">
                        {row.orgUrl ? (
                          <a
                            href={row.orgUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-400 underline underline-offset-2 flex items-center gap-1"
                          >
                            {row.organization} <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span>{row.organization}</span>
                        )}
                      </div>

                      <div className="mt-2.5 inline-block text-[11px] font-mono font-bold tracking-wider px-2 py-0.5 bg-[#172036] text-amber-300 border border-amber-400/40 rounded uppercase">
                        {row.badge}
                      </div>
                    </td>

                    {/* What landed + Stamp */}
                    <td className="py-8 pl-6 relative">
                      <div className="flex flex-col lg:flex-row justify-between gap-6">
                        <div className="flex-1">
                          <ul className="space-y-3 font-sans text-slate-300 text-[15px] leading-relaxed list-none p-0">
                            {row.highlights.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2.5">
                                <span className="text-cyan-400 font-bold mt-1 select-none">▸</span>
                                <span>{point}</span>
                              </li>
                            ))}

                            {isExpanded &&
                              row.extraHighlights &&
                              row.extraHighlights.map((extra, eIdx) => (
                                <li
                                  key={`extra-${eIdx}`}
                                  className="flex items-start gap-2.5 text-slate-300/90 animate-fadeIn"
                                >
                                  <span className="text-pink-400 font-bold mt-1 select-none">✦</span>
                                  <span>{extra}</span>
                                </li>
                              ))}
                          </ul>

                          {row.extraHighlights && (
                            <button
                              onClick={() => toggleExpand(idx)}
                              className="mt-4 font-mono text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 py-1 px-2.5 bg-slate-900 border border-slate-700 rounded transition-colors"
                            >
                              {isExpanded ? (
                                <>
                                  Collapse telemetry <ChevronUp size={14} />
                                </>
                              ) : (
                                <>
                                  +{row.extraHighlights.length} More telemetry logs{' '}
                                  <ChevronDown size={14} />
                                </>
                              )}
                            </button>
                          )}
                        </div>

                        {/* Interactive Vintage Mission Stamp Patch */}
                        <div className="flex-shrink-0 self-start lg:self-center">
                          <div
                            className={`stamp-container select-none ${
                              isStamped ? 'stamp-stamped' : 'opacity-0 scale-150'
                            }`}
                            style={{
                              color: row.stamp.color,
                              '--stamp-color': row.stamp.color
                            } as React.CSSProperties}
                          >
                            <svg viewBox="0 0 140 140" className="w-28 h-28 sm:w-32 sm:h-32">
                              <defs>
                                <path
                                  id={`rim-path-${idx}`}
                                  d="M70,70 m-55,0 a55,55 0 1,1 110,0 a55,55 0 1,1 -110,0"
                                  fill="none"
                                />
                              </defs>
                              <g
                                filter="url(#cosmic-stamp-ink)"
                                fill={row.stamp.color}
                                stroke={row.stamp.color}
                              >
                                <circle
                                  cx="70"
                                  cy="70"
                                  r="66"
                                  fill="none"
                                  strokeWidth="3.5"
                                />
                                <circle
                                  cx="70"
                                  cy="70"
                                  r="46"
                                  fill="none"
                                  strokeWidth="1.8"
                                />
                                <text
                                  stroke="none"
                                  fontFamily="monospace"
                                  fontWeight="700"
                                  fontSize="9.5"
                                  letterSpacing="1.4"
                                >
                                  <textPath
                                    href={`#rim-path-${idx}`}
                                    textLength="340"
                                    lengthAdjust="spacingAndGlyphs"
                                  >
                                    {row.stamp.rimText}
                                  </textPath>
                                </text>
                                <text
                                  stroke="none"
                                  x="70"
                                  y="73"
                                  textAnchor="middle"
                                  fontFamily="Orbitron, Impact, sans-serif"
                                  fontWeight="900"
                                  fontSize="24"
                                >
                                  {row.stamp.centerValue}
                                </text>
                                <text
                                  stroke="none"
                                  x="70"
                                  y="91"
                                  textAnchor="middle"
                                  fontFamily="monospace"
                                  fontWeight="700"
                                  fontSize="8.5"
                                  letterSpacing="1.2"
                                >
                                  {row.stamp.bottomLabel}
                                </text>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
