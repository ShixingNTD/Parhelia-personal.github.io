import { useMemo, useState } from 'react'
import Icon from '../components/Icon'
import WeChatButton from '../components/WeChatButton'
import { images } from '../data/images'

const FILTERS = [
  { id: 'all', label: '全部案例 (All Works)' },
  { id: 'systems', label: '设计系统 (Design Systems)' },
  { id: 'mobile', label: '触觉与移动端 (Tactile UX)' },
  { id: 'editorial', label: '文化与艺术网志 (Editorial)' },
  { id: 'experimental', label: '声觉与实验微动 (Atelier)' },
]

const SWATCHES = [
  ['bg-primary', '#18241C'],
  ['bg-primary-container', '#2D3A31'],
  ['bg-secondary', '#55624F'],
  ['bg-secondary-container', '#D8E7CE'],
  ['bg-tertiary-container', '#572B1B'],
  ['bg-surface-container-high', '#E9E8E4'],
]

const BARS = [
  ['h-[40%]', 'bg-secondary/20'],
  ['h-[60%]', 'bg-secondary/30'],
  ['h-[55%]', 'bg-secondary/40'],
  ['h-[75%]', 'bg-secondary/50'],
  ['h-[90%]', 'bg-secondary/70'],
  ['h-full', 'bg-primary'],
  ['h-[80%]', 'bg-secondary/60'],
  ['h-[65%]', 'bg-secondary/40'],
]

const METRICS = [
  ['Delivered Works', '16+', '跨端核心案卷与全生命周期交付'],
  ['Enterprise Impact', '80+ Lines', '全球设计系统组件矩阵赋能'],
  ['Retention Leap', '+38%', '触觉化心流交互次月留存提升'],
  ['Recognition', 'Tokyo TDC', 'Red Dot Concept & Type01 提名'],
]

function showCase(tags, category) {
  return category === 'all' || tags.includes(category)
}

function Chip({ children, tone = 'plain' }) {
  const toneClass =
    tone === 'accent'
      ? 'bg-secondary-container/60 text-on-secondary-container'
      : 'bg-surface-container text-on-surface-variant'
  return (
    <span className={`rounded-full px-3 py-1 font-label-caps text-label-caps ${toneClass}`}>{children}</span>
  )
}

