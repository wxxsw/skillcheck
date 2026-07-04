import { useEffect, useMemo, useState } from "react";
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
import { categories, categoryLabels, Language, LocalizedText, SkillEntry, skills } from "./data";

const platformFilters = ["Claude", "Codex", "Cursor", "Gemini", "Copilot", "OpenCode", "OpenClaw"];
const languageStorageKey = "skillcheck-language";

const copy = {
  en: {
    language: {
      aria: "Language",
      labels: { en: "EN", zh: "中文" }
    },
    nav: {
      directory: "Directory",
      method: "Method",
      github: "GitHub"
    },
    hero: {
      eyebrow: "Safety-scored agent skills",
      title: "Install skills with evidence, not vibes.",
      lede: "SkillCheck turns agent skill repos into comparable safety, documentation, portability, and evidence reports.",
      browse: "Browse 20 reviewed skills",
      star: "Star the project",
      trust: ["Static risk scan", "Human review lens", "Cross-agent portability"]
    },
    terminal: {
      aria: "SkillCheck CLI example",
      score: "Score",
      safety: "Safety",
      docs: "Docs",
      portability: "Portability",
      commandRisk: "! Potential command execution (-18)",
      scriptRisk: "* Contains executable scripts (-8)",
      testsRisk: "- No tests detected (-3)"
    },
    metrics: {
      reviewed: "Reviewed skills",
      average: "Average score",
      safetyA: "Safety A",
      platforms: "Platforms"
    },
    radar: {
      eyebrow: "Risk radar",
      title: "Trust signals beat star counts.",
      manual: {
        label: "Needs manual review",
        text: "Skills with B/C safety grades because they touch code, APIs, hooks, files, or credentials."
      },
      external: {
        label: "External services",
        text: "Repos that mention APIs, auth, paid services, social sources, or web research."
      },
      local: {
        label: "Local data surface",
        text: "Skills that index, persist, or modify local project, vault, context, or plan files."
      },
      portable: {
        label: "Portable candidates",
        text: "Skills claiming support across three or more agent clients."
      }
    },
    directory: {
      eyebrow: "Directory",
      title: "Ranked by trust signals",
      note: (shown: number, total: number) => `${shown} of ${total} reviewed skills shown`,
      method: "Scoring method",
      searchLabel: "Search skills",
      searchPlaceholder: "Search by task, repo, platform, or risk",
      categoryLabel: "Category",
      platformLabel: "Platform",
      allCategories: "All categories",
      allPlatforms: "All platforms",
      safetyOnly: "Safety A only",
      emptyTitle: "No skills match those filters.",
      emptyText: "Try clearing the search, switching platform, or turning off Safety A only."
    },
    card: {
      safety: "Safety",
      stars: "stars",
      docs: "Docs",
      portability: "Portability",
      grades: "Grades"
    },
    method: {
      eyebrow: "Method",
      title: "What the score checks",
      items: [
        {
          title: "Safety",
          text: "Command execution, network calls, file writes, dependency scripts, and credential handling."
        },
        {
          title: "Documentation",
          text: "Canonical SKILL.md, trigger description, README, examples, install notes, and license."
        },
        {
          title: "Portability",
          text: "Whether the skill can travel across Claude, Codex, Cursor, Gemini, Copilot, or OpenCode."
        },
        {
          title: "Evidence",
          text: "Every badge should come from a scanned file, a reproducible benchmark, or a manual review note."
        }
      ]
    }
  },
  zh: {
    language: {
      aria: "语言",
      labels: { en: "EN", zh: "中文" }
    },
    nav: {
      directory: "目录",
      method: "评分方法",
      github: "GitHub"
    },
    hero: {
      eyebrow: "经过安全评分的 Agent 技能",
      title: "用证据安装 Skill，而不是凭感觉。",
      lede: "SkillCheck 把 Agent 技能仓库转成可比较的安全、文档、可迁移性和证据报告。",
      browse: "浏览 20 个已审阅技能",
      star: "给项目 Star",
      trust: ["静态风险扫描", "人工审查视角", "跨 Agent 可迁移性"]
    },
    terminal: {
      aria: "SkillCheck CLI 示例",
      score: "评分",
      safety: "安全",
      docs: "文档",
      portability: "可迁移性",
      commandRisk: "! 潜在命令执行 (-18)",
      scriptRisk: "* 包含可执行脚本 (-8)",
      testsRisk: "- 未检测到测试 (-3)"
    },
    metrics: {
      reviewed: "已审阅技能",
      average: "平均分",
      safetyA: "安全 A 级",
      platforms: "平台数"
    },
    radar: {
      eyebrow: "风险雷达",
      title: "信任信号比 Star 数更重要。",
      manual: {
        label: "需要人工审查",
        text: "安全等级为 B/C 的技能，通常会触达代码、API、hooks、文件或凭证。"
      },
      external: {
        label: "外部服务",
        text: "提到 API、认证、付费服务、社交来源或网页研究的仓库。"
      },
      local: {
        label: "本地数据面",
        text: "会索引、持久化或修改本地项目、知识库、上下文或计划文件的技能。"
      },
      portable: {
        label: "可迁移候选",
        text: "声称支持三个或更多 Agent 客户端的技能。"
      }
    },
    directory: {
      eyebrow: "目录",
      title: "按信任信号排序",
      note: (shown: number, total: number) => `显示 ${shown} / ${total} 个已审阅技能`,
      method: "查看评分方法",
      searchLabel: "搜索技能",
      searchPlaceholder: "按任务、仓库、平台或风险搜索",
      categoryLabel: "分类",
      platformLabel: "平台",
      allCategories: "全部分类",
      allPlatforms: "全部平台",
      safetyOnly: "仅看安全 A 级",
      emptyTitle: "没有技能匹配当前筛选。",
      emptyText: "可以清空搜索、切换平台，或关闭“仅看安全 A 级”。"
    },
    card: {
      safety: "安全",
      stars: "stars",
      docs: "文档",
      portability: "可迁移",
      grades: "等级"
    },
    method: {
      eyebrow: "方法",
      title: "评分检查什么",
      items: [
        {
          title: "安全",
          text: "命令执行、网络调用、文件写入、依赖脚本和凭证处理。"
        },
        {
          title: "文档",
          text: "标准 SKILL.md、触发说明、README、示例、安装说明和许可证。"
        },
        {
          title: "可迁移性",
          text: "技能是否能在 Claude、Codex、Cursor、Gemini、Copilot 或 OpenCode 之间迁移。"
        },
        {
          title: "证据",
          text: "每个 badge 都应来自扫描文件、可复现实验，或人工审查备注。"
        }
      ]
    }
  }
} satisfies Record<Language, unknown>;

