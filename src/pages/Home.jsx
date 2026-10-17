import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import WeChatButton from '../components/WeChatButton'
import { images } from '../data/images'

const SKILLS = [
  'Design Systems',
  'Editorial UI',
  'Design Tokens',
  'Tactile Motion',
  'User Research',
  'Prototyping',
]

export default function Home() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden">
      <section className="relative px-margin pt-12 pb-space-2xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
          <div className="relative z-10 flex flex-col gap-space-lg lg:col-span-7">
            <div className="inline-flex items-center gap-space-xs self-start rounded-full bg-secondary-container/70 px-space-md py-space-xs shadow-sm transition-transform duration-300 hover:scale-[1.02]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
              </span>
              <span className="font-label-caps text-label-caps tracking-wider text-on-secondary-container uppercase">
                Open to Work • 资深 UI/UX 设计师 / 视觉体验架构师
              </span>
            </div>

            <div className="flex flex-col gap-space-xs">
              <p className="font-label-caps text-label-caps tracking-[0.25em] text-secondary uppercase">
                Atelier • Digital Craft • Humanist UX
              </p>
              <h1 className="font-display-hero text-display-hero-mobile tracking-tight text-primary md:text-display-hero">
                Designing with <span className="font-display-hero text-tertiary italic">intention</span>,
                <br className="hidden sm:inline" />
                breathing with <span className="font-display-hero text-secondary italic">nature</span>.
              </h1>
            </div>

            <p className="max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              我是 <span className="font-headline-sm text-primary">Parhelia</span>
              。在快节奏的技术浪潮中，我专注以植物般的静谧与秩序构建数字体验。融合人文美学与系统化设计工程，为富有远见的产品赋予温润的触觉记忆与优雅质感。
            </p>

            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <Link
                className="cursor-target inline-flex items-center justify-center rounded-full bg-primary-container px-8 py-3.5 font-label-md text-label-md text-on-primary shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-primary"
                data-cursor-label="作品"
                to="/works"
              >
                探索精选作品
                <Icon className="ml-2 text-base" name="north_east" />
              </Link>
              <a
                className="cursor-target inline-flex items-center justify-center rounded-full bg-surface-container-low px-8 py-3.5 font-label-md text-label-md text-primary transition-all duration-300 hover:bg-surface-container-high"
                data-cursor-label="自白"
                href="#about-detail"
              >
                阅读设计自白
              </a>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-space-md pt-space-lg">
              {[
                ['7+', 'Years Crafting'],
                ['30+', 'Shipped Projects'],
                ['100%', 'Tactile Focus'],
              ].map(([value, label]) => (
                <div key={label} className="flex flex-col gap-space-xs rounded-lg bg-surface-container-low/70 p-space-md">
                  <span className="font-headline-sm text-headline-sm text-primary">{value}</span>
                  <span className="font-label-caps text-label-caps text-secondary uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -right-6 -z-10 h-72 w-72 rounded-full bg-secondary-container/40 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 -z-10 h-64 w-64 rounded-full bg-tertiary-fixed/30 blur-2xl" />
              <div className="relative rounded-t-full rounded-b-xl bg-surface-container-low p-3.5 shadow-[0_16px_40px_-12px_rgba(45,58,49,0.08)]">
                <div className="aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] bg-surface-container">
                  <img
                    alt="Parhelia，UI/UX 设计师与创意技术者"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    src={images.portrait}
                  />
                </div>
                <div className="absolute -bottom-5 right-6 flex items-center gap-space-xs rounded-full bg-surface-container-lowest/95 px-space-md py-space-xs shadow-md backdrop-blur-md">
                  <Icon className="text-sm text-secondary" filled name="spa" />
                  <span className="font-label-caps text-label-caps tracking-wider text-primary uppercase">
                    Hangzhou • Remote Available
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute -top-8 -left-6 text-secondary opacity-60">
                <svg fill="currentColor" height="68" viewBox="0 0 100 100" width="68">
                  <path d="M50 0 C77.6 0 100 22.4 100 50 C100 77.6 77.6 100 50 100 C50 60 70 50 50 0 Z" opacity="0.15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-margin my-space-lg scroll-mt-28 rounded-3xl bg-surface-container-low/60 px-margin py-space-xl md:mx-margin-tablet md:px-margin-tablet lg:mx-margin-desktop lg:px-margin-desktop"
        id="about-detail"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-space-xl">
          <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-caps text-label-caps tracking-[0.2em] text-secondary uppercase">
                01 • About Me & Philosophy
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile text-primary md:text-headline-lg">沉静感知，理性生长</h2>
            </div>
            <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
              在信息过载的数字场域中，用清晰的信息架构与克制的诗性视觉，让产品体验如沐晨光。
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-space-lg md:grid-cols-12">
            <div className="flex flex-col justify-between gap-space-lg rounded-3xl bg-surface-container p-8 shadow-sm md:col-span-7 md:p-10">
              <div className="flex items-center gap-space-xs text-tertiary">
                <Icon className="text-3xl" name="format_quote" />
                <span className="font-label-caps text-label-caps tracking-widest text-on-surface-variant uppercase">
                  Design Statement
                </span>
              </div>
              <p className="font-editorial-quote text-editorial-quote leading-relaxed text-primary italic">
                “设计不只是像素的整齐排列，而是人与数字界面之间每一次呼吸的节奏。好的界面如同干燥的陶器或初展的纸卷——温和、笃定、没有刺眼的喧哗。”
              </p>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container font-headline-sm text-on-secondary-container">
                  P
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-primary">Parhelia</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Design System Architect & Interaction Specialist
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-space-md rounded-3xl bg-surface-container-high/80 p-8 shadow-sm md:col-span-5">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-caps text-label-caps tracking-wider text-secondary uppercase">Methodology</span>
                <h3 className="font-headline-md text-headline-md text-primary">复合型设计工程师视角</h3>
                <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                  兼具严谨的组件化思维与敏锐的艺术策展直觉。精通自研 Design Tokens 体系落地、高保真动态微交互与严苛的无障碍标准（WCAG AA）。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-space-xs">
                {SKILLS.map((skill) => (
                  <span key={skill} className="rounded-full bg-surface px-space-md py-1.5 font-label-md text-label-md text-primary shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-space-md rounded-2xl bg-surface-container p-space-lg md:flex-row">
            <div className="flex items-center gap-space-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary">
                <Icon className="text-2xl" name="account_tree" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-headline-sm text-headline-sm text-primary">完整设计脉络与职业图谱</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  涵盖体验构架、前沿原型实验与高质感商用系统案例全景。
                </p>
              </div>
            </div>
            <Link
              className="cursor-target rounded-full bg-surface-container-highest px-6 py-2.5 font-label-md text-label-md text-primary transition-colors hover:bg-secondary-container"
              data-cursor-label="简历"
              to="/about#experience"
            >
              查看完整简历档案
            </Link>
          </div>
        </div>
      </section>

      <section className="px-margin py-space-2xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto flex max-w-7xl flex-col gap-space-xl">
          <div className="flex flex-col justify-between gap-space-sm md:flex-row md:items-end">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-caps text-label-caps tracking-[0.2em] text-secondary uppercase">
                02 • Selected Works
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile text-primary md:text-headline-lg">精选作品集萃</h2>
            </div>
            <Link className="cursor-target group inline-flex items-center gap-space-xs font-label-md text-label-md text-primary" data-cursor-label="全部案例" to="/works">
              <span>浏览所有案例目录 (12)</span>
              <Icon className="text-base transition-transform group-hover:translate-x-1" name="arrow_forward" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12">
            <article className="group flex flex-col gap-space-md rounded-[32px] bg-surface-container p-6 transition-all duration-500 hover:shadow-lg md:p-8 lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-[32px] rounded-b-2xl bg-surface-container-high">
                <img
                  alt="冥想应用界面静物，暖光穿过龟背竹叶片"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={images.auraHome}
                />
                <div className="absolute top-4 left-4 rounded-full bg-surface-container-lowest/90 px-3.5 py-1 font-label-caps text-label-caps text-primary uppercase backdrop-blur-sm">
                  Mobile App • Design System
                </div>
              </div>
              <div className="flex flex-col gap-space-xs pt-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase">2024 • Product Redesign</span>
                  <span className="font-label-caps text-label-caps text-tertiary">B2C Wellness</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary transition-colors group-hover:text-tertiary">
                  Aura • 冥想与心流感知系统
                </h3>
                <p className="line-clamp-2 font-body-md text-body-md text-on-surface-variant">
                  通过降噪微交互、仿生自然触觉反馈与暖色调渐变图层，重塑当代数字焦虑用户的日常冥想沉浸流程。
                </p>
              </div>
            </article>

            <article className="group flex flex-col gap-space-md rounded-[32px] bg-surface-container p-6 transition-all duration-500 hover:shadow-lg md:p-8 lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-[32px] rounded-b-2xl bg-surface-container-high">
                <img
                  alt="独立艺术杂志网页样稿，置于石台与亚麻布上"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={images.folioHome}
                />
                <div className="absolute top-4 left-4 rounded-full bg-surface-container-lowest/90 px-3.5 py-1 font-label-caps text-label-caps text-primary uppercase backdrop-blur-sm">
                  Web • Editorial Platform
                </div>
              </div>
              <div className="flex flex-col gap-space-xs pt-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase">2023 • Creative Direction</span>
                  <span className="font-label-caps text-label-caps text-tertiary">Art Press</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary transition-colors group-hover:text-tertiary">
                  Folio • 独立艺术杂志数字档案馆
                </h3>
                <p className="line-clamp-2 font-body-md text-body-md text-on-surface-variant">
                  为双语艺术出版物打造的非线性阅读系统，重现纸张翻页的质感张力与字距呼吸感。
                </p>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 items-center gap-space-md rounded-[32px] bg-surface-container-low p-6 md:grid-cols-12 md:p-8">
            <div className="flex flex-col gap-space-xs md:col-span-7">
              <span className="font-label-caps text-label-caps tracking-wider text-secondary uppercase">Enterprise • SaaS Platform</span>
              <h3 className="font-headline-sm text-headline-sm text-primary">Komorebi • 全球协同设计物料系统</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                包含 80+ 跨端组件、微交互规范与无障碍色彩对比矩阵的企业级设计工程基础设施。
              </p>
            </div>
            <div className="flex md:col-span-5 md:justify-end">
              <Link
                className="cursor-target inline-flex items-center gap-space-xs rounded-full bg-surface px-6 py-2.5 font-label-md text-label-md text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-on-primary"
                data-cursor-label="全案"
                to="/works"
              >
                查阅设计全案与规范图谱
                <Icon className="text-sm" name="arrow_forward" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 px-margin py-space-xl md:px-margin-tablet lg:px-margin-desktop" id="contact">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-surface-container p-8 shadow-sm md:p-12">
          <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-secondary-container/30 blur-3xl" />
          <div className="relative z-10 flex flex-col justify-between gap-space-xl lg:flex-row lg:items-center">
            <div className="flex max-w-lg flex-col gap-space-xs">
              <div className="inline-flex items-center gap-2 text-secondary">
                <Icon className="text-lg" filled name="mark_chat_unread" />
                <span className="font-label-caps text-label-caps tracking-widest uppercase">Connect • Let's build together</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg-mobile text-primary md:text-headline-lg">期待与有温度的团队相遇</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                目前开放探讨全职岗位（Senior UI/UX / Lead Product Designer）以及具有挑战性的定向设计顾问委托。欢迎随时打个招呼。
              </p>
            </div>

            <div className="flex flex-col gap-space-md">
              <div className="flex flex-wrap items-center gap-space-md">
                <WeChatButton
                  className="flex items-center gap-space-xs rounded-full bg-surface px-5 py-3 font-label-md text-label-md text-primary shadow-sm transition-all duration-300 hover:scale-105 hover:bg-surface-container-high"
                  wechatId="Parhelia_Studio"
                >
                  <Icon className="text-xl text-secondary" name="chat" />
                  <span>微信 / WeChat</span>
                </WeChatButton>
                <a
                  className="cursor-target flex items-center gap-space-xs rounded-full bg-surface px-5 py-3 font-label-md text-label-md text-primary shadow-sm transition-all duration-300 hover:scale-105 hover:bg-surface-container-high"
                  data-cursor-label="GitHub"
                  href="https://github.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="text-xl text-secondary" name="terminal" />
                  <span>GitHub</span>
                  <Icon className="text-sm text-on-surface-variant opacity-60" name="north_east" />
                </a>
                <a
                  className="cursor-target flex items-center gap-space-xs rounded-full bg-primary-container px-5 py-3 font-label-md text-label-md text-on-primary shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary"
                  data-cursor-label="邮件"
                  href="mailto:parhelia.craft@atelier.design"
                >
                  <Icon className="text-xl text-secondary-container" name="mail" />
                  <span>发封邮件</span>
                </a>
              </div>
              <div className="flex items-center gap-space-xs pt-space-xs text-on-surface-variant">
                <Icon className="text-sm" name="schedule" />
                <span className="font-body-sm text-body-sm">通常在 24 小时内回复 • 简历 PDF 可在求职交流中直接索取</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
