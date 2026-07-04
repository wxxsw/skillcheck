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
import {
  categories,
  categoryDescriptions,
  categoryLabels,
  Language,
  LocalizedText,
  SkillEntry,
  skillInsights,
  skills
} from "./data";

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
      eyebrow: "Agent skills, reviewed before install",
      title: "Find skills you can trust.",
      lede: "SkillCheck reviews agent skill repos and shows the risks, docs, platform support, and proof in one simple scorecard.",
      browse: "Browse 20 reviewed skills",
      star: "Star the project",
      trust: ["Risk scan", "Human review", "Works across agents"]
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
      title: "Stars show popularity. SkillCheck shows risk.",
      manual: {
        label: "Review before use",
        text: "Skills graded B or C often touch code, APIs, hooks, files, or credentials."
      },
      external: {
        label: "External services",
        text: "Skills that may call APIs, need auth, use paid services, or browse the web."
      },
      local: {
        label: "Local data",
        text: "Skills that read, index, save, or change project files and knowledge bases."
      },
      portable: {
        label: "Portable picks",
        text: "Skills that appear to work with three or more agent clients."
      }
    },
    directory: {
      eyebrow: "Directory",
      title: "Reviewed skills, sorted by trust",
      note: (shown: number, total: number) => `${shown} of ${total} reviewed skills shown`,
      method: "Scoring method",
      browseTitle: "Browse by goal",
      searchLabel: "Search skills",
      searchPlaceholder: "Search by task, repo, platform, or risk",
      categoryLabel: "Category",
      platformLabel: "Platform",
      allCategories: "All categories",
      allDescription: "Everything in the reviewed gallery.",
      allPlatforms: "All platforms",
      safetyOnly: "Safety A only",
      emptyTitle: "No skills match those filters.",
      emptyText: "Try a broader search, another platform, or turn off Safety A only."
    },
    card: {
      safety: "Safety",
      stars: "stars",
      docs: "Docs",
      portability: "Portability",
      grades: "Grades",
      bestFor: "Best for",
      goodSigns: "Good signs",
      watchouts: "Watch"
    },
    method: {
      eyebrow: "Method",
      title: "What each score means",
      items: [
        {
          title: "Safety",
          text: "Does it run commands, call the network, write files, or ask for secrets?"
        },
        {
          title: "Documentation",
          text: "Is there a clear SKILL.md, README, example, install note, and license?"
        },
        {
          title: "Portability",
          text: "Can it work outside one agent app, or is it locked to a single client?"
        },
        {
          title: "Evidence",
          text: "Can the claim be traced to files, examples, benchmarks, or review notes?"
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
      eyebrow: "安装前先审查 Agent Skill",
      title: "找到更值得信任的 Skill。",
      lede: "SkillCheck 会审阅 Agent Skill 仓库，把风险、文档、平台支持和证据整理成一张简单评分卡。",
      browse: "浏览 20 个已审阅技能",
      star: "给项目 Star",
      trust: ["风险扫描", "人工审查", "跨 Agent 可用"]
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
      title: "Star 看热度，SkillCheck 看风险。",
      manual: {
        label: "使用前再看一眼",
        text: "安全等级为 B/C 的技能，往往会接触代码、API、hooks、文件或凭证。"
      },
      external: {
        label: "外部服务",
        text: "可能调用 API、需要登录、使用付费服务，或进行网页研究。"
      },
      local: {
        label: "本地数据",
        text: "会读取、索引、保存或修改项目文件和知识库。"
      },
      portable: {
        label: "可迁移候选",
        text: "看起来能在三个或更多 Agent 客户端中使用。"
      }
    },
    directory: {
      eyebrow: "目录",
      title: "按可信度整理的 Skill",
      note: (shown: number, total: number) => `显示 ${shown} / ${total} 个已审阅技能`,
      method: "查看评分方法",
      browseTitle: "按目标浏览",
      searchLabel: "搜索技能",
      searchPlaceholder: "按任务、仓库、平台或风险搜索",
      categoryLabel: "分类",
      platformLabel: "平台",
      allCategories: "全部分类",
      allDescription: "显示所有已审阅 Skill。",
      allPlatforms: "全部平台",
      safetyOnly: "仅看安全 A 级",
      emptyTitle: "没有技能匹配当前筛选。",
      emptyText: "可以放宽关键词、换个平台，或关闭“仅看安全 A 级”。"
    },
    card: {
      safety: "安全",
      stars: "stars",
      docs: "文档",
      portability: "可迁移",
      grades: "等级",
      bestFor: "适合",
      goodSigns: "好信号",
      watchouts: "注意风险"
    },
    method: {
      eyebrow: "方法",
      title: "每个分数代表什么",
      items: [
        {
          title: "安全",
          text: "它会不会运行命令、联网、写文件，或要求密钥？"
        },
        {
          title: "文档",
          text: "有没有清楚的 SKILL.md、README、示例、安装说明和许可证？"
        },
        {
          title: "可迁移性",
          text: "能不能离开单一 Agent 客户端，在其他工具里复用？"
        },
        {
          title: "证据",
          text: "每个判断能不能追溯到文件、示例、测试或审查记录？"
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

        <CategoryBrowser
          active={category}
          language={language}
          labels={t.directory}
          onChange={setCategory}
        />

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

function CategoryBrowser({
  active,
  language,
  labels,
  onChange
}: {
  active: CategoryFilter;
  language: Language;
  labels: {
    browseTitle: string;
    allCategories: string;
    allDescription: string;
  };
  onChange: (category: CategoryFilter) => void;
}) {
  return (
    <div className="categoryBrowser" aria-label={labels.browseTitle}>
      <div className="categoryBrowserHeader">
        <Filter size={18} aria-hidden="true" />
        <span>{labels.browseTitle}</span>
      </div>
      <div className="categoryChips">
        <button
          type="button"
          className={active === "all" ? "active" : undefined}
          aria-pressed={active === "all"}
          onClick={() => onChange("all")}
        >
          <strong>{labels.allCategories}</strong>
          <span>{labels.allDescription}</span>
          <em>{skills.length}</em>
        </button>
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={active === item ? "active" : undefined}
            aria-pressed={active === item}
            onClick={() => onChange(item)}
          >
            <strong>{categoryLabels[item][language]}</strong>
            <span>{categoryDescriptions[item][language]}</span>
            <em>{countByCategory(item)}</em>
          </button>
        ))}
      </div>
    </div>
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
    bestFor: string;
    goodSigns: string;
    watchouts: string;
  };
}) {
  const insight = skillInsights[skill.id] ?? {
    intent: skill.summary,
    strengths: skill.badges,
    watchouts: skill.risks
  };

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

      <div className="intentBox">
        <span>{labels.bestFor}</span>
        <strong>{localize(insight.intent, language)}</strong>
      </div>

      <TagSection
        icon={<BadgeCheck size={15} aria-hidden="true" />}
        items={insight.strengths}
        label={labels.goodSigns}
        language={language}
        tone="good"
      />
      <TagSection
        icon={<AlertTriangle size={15} aria-hidden="true" />}
        items={insight.watchouts}
        label={labels.watchouts}
        language={language}
        tone="watch"
      />
    </article>
  );
}