type CategoryFilter = "all" | SkillEntry["category"];
type PlatformFilter = "all" | string;

export default function App() {
  const [language, setLanguage] = useState<Language>(() => detectInitialLanguage());
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [platform, setPlatform] = useState<PlatformFilter>("all");
  const [safetyOnly, setSafetyOnly] = useState(false);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    window.localStorage.setItem(languageStorageKey, language);
  }, [language]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return skills.filter((skill) => {
      const queryMatch = !normalizedQuery || buildSearchText(skill).includes(normalizedQuery);
      const categoryMatch = category === "all" || skill.category === category;
      const platformMatch = platform === "all" || skill.platforms.includes(platform);
      const safetyMatch = !safetyOnly || skill.safety === "A";
      return queryMatch && categoryMatch && platformMatch && safetyMatch;
    });
  }, [category, platform, query, safetyOnly]);

  const averageScore = Math.round(skills.reduce((total, skill) => total + skill.score, 0) / skills.length);
  const safeCount = skills.filter((skill) => skill.safety === "A").length;
  const platformCount = new Set(skills.flatMap((skill) => skill.platforms)).size;
  const reviewCount = skills.filter((skill) => skill.safety !== "A").length;
  const externalCount = skills.filter((skill) => hasSignal(skill, ["api", "credential", "auth", "web", "paid", "external"])).length;
  const localDataCount = skills.filter((skill) => hasSignal(skill, ["file", "index", "vault", "persistence", "local", "本地", "索引", "持久"])).length;
  const portableCount = skills.filter((skill) => skill.platforms.length >= 3).length;

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="SkillCheck home">
          <span className="brandMark">SC</span>
          <span>SkillCheck</span>
        </a>
        <div className="topActions">
          <nav aria-label="Primary">
            <a href="#directory">{t.nav.directory}</a>
            <a href="#method">{t.nav.method}</a>
            <a href="https://github.com/wxxsw/skillcheck" target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              {t.nav.github}
            </a>
          </nav>
          <LanguageSwitch language={language} onChange={setLanguage} labels={t.language.labels} ariaLabel={t.language.aria} />
        </div>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="lede">{t.hero.lede}</p>
          <div className="heroActions">
            <a className="primaryAction" href="#directory">
              {t.hero.browse}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="secondaryAction" href="https://github.com/wxxsw/skillcheck" target="_blank" rel="noreferrer">
              <Github size={17} aria-hidden="true" />
              {t.hero.star}
            </a>
          </div>
          <div className="trustStrip" aria-label="Why SkillCheck is different">
            {t.hero.trust.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="terminalPanel" aria-label={t.terminal.aria}>
          <div className="terminalHeader">
            <Terminal size={18} aria-hidden="true" />
            <span>skillcheck scan</span>
          </div>
          <pre>{`$ skillcheck scan ./react-testing-skill
${t.terminal.score}            86/100
${t.terminal.safety}           B
${t.terminal.docs}             A
${t.terminal.portability}      A

${t.terminal.commandRisk}
${t.terminal.scriptRisk}
${t.terminal.testsRisk}`}</pre>
        </div>
      </section>

      <section className="metrics" aria-label="SkillCheck snapshot">
        <Metric icon={<ClipboardCheck size={20} />} label={t.metrics.reviewed} value={String(skills.length)} />
        <Metric icon={<Gauge size={20} />} label={t.metrics.average} value={`${averageScore}`} />
        <Metric icon={<ShieldCheck size={20} />} label={t.metrics.safetyA} value={String(safeCount)} />
        <Metric icon={<Layers size={20} />} label={t.metrics.platforms} value={String(platformCount)} />
      </section>

      <section className="radar" aria-label={t.radar.eyebrow}>
        <div>
          <p className="eyebrow">{t.radar.eyebrow}</p>
          <h2>{t.radar.title}</h2>
        </div>
        <div className="radarGrid">
          <RadarItem icon={<AlertTriangle size={20} />} label={t.radar.manual.label} value={reviewCount} text={t.radar.manual.text} />
          <RadarItem icon={<Sparkles size={20} />} label={t.radar.external.label} value={externalCount} text={t.radar.external.text} />
          <RadarItem icon={<BookOpen size={20} />} label={t.radar.local.label} value={localDataCount} text={t.radar.local.text} />
          <RadarItem icon={<Star size={20} />} label={t.radar.portable.label} value={portableCount} text={t.radar.portable.text} />
        </div>
      </section>

      <section className="directory" id="directory">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">{t.directory.eyebrow}</p>
            <h2>{t.directory.title}</h2>
            <p className="sectionNote">{t.directory.note(filtered.length, skills.length)}</p>
          </div>
          <a className="textLink" href="#method">
            {t.directory.method}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="toolbar" role="search">
          <label className="searchBox">
            <Search size={18} aria-hidden="true" />
            <span className="srOnly">{t.directory.searchLabel}</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.directory.searchPlaceholder}
            />
          </label>
          <div className="selectGroup">
            <Filter size={18} aria-hidden="true" />
            <select value={category} onChange={(event) => setCategory(event.target.value as CategoryFilter)} aria-label={t.directory.categoryLabel}>
              <option value="all">{t.directory.allCategories}</option>
              {categories.map((item) => <option key={item} value={item}>{categoryLabels[item][language]}</option>)}
            </select>
            <select value={platform} onChange={(event) => setPlatform(event.target.value)} aria-label={t.directory.platformLabel}>
              <option value="all">{t.directory.allPlatforms}</option>
              {platformFilters.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              checked={safetyOnly}
              onChange={(event) => setSafetyOnly(event.target.checked)}
            />
            <span>{t.directory.safetyOnly}</span>
          </label>
        </div>

        <div className="skillGrid">
          {filtered.map((skill) => <SkillCard key={skill.id} skill={skill} language={language} labels={t.card} />)}
        </div>
        {filtered.length === 0 && (
          <div className="emptyState">
            <h3>{t.directory.emptyTitle}</h3>
            <p>{t.directory.emptyText}</p>
          </div>
        )}
      </section>

      <section className="method" id="method">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">{t.method.eyebrow}</p>
            <h2>{t.method.title}</h2>
          </div>
        </div>
        <div className="methodGrid">
          {t.method.items.map((item) => <MethodItem key={item.title} title={item.title} text={item.text} />)}
        </div>
      </section>
    </main>
  );
}