export default function Works() {
  const [category, setCategory] = useState('all')
  const [view, setView] = useState('grid')

  const visible = useMemo(
    () => ({
      aura: showCase(['mobile', 'systems'], category),
      folio: showCase(['editorial'], category),
      komorebi: showCase(['systems'], category),
      caelum: showCase(['editorial', 'mobile'], category),
      solitude: showCase(['experimental'], category),
      nave: showCase(['mobile', 'systems'], category),
    }),
    [category],
  )

  const count = Object.values(visible).filter(Boolean).length
  const pairGrid =
    view === 'stream'
      ? 'grid grid-cols-1 gap-space-lg'
      : 'grid grid-cols-1 items-stretch gap-space-lg lg:grid-cols-12'
  const mosaicGrid =
    view === 'stream'
      ? 'grid grid-cols-1 gap-space-lg'
      : 'grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3'
  const folioSpan = view === 'stream' || !visible.komorebi ? 'lg:col-span-12' : 'lg:col-span-5'
  const komorebiSpan = view === 'stream' || !visible.folio ? 'lg:col-span-12' : 'lg:col-span-7'

  return (
    <div className="flex w-full flex-col">
      <section className="w-full px-margin pt-space-xl pb-space-lg md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto flex max-w-6xl flex-col gap-space-md">
          <div className="flex flex-wrap items-center justify-between gap-space-sm">
            <div className="inline-flex items-center gap-space-xs rounded-full bg-secondary-container/40 px-4 py-1.5 text-on-secondary-container">
              <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
              <span className="font-label-caps text-label-caps tracking-widest uppercase">
                01 · Curated Archive / 2021 — 2025
              </span>
            </div>
            <div className="flex items-center gap-space-xs font-label-caps text-label-caps tracking-wider text-on-surface-variant">
              <Icon className="text-sm" name="spa" />
              <span>Botanical System Architecture</span>
            </div>
          </div>

          <div className="grid grid-cols-1 items-end gap-space-md lg:grid-cols-12">
            <div className="flex flex-col gap-space-xs lg:col-span-8">
              <h1 className="font-display-hero text-display-hero-mobile tracking-tight text-primary md:text-display-hero">
                Crafted with <span className="font-display-hero font-light text-secondary italic">Poise</span>,
                <br />
                Engineered with <span className="font-display-hero font-light text-primary italic">Soul</span>.
              </h1>
              <p className="font-headline-sm text-headline-sm font-normal text-on-surface-variant">
                静谧生息，于无界与触感之间构筑数字诗意。
              </p>
            </div>
            <div className="lg:col-span-4">
              <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                将有机生命温度注入高阶系统架构。摒弃冷冽的技术机械感，以纸质触感、光合韵律与严谨工程标准，雕琢人本共鸣的跨端体验。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-space-sm pt-space-sm md:grid-cols-4">
            {METRICS.map(([label, value, note]) => (
              <div key={label} className="flex flex-col rounded-2xl bg-surface-container-low p-5 shadow-sm">
                <span className="font-label-caps text-label-caps text-secondary uppercase">{label}</span>
                <span className="mt-1 font-headline-md text-headline-md text-primary">{value}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-30 w-full px-margin py-space-sm md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-space-xs rounded-full bg-surface-container-low/95 p-2 shadow-[0_12px_36px_-8px_rgba(45,58,49,0.08)] backdrop-blur-md">
          <div className="scrollbar-none flex min-w-0 max-w-full flex-1 items-center gap-1.5 overflow-x-auto px-1 py-1" role="group" aria-label="案例筛选">
            {FILTERS.map((filter) => {
              const active = category === filter.id
              return (
                <button
                  key={filter.id}
                  aria-pressed={active}
                  className={
                    active
                      ? 'cursor-target rounded-full bg-primary-container px-5 py-2 font-label-md text-label-md whitespace-nowrap text-on-primary shadow-sm transition-all duration-300'
                      : 'cursor-target rounded-full px-4 py-2 font-label-md text-label-md whitespace-nowrap text-on-surface-variant transition-all duration-300 hover:bg-surface-container hover:text-primary'
                  }
                  data-cursor-label={filter.label}
                  type="button"
                  onClick={() => setCategory(filter.id)}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
          <div className="hidden items-center gap-space-sm px-3 sm:flex">
            <span className="font-label-caps text-label-caps text-secondary uppercase">
              Showing {count} of 16 items
            </span>
            <div className="h-4 w-px bg-outline-variant/40" />
            <div className="flex items-center gap-1 rounded-full bg-surface-container p-1">
              <button
                aria-pressed={view === 'grid'}
                className={`cursor-target flex h-7 w-7 items-center justify-center rounded-full ${view === 'grid' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                data-cursor-label="画册"
                title="双列画册视图"
                type="button"
                onClick={() => setView('grid')}
              >
                <Icon className="text-base" name="grid_view" />
              </button>
              <button
                aria-pressed={view === 'stream'}
                className={`cursor-target flex h-7 w-7 items-center justify-center rounded-full ${view === 'stream' ? 'bg-surface-container-lowest text-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                data-cursor-label="瀑布流"
                title="非线性瀑布流"
                type="button"
                onClick={() => setView('stream')}
              >
                <Icon className="text-base" name="view_stream" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-margin py-space-xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto flex max-w-6xl flex-col gap-space-xl">
          {count === 0 && (
            <p className="rounded-3xl bg-surface-container-low px-8 py-12 text-center font-body-md text-body-md text-on-surface-variant">
              这一类目录里还没有公开案卷。
            </p>
          )}

          {visible.aura && (
            <article className="group w-full overflow-hidden rounded-3xl bg-surface-container-low shadow-sm transition-all duration-500 hover:shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-surface-container p-6 md:p-10 lg:col-span-7 lg:min-h-[540px]">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary-container/20 via-transparent to-primary/5" />
                  <div className="relative h-full w-full overflow-hidden rounded-t-[48px] rounded-b-2xl bg-surface-container-high shadow-sm transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                    <img
                      alt="石台上的冥想界面，旁边是干燕麦与陶杯"
                      className="h-full min-h-[360px] w-full object-cover"
                      src={images.auraWorks}
                    />
                    <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-2xl bg-surface-container-lowest/80 p-3 backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                        <span className="font-label-caps text-label-caps tracking-wide text-primary">
                          Haptic Frequency: 432Hz Calm
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">iOS & watchOS</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between bg-surface-container-low p-8 md:p-12 lg:col-span-5">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase">
                        Case No. 01 / Mobile UX
                      </span>
                      <span className="font-label-caps text-label-caps text-on-surface-variant">2024 · Beijing / Zurich</span>
                    </div>
                    <div>
                      <h2 className="font-headline-lg text-headline-lg-mobile tracking-tight text-primary transition-colors group-hover:text-secondary md:text-headline-lg">
                        Aura · 冥想与心流感知系统
                      </h2>
                      <p className="mt-3 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                        打破传统冥想工具的冰冷数字倒计时，重塑以呼吸压力感应、微震动反馈与天然矿物色彩演化为核心的心流引导体验。
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-2xl bg-surface-container p-5">
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline-md text-headline-md font-semibold text-primary">+38%</span>
                        <span className="font-body-sm text-body-sm font-medium text-secondary">30 天留存率跃迁</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                        “Parhelia 让指尖接触屏幕的每一次起伏，都具有如抚摸天然麻布般的温润回响。”
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Chip>Haptic Feedback Design</Chip>
                      <Chip>Circadian Rhythm UI</Chip>
                      <Chip tone="accent">Red Dot Winner</Chip>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm pt-8">
                    <a
                      className="cursor-target inline-flex items-center gap-2 rounded-full bg-primary-container px-7 py-3 font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-secondary"
                      data-cursor-label="深入"
                      href="#archives"
                    >
                      <span>深入探索该案卷</span>
                      <Icon className="text-sm" name="arrow_forward" />
                    </a>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">32 min read · Interactive</span>
                  </div>
                </div>
              </div>
            </article>
          )}

          {(visible.folio || visible.komorebi) && (
            <div className={pairGrid}>
              {visible.folio && (
                <article className={`group flex flex-col justify-between rounded-3xl bg-surface-container-low p-8 shadow-sm transition-all duration-500 hover:shadow-md ${folioSpan}`}>
                  <div className="flex flex-col gap-space-md">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-container">
                      <img
                        alt="暖色纸面上的双语艺术杂志档案馆"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        src={images.folioWorks}
                      />
                      <div className="absolute top-4 left-4 rounded-full bg-surface-container-lowest/90 px-3 py-1 font-label-caps text-label-caps text-primary backdrop-blur-sm">
                        Non-linear CMS Archive
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between font-label-caps text-label-caps text-secondary">
                        <span>Case No. 02 · Editorial</span>
                        <span>Tokyo TDC Nominated</span>
                      </div>
                      <h3 className="font-headline-md text-headline-md tracking-tight text-primary">Folio · 独立艺术杂志数字档案馆</h3>
                      <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                        为跨文化独立艺术出版物搭建的沉浸式网志。以双语非线性阅读流、纸张纤维微噪点渲染，构筑跨越物理与数字隔阂的典藏阅读器。
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 pt-6">
                    <div className="flex flex-wrap gap-2">
                      <Chip>Editorial Typography</Chip>
                      <Chip>Bilingual Grid</Chip>
                      <Chip tone="accent">Awwwards SOTD</Chip>
                    </div>
                    <a className="cursor-target inline-flex items-center gap-1.5 font-label-md text-label-md text-primary transition-colors hover:text-secondary" data-cursor-label="复盘" href="#archives">
                      <span>阅读案卷复盘</span>
                      <Icon className="text-sm" name="east" />
                    </a>
                  </div>
                </article>
              )}

              {visible.komorebi && (
                <article className={`flex flex-col justify-between rounded-3xl bg-surface-container-low p-8 shadow-sm transition-all duration-500 hover:shadow-md md:p-10 ${komorebiSpan}`}>
                  <div className="flex flex-col gap-space-md">
                    <div className="flex w-full flex-col gap-4 rounded-2xl bg-surface-container p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-primary-container" />
                          <span className="font-label-caps text-label-caps text-primary uppercase">Komorebi Token Artifacts · v3.2</span>
                        </div>
                        <span className="rounded-full bg-secondary-fixed px-2.5 py-0.5 font-label-caps text-label-caps text-on-secondary-fixed">
                          WCAG 2.2 AAA
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 pt-2 sm:grid-cols-6">
                        {SWATCHES.map(([swatch, hex]) => (
                          <div key={hex} className="flex flex-col gap-1 rounded-xl bg-surface-container-lowest p-2">
                            <div className={`h-8 rounded-lg ${swatch}`} />
                            <span className="font-label-caps text-[10px] text-on-surface-variant">{hex}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex h-24 w-full items-end justify-between gap-1 overflow-hidden rounded-xl bg-surface-container-lowest p-3">
                        <div className="flex h-16 w-full items-end gap-1.5">
                          {BARS.map(([height, color]) => (
                            <span key={height + color} className={`flex-1 rounded-t ${height} ${color}`} />
                          ))}
                        </div>
                        <div className="text-right">
                          <span className="font-headline-sm text-headline-sm text-primary">+65%</span>
                          <p className="font-label-caps text-[10px] text-secondary">Reuse Velocity</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between font-label-caps text-label-caps text-secondary">
                        <span>Case No. 03 · Enterprise Design Infrastructure</span>
                        <span>Global Platform</span>
                      </div>
                      <h3 className="font-headline-md text-headline-md tracking-tight text-primary">
                        Komorebi · 全球跨端协同设计物料系统
                      </h3>
                      <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                        解决跨越 6 个国家分支与 80+ 业务线的样式失序难题。构建从 Figma 自动化流水线到 Web Components、React Native 的无缝 Token 架构。
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
                    <div className="flex flex-wrap gap-2">
                      <Chip>Design Tokens (W3C Spec)</Chip>
                      <Chip>Multi-Brand Theming</Chip>
                    </div>
                    <a className="cursor-target inline-flex items-center gap-1.5 font-label-md text-label-md text-primary transition-colors hover:text-secondary" data-cursor-label="白皮书" href="#archives">
                      <span>架构技术白皮书</span>
                      <Icon className="text-sm" name="east" />
                    </a>
                  </div>
                </article>
              )}
            </div>
          )}

          {(visible.caelum || visible.solitude || visible.nave) && (
            <div className={mosaicGrid}>
              {visible.caelum && (
                <article className="group flex flex-col justify-between rounded-3xl bg-surface-container-low p-6 shadow-sm transition-all duration-500 hover:shadow-md">
                  <div className="flex flex-col gap-4">
                    <div className="aspect-square w-full overflow-hidden rounded-2xl bg-surface-container">
                      <img
                        alt="橡木桌上的手作陶瓶与橄榄枝"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        src={images.caelum}
                      />
                    </div>
                    <div>
                      <span className="font-label-caps text-label-caps text-secondary uppercase">Case No. 04 · Commerce</span>
                      <h4 className="mt-1 font-headline-sm text-headline-sm text-primary">Caelum · 极简手作陶瓷与植物美学电商</h4>
                      <p className="mt-2 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                        以无扰动沉浸感、3D 触觉视角与有机泥土色谱，打造转化率与手作温度兼备的独立品牌购物体验。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6">
                    <span className="rounded-full bg-surface-container px-2.5 py-1 font-label-caps text-label-caps text-on-surface-variant">
                      Spatial 3D · Shopify Plus
                    </span>
                    <a className="cursor-target" href="#archives" aria-label="查看 Caelum 案卷" data-cursor-label="Caelum">
                      <Icon className="text-secondary transition-colors hover:text-primary" name="arrow_outward" />
                    </a>
                  </div>
                </article>
              )}

              {visible.solitude && (
                <article className="flex flex-col justify-between rounded-3xl bg-surface-container-low p-6 shadow-sm transition-all duration-500 hover:shadow-md">
                  <div className="flex flex-col gap-4">
                    <div className="relative flex aspect-square w-full flex-col justify-between overflow-hidden rounded-2xl bg-surface-container p-6">
                      <div className="z-10 flex items-center justify-between">
                        <span className="font-label-caps text-label-caps tracking-widest text-primary">WebGL Audio Lab</span>
                        <Icon className="animate-spin text-secondary" name="graphic_eq" />
                      </div>
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
                        <svg className="h-48 w-48" fill="none" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeDasharray="4 2" strokeWidth="0.75" className="text-secondary" />
                          <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" className="text-primary" />
                          <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="1.5" className="text-secondary" />
                          <circle cx="50" cy="50" r="6" fill="currentColor" className="text-primary" />
                        </svg>
                      </div>
                      <div className="z-10 flex items-center justify-between rounded-xl bg-surface-container-lowest/80 p-3 backdrop-blur-sm">
                        <span className="font-label-caps text-[11px] text-primary">Field Recording: Kyoto Moss Garden</span>
                        <span className="font-label-caps text-[11px] text-secondary">03:42</span>
                      </div>
                    </div>
                    <div>
                      <span className="font-label-caps text-label-caps text-secondary uppercase">Case No. 05 · Experimental</span>
                      <h4 className="mt-1 font-headline-sm text-headline-sm text-primary">Solitude · 声音与触觉微震动环境实验室</h4>
                      <p className="mt-2 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                        探索生物电波感知、环境白噪音粒子可视化以及轻度微震感协同原型，拓展感官交互边界。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6">
                    <span className="rounded-full bg-surface-container px-2.5 py-1 font-label-caps text-label-caps text-on-surface-variant">
                      WebAudio · Shader FX
                    </span>
                    <a className="cursor-target" href="#archives" aria-label="查看 Solitude 案卷" data-cursor-label="Solitude">
                      <Icon className="text-secondary transition-colors hover:text-primary" name="arrow_outward" />
                    </a>
                  </div>
                </article>
              )}

              {visible.nave && (
                <article className="group flex flex-col justify-between rounded-3xl bg-surface-container-low p-6 shadow-sm transition-all duration-500 hover:shadow-md">
                  <div className="flex flex-col gap-4">
                    <div className="aspect-square w-full overflow-hidden rounded-2xl bg-surface-container">
                      <img
                        alt="以年轮图形呈现的暖色金融资产界面"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        src={images.nave}
                      />
                    </div>
                    <div>
                      <span className="font-label-caps text-label-caps text-secondary uppercase">Case No. 06 · Humanist Fintech</span>
                      <h4 className="mt-1 font-headline-sm text-headline-sm text-primary">Nave · 暖性个人资产与绿意投资工坊</h4>
                      <p className="mt-2 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                        解构金融世界的冷酷折线图。以植物年轮与有机生长形态映射资本流向与 ESG 长期价值，重塑财富信任感。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6">
                    <span className="rounded-full bg-surface-container px-2.5 py-1 font-label-caps text-label-caps text-on-surface-variant">
                      Emotional Data Viz · FinTech
                    </span>
                    <a className="cursor-target" href="#archives" aria-label="查看 Nave 案卷" data-cursor-label="Nave">
                      <Icon className="text-secondary transition-colors hover:text-primary" name="arrow_outward" />
                    </a>
                  </div>
                </article>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="w-full px-margin py-space-xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="relative mx-auto flex max-w-6xl flex-col gap-space-lg overflow-hidden rounded-[40px] bg-surface-container p-8 shadow-sm md:p-16">
          <div className="pointer-events-none absolute -right-12 -bottom-12 text-primary opacity-5">
            <svg className="h-96 w-96" fill="currentColor" viewBox="0 0 200 200">
              <path d="M100,0 C155,0 200,45 200,100 C200,155 155,200 100,200 C45,200 0,155 0,100 C0,45 45,0 100,0 Z M100,20 C56,20 20,56 20,100 C20,144 56,180 100,180 C144,180 180,144 180,100 C180,56 144,20 100,20 Z" />
            </svg>
          </div>
          <div className="flex items-center gap-space-xs text-secondary">
            <Icon className="text-2xl" name="format_quote" />
            <span className="font-label-caps text-label-caps tracking-widest uppercase">Curator & Peer Endorsements</span>
          </div>
          <blockquote className="max-w-4xl font-editorial-quote text-editorial-quote leading-relaxed text-primary italic">
            “Parhelia 是极少数能将深邃的哲学审美意趣、严苛的工程逻辑与极高标准的跨端可用性完美熔铸一体的设计工匠。与他们合作不仅重构了产品，更重新定义了我们对数字品味的理解。”
          </blockquote>
          <div className="flex flex-col justify-between gap-4 pt-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container font-headline-sm text-primary">
                E
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-primary">Dr. Elena Von Berg</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  VP of Product Design, Zurich Digital Arts Forum
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {['Vogue Asia', 'Nordic Botanics', 'Zeit Labs', 'Museum of Modern Form'].map((name) => (
                <span key={name} className="rounded-full bg-surface-container-low px-4 py-1.5 font-label-caps text-label-caps text-on-surface-variant">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-40 w-full px-margin py-space-xl md:px-margin-tablet lg:px-margin-desktop" id="archives">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-space-md rounded-3xl bg-surface-container-low p-8 text-center shadow-sm md:p-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary-container/50 px-4 py-1 text-on-secondary-container">
            <Icon className="text-sm" name="lock_open" />
            <span className="font-label-caps text-label-caps tracking-widest uppercase">NDA & Private Archives</span>
          </div>
          <h2 className="max-w-2xl font-headline-lg text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg">
            心动于某一具体案例，或寻求更大尺度的跨端重构？
          </h2>
          <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
            受商业保密协议保护，部分针对万亿级架构与高机密硬件感知的深度复盘文档仅供受邀访客查阅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-space-sm pt-2">
            <a
              className="cursor-target inline-flex items-center gap-2 rounded-full bg-primary-container px-8 py-3.5 font-label-md text-label-md text-on-primary shadow-sm transition-colors hover:bg-secondary"
              data-cursor-label="索取"
              href="mailto:parhelia.craft@atelier.design?subject=完整未公开案例白皮书"
            >
              <Icon className="text-sm" name="mail" />
              <span>索取完整未公开案例白皮书</span>
            </a>
            <a
              className="cursor-target inline-flex items-center gap-2 rounded-full bg-surface-container px-6 py-3.5 font-label-md text-label-md text-primary transition-colors hover:bg-surface-container-high"
              data-cursor-label="预约"
              href="mailto:parhelia.craft@atelier.design?subject=预约 30 分钟设计复盘"
            >
              <Icon className="text-sm" name="calendar_month" />
              <span>预约 30 分钟设计复盘沟通</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <WeChatButton
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
              wechatId="Parhelia_Design"
            >
              <Icon className="text-base" name="chat" />
              微信专线 (Parhelia_Design)
            </WeChatButton>
            <span className="h-1 w-1 rounded-full bg-outline-variant" />
            <a
              className="cursor-target flex items-center gap-1.5 transition-colors hover:text-primary"
              data-cursor-label="GitHub"
              href="https://github.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className="text-base" name="terminal" />
              GitHub & Code Sandbox
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