function TagSection({
  icon,
  items,
  label,
  language,
  tone
}: {
  icon: ReactNode;
  items: LocalizedText[];
  label: string;
  language: Language;
  tone: "good" | "watch";
}) {
  return (
    <div className={`tagSection tagSection${tone}`}>
      <div className="tagSectionLabel">
        {icon}
        <span>{label}</span>
      </div>
      <div className="tagList">
        {items.map((item, index) => <span key={`${label}-${index}`}>{localize(item, language)}</span>)}
      </div>
    </div>
  );
}

function hasSignal(skill: SkillEntry, terms: string[]): boolean {
  const haystack = buildSearchText(skill);
  return terms.some((term) => haystack.includes(term.toLowerCase()));
}

function buildSearchText(skill: SkillEntry): string {
  const insight = skillInsights[skill.id];
  return [
    skill.name,
    skill.repo,
    categoryLabels[skill.category].en,
    categoryLabels[skill.category].zh,
    categoryDescriptions[skill.category].en,
    categoryDescriptions[skill.category].zh,
    skill.summary.en,
    skill.summary.zh,
    skill.signal.en,
    skill.signal.zh,
    skill.platforms.join(" "),
    ...skill.badges.flatMap((badge) => [badge.en, badge.zh]),
    ...skill.risks.flatMap((risk) => [risk.en, risk.zh]),
    ...(insight ? [insight.intent.en, insight.intent.zh] : []),
    ...(insight ? insight.strengths.flatMap((item) => [item.en, item.zh]) : []),
    ...(insight ? insight.watchouts.flatMap((item) => [item.en, item.zh]) : [])
  ].join(" ").toLowerCase();
}

function countByCategory(category: SkillEntry["category"]): number {
  return skills.filter((skill) => skill.category === category).length;
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
