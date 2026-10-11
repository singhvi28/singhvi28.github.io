export interface ProjectModule {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  summary: string;
  badge: string;
  tags: string[];
  deckBg: string;
  accentColor: string;
  problem: string;
  architecture: string[];
  benchmarks: string;
  metrics: { label: string; value: string }[];
  githubUrl: string;
  demoCommand?: string;
}

export interface ExperienceRow {
  period: string;
  isCurrent?: boolean;
  role: string;
  organization: string;
  orgUrl?: string;
  badge: string;
  highlights: string[];
  extraHighlights?: string[];
  stamp: {
    color: string;
    rimText: string;
    centerValue: string;
    bottomLabel: string;
  };
}

export interface SkillItem {
  name: string;
  isp: string; // Specific impulse or Thrust rating (e.g. 450s, 380s, 320s)
  category: 'core' | 'protocols' | 'algo' | 'infra';
  level: 'Primary Thruster' | 'Orbital Maneuver' | 'Auxiliary Payload';
  shippedIn: string;
}

export interface FlightBadge {
  id: string;
  code: string;
  title: string;
  platform: string;
  rank: string;
  metric: string;
  date: string;
  color: string;
  link: string;
  rare?: boolean;
}
