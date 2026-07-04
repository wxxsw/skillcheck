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

const platformFilters = ["Claude", "Codex", "Cursor", "Gemini", "Copilot", "OpenCode", "OpenClaw", "Antigravity", "Aider", "Kiro", "Qwen"];
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
      browse: (count: number) => `Browse ${count} reviewed skills`,
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
      browse: (count: number) => `浏览 ${count} 个已审阅技能`,
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
              {t.hero.browse(skills.length)}
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
      <p className="summaryText">{localize(skill.summary, language)}</p>
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
        {items.map((item, index) => {
          const text = localize(item, language);
          const explanation = explainTag(item, tone, language);
          return (
            <span
              key={`${label}-${index}`}
              className="tagPill"
              data-tooltip={explanation}
              aria-label={`${text}: ${explanation}`}
            >
              {text}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function explainTag(item: LocalizedText, tone: "good" | "watch", language: Language): string {
  const source = `${item.en} ${item.zh}`.toLowerCase();
  const rule = tagExplanationRules.find(({ match }) => match.test(source));
  if (rule) return rule[tone][language];

  const label = localize(item, language);
  if (tone === "good") {
    return language === "zh"
      ? `${label} 是一个正向信号：说明这个仓库在这一点上值得继续查看。仍建议点进 README、SKILL.md 或示例确认是否真的适合你的工作流。`
      : `${label} is a positive signal: this repo appears strong on this point. Still open the README, SKILL.md, or examples before relying on it.`;
  }

  return language === "zh"
    ? `${label} 是安装前要重点检查的风险点：它可能影响隐私、安全、成本、权限或实际适配度。先看 README、脚本和配置说明。`
    : `${label} is a review point before install: it may affect privacy, safety, cost, permissions, or fit. Check the README, scripts, and config first.`;
}

const tagExplanationRules: Array<{
  match: RegExp;
  good: LocalizedText;
  watch: LocalizedText;
}> = [
  {
    match: /official|vendor|google|github|\.net|source|author|practitioner|官方|作者|厂商|来源/,
    good: {
      en: "The repo has a stronger provenance signal than a random prompt pack. Still verify whether examples and licenses match your use case.",
      zh: "这个仓库的来源信号更强，不像随手整理的 prompt 包。仍然要确认示例和许可证是否适合你的场景。"
    },
    watch: {
      en: "Do not treat provenance as proof of safety. Review the actual skill files, scripts, and install steps before trusting the repo.",
      zh: "来源强不等于一定安全。安装前仍要看实际 Skill 文件、脚本和安装步骤。"
    }
  },
  {
    match: /credential|secret|token|key|oauth|auth|scope|permission|admin|凭证|密钥|认证|权限|管理员/,
    good: {
      en: "The repo names authentication or permission boundaries clearly, which makes review easier. Check the exact scopes before connecting accounts.",
      zh: "仓库明确提到了认证或权限边界，方便审查。连接账号前要确认具体 scope 和权限。"
    },
    watch: {
      en: "This may involve account tokens, OAuth scopes, API keys, or admin access. Confirm what is stored, where it is sent, and how to revoke it.",
      zh: "这里可能涉及账号 Token、OAuth scope、API Key 或管理员权限。要确认保存位置、发送对象和撤销方式。"
    }
  },
  {
    match: /script|command|exec|cli|installer|install|package|npx|chmod|shell|脚本|命令|安装|执行/,
    good: {
      en: "The workflow exposes a command or installer path, which can make setup reproducible. Read the command before running it locally.",
      zh: "它提供了命令或安装路径，设置会更可复现。但在本地运行前要先读命令内容。"
    },
    watch: {
      en: "Executable steps can modify files, install packages, or run shell commands. Review scripts and generated paths before granting access.",
      zh: "可执行步骤可能改文件、安装依赖或运行 Shell 命令。授权前要审查脚本和生成路径。"
    }
  },
  {
    match: /file|local|path|vault|write|overwrite|sync|export|generated|diff|repo mutation|本地|文件|路径|知识库|写入|覆盖|同步|导出|生成/,
    good: {
      en: "The skill works with concrete local artifacts, which makes outputs inspectable and repeatable. Check where those artifacts are written.",
      zh: "这个 Skill 会产出或处理具体本地文件，结果更容易检查和复现。要确认写入位置。"
    },
    watch: {
      en: "File access can overwrite notes, plans, generated assets, or repo state. Check default paths, backup behavior, and overwrite rules.",
      zh: "文件访问可能覆盖笔记、计划、生成素材或仓库状态。要确认默认路径、备份行为和覆盖规则。"
    }
  },
  {
    match: /memory|context|session|history|retention|pii|recall|记忆|上下文|会话|历史|隐私|保留/,
    good: {
      en: "The repo is designed to preserve useful context across sessions. This can reduce repeated setup when the memory policy is clear.",
      zh: "这个仓库关注跨会话保留有用上下文。如果记忆策略清楚，可以减少重复交代背景。"
    },
    watch: {
      en: "Persistent memory can keep sensitive project, account, or personal details. Review retention, deletion, and injection protections.",
      zh: "持久记忆可能保存敏感项目、账号或个人信息。要检查保留、删除和防注入策略。"
    }
  },
  {
    match: /mcp|hook|plugin|extension|desktop|harness|runtime|container|server|hooks|插件|扩展|桌面|容器|服务器/,
    good: {
      en: "The repo goes beyond static prompts and can integrate with a real agent runtime. That can be powerful when boundaries are documented.",
      zh: "它不只是静态提示词，而是能接入真实 Agent runtime。边界写清楚时会很有价值。"
    },
    watch: {
      en: "Runtime integrations can broaden permissions through hooks, plugins, MCP servers, or desktop apps. Review what runs automatically.",
      zh: "Runtime 集成可能通过 hooks、插件、MCP server 或桌面应用扩大权限。要确认哪些动作会自动运行。"
    }
  },
  {
    match: /api|network|external|cloud|workspace|cms|integration|web|url|fetch|paid|cost|外部|网络|云|集成|付费|成本/,
    good: {
      en: "The skill connects to real services or APIs, so it may produce fresher or more actionable results than static guidance.",
      zh: "这个 Skill 能连接真实服务或 API，结果可能比静态指导更新、更可执行。"
    },
    watch: {
      en: "External services can send data out, create costs, or change live systems. Check rate limits, paid APIs, and write operations.",
      zh: "外部服务可能发出数据、产生成本或改动线上系统。要检查限流、付费 API 和写操作。"
    }
  },
  {
    match: /browser|account|message|publish|send|im|wechat|cms|anti-bot|side effect|浏览器|账号|消息|发布|发送|微信|副作用/,
    good: {
      en: "The workflow can operate on real user-facing surfaces, which is useful for publishing, QA, or operations tasks.",
      zh: "这个工作流能操作真实用户界面，适合发布、QA 或运营类任务。"
    },
    watch: {
      en: "Browser, messaging, and publishing actions can affect external accounts. Confirm human approval gates before sending or publishing.",
      zh: "浏览器、消息和发布动作会影响外部账号。发送或发布前要确认有没有人工审批门槛。"
    }
  },
  {
    match: /license|rights|copyright|asset|image|video|audio|media|style|素材|版权|许可|图片|视频|音频|媒体|风格/,
    good: {
      en: "The skill handles creative assets or media formats, which can make agent output more production-ready.",
      zh: "这个 Skill 处理创意素材或媒体格式，可以让 Agent 输出更接近可发布产物。"
    },
    watch: {
      en: "Creative workflows can reuse protected assets, styles, or generated media. Review licenses, rights, and model usage terms.",
      zh: "创意工作流可能复用受保护素材、风格或生成媒体。要审查许可证、权利归属和模型条款。"
    }
  },
  {
    match: /source|citation|fresh|database|data|benchmark|evidence|provenance|verification|来源|引用|时效|数据库|证据|核验/,
    good: {
      en: "The tag points to evidence, sources, or evaluation. That makes claims easier to audit instead of taking the skill at face value.",
      zh: "这个标签指向证据、来源或评测，让你能审查能力主张，而不是只看宣传。"
    },
    watch: {
      en: "Research and data claims can go stale or be mis-cited. Check source dates, provenance, and whether the benchmark matches your task.",
      zh: "研究和数据主张可能过时或引用错误。要检查来源日期、出处和 benchmark 是否匹配你的任务。"
    }
  },
  {
    match: /example|docs|readme|template|structured|frontmatter|示例|文档|模板|结构化/,
    good: {
      en: "Clear examples or templates reduce ambiguity and make the skill easier to test before adoption.",
      zh: "清楚的示例或模板能减少歧义，也更容易在采用前测试效果。"
    },
    watch: {
      en: "Examples can be too generic or outdated. Check whether they match your project shape, inputs, and expected output quality.",
      zh: "示例可能过于通用或已经过时。要看它是否匹配你的项目形态、输入和期望质量。"
    }
  },
  {
    match: /multi-platform|portable|cross|client|opencode|codex|cursor|gemini|copilot|claude|跨|多平台|可迁移|客户端/,
    good: {
      en: "The repo appears usable across more than one agent client, which reduces lock-in and makes the pattern easier to reuse.",
      zh: "它看起来能跨多个 Agent 客户端使用，可以减少锁定，也更容易复用。"
    },
    watch: {
      en: "Compatibility claims are often untested. Check whether each client has examples, install notes, or known limitations.",
      zh: "兼容性声明常常没有充分测试。要看每个客户端是否有示例、安装说明或已知限制。"
    }
  },
  {
    match: /low|no command|no exec|no network|no writes|safe|安全风险低|无命令|无执行|直接风险低/,
    good: {
      en: "This suggests the skill is mostly guidance or templates, with less direct ability to run commands or mutate your system.",
      zh: "这表示它更偏指导或模板，直接运行命令或修改系统的能力较弱。"
    },
    watch: {
      en: "Low direct risk still needs review if the skill can influence code, decisions, or downstream automation.",
      zh: "直接风险低也仍需审查，尤其当它会影响代码、决策或后续自动化时。"
    }
  },
  {
    match: /security|dual-use|lab|exploit|ctf|scanner|audit|policy|安全|双用途|实验|扫描|审计/,
    good: {
      en: "Security-focused skills can add useful review structure, especially when they define scope, authorization, and evidence.",
      zh: "安全类 Skill 能提供有用的审查结构，尤其当它明确范围、授权和证据时。"
    },
    watch: {
      en: "Security workflows can be dual-use. Keep them inside authorized labs or repos, and review any exploit or scanning commands.",
      zh: "安全工作流有双用途风险。应限制在授权实验环境或仓库内，并审查利用或扫描命令。"
    }
  },
  {
    match: /test|ci|qa|playwright|quality|metric|测试|质量|指标/,
    good: {
      en: "Testing or quality tags mean the skill can make outputs easier to verify with checks rather than only subjective review.",
      zh: "测试或质量标签表示它能让输出更容易通过检查验证，而不是只靠主观判断。"
    },
    watch: {
      en: "Test guidance depends on project fixtures, browsers, CI limits, and version alignment. Confirm it fits your test setup.",
      zh: "测试指导依赖项目 fixture、浏览器、CI 限制和版本一致性。要确认它适合你的测试配置。"
    }
  },
  {
    match: /terraform|iac|cloud|provider|apply|state|infra|基础设施|云|状态/,
    good: {
      en: "Infrastructure-specific guidance can reduce hallucinated APIs and nudge agents toward safer production patterns.",
      zh: "基础设施专用指导可以减少 API 幻觉，并引导 Agent 使用更安全的生产模式。"
    },
    watch: {
      en: "Infrastructure changes can affect real cloud resources. Review state handling, credentials, provider versions, and apply steps.",
      zh: "基础设施变更会影响真实云资源。要检查状态管理、凭证、Provider 版本和 apply 步骤。"
    }
  },
  {
    match: /swift|ios|mobile|apple|actor|concurrency|移动端|并发/,
    good: {
      en: "Mobile-specific guidance helps agents respect platform APIs, lifecycle rules, and version constraints.",
      zh: "移动端专用指导能帮助 Agent 遵守平台 API、生命周期规则和版本约束。"
    },
    watch: {
      en: "Mobile frameworks change quickly. Check target OS versions, concurrency rules, and project-specific architecture.",
      zh: "移动端框架变化很快。要确认目标系统版本、并发规则和项目架构。"
    }
  },
  {
    match: /seo|geo|marketing|content|search|report|增长|营销|搜索|内容|报告/,
    good: {
      en: "Marketing tags point to repeatable workflows for briefs, audits, reporting, or content operations.",
      zh: "营销标签通常代表可复用的 Brief、审计、报告或内容运营工作流。"
    },
    watch: {
      en: "Marketing outputs need freshness and claim checks. Verify sources, search data, and whether tools require paid credentials.",
      zh: "营销输出需要时效和主张校验。要核验来源、搜索数据，以及工具是否需要付费凭证。"
    }
  },
  {
    match: /finance|financial|investment|metric|analysis|金融|投资|分析|指标/,
    good: {
      en: "Finance or data workflows can add structure to analysis and make assumptions easier to inspect.",
      zh: "金融或数据工作流能给分析增加结构，让假设更容易检查。"
    },
    watch: {
      en: "Financial outputs are not advice. Check data freshness, source quality, assumptions, and any downstream decisions.",
      zh: "金融输出不是投资建议。要检查数据时效、来源质量、假设和后续决策影响。"
    }
  }
];

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
