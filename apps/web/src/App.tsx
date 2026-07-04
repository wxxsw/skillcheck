import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  ClipboardCheck,
  Filter,
  Gauge,
  Github,
  Search,
  ShieldCheck,
  Terminal
} from "lucide-react";
import { categories, SkillEntry, skills } from "./data";

const platformFilters = ["All", "Claude", "Codex", "Cursor", "Gemini", "Copilot"];

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [platform, setPlatform] = useState("All");
  const [safetyOnly, setSafetyOnly] = useState(false);

  const filtered = useMemo(() => {
    return skills.filter((skill) => {
      const searchable = `${skill.name} ${skill.repo} ${skill.category} ${skill.summary} ${skill.badges.join(" ")}`.toLowerCase();
      const queryMatch = searchable.includes(query.toLowerCase());
      const categoryMatch = category === "All" || skill.category === category;
      const platformMatch = platform === "All" || skill.platforms.includes(platform);
      const safetyMatch = !safetyOnly || skill.safety === "A";
      return queryMatch && categoryMatch && platformMatch && safetyMatch;
    });
  }, [category, platform, query, safetyOnly]);

  const averageScore = Math.round(skills.reduce((total, skill) => total + skill.score, 0) / skills.length);
  const safeCount = skills.filter((skill) => skill.safety === "A").length;

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="SkillCheck home">
          <span className="brandMark">SC</span>
          <span>SkillCheck</span>
        </a>
        <nav aria-label="Primary">
          <a href="#directory">Directory</a>
          <a href="#method">Method</a>
          <a href="https://github.com/wxxsw/skillcheck" target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Safety-scored agent skills</p>
          <h1>Install skills with evidence, not vibes.</h1>
          <p className="lede">
            SkillCheck turns agent skill repos into comparable safety, documentation, and portability reports.
          </p>
        </div>
        <div className="terminalPanel" aria-label="SkillCheck CLI example">
          <div className="terminalHeader">
            <Terminal size={18} aria-hidden="true" />
            <span>skillcheck scan</span>
          </div>
          <pre>{`$ skillcheck scan ./react-testing-skill
Score            86/100
Safety           B
Docs             A
Portability      A

! Potential command execution (-18)
* Contains executable scripts (-8)
- No tests detected (-3)`}</pre>
        </div>
      </section>

      <section className="metrics" aria-label="SkillCheck snapshot">
        <Metric icon={<ClipboardCheck size={20} />} label="Seeded skills" value={String(skills.length)} />
        <Metric icon={<Gauge size={20} />} label="Average score" value={`${averageScore}`} />
        <Metric icon={<ShieldCheck size={20} />} label="Safety A" value={String(safeCount)} />
      </section>

      <section className="directory" id="directory">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Directory</p>
            <h2>Ranked by trust signals</h2>
          </div>
          <a className="textLink" href="#method">
            Scoring method
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="toolbar" role="search">
          <label className="searchBox">
            <Search size={18} aria-hidden="true" />
            <span className="srOnly">Search skills</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by task, repo, platform, or risk"
            />
          </label>
          <div className="selectGroup">
            <Filter size={18} aria-hidden="true" />
            <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Category">
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
            <select value={platform} onChange={(event) => setPlatform(event.target.value)} aria-label="Platform">
              {platformFilters.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              checked={safetyOnly}
              onChange={(event) => setSafetyOnly(event.target.checked)}
            />
            <span>Safety A only</span>
          </label>
        </div>

        <div className="skillGrid">
          {filtered.map((skill) => <SkillCard key={skill.id} skill={skill} />)}
        </div>
      </section>

      <section className="method" id="method">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Method</p>
            <h2>What the score checks</h2>
          </div>
        </div>
        <div className="methodGrid">
          <MethodItem title="Safety" text="Command execution, network calls, file writes, dependency scripts, and credential handling." />
          <MethodItem title="Documentation" text="Canonical SKILL.md, trigger description, README, examples, install notes, and license." />
          <MethodItem title="Portability" text="Whether the skill can travel across Claude, Codex, Cursor, Gemini, Copilot, or OpenCode." />
          <MethodItem title="Evidence" text="Every badge should come from a scanned file, a reproducible benchmark, or a manual review note." />
        </div>
      </section>
    </main>
  );
}

function Metric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="metric">
      <div className="metricIcon">{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SkillCard({ skill }: { skill: SkillEntry }) {
  return (
    <article className="skillCard">
      <div className="cardTop">
        <span className={`grade grade${skill.safety}`}>Safety {skill.safety}</span>
        <span className="score">{skill.score}</span>
      </div>
      <h3>{skill.name}</h3>
      <a className="repoLink" href={skill.url} target="_blank" rel="noreferrer">
        {skill.repo}
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
      <p>{skill.summary}</p>
      <div className="gradeRow" aria-label="Grades">
        <GradePill label="Docs" value={skill.docs} />
        <GradePill label="Portability" value={skill.portability} />
      </div>
      <div className="badges">
        {skill.badges.map((badge) => <span key={badge}>{badge}</span>)}
      </div>
      <div className="riskLine">
        <BadgeCheck size={16} aria-hidden="true" />
        <span>{skill.risks[0]}</span>
      </div>
    </article>
  );
}

function GradePill({ label, value }: { label: string; value: string }) {
  return (
    <span className="gradePill">
      {label}
      <strong>{value}</strong>
    </span>
  );
}

function MethodItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="methodItem">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
