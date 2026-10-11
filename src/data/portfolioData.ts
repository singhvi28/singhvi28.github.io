import { ProjectModule, ExperienceRow, SkillItem, FlightBadge } from '../types';

export const PERSONAL_INFO = {
  name: 'Akshit Singhvi',
  callsign: 'SINGHVI-28',
  title: 'Systems & AI Software Engineer',
  institution: 'National Institute of Technology Allahabad (MNNIT)',
  degree: 'B.Tech in Electronics & Communication (2023 — 2027)',
  location: 'Prayagraj, India',
  timezone: 'UTC +5:30',
  email: 'akkisinghvi28@gmail.com',
  github: 'https://github.com/singhvi28',
  linkedin: 'https://www.linkedin.com/in/akshit-singhvi/',
  codeforces: 'https://codeforces.com/profile/akshitsinghvi28',
  leetcode: 'https://leetcode.com/u/akshitsinghvi28/',
  codechef: 'https://www.codechef.com/users/akkisinghvi28',
  resumeUrl: 'https://drive.google.com/file/d/1DkujExsM16R5FsV7NU-Kxk_aeUxpZvNu/view',
  focusTags: [
    'Distributed Systems',
    'High-Concurrency Python',
    'Algorithmic Optimization',
    'Agentic AI'
  ],
  bio: 'I architect resilient distributed systems and low-level network engines: event-driven epoll proxies, QUIC/CRDT synchronization, and autonomous agent loops that thrive under mission-critical loads. Guardian at LeetCode (2158, Top 1.15%) and Expert on Codeforces.'
};

export const CHECKPOINTS = [
  { id: 'start', title: 'Launchpad', alias: 'trajectory start', sector: 'SECTOR 00' },
  { id: 'experience', title: 'Flight Log', alias: 'mission history', sector: 'SECTOR 01' },
  { id: 'projects', title: 'Modules', alias: 'the orbital decks', sector: 'SECTOR 02' },
  { id: 'stack', title: 'Avionics', alias: 'propulsion stack', sector: 'SECTOR 03' },
  { id: 'badges', title: 'Commendations', alias: 'flight badges', sector: 'SECTOR 04' },
  { id: 'contact', title: 'Uplink', alias: 'subspace relay', sector: 'SECTOR 05' },
];

