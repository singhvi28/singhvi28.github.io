import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModule } from '../types';
import { sound } from '../utils/audio';
import {
  X,
  ExternalLink,
  Terminal,
  Activity,
  Cpu,
  Layers,
  Copy,
  Check
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ProjectModule | null>(null);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [simOutput, setSimOutput] = useState<Record<string, string>>({});

  const openDeck = (project: ProjectModule) => {
    sound.playCheckpoint();
    setActiveModal(project);
  };

  const closeModal = () => {
    sound.playClick();
    setActiveModal(null);
  };

  const copyCommand = (cmd: string) => {
    sound.playClick();
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const runSimulation = (projectId: string) => {
    sound.playWarp();
    setSimOutput((prev) => ({
      ...prev,
      [projectId]: 'RUNNING'
    }));

    setTimeout(() => {
      sound.playStamp();
      if (projectId === 'collabdocs') {
        setSimOutput((prev) => ({
          ...prev,
          [projectId]:
            '✓ QUIC handshake completed in 1.8ms\n✓ Connected 200 editors over WebTransport\n✓ Yjs CRDT state vectors merged without conflict\n✓ Redis WAL compacted 14,200 deltas to disk (SET NX)'
        }));
      } else if (projectId === 'SedrisDB') {
        setSimOutput((prev) => ({
          ...prev,
          [projectId]:
            '✓ Linux epoll reactor online on port 6379\n✓ Custom RESP parser zero-copy read: 120,000 ops/sec\n✓ Flat hash map + Slab node pool allocator active\n✓ O(1) LRU eviction verified: 0 memory fragmentation'
        }));
      } else if (projectId === 'l7-load-balancer') {
        setSimOutput((prev) => ({
          ...prev,
          [projectId]:
            '✓ Linux epoll socket pool online (4 workers)\n✓ HTTP/1.1 wire parser zero-copy parse: 3,250 req/s\n✓ Health check: backend-01: OK, backend-02: OK\n✓ 0 drops across 100,000 requests'
        }));
      } else if (projectId === 'agentic-diagnostic-tool') {
        setSimOutput((prev) => ({
          ...prev,
          [projectId]:
            '✓ Neo4j GraphRAG topology retrieved: 42 call sites\n✓ pgvector semantic error trace matched: Session #204\n✓ FastMCP AST inspection validated patch syntax\n✓ Automated test suite PASSED: unified diff generated'
        }));
      } else if (projectId === 'agentic-pipeline') {
        setSimOutput((prev) => ({
          ...prev,
          [projectId]:
            '✓ ARQ worker picked up task #8912\n✓ Multi-Arm Bandit selected Arm 14 (Beta-Bernoulli)\n✓ Flesch readability score: 68.4 (Target band passed)\n✓ Critique passed with 0 constraint violations'
        }));
      } else if (projectId === 'cf-clone') {
        setSimOutput((prev) => ({
          ...prev,
          [projectId]:
            '✓ RabbitMQ dispatch to submit_worker pool\n✓ Docker sandbox spawned (memory: 256MB, CPU: 1.0)\n✓ Ran 40 hidden test cases: 0.08s execution time\n✓ WebSocket broadcast: Verdict ACCEPTED (AC)'
        }));
      } else {
        setSimOutput((prev) => ({
          ...prev,
          [projectId]:
            '✓ Test harness completed successfully\n✓ Benchmarks verified against SLA'
        }));
      }
    }, 800);
  };

  return (
    <section
      id="projects"
      data-checkpoint="projects"
      data-title="Modules"
      className="py-24 relative bg-[#090D1A] border-t-4 border-slate-900"
    >
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head mb-14">
          <span className="tape bg-pink-500 text-white font-mono text-xs uppercase px-3.5 py-1.5 font-bold shadow-[3px_3px_0px_#070913]">
            CHECKPOINT #02 // ORBITAL MODULES
          </span>
          <div className="flex items-baseline gap-4 mt-3 mb-2">
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight uppercase">
              Projects
            </h2>
            <span className="font-mono text-sm text-pink-400 font-bold uppercase tracking-wider">
              the orbital decks
            </span>
          </div>
          <p className="text-slate-300 text-lg max-w-2xl font-sans">
            Orbital systems engineered from raw fundamentals. Click any module deck to decrypt flight debriefs, architecture schematics, and live benchmark telemetry.
          </p>
        </div>

        {/* The Decks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((proj) => (
            <article
              key={proj.id}
              className="deck-card group relative cursor-pointer"
              onClick={() => openDeck(proj)}
            >
              <div
                className="deck-inner relative rounded-lg p-6 sm:p-8 border-3 transition-all duration-200 transform group-hover:-translate-y-2 group-hover:rotate-[-1deg]"
                style={{
                  backgroundColor: proj.deckBg,
                  borderColor: proj.accentColor,
                  boxShadow: `6px 6px 0px ${proj.accentColor}`
                }}
              >
                {/* Structural Module Rivets */}
                <div className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full bg-slate-400 border border-black" />
                <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-slate-400 border border-black" />
                <div className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full bg-slate-400 border border-black" />
                <div className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full bg-slate-400 border border-black" />

                {/* Header bar */}
                <div className="flex items-center justify-between gap-2 mb-4 border-b border-white/10 pb-3">
                  <div className="font-mono text-xs font-bold text-slate-300 flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ backgroundColor: proj.accentColor }}
                    />
                    <span>{proj.code}</span>
                  </div>

                  <span
                    className="font-mono text-[11px] font-bold tracking-wider px-2 py-0.5 rounded uppercase"
                    style={{
                      backgroundColor: `${proj.accentColor}20`,
                      color: proj.accentColor,
                      border: `1px solid ${proj.accentColor}`
                    }}
                  >
                    {proj.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase mb-1">
                  {proj.title}
                </h3>
                <div
                  className="font-mono text-xs font-semibold mb-4"
                  style={{ color: proj.accentColor }}
                >
                  {proj.subtitle}
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                  {proj.summary}
                </p>

                {/* Vector Module Blueprint Schematic */}
                <div className="my-5 p-4 rounded bg-black/50 border border-white/10 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Cpu size={14} style={{ color: proj.accentColor }} />
                      ARCH TELEMETRY
                    </span>
                    <span className="text-emerald-400">ONLINE</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    {proj.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="bg-slate-900/80 p-2 rounded border border-slate-800">
                        <div className="text-slate-400 text-[10px]">{m.label}</div>
                        <div className="font-bold text-white mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 bg-black/40 border border-white/15 text-slate-300 font-mono text-[11px] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Footer Callout */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 font-mono text-xs font-bold">
                  <span className="text-slate-400 flex items-center gap-1.5 group-hover:text-white transition-colors">
                    <Terminal size={14} /> DECRYPT FLIGHT DEBRIEF →
                  </span>
                  <span
                    className="px-2 py-0.5 rounded text-[10px] uppercase font-bold"
                    style={{
                      backgroundColor: proj.accentColor,
                      color: '#070913'
                    }}
                  >
                    INSPECT
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ================= MODAL / FLIGHT DEBRIEF DIALOG ================= */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0A0E1C] border-3 rounded-lg p-6 sm:p-8 text-white shadow-[8px_8px_0px_#000]"
            style={{ borderColor: activeModal.accentColor }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 rounded text-slate-300 hover:text-white transition-colors"
              aria-label="Close debrief dialog"
            >
              <X size={20} />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-3 mb-2 font-mono text-xs">
              <span
                className="px-2.5 py-0.5 rounded font-bold uppercase"
                style={{
                  backgroundColor: activeModal.accentColor,
                  color: '#070913'
                }}
              >
                {activeModal.code}
              </span>
              <span className="text-slate-400">{activeModal.badge}</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-white mb-1">
              {activeModal.title}
            </h3>
            <div
              className="font-mono text-sm font-bold mb-6"
              style={{ color: activeModal.accentColor }}
            >
              {activeModal.subtitle}
            </div>

            {/* The Mission Problem */}
            <div className="mb-6 p-4 rounded bg-[#0F1424] border border-slate-800">
              <div className="font-mono text-xs uppercase font-bold text-amber-400 mb-1 flex items-center gap-2">
                <Activity size={14} /> THE MISSION BOTTLENECK (PROBLEM)
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                {activeModal.problem}
              </p>
            </div>

            {/* What Was Built / Architecture */}
            <div className="mb-6">
              <div className="font-mono text-xs uppercase font-bold text-cyan-300 mb-3 flex items-center gap-2">
                <Layers size={14} /> ARCHITECTURE SPECIFICATION
              </div>
              <ul className="space-y-2.5 font-sans text-sm text-slate-300 list-none p-0">
                {activeModal.architecture.map((arch, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold mt-0.5">✦</span>
                    <span className="leading-relaxed">{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benchmarks & Metrics Grid */}
            <div className="mb-6">
              <div className="font-mono text-xs uppercase font-bold text-pink-400 mb-3 flex items-center gap-2">
                <Cpu size={14} /> BENCHMARK TELEMETRY
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeModal.metrics.map((met, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 bg-black/60 rounded border border-slate-800 font-mono"
                  >
                    <div className="text-[10px] text-slate-400 uppercase">{met.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-1">
                      {met.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-xs text-slate-400 font-mono">
                Observation: <span className="text-slate-200">{activeModal.benchmarks}</span>
              </div>
            </div>

            {/* Interactive Terminal Simulator */}
            {activeModal.demoCommand && (
              <div className="mb-6 p-4 rounded bg-[#05070E] border-2 border-slate-800 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="flex items-center gap-2">
                    <Terminal size={14} className="text-emerald-400" />
                    LIVE HARNESS SIMULATOR
                  </span>

                  <button
                    onClick={() => copyCommand(activeModal.demoCommand!)}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {copiedCmd === activeModal.demoCommand ? (
                      <>
                        <Check size={12} className="text-emerald-400" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={12} /> Copy
                      </>
                    )}
                  </button>
                </div>

                <div className="p-2.5 bg-black rounded text-cyan-300 font-mono text-xs overflow-x-auto select-all">
                  $ {activeModal.demoCommand}
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <button
                    onClick={() => runSimulation(activeModal.id)}
                    className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono text-xs rounded transition-colors uppercase"
                  >
                    RUN HARNESS TEST
                  </button>

                  <span className="text-[10px] text-slate-500">
                    Bypasses network sandbox
                  </span>
                </div>

                {simOutput[activeModal.id] && (
                  <div className="mt-3 p-3 bg-slate-950 border border-cyan-500/30 rounded font-mono text-[11px] whitespace-pre-line text-emerald-400 animate-fadeIn">
                    {simOutput[activeModal.id] === 'RUNNING' ? (
                      <span className="text-amber-400 animate-pulse">
                        [EXEC] Launching test harness...
                      </span>
                    ) : (
                      simOutput[activeModal.id]
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 font-mono text-xs">
              <a
                href={activeModal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2"
                data-primary="true"
              >
                <GithubIcon size={16} /> VIEW SOURCE CODE <ExternalLink size={14} />
              </a>

              <button
                onClick={closeModal}
                className="btn btn-secondary"
              >
                CLOSE DEBRIEF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
