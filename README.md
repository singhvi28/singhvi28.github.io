# 🚀 Akshit Singhvi — Space-Themed Systems & AI Portfolio

> An interactive cosmic portfolio you **pilot through** — inspired by the neo-brutalist interaction design of [raghavgoel.in](https://raghavgoel.in), transformed into a deep space orbital trajectory.

---

## 🌌 The Concept & Metaphors

| Raghav Goel's Skate Theme (`raghavgoel.in`) | Akshit Singhvi's Space Theme (`space-portfolio`) |
| :--- | :--- |
| **"A portfolio you ride through"** | **"A portfolio you pilot through"** (Orbital Flight Log) |
| **2D Skater on a Skateboard Rig** | **2D Astronaut EVA Jetpack Rig** with reactive RCS thruster plumes & inertia tilt |
| **The Decks (Skateboard Decks)** | **Orbital Module Decks** with technical schematics & debrief telemetry modals |
| **Wheel Durometer (99A / 92A / 84A)** | **Specific Impulse ($I_{sp}$)** (450s Primary / 380s Orbital / 320s Auxiliary) |
| **Tape Checkpoint Badges** | **Cosmic Mission Tape** (`CHECKPOINT #01 // FLIGHT LOG`) |
| **Vintage Rubber Ink Stamps** | **Mission Patch Stamps** with SVG turbulence ink displacement (`feTurbulence`) |
| **Ride Layer (Vertical Rail + Skater Thumb)** | **Orbit Layer (Telemetry Flight Rail + Draggable Astronaut Companion)** |
| **Lighthouse 99 · Zero 3D Libraries** | **Lighthouse 99 · Zero 3D Libraries** (pure SVG rig, Canvas 2D starfield, Web Audio API) |

---

## 🛠️ Systems & Architecture

- **Procedural 2D Astronaut Rig**: Hand-coded SVG EVA astronaut with dual RCS plasma maneuvering thrusters, pressurized reflective helmet visor, and velocity-responsive physical tilt.
- **Interactive Orbit Layer (`OrbitLayer.tsx`)**:
  - Vertical telemetry flight rail docked along the right side with real-time waypoint pips.
  - Draggable astronaut thumb: grab with mouse or touch to maneuver up and down the page with inertia physics.
  - Contextual flight transmission speech bubble that updates dynamically as you cross sectors.
  - Checkpoint arrival banners (`🏆 WAYPOINT CLEARED: SECTOR #02 // ORBITAL MODULES`).
- **Starfield Canvas (`StarfieldCanvas.tsx`)**:
  - Lightweight 60fps parallax starfield with multi-spectral twinkling stars, nebular dust, and warp streaks that elongate when scrolling fast.
- **Tactile Procedural Audio Engine (`src/utils/audio.ts`)**:
  - Pure Web Audio API synthesizer for 8-bit arcade radar bleeps, thruster hums, checkpoint chimes, and mechanical stamp slams (with audio mute/unmute toggle).
- **Interactive Module Decks (`Projects.tsx`)**:
  - 3D tactile module cards that decrypt into full mission debrief dialogs with benchmark grids and terminal simulators for:
    1. **COLLAB-DOCS**: Real-time collaborative document engine over QUIC (WebTransport) & Yjs CRDTs.
    2. **AGENTIC CONTENT ENGINE**: Self-correcting autonomous multi-agent pipeline with Contextual Multi-Arm Bandits (Thompson Sampling).
    3. **L7-REACTOR**: Pure Python Layer 7 reverse proxy using Linux `epoll` raw sockets (3,250+ req/s, 0% failure rate).
    4. **CONTEST-MIRROR**: Algorithmic stress-testing harness & CP telemetry suite (LeetCode Guardian 2158, Codeforces Expert 1675).
- **Propulsion Avionics Stack (`Stack.tsx`)**:
  - Specific Impulse ($I_{sp}$) efficiency tiers with category filters and continuous live marquee ticker.
- **Flight Badges & Commendations (`Badges.tsx`)**:
  - Holographic astronaut mission cards with rainbow foil shimmer on hover.
- **Deep Space Relay (`Contact.tsx`)**:
  - Subspace transmission console with encryption terminal and one-click comm frequency copy.

---

## 🏃 Running Locally

```bash
# Navigate to the project directory
cd /home/singhvi28/space-portfolio

# Start the development server
npm run dev
# -> Local server running at http://localhost:3000

# Build production bundle
npm run build

# Preview production build
npm run preview
```