export const EXPERIENCE_DATA: ExperienceRow[] = [
  {
    period: '2024 — Present',
    isCurrent: true,
    role: 'Systems & Autonomous Systems Architect',
    organization: 'High-Load Systems Lab & Open Source',
    badge: '3 PRODUCTION PROTOCOLS TESTED',
    highlights: [
      'Built a pure Python Layer 7 HTTP reverse proxy from scratch using raw Linux epoll sockets and an asynchronous reactor loop, bypassing GIL overhead to sustain 3,250+ req/s with 0% failure rate.',
      'Architected CollabDocs: an asynchronous real-time document engine over WebTransport (QUIC) and Yjs CRDTs, decoupling editors and viewers via capability-based room keys.',
      'Engineered an append-only write-ahead log (WAL) with compaction under distributed lock (SET NX) and Redis Pub/Sub fan-out, eliminating self-broadcast loops with echo filtering.'
    ],
    extraHighlights: [
      'Built an autonomous content engine with self-correcting agent loops (Plan → Draft → Critique → Revise) powered by Contextual Multi-Arm Bandits (Thompson Sampling with Beta-Bernoulli conjugate priors).',
      'Implemented an eventually consistent persistence loop via a dirty-bit index for background DB flushes and soft-state TTL leases for zombie session eviction.',
      'Integrated Alembic schema migrations and non-blocking ARQ background worker pools, decoupling heavy inference tasks from the HTTP request plane.'
    ],
    stamp: {
      color: '#00F0FF',
      rimText: '3,250+ REQ/S · ZERO DROPS · 3,250+ REQ/S · ZERO DROPS · ',
      centerValue: '3.25K',
      bottomLabel: 'REQ/S EPOLL'
    }
  },
  {
    period: '2023 — Present',
    isCurrent: true,
    role: 'Competitive Programmer & Algorithmic R&D',
    organization: 'LeetCode · Codeforces · CodeChef',
    badge: 'GUARDIAN TIER · TOP 1.15%',
    highlights: [
      'Achieved LeetCode Guardian rank with a contest rating of 2158 (Top 1.15% globally), securing World Rank 113 in Weekly Contest 503 and Rank 253 in Weekly Contest 462.',
      'Attained Codeforces Expert rating (1675), securing Rank 470 in CF Round 1050 (Div. 4) and Rank 641 in CF Round 1096 (Div. 3).',
      'Secured Rank 287 out of 37,000+ participants in CodeChef Start171D under IIT Ropar Advitiya 2024-25.'
    ],
    stamp: {
      color: '#FFB800',
      rimText: '2158 RATING · TOP 1.15% · 2158 RATING · TOP 1.15% · ',
      centerValue: '2158',
      bottomLabel: 'LEETCODE GUARDIAN'
    }
  },
  {
    period: '2023 — 2027',
    role: 'B.Tech, Electronics and Communication Engineering',
    organization: 'National Institute of Technology Allahabad (MNNIT)',
    orgUrl: 'http://www.mnnit.ac.in',
    badge: 'NATIONAL INSTITUTE OF TECHNOLOGY',
    highlights: [
      'Cleared JEE Main with 99.33 Percentile (All India Rank 7889) out of over 1,000,000 candidates nationwide.',
      'Qualified JEE Advanced with All India Rank 12154.',
      'Awarded 2nd Runner-Up out of 70+ participating teams in the 404 Tech Quiz conducted during Culrav-Avishkar tech festival.'
    ],
    stamp: {
      color: '#FF2E93',
      rimText: 'AIR 7889 · 99.33%ile · JEE MAIN · AIR 7889 · 99.33%ile · ',
      centerValue: '99.33',
      bottomLabel: 'PERCENTILE'
    }
  }
];