function LanguageSwitch({
  language,
  onChange,
  labels,
  ariaLabel
}: {
  language: Language;
  onChange: (language: Language) => void;
  labels: Record<Language, string>;
  ariaLabel: string;
}) {
  return (
    <div className="languageSwitch" role="group" aria-label={ariaLabel}>
      {(["en", "zh"] as const).map((item) => (
        <button
          key={item}
          type="button"
          className={language === item ? "active" : undefined}
          aria-pressed={language === item}
          onClick={() => onChange(item)}
        >
          {labels[item]}
        </button>
      ))}
    </div>
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

function SkillCard({
  skill,
  language,
  labels
}: {
  skill: SkillEntry;
  language: Language;
  labels: {
    safety: string;
    stars: string;
    docs: string;
    portability: string;
    grades: string;
  };
}) {
  return (
    <article className="skillCard">
      <div className="cardTop">
        <span className={`grade grade${skill.safety}`}>{labels.safety} {skill.safety}</span>
        <span className="score">{skill.score}</span>
      </div>
      <div className="cardMeta">
        <span>{categoryLabels[skill.category][language]}</span>
        <span>{skill.stars} {labels.stars}</span>
      </div>
      <h3>{skill.name}</h3>
      <a className="repoLink" href={skill.url} target="_blank" rel="noreferrer">
        {skill.repo}
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
      <p>{localize(skill.summary, language)}</p>
      <div className="signalLine">
        <Sparkles size={15} aria-hidden="true" />
        <span>{localize(skill.signal, language)}</span>
      </div>
      <div className="gradeRow" aria-label={labels.grades}>
        <GradePill label={labels.docs} value={skill.docs} />
        <GradePill label={labels.portability} value={skill.portability} />
      </div>
      <div className="badges">
        {skill.badges.map((badge, index) => <span key={`${skill.id}-badge-${index}`}>{localize(badge, language)}</span>)}
      </div>
      <div className="riskLine">
        <BadgeCheck size={16} aria-hidden="true" />
        <span>{localize(skill.risks[0], language)}</span>
      </div>
    </article>
  );
}

function hasSignal(skill: SkillEntry, terms: string[]): boolean {
  const haystack = buildSearchText(skill);
  return terms.some((term) => haystack.includes(term.toLowerCase()));
}

function buildSearchText(skill: SkillEntry): string {
  return [
    skill.name,
    skill.repo,
    categoryLabels[skill.category].en,
    categoryLabels[skill.category].zh,
    skill.summary.en,
    skill.summary.zh,
    skill.signal.en,
    skill.signal.zh,
    skill.platforms.join(" "),
    ...skill.badges.flatMap((badge) => [badge.en, badge.zh]),
    ...skill.risks.flatMap((risk) => [risk.en, risk.zh])
  ].join(" ").toLowerCase();
}

function localize(text: LocalizedText, language: Language): string {
  return text[language];
}

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(languageStorageKey);
  if (saved === "en" || saved === "zh") return saved;
  const languages = navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  return languages.some((item) => item.toLowerCase().startsWith("zh")) ? "zh" : "en";
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
