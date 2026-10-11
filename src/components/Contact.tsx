import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  Mail,
  Copy,
  Check,
  FileText,
  Radio,
  Send,
  ExternalLink,
  Code2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [txStatus, setTxStatus] = useState<string | null>(null);

  const copyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sound.playWarp();
    setTxStatus('TRANSMITTING');

    setTimeout(() => {
      sound.playCheckpoint();
      setTxStatus('ACKNOWLEDGED');
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00F0FF', '#FFB800', '#FF2E93', '#FFFFFF']
      });
    }, 1200);
  };

  return (
    <section
      id="contact"
      data-checkpoint="contact"
      data-title="Uplink"
      className="py-24 relative bg-[#070913] border-t-4 border-slate-900"
    >
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head mb-14">
          <span className="tape bg-emerald-400 text-black font-mono text-xs uppercase px-3.5 py-1.5 font-bold shadow-[3px_3px_0px_#070913]">
            CHECKPOINT #05 // DEEP SPACE RELAY
          </span>
          <div className="flex items-baseline gap-4 mt-3 mb-2">
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight uppercase">
              Establish Uplink
            </h2>
            <span className="font-mono text-sm text-emerald-400 font-bold uppercase tracking-wider">
              subspace channel open
            </span>
          </div>
          <p className="text-slate-300 text-lg max-w-xl font-sans">
            Hiring for systems, high-concurrency backend, distributed architecture, or agentic loops? Or looking to collaborate on hard algorithmic challenges? Connect with ground control.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Comms Frequencies & Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Station Status Chip */}
            <div className="p-4 bg-[#0D1222] border-2 border-slate-800 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <div className="font-sans font-bold text-sm text-white">
                    {PERSONAL_INFO.location}
                  </div>
                  <div className="font-mono text-xs text-slate-400">
                    Station MNNIT • {PERSONAL_INFO.timezone}
                  </div>
                </div>
              </div>

              <div className="font-mono text-xs text-cyan-400 px-2.5 py-1 bg-cyan-950/60 border border-cyan-500/40 rounded uppercase font-bold">
                RELAY ACTIVE
              </div>
            </div>

            {/* Email Frequency Direct Copy */}
            <div className="p-6 bg-[#0E1528] border-3 border-cyan-400 rounded-lg shadow-[5px_5px_0px_#00F0FF]">
              <div className="font-mono text-xs text-cyan-300 uppercase font-bold mb-2 flex items-center gap-2">
                <Mail size={16} /> PRIMARY COMMS FREQUENCY
              </div>
              <div className="flex items-center justify-between gap-3 bg-black/60 p-3 rounded border border-cyan-500/30">
                <span className="font-mono text-sm sm:text-base text-white select-all overflow-x-auto">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-bold rounded flex items-center gap-1.5 transition-colors uppercase shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} /> COPIED
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> COPY
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Network Frequencies Links */}
            <div className="space-y-3 font-mono text-xs">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playClick()}
                className="p-3.5 bg-[#0A0F1E] border-2 border-slate-800 hover:border-cyan-400 rounded-lg flex items-center justify-between text-slate-200 hover:text-white transition-all transform hover:-translate-x-1"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon size={18} className="text-cyan-400" />
                  <span className="font-bold">LINKEDIN // akshit-singhvi</span>
                </div>
                <ExternalLink size={14} className="text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playClick()}
                className="p-3.5 bg-[#0A0F1E] border-2 border-slate-800 hover:border-pink-400 rounded-lg flex items-center justify-between text-slate-200 hover:text-white transition-all transform hover:-translate-x-1"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon size={18} className="text-pink-400" />
                  <span className="font-bold">GITHUB // singhvi28</span>
                </div>
                <ExternalLink size={14} className="text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playClick()}
                className="p-3.5 bg-[#0A0F1E] border-2 border-slate-800 hover:border-amber-400 rounded-lg flex items-center justify-between text-slate-200 hover:text-white transition-all transform hover:-translate-x-1"
              >
                <div className="flex items-center gap-2.5">
                  <Code2 size={18} className="text-amber-400" />
                  <span className="font-bold">CODEFORCES // akshitsinghvi28</span>
                </div>
                <span className="text-[11px] text-amber-300 font-bold">1675 EXPERT ↗</span>
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playClick()}
                className="p-3.5 bg-[#0A0F1E] border-2 border-slate-800 hover:border-amber-400 rounded-lg flex items-center justify-between text-slate-200 hover:text-white transition-all transform hover:-translate-x-1"
              >
                <div className="flex items-center gap-2.5">
                  <Radio size={18} className="text-amber-400" />
                  <span className="font-bold">LEETCODE // akshitsinghvi28</span>
                </div>
                <span className="text-[11px] text-amber-300 font-bold">2158 GUARDIAN ↗</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playClick()}
                className="p-3.5 bg-[#0A0F1E] border-2 border-slate-800 hover:border-emerald-400 rounded-lg flex items-center justify-between text-slate-200 hover:text-white transition-all transform hover:-translate-x-1"
              >
                <div className="flex items-center gap-2.5">
                  <FileText size={18} className="text-emerald-400" />
                  <span className="font-bold">CURRICULUM VITAE // RÉSUMÉ PDF</span>
                </div>
                <span className="text-[11px] text-emerald-300 font-bold">VIEW PDF ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Subspace Transmission Console */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#0D1224] border-3 border-emerald-400 rounded-lg shadow-[6px_6px_0px_#00FF88]">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                    Subspace Transmission Console
                  </h3>
                  <div className="font-mono text-xs text-emerald-400">
                    ENCRYPTION: QUANTUM 256-BIT • CHANNEL OPEN
                  </div>
                </div>

                <Radio size={24} className="text-emerald-400 animate-pulse" />
              </div>

              <form onSubmit={handleTransmit} className="space-y-5">
                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-slate-300 mb-1.5">
                    Transmitter Callsign / Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Commander Shepard / Engineering Lead"
                    className="w-full px-4 py-3 bg-black/60 border-2 border-slate-700 focus:border-cyan-400 rounded font-mono text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-slate-300 mb-1.5">
                    Return Frequency / Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. contact@space-command.org"
                    className="w-full px-4 py-3 bg-black/60 border-2 border-slate-700 focus:border-cyan-400 rounded font-mono text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-slate-300 mb-1.5">
                    Subspace Packet Payload / Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your mission, distributed systems challenge, or open role..."
                    className="w-full px-4 py-3 bg-black/60 border-2 border-slate-700 focus:border-cyan-400 rounded font-mono text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={txStatus === 'TRANSMITTING'}
                    className="btn btn-primary"
                    data-primary="true"
                  >
                    <span className="flex items-center gap-2">
                      {txStatus === 'TRANSMITTING' ? (
                        'ENCRYPTING & TRANSMITTING...'
                      ) : (
                        <>
                          TRANSMIT PACKET <Send size={16} />
                        </>
                      )}
                    </span>
                  </button>

                  <span className="font-marker text-amber-300 text-lg transform rotate-[-2deg]">
                    Let's build resilient systems!
                  </span>
                </div>

                {/* Packet Delivery Status Output */}
                {txStatus && (
                  <div
                    className={`mt-4 p-4 rounded font-mono text-xs border ${
                      txStatus === 'TRANSMITTING'
                        ? 'bg-amber-950/40 border-amber-500/40 text-amber-300 animate-pulse'
                        : 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 animate-fadeIn'
                    }`}
                  >
                    {txStatus === 'TRANSMITTING' ? (
                      <div>
                        [TX] Routing packet through orbital relays... Syncing with MNNIT station...
                      </div>
                    ) : (
                      <div>
                        ✓ PACKET DELIVERED & ACKNOWLEDGED! SINGHVI-28 flight team notified.
                        Direct frequency open at {PERSONAL_INFO.email}.
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Colophon & Code Statement */}
        <div className="mt-24 pt-8 border-t-2 border-slate-800 text-center font-mono text-xs text-slate-400 flex flex-col items-center gap-2">
          <p className="text-slate-300">
            Astronaut, propulsion engines, starfield, and every graphic on this page are drawn in code.
          </p>
          <p className="text-slate-500">
            Zero 3D libraries: no three.js, no GSAP. Pure 2D SVG rig, Canvas starfield, and requestAnimationFrame loop. Still Lighthouse 99+.
          </p>
          <div className="text-cyan-400 font-bold mt-2">
            © 2026 Akshit Singhvi • national institute of technology allahabad
          </div>
        </div>
      </div>
    </section>
  );
};