export const PROJECTS_DATA: ProjectModule[] = [
  {
    id: 'collabdocs',
    code: 'MOD-01',
    title: 'COLLAB-DOCS',
    subtitle: 'Real-Time Document Engine over QUIC & CRDTs',
    summary: 'A high-throughput collaborative workspace built with FastAPI, WebTransport (QUIC), and Yjs CRDTs for conflict-free state resolution under network turbulence.',
    badge: 'QUIC / CRDT',
    tags: ['FastAPI', 'WebTransport (QUIC)', 'Yjs CRDTs', 'Redis Pub/Sub', 'Docker', 'NGINX'],
    deckBg: '#091C2E',
    accentColor: '#00F0FF',
    problem: 'Traditional collaborative editors suffer from WebSocket head-of-line blocking on packet loss and complex operational-transform servers that serialize all edits through a central bottleneck.',
    architecture: [
      'Asynchronous backend using FastAPI and WebTransport over QUIC for multiplexed, independent streams per document section.',
      'Client-side state replication via Yjs CRDTs with capability-based cryptographic room keys separating viewer and editor permissions.',
      'Stateless coordination layer with Redis Pub/Sub fan-out and append-only write-ahead logs (WAL) with compaction under distributed lock (SET NX).',
      'Eventually consistent persistence loop utilizing a dirty-bit index for periodic DB commits and heartbeat-backed soft-state TTL leases for zombie session reaping.'
    ],
    benchmarks: 'Zero head-of-line blocking on simulated 5% packet loss; handles 200+ concurrent live editors per room with sub-15ms convergence.',
    metrics: [
      { label: 'Transport Protocol', value: 'QUIC / WebTransport' },
      { label: 'Conflict Engine', value: 'Yjs State Vectors' },
      { label: 'Convergence Delay', value: '< 15 ms' },
      { label: 'Coordination', value: 'Redis WAL + Compaction' }
    ],
    githubUrl: 'https://github.com/singhvi28/google-docs-clone/tree/main',
    demoCommand: 'docker compose up -d && curl -I http://localhost:8000/health'
  },
  {
    id: 'agentic-pipeline',
    code: 'MOD-02',
    title: 'AGENTIC CONTENT ENGINE',
    subtitle: 'Self-Correcting Autonomous Pipeline with Contextual RL',
    summary: 'Multi-platform content orchestration engine featuring recursive agent loops (Plan → Draft → Critique → Revise) and Contextual Multi-Arm Bandit optimization.',
    badge: 'AGENTIC RL',
    tags: ['FastAPI', 'Redis', 'ARQ Workers', 'Thompson Sampling', 'LLM Critics', 'PostgreSQL'],
    deckBg: '#1E1228',
    accentColor: '#FF2E93',
    problem: 'Single-shot LLM prompts hallucinate formatting rules and decay into generic copy without self-reflection, while fixed templates fail to adapt to engagement feedback across different distribution channels.',
    architecture: [
      'Autonomous Plan → Draft → Critique → Revise feedback loop with dual-gated evaluation combining deterministic heuristics (Flesch readability target band, length caps) and qualitative LLM rubrics.',
      'Contextual Multi-Arm Bandit (Thompson Sampling) across 21 platform-style arms using Beta-Bernoulli conjugate priors and exponential forget-factor decay (λ = 0.995).',
      'Decoupled heavy LLM inference (15–40s) from HTTP plane using FastAPI, Redis, and ARQ background worker pools with non-blocking short polling.',
      'A/B hook variant exploration via sampling without replacement with idempotent state transitions and cross-surface consistency critic.'
    ],
    benchmarks: 'Autonomous revision loop self-corrects 93% of formatting constraint violations without human intervention.',
    metrics: [
      { label: 'Bandit Arms', value: '21 Style Arms' },
      { label: 'Forget Factor λ', value: '0.995 Exponential' },
      { label: 'Worker Queue', value: 'ARQ + Redis' },
      { label: 'Constraint Pass Rate', value: '93% Autonomous' }
    ],
    githubUrl: 'https://github.com/singhvi28/agentic-content-creation',
    demoCommand: 'python -m pipeline.worker --concurrency 4'
  },
  {
    id: 'l7-load-balancer',
    code: 'MOD-03',
    title: 'L7-REACTOR',
    subtitle: 'Pure Python HTTP Reverse Proxy with Linux epoll',
    summary: 'High-performance Layer 7 HTTP reverse proxy built from scratch in pure Python with zero third-party dependencies using Linux raw sockets.',
    badge: 'EPOLL REACTOR',
    tags: ['Python', 'Linux epoll', 'Raw Sockets', 'HTTP/1.1 Wire Parser', 'Min-Heap', 'Round-Robin'],
    deckBg: '#1C1A0E',
    accentColor: '#FFB800',
    problem: 'Standard Python WSGI/ASGI gateways add substantial dependency overhead and thread-per-connection bloat when all that is needed is an event-driven, zero-dependency reverse proxy routing raw TCP streams.',
    architecture: [
      'Event-driven asynchronous reactor using Linux epoll via Python selectors to multiplex thousands of concurrent TCP sockets on a non-blocking loop.',
      'Handcrafted per-connection finite state machine and HTTP/1.1 wire parser handling TCP packet fragmentation, Content-Length, chunked Transfer-Encoding, and X-Forwarded-For injection.',
      'Pluggable routing algorithms via Round-Robin and Least-Connections backed by an O(log N) min-heap.',
      'Active background health checks daemon with exponential backoff and idempotent request retries on backend connect failures.'
    ],
    benchmarks: '3,250+ requests/sec sustained throughput with 0% failure rate across multi-process socket distribution bypassing GIL bottlenecks.',
    metrics: [
      { label: 'Throughput', value: '3,250+ req/s' },
      { label: 'Failure Rate', value: '0.00% Zero Drops' },
      { label: 'Dependencies', value: '0 (Pure Python)' },
      { label: 'Multiplexer', value: 'Linux epoll' }
    ],
    githubUrl: 'https://github.com/singhvi28/l7-load-balancer',
    demoCommand: 'python3 -m proxy.main --workers 4 --algorithm least-conn --port 8080'
  },
  {
    id: 'algo-suite',
    code: 'MOD-04',
    title: 'CONTEST-MIRROR',
    subtitle: 'Virtual Contest Simulator & Telemetry Engine',
    summary: 'Curated curriculum, stress-testing harnesses, and virtual contest mirrors tracking algorithmic progression across Codeforces and LeetCode.',
    badge: 'ALGO SUITE',
    tags: ['C++', 'Python', 'Competitive Programming', 'Stress Testing', 'Monotonic Stacks', 'DP'],
    deckBg: '#0F1F18',
    accentColor: '#00FF88',
    problem: 'Solving hard competitive programming problems in contest environments requires stress testing generators, deterministic verification against brute-force oracles, and edge-case fuzzing.',
    architecture: [
      'Built custom stress-testing harnesses generating random corner-case graphs, trees, and numeric inputs to find counterexamples against brute-force models in sub-second cycles.',
      'Implemented optimized C++ and Python data structures: Fenwick Trees, Segment Trees with Lazy Propagation, Monotonic Stacks, and Disjoint Set Unions.',
      'Automated leaderboard parsing and personal telemetry charts mapping rating curves across 1,500+ solved problems.'
    ],
    benchmarks: 'Guardian 2158 rank on LeetCode (Top 1.15%) and Expert on Codeforces (1675).',
    metrics: [
      { label: 'LeetCode Rating', value: '2158 (Guardian)' },
      { label: 'Codeforces Rating', value: '1675 (Expert)' },
      { label: 'Problems Solved', value: '1,500+' },
      { label: 'Contest Best', value: 'Global Rank 113' }
    ],
    githubUrl: 'https://github.com/singhvi28/competitive-programming',
    demoCommand: 'python3 stress1.py --generator tree --oracle brute.cpp --solution sol.cpp'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Core
  { name: 'Python', isp: '450s', category: 'core', level: 'Primary Thruster', shippedIn: 'daily systems engine' },
  { name: 'Linux / epoll', isp: '450s', category: 'core', level: 'Primary Thruster', shippedIn: 'raw socket reverse proxy' },
  { name: 'FastAPI', isp: '450s', category: 'core', level: 'Primary Thruster', shippedIn: 'async microservices' },
  { name: 'Redis', isp: '450s', category: 'core', level: 'Primary Thruster', shippedIn: 'Pub/Sub & WAL locks' },
  { name: 'PostgreSQL', isp: '450s', category: 'core', level: 'Primary Thruster', shippedIn: 'ACID data store' },
  { name: 'Docker', isp: '450s', category: 'core', level: 'Primary Thruster', shippedIn: 'containerized fleets' },
  { name: 'Git', isp: '450s', category: 'core', level: 'Primary Thruster', shippedIn: 'daily revision control' },

  // Protocols
  { name: 'QUIC / WebTransport', isp: '380s', category: 'protocols', level: 'Orbital Maneuver', shippedIn: 'CollabDocs document sync' },
  { name: 'Yjs CRDTs', isp: '380s', category: 'protocols', level: 'Orbital Maneuver', shippedIn: 'conflict-free state sync' },
  { name: 'WebSockets', isp: '380s', category: 'protocols', level: 'Orbital Maneuver', shippedIn: 'real-time duplex duplexing' },
  { name: 'HTTP/1.1 Wire Parser', isp: '380s', category: 'protocols', level: 'Orbital Maneuver', shippedIn: 'custom socket parser' },
  { name: 'NGINX', isp: '380s', category: 'protocols', level: 'Orbital Maneuver', shippedIn: 'load balancing & proxy' },

  // Algo & AI
  { name: 'Algorithms & DSA', isp: '450s', category: 'algo', level: 'Primary Thruster', shippedIn: 'Guardian 2158 / Expert 1675' },
  { name: 'Thompson Sampling', isp: '380s', category: 'algo', level: 'Orbital Maneuver', shippedIn: 'contextual multi-arm bandit' },
  { name: 'Autonomous Agent Loops', isp: '380s', category: 'algo', level: 'Orbital Maneuver', shippedIn: 'self-correcting pipelines' },
  { name: 'C++ / STL', isp: '320s', category: 'algo', level: 'Auxiliary Payload', shippedIn: 'competitive programming' },

  // Infra
  { name: 'Bash / Shell Scripting', isp: '380s', category: 'infra', level: 'Orbital Maneuver', shippedIn: 'automation & stress testing' },
  { name: 'ARQ / Async Workers', isp: '380s', category: 'infra', level: 'Orbital Maneuver', shippedIn: 'background job queue' },
  { name: 'Distributed Locks (SET NX)', isp: '380s', category: 'infra', level: 'Orbital Maneuver', shippedIn: 'WAL compaction concurrency' },
  { name: 'Alembic Migrations', isp: '320s', category: 'infra', level: 'Auxiliary Payload', shippedIn: 'schema evolution' },
  { name: 'SQLite / MySQL', isp: '320s', category: 'infra', level: 'Auxiliary Payload', shippedIn: 'embedded & relational DBs' }
];

export const BADGES_DATA: FlightBadge[] = [
  {
    id: 'lc-guardian',
    code: 'ASTRO-01',
    title: 'LeetCode Guardian',
    platform: 'LeetCode',
    rank: 'Rating 2158 · Top 1.15%',
    metric: 'Global Rank 113 in WC 503 · Rank 253 in WC 462',
    date: 'Active',
    color: '#FFB800',
    link: 'https://leetcode.com/u/akshitsinghvi28/',
    rare: true
  },
  {
    id: 'cf-expert',
    code: 'ASTRO-02',
    title: 'Codeforces Expert',
    platform: 'Codeforces',
    rank: 'Rating 1675 (Expert)',
    metric: 'Rank 470 in CF Round 1050 · Rank 641 in CF 1096',
    date: 'Active',
    color: '#00F0FF',
    link: 'https://codeforces.com/profile/akshitsinghvi28/',
    rare: true
  },
  {
    id: 'cc-3star',
    code: 'ASTRO-03',
    title: 'CodeChef 3-Star',
    platform: 'CodeChef',
    rank: 'Rating 1707 (3-Star)',
    metric: 'Rank 287 / 37,000+ in Start171D Advitiya IIT Ropar',
    date: '2025',
    color: '#FF2E93',
    link: 'https://www.codechef.com/users/akkisinghvi28/'
  },
  {
    id: 'jee-main',
    code: 'ASTRO-04',
    title: 'JEE Main 99.33%ile',
    platform: 'National Testing Agency',
    rank: 'All India Rank 7889',
    metric: 'Top 0.67% out of 1,000,000+ candidates',
    date: '2023',
    color: '#00FF88',
    link: 'https://drive.google.com/file/d/1DkujExsM16R5FsV7NU-Kxk_aeUxpZvNu/view'
  },
  {
    id: 'culrav-quiz',
    code: 'ASTRO-05',
    title: '404 Tech Quiz Runner-Up',
    platform: 'Culrav-Avishkar',
    rank: '2nd Runner-Up (70+ Teams)',
    metric: 'MNNIT Annual Technology & Systems Challenge',
    date: '2024',
    color: '#FFB800',
    link: 'https://drive.google.com/file/d/1OpgW4rKZmXNQeZJN5O6JFC1y5-OJmrK3/view'
  }
];
