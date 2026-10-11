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
    summary: 'High-throughput collaborative workspace built with FastAPI, WebTransport (QUIC), and Yjs CRDTs for conflict-free state resolution under network turbulence.',
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
      { label: 'Coordination', value: 'Redis WAL + SET NX' }
    ],
    githubUrl: 'https://github.com/singhvi28/google-docs-clone',
    demoCommand: 'docker compose up -d && curl -I http://localhost:8000/health'
  },
  {
    id: 'SedrisDB',
    code: 'MOD-02',
    title: 'SEDRIS-DB',
    subtitle: 'In-Memory Key-Value & Pub/Sub Engine in C++17',
    summary: 'Single-threaded, event-driven in-memory key-value data store and real-time Pub/Sub engine in C++17 following Redis architectural principles.',
    badge: 'C++17 REDIS REACTOR',
    tags: ['C++17', 'Linux epoll', 'POSIX Sockets', 'RESP Protocol', 'Flat Hash Map', 'Slab Allocator'],
    deckBg: '#1F1706',
    accentColor: '#FFB800',
    problem: 'Relational and disk-backed storage introduce query parsing and disk I/O latency for ephemeral telemetry caches, while multi-threaded servers suffer high context-switching overhead under thousands of client connections.',
    architecture: [
      'Single-threaded event-driven networking reactor using POSIX raw sockets and Linux epoll I/O multiplexing with edge-triggered readiness.',
      'State-machine-based parser for Redis Serialization Protocol (RESP), natively resolving TCP stream packet fragmentation and partial reads.',
      'Primary key index implemented as a custom cache-friendly flat hash map (open addressing with linear probing).',
      'Slab free-list node pool allocator for SedrisNode instances, eliminating malloc fragmentation and latency spikes during key churn.',
      'O(1) LRU eviction engine utilizing a hybrid Flat Hash Map + Doubly Linked List with TTL expiry timers.'
    ],
    benchmarks: 'Sub-millisecond P99 latency; handles thousands of concurrent persistent client TCP connections with zero context-switching overhead.',
    metrics: [
      { label: 'Concurrency Model', value: 'Single-Thread epoll' },
      { label: 'Wire Protocol', value: 'RESP Compatible' },
      { label: 'Memory Allocation', value: 'Slab Free-List Pool' },
      { label: 'LRU Complexity', value: 'O(1) Hash + DList' }
    ],
    githubUrl: 'https://github.com/singhvi28/SedrisDB',
    demoCommand: 'make && ./build/sedris-server --port 6379'
  },
  {
    id: 'l7-load-balancer',
    code: 'MOD-03',
    title: 'L7-REACTOR',
    subtitle: 'Pure Python HTTP Reverse Proxy with Linux epoll',
    summary: 'High-performance Layer 7 HTTP reverse proxy built from scratch in pure Python standard library with zero external dependencies using raw Linux sockets.',
    badge: 'EPOLL REACTOR',
    tags: ['Python', 'Linux epoll', 'Raw Sockets', 'HTTP/1.1 Wire Parser', 'Min-Heap', 'Round-Robin'],
    deckBg: '#061D13',
    accentColor: '#00FF88',
    problem: 'Standard Python WSGI/ASGI gateways add substantial dependency overhead and thread-per-connection bloat when all that is needed is an event-driven reverse proxy routing raw TCP streams.',
    architecture: [
      'Event-driven asynchronous reactor using Linux epoll via Python selectors to multiplex thousands of concurrent non-blocking TCP sockets.',
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
    id: 'agentic-diagnostic-tool',
    code: 'MOD-04',
    title: 'AGENTIC-SRE',
    subtitle: 'Autonomous Root-Cause Analysis with GraphRAG',
    summary: 'Autonomous site reliability and code remediation engine for distributed applications combining code topology knowledge graphs with semantic vector search.',
    badge: 'GRAPHRAG REMEDIATION',
    tags: ['LangGraph', 'Neo4j', 'PostgreSQL', 'pgvector', 'FastMCP', 'Python AST'],
    deckBg: '#170A24',
    accentColor: '#A855F7',
    problem: 'Diagnosing complex distributed failures requires engineers to manually cross-correlate stack traces, unstructured error logs, and multi-file code call-graphs, significantly delaying MTTR.',
    architecture: [
      'Code topology ingestion into Neo4j graph database mapping class hierarchies, route handlers, imports, and cross-module caller dependencies.',
      'Vector memory layer backed by PostgreSQL + pgvector storing past remediation sessions, patch history, and semantic log embeddings.',
      'FastMCP tool server exposing sandboxed AST inspection, syntax lint checks, test suite runners, and isolated code reading.',
      'LangGraph cyclical orchestration loop: Parse → Retrieve (GraphRAG) → Diagnose/Patch → Test Suite Verification → Rollback on Failure.'
    ],
    benchmarks: 'Dramatically cuts MTTR by autonomously synthesizing, syntax-verifying, and applying unified diff patches that pass test suites on first attempt.',
    metrics: [
      { label: 'Knowledge Graph', value: 'Neo4j Code Topology' },
      { label: 'Vector Memory', value: 'PostgreSQL + pgvector' },
      { label: 'Orchestration', value: 'LangGraph State Machine' },
      { label: 'Tool Protocol', value: 'FastMCP Server' }
    ],
    githubUrl: 'https://github.com/singhvi28/agentic-diagnostic-tool',
    demoCommand: 'diagnostic-agent --log logs/app_errors.log --apply'
  },
  {
    id: 'agentic-pipeline',
    code: 'MOD-05',
    title: 'AGENTIC CONTENT ENGINE',
    subtitle: 'Self-Correcting Autonomous Pipeline with Contextual RL',
    summary: 'Multi-platform content orchestration engine featuring recursive agent loops (Plan → Draft → Critique → Revise) and Contextual Multi-Arm Bandit optimization.',
    badge: 'THOMPSON BANDIT',
    tags: ['FastAPI', 'Redis', 'ARQ Workers', 'Thompson Sampling', 'LLM Critics', 'PostgreSQL'],
    deckBg: '#1F0B18',
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
    id: 'cf-clone',
    code: 'MOD-06',
    title: 'YUKTICODE JUDGE',
    subtitle: 'Sandboxed Online Judge & Real-Time Contest Platform',
    summary: 'Full-stack competitive programming judge and contest platform featuring secure sandboxed Docker execution, task queues, and live WebSocket verdict streaming.',
    badge: 'SANDBOXED JUDGE',
    tags: ['React', 'FastAPI', 'RabbitMQ', 'Docker', 'PostgreSQL', 'Redis', 'WebSockets'],
    deckBg: '#071526',
    accentColor: '#38BDF8',
    problem: 'Executing untrusted user-submitted code in competitive programming contests demands sub-second execution, strict hardware isolation to prevent fork bombs and malicious system calls, and real-time verdict delivery.',
    architecture: [
      'Full-stack competitive programming engine powered by React (frontend), FastAPI (REST API), PostgreSQL (persistence), and Redis (caching & session state).',
      'Asynchronous task distribution pipeline using RabbitMQ with dedicated worker queues separating interactive runs from formal contest submissions.',
      'Sandboxed code execution engine running inside ephemeral, unprivileged Docker containers with Linux cgroups enforcing hard CPU time limits and memory boundaries.',
      'Real-time WebSocket event streaming broadcasting instantaneous compilation, test-case verdicts (AC/WA/TLE/MLE), and live contest leaderboard rankings.'
    ],
    benchmarks: 'Safely executes untrusted C++ and Python submissions in sub-500ms cycles with 100% process isolation.',
    metrics: [
      { label: 'Sandbox Engine', value: 'Docker + Linux cgroups' },
      { label: 'Message Queue', value: 'RabbitMQ Workers' },
      { label: 'Live Telemetry', value: 'WebSocket Verdict Stream' },
      { label: 'Core Framework', value: 'FastAPI + React' }
    ],
    githubUrl: 'https://github.com/singhvi28/yukticode',
    demoCommand: 'docker compose up -d && python worker.py --concurrency 8'
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
