import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  ClipboardCheck,
  Filter,
  Gauge,
  Github,
  Layers,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal
} from "lucide-react";
import { categories, SkillEntry, skills } from "./data";

const platformFilters = ["All", "Claude", "Codex", "Cursor", "Gemini", "Copilot", "OpenCode", "OpenClaw"];

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [platform, setPlatform] = useState("All");
  const [safetyOnly, setSafetyOnly] = useState(false);

  const filtered = useMemo(() => {
    return skills.filter((skill) => {
      const searchable = [
        skill.name,
        skill.repo,
        skill.category,
        skill.summary,
        skill.signal,
        skill.platforms.join(" "),
        skill.badges.join(" "),
        skill.risks.join(" ")
      ].join(" ").toLowerCase();
      const queryMatch = searchable.includes(query.toLowerCase());
      const categoryMatch = category === "All" || skill.category === category;
      const platformMatch = platform === "All" || skill.platforms.includes(platform);
      const safetyMatch = !safetyOnly || skill.safety === "A";
      return queryMatch && categoryMatch && platformMatch && safetyMatch;
    });
  }, [category, platform, query, safetyOnly]);

  const averageScore = Math.round(skills.reduce((total, skill) => total + skill.score, 0) / skills.length);
  const safeCount = skills.filter((skill) => skill.safety === "A").length;
  const platformCount = new Set(skills.flatMap((skill) => skill.platforms)).size;
  const reviewCount = skills.filter((skill) => skill.safety !== "A").length;
  const externalCount = skills.filter((skill) => hasSignal(skill, ["api", "credential", "auth", "web", "paid", "external"])).length;
  const localDataCount = skills.filter((skill) => hasSignal(skill, ["file", "index", "vault", "persistence", "local"])).length;
  const portableCount = skills.filter((skill) => skill.platforms.length >= 3).length;

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
            SkillCheck turns agent skill repos into comparable safety, documentation, portability, and evidence reports.
          </p>
          <div className="heroActions">
            <a className="primaryAction" href="#directory">
              Browse 20 reviewed skills
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="secondaryAction" href="https://github.com/wxxsw/skillcheck" target="_blank" rel="noreferrer">
              <Github size={17} aria-hidden="true" />
              Star the project
            </a>
          </div>
          <div className="trustStrip" aria-label="Why SkillCheck is different">
            <span>Static risk scan</span>
            <span>Human review lens</span>
            <span>Cross-agent portability</span>
          </div>
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
        <Metric icon={<ClipboardCheck size={20} />} label="Reviewed skills" value={String(skills.length)} />
        <Metric icon={<Gauge size={20} />} label="Average score" value={`${averageScore}`} />
        <Metric icon={<ShieldCheck size={20} />} label="Safety A" value={String(safeCount)} />
        <Metric icon={<Layers size={20} />} label="Platforms" value={String(platformCount)} />
      </section>

      <section className="radar" aria-label="Risk radar">
        <div>
          <p className="eyebrow">Risk radar</p>
          <h2>Trust signals beat star counts.</h2>
        </div>
        <div className="radarGrid">
          <RadarItem icon={<AlertTriangle size={20} />} label="Needs manual review" value={reviewCount} text="Skills with B/C safety grades because they touch code, APIs, hooks, files, or credentials." />
          <RadarItem icon={<Sparkles size={20} />} label="External services" value={externalCount} text="Repos that mention APIs, auth, paid services, social sources, or web research." />
          <RadarItem icon={<BookOpen size={20} />} label="Local data surface" value={localDataCount} text="Skills that index, persist, or modify local project, vault, context, or plan files." />
          <RadarItem icon={<Star size={20} />} label="Portable candidates" value={portableCount} text="Skills claiming support across three or more agent clients." />
        </div>
      </section>

      <section className="directory" id="directory">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Directory</p>
            <h2>Ranked by trust signals</h2>
            <p className="sectionNote">{filtered.length} of {skills.length} reviewed skills shown</p>
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
        {filtered.length === 0 && (
          <div className="emptyState">
            <h3>No skills match those filters.</h3>
            <p>Try clearing the search, switching platform, or turning off Safety A only.</p>
          </div>
        )}
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

function RadarItem({ icon, label, value, text }: { icon: ReactNode; label: string; value: number; text: string }) {
  return (
    <article className="radarItem">
      <div className="radarTop">
        <div className="metricIcon">{icon}</div>
        <strong>{value}</strong>
      </div>
      <h3>{label}</h3>
      <p>{text}</p>
    </article>
  );
}

function SkillCard({ skill }: { skill: SkillEntry }) {
  return (
    <article className="skillCard">
      <div className="cardTop">
        <span className={`grade grade${skill.safety}`}>Safety {skill.safety}</span>
        <span className="score">{skill.score}</span>
      </div>
      <div className="cardMeta">
        <span>{skill.category}</span>
        <span>{skill.stars} stars</span>
      </div>
      <h3>{skill.name}</h3>
      <a className="repoLink" href={skill.url} target="_blank" rel="noreferrer">
        {skill.repo}
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
      <p>{skill.summary}</p>
      <div className="signalLine">
        <Sparkles size={15} aria-hidden="true" />
        <span>{skill.signal}</span>
      </div>
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

function hasSignal(skill: SkillEntry, terms: string[]): boolean {
  const haystack = [skill.summary, skill.signal, skill.badges.join(" "), skill.risks.join(" ")].join(" ").toLowerCase();
  return terms.some((term) => haystack.includes(term));
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
