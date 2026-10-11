import React, { useEffect, useState, useRef, useCallback } from 'react';
import { CHECKPOINTS } from '../data/portfolioData';
import { AstronautRig } from './AstronautRig';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';
import { ArrowUp, Volume2, VolumeX, Trophy } from 'lucide-react';

interface OrbitLayerProps {
  activeSector: string;
  onNavigate: (id: string) => void;
}

export const OrbitLayer: React.FC<OrbitLayerProps> = ({ activeSector, onNavigate }) => {
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1
  const [velocity, setVelocity] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.getMuted());
  const [bannerNotice, setBannerNotice] = useState<{ title: string; sector: string } | null>(null);

  const lastScrollY = useRef(0);
  const lastTime = useRef(performance.now());
  const railTrackRef = useRef<HTMLDivElement | null>(null);
  const activeSectorRef = useRef(activeSector);
  activeSectorRef.current = activeSector;

  // Track scroll position & calculate velocity
  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;
      setScrollProgress(progress);

      const now = performance.now();
      const dt = (now - lastTime.current) / 1000;
      if (dt > 0.016) {
        const vel = (scrollY - lastScrollY.current) / dt;
        setVelocity(vel * 0.04);
        lastScrollY.current = scrollY;
        lastTime.current = now;
      }

      if (!hasInteracted && scrollY > 40) {
        setHasInteracted(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Damping loop for velocity
    const dampLoop = () => {
      setVelocity((prev) => (Math.abs(prev) > 0.05 ? prev * 0.9 : 0));
      animId = requestAnimationFrame(dampLoop);
    };
    animId = requestAnimationFrame(dampLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, [hasInteracted]);

  // Checkpoint banner alert when active sector changes
  useEffect(() => {
    const cp = CHECKPOINTS.find((c) => c.id === activeSector);
    if (cp && cp.id !== 'start') {
      setBannerNotice({ title: cp.title, sector: cp.sector });
      sound.playCheckpoint();

      if (cp.id === 'contact') {
        confetti({
          particleCount: 50,
          spread: 50,
          origin: { x: 0.9, y: 0.8 },
          colors: ['#00F0FF', '#FFB800', '#FF2E93']
        });
      }

      const timer = setTimeout(() => {
        setBannerNotice(null);
      }, 2600);
      return () => clearTimeout(timer);
    }
  }, [activeSector]);

  // Dragging logic along the vertical orbital track
  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setHasInteracted(true);
    sound.playClick();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || !railTrackRef.current) return;
      const rect = railTrackRef.current.getBoundingClientRect();
      const relativeY = Math.min(Math.max(0, e.clientY - rect.top), rect.height);
      const newProgress = rect.height > 0 ? relativeY / rect.height : 0;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: newProgress * maxScroll,
        behavior: 'auto'
      });
    },
    [isDragging]
  );

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const scrollToTop = () => {
    sound.playWarp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Telemetry bubble message
  const getBubbleText = () => {
    if (isDragging) return 'MANEUVERING IN ZERO-G 🛸';
    if (scrollProgress < 0.05) return 'T-MINUS 0... READY TO LAUNCH 🚀';
    if (activeSector === 'experience') return 'SECTOR 01: LOGGING 3,250 REQ/S ⚡';
    if (activeSector === 'projects') return 'SECTOR 02: QUIC + CRDT MODULES 🛠️';
    if (activeSector === 'stack') return 'SECTOR 03: 450s Isp THRUSTERS ON 🔥';
    if (activeSector === 'badges') return 'SECTOR 04: LEETCODE GUARDIAN 2158 ⭐';
    if (activeSector === 'contact') return 'SECTOR 05: TOUCHDOWN ACHIEVED 🏆';
    return `ORBITAL TRAJECTORY: ${Math.round(scrollProgress * 100)}%`;
  };

  return (
    <>
      {/* ================= WAYPOINT CLEARED POPUP BANNER ================= */}
      {bannerNotice && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-bounceIn">
          <div className="px-6 py-3 bg-[#0B0F1E] border-3 border-cyan-400 rounded-lg shadow-[6px_6px_0px_#FF2E93] text-white flex items-center gap-3 font-mono text-sm">
            <Trophy className="text-amber-400 shrink-0" size={24} />
            <div>
              <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">
                WAYPOINT CLEARED // {bannerNotice.sector}
              </div>
              <div className="font-display text-lg uppercase tracking-wider text-white">
                {bannerNotice.title}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= DESKTOP VERTICAL FLIGHT RAIL ================= */}
      <nav
        className="orbit-rail fixed z-40 hidden md:block select-none"
        style={{
          top: '12vh',
          bottom: '14vh',
          right: '32px',
          width: '120px'
        }}
        aria-label="Orbital Waypoint Navigation"
      >
        {/* Track Line */}
        <div
          ref={railTrackRef}
          className="relative h-full w-full flex justify-end pr-8"
        >
          {/* Background Rail Line */}
          <div className="absolute right-8 top-0 bottom-0 w-1.5 bg-slate-800 rounded-full" />

          {/* Glowing Fill Line */}
          <div
            className="absolute right-8 top-0 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 via-pink-500 to-amber-400 shadow-[0_0_8px_#00F0FF]"
            style={{ height: `${scrollProgress * 100}%` }}
          />

          {/* Checkpoint Nodes along rail */}
          <ul className="absolute inset-0 list-none p-0 m-0">
            {CHECKPOINTS.map((cp, idx) => {
              const nodePercent = (idx / (CHECKPOINTS.length - 1)) * 100;
              const isPassed = scrollProgress * 100 >= nodePercent - 3;
              const isCurrent = activeSector === cp.id;

              return (
                <li
                  key={cp.id}
                  style={{ top: `${nodePercent}%` }}
                  className="absolute right-8 translate-x-1/2 -translate-y-1/2"
                >
                  <button
                    onClick={() => {
                      sound.playClick();
                      onNavigate(cp.id);
                    }}
                    className="group relative flex items-center justify-end focus:outline-none"
                    aria-label={`Navigate to ${cp.title}`}
                  >
                    {/* Hover/Current Sector Monospace Label */}
                    <span
                      className={`absolute right-7 font-mono text-xs font-bold px-2 py-0.5 rounded uppercase whitespace-nowrap transition-all duration-150 ${
                        isCurrent
                          ? 'opacity-100 bg-cyan-400 text-black border border-black shadow-[2px_2px_0px_#FFF]'
                          : 'opacity-0 group-hover:opacity-100 bg-slate-900 text-slate-200 border border-slate-700'
                      }`}
                    >
                      {cp.title}
                    </span>

                    {/* Checkpoint Dot */}
                    <span
                      className={`block rounded-full border-2 border-black transition-all duration-200 ${
                        idx === CHECKPOINTS.length - 1
                          ? 'w-5 h-5 bg-gradient-to-r from-amber-400 to-pink-500 rotate-45'
                          : isCurrent
                          ? 'w-4 h-4 bg-cyan-400 scale-125 shadow-[0_0_8px_#00F0FF]'
                          : isPassed
                          ? 'w-3.5 h-3.5 bg-pink-500'
                          : 'w-3 h-3 bg-slate-700'
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* ================= DRAGGABLE ASTRONAUT COMPANION ================= */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            style={{
              top: `${scrollProgress * 100}%`,
              transform: 'translate(40%, -50%)',
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            className="orbit-thumb absolute right-8 z-50 flex items-center select-none touch-none focus:outline-none group"
            tabIndex={0}
            role="scrollbar"
            aria-label="Scroll position, drag the astronaut"
            aria-valuenow={Math.round(scrollProgress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {/* Initial Grab-Me Hint */}
            {!hasInteracted && (
              <div className="absolute right-24 top-0 font-marker text-pink-400 text-base font-bold whitespace-nowrap transform -rotate-6 pointer-events-none animate-pulse">
                grab me &amp; pilot ↓
              </div>
            )}

            {/* Astronaut Procedural Rig */}
            <div className="w-20 h-24 filter drop-shadow-[4px_4px_0px_#000]">
              <AstronautRig
                velocity={velocity}
                isDragging={isDragging}
                scale={0.9}
              />
            </div>

            {/* Speech Bubble / Telemetry Display */}
            <div
              className={`absolute right-24 bg-black/90 text-cyan-300 font-mono text-[11px] font-bold px-3 py-1.5 rounded border border-cyan-400/80 shadow-[3px_3px_0px_#00F0FF] whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
                isDragging || Math.abs(velocity) > 0.5 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              {getBubbleText()}
            </div>
          </div>
        </div>

        {/* Orbital Telemetry Readout & Controls below rail */}
        <div className="absolute -bottom-16 right-0 w-full text-right font-mono text-xs flex flex-col items-end gap-2">
          <div className="text-cyan-400 font-bold bg-black/60 px-2 py-0.5 rounded border border-slate-800">
            TRAJECTORY {Math.round(scrollProgress * 100)}%
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded text-slate-300 hover:text-white transition-colors"
              title={isMuted ? 'Unmute space arcade sounds' : 'Mute space arcade sounds'}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-cyan-400" />}
            </button>

            {/* Return To Top Button */}
            {scrollProgress > 0.15 && (
              <button
                onClick={scrollToTop}
                className="p-1.5 bg-cyan-400 hover:bg-cyan-300 text-black border border-black rounded shadow-[2px_2px_0px_#FFF] transition-all transform hover:-translate-y-0.5"
                title="Warp to Launchpad"
              >
                <ArrowUp size={14} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ================= MOBILE BOTTOM TELEMETRY DOCK ================= */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070A14]/95 border-t-2 border-slate-800 backdrop-blur-md px-4 py-2 flex items-center justify-between font-mono text-xs"
        aria-label="Mobile Sector Navigation"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7">
            <AstronautRig velocity={velocity} scale={0.4} />
          </div>
          <span className="font-bold text-cyan-300">
            {CHECKPOINTS.find((c) => c.id === activeSector)?.title || 'Launch'}
          </span>
        </div>

        {/* Mini Sector Dots */}
        <div className="flex items-center gap-1.5">
          {CHECKPOINTS.map((cp) => (
            <button
              key={cp.id}
              onClick={() => {
                sound.playClick();
                onNavigate(cp.id);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                activeSector === cp.id ? 'bg-cyan-400 scale-125' : 'bg-slate-700'
              }`}
              aria-label={`Jump to ${cp.title}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 text-slate-400 font-bold">
          <span>{Math.round(scrollProgress * 100)}%</span>
          <button
            onClick={toggleSound}
            className="p-1 rounded bg-slate-900 border border-slate-700"
          >
            {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} className="text-cyan-400" />}
          </button>
        </div>
      </nav>
    </>
  );
};
