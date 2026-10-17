import Icon from '../components/Icon'
import WeChatButton from '../components/WeChatButton'
import { images } from '../data/images'

const PILLARS = [
  {
    icon: 'crop_free',
    index: '01',
    en: 'Purity & Rhythm',
    title: '呼吸感与节制留白',
    body: '留白并非信息的缺失，而是思维驻足与感官沉降的容器。我们剔除多余的视觉噪声与机械边框，运用非对称网格与自然的行气律动，让真正关键的内容如标本般清朗展陈。',
  },
  {
    icon: 'token',
    index: '02',
    en: 'Engineering Rigor',
    title: '系统化工程严密性',
    body: '无缝贯通 Figma 设计态与生产代码。恪守 W3C Design Tokens 架构规范、WCAG 2.2 AAA 高对比度无障碍可访问性，以及严格的模块化组件复用率，确保视觉构想能够以毫厘不差的工程标准无损交付。',
  },
  {
    icon: 'fingerprint',
    index: '03',
    en: 'Tactile Feedback',
    title: '触觉拟真与人文微交互',
    body: '在纯平玻璃屏幕上唤醒物性知觉。模拟植物阻尼与弹簧物理力学，结合宣纸微肌理、柔光漫射层级与克制的动效反馈，使每一次手势滑动都具备纸面翻阅般的踏实质感与从容体感。',
  },
  {
    icon: 'hourglass_empty',
    index: '04',
    en: 'Sustainable Longevity',
    title: '商业沉淀与长期主义',
    body: '设计不应随着季度潮流而褪色。我们致力于打造经得起数年迭代沉淀的稳健界面骨架，在复杂的多端应用场景中保持品牌心智一致性，让产品在服务数百万用户的生命周期中持续散发历久弥新的温度。',
  },
]

const MILESTONES = [
  {
    year: '22+',
    solid: true,
    when: '2022 — Present',
    place: 'Hangzhou / Global',
    title: 'Lead Product Designer & Design Architect',
    org: 'Global Creative Lab / Next-Gen AI UX Studio',
    body: '主导下一代生成式 AI 交互工作台（Context Canvas）的设计系统架构与自然语言人机共创界面；牵头建立企业级 Token 流水线，赋能全球跨时区团队的高保真资产协同。',
    tags: ['AI Interfaces', 'Design Architecture'],
  },
  {
    year: '19',
    when: '2019 — 2022',
    place: 'Enterprise Cloud',
    title: 'Senior UI/UX Specialist — Enterprise Tokens & Workspace',
    org: 'SaaS Infrastructure & Developer Tooling Suite',
    body: '重构覆盖 40+ 核心业务界面的企业级设计系统。引入 WCAG 2.2 无障碍自动化校验与暗色模式自适应算法，显著缩短跨端研发交付周期逾 35%。',
    tags: ['Multi-brand Tokens', 'Cloud Console'],
  },
  {
    year: '17',
    when: '2017 — 2019',
    place: 'Beijing / Editorial',
    title: 'Digital Atelier & Visual Typographer',
    org: 'Independent Cultural Publications & Curatorial Spaces',
    body: '为独立建筑双年展、现当代艺术馆策划设计沉浸式数字导览物料与编排型 Web 展页。打下了对网格律动、纸本肌理与排印细节的深刻洞察。',
    tags: ['Editorial Web', 'Exhibition UX'],
  },
]

const CRAFTS = [
  {
    icon: 'hardware',
    index: 'Craft 01',
    title: '陶艺与泥土肌理',
    body: '泥土在拉坯机上的旋转重力、釉面在窑变中的温润流动，教会我理解界面的圆角弧度、厚薄与质感重量。代码中的每一个阴影参数，都源于对陶土漫反射的观察。',
    meta: 'Clay, Glaze & Form',
    metaIcon: 'palette',
  },
  {
    icon: 'local_florist',
    index: 'Craft 02',
    title: '植物学漫步与野外手记',
    body: '叶脉的斐波那契螺旋排列与昼夜更替的光色变幻，是天然最完美的设计系统。由此沉淀出 Parhelia 视觉色彩库中的 Sage 灰绿、Alabaster 暖白与 Clay 陶土。',
    meta: 'Organic Patterns',
    metaIcon: 'forest',
  },
  {
    icon: 'graphic_eq',
    index: 'Craft 03',
    title: '环境音与 35mm 胶片',
    body: '手持录音机采集雨打竹林与海潮白噪音，用机械快门定格不可逆的时光粒子。声音的声场与画面的景深，直接启发了我对微交互声音设计与空间动效的节奏把握。',
    meta: 'Field Soundscapes',
    metaIcon: 'mic',
  },
]

const TOOLS = [
  'Design Systems Architecture',
  'W3C Token Pipelines',
  'Figma Variables & Config',
  'React & Next.js Ecosystem',
  'Tailwind CSS Mastery',
  'Framer Motion & Spring Physics',
  'WCAG 2.2 AAA Accessibility',
  'WebGL & Shader ShaderToy',
  'Generative AI UX Patterns',
]

const BOOKS = [
  ['《设计中的设计》· 原研哉 (Kenya Hara)', '关于“白”的本质、重获感官感知与再设计（Ex-formation）哲思。'],
  ['《Emotional Design》· Don Norman', '本能、行为与反思三层水平的交互共鸣，论述物之美如何增进使用者的愉悦与包容。'],
  ['《The Nature of Order》· Christopher Alexander', '探究生命力在空间结构中的展现形式，设计系统复用性的终极秩序源流。'],
]

export default function About() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[680px] w-[680px] rounded-full bg-secondary-container/25 blur-3xl" />
      <div className="pointer-events-none absolute top-[38%] left-[-15%] h-[600px] w-[600px] rounded-full bg-surface-container-high/60 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5%] bottom-10 h-[540px] w-[540px] rounded-full bg-secondary-container/20 blur-3xl" />

      <section className="w-full px-margin pt-8 pb-space-2xl md:px-margin-tablet md:pt-16 lg:px-margin-desktop">
        <div className="grid grid-cols-1 items-start gap-space-lg lg:grid-cols-12 lg:gap-gutter-desktop">
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="inline-flex max-w-full items-center gap-2.5 self-start rounded-full bg-surface-container px-space-md py-1.5 font-label-caps text-label-caps tracking-widest text-secondary uppercase shadow-sm">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-secondary" />
              <span>02 · About the Craftsperson & Philosophy</span>
            </div>
            <h1 className="mt-space-md font-display-hero text-headline-lg leading-[1.12] font-normal tracking-tight text-primary md:text-display-hero">
              Rooted in Nature,
              <br />
              <span className="font-headline-md font-light text-secondary italic">Orchestrated with Rigor.</span>
            </h1>
            <p className="mt-space-sm font-headline-sm text-headline-sm font-normal tracking-wide text-on-surface-variant">
              以自然为根柢，以严密逻辑谱写数字触感与系统秩序。
            </p>
            <div className="mt-space-lg flex max-w-2xl flex-col gap-space-sm font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
              <p>
                我是 <span className="font-semibold text-primary">Parhelia</span>
                ，一名深耕设计系统架构、AI 人机共创交互与数字感官体验的资深产品设计师与创意技术者（Creative Technologist）。拥有 7 年以上的跨平台企业系统与先锋数码产品构建经验。
              </p>
              <p className="font-body-md text-body-md text-secondary">
                在快餐式的像素堆叠时代，我倾向于将数字界面视为一间充满自然光线的工作室或一本装帧沉静的艺术年鉴。通过探索大地与植物的几何律动、手工陶艺的自然触感，以及基于 W3C 标准的精准设计工程化体系，让复杂的技术逻辑重归温和、澄明与人本关怀。
              </p>
            </div>
            <div className="mt-space-xl flex flex-wrap items-center gap-space-sm pt-space-md">
              <div className="flex items-center gap-2.5 rounded-full bg-surface-container-low px-space-md py-space-xs shadow-sm">
                <Icon className="text-lg text-secondary" name="nature_people" />
                <span className="font-label-caps text-label-caps tracking-wider text-primary uppercase">Senior Design Architect</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-full bg-surface-container-low px-space-md py-space-xs shadow-sm">
                <Icon className="text-lg text-secondary" name="calendar_month" />
                <span className="font-label-caps text-label-caps tracking-wider text-primary uppercase">7+ Yrs Crafting</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-full bg-secondary-container/60 px-space-md py-space-xs shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                <span className="font-label-caps text-label-caps tracking-wider text-on-secondary-container uppercase">
                  Hangzhou · Global Remote
                </span>
              </div>
            </div>
          </div>

          <div className="relative mt-space-lg lg:col-span-5 lg:mt-0">
            <div className="relative rounded-t-[140px] rounded-b-3xl bg-surface-container p-4 pb-6 shadow-xl transition-all duration-700 hover:shadow-2xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[128px] rounded-b-2xl bg-surface-container-high">
                <img
                  alt="工作室里的自然材料与触觉样本"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                  src={images.atelier}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between text-on-primary">
                  <span className="font-label-caps text-label-caps tracking-widest uppercase opacity-90">Studio Specimen 01</span>
                  <span className="font-body-sm text-body-sm italic opacity-85">Form Follows Soul</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between px-3">
                <div className="flex items-center gap-2">
                  <Icon className="text-base text-secondary" name="spa" />
                  <span className="font-body-sm text-body-sm font-medium text-on-surface-variant">感官物语：从泥土陶性中领略界面张力</span>
                </div>
                <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase">Atelier</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-28 w-28 rotate-[-6deg] flex-col items-center justify-center rounded-full bg-surface-container-lowest p-2 text-center text-primary shadow-lg transition-transform duration-500 select-none hover:rotate-0 md:flex">
              <Icon className="text-2xl text-secondary" filled name="eco" />
              <span className="mt-1 font-label-caps text-[10px] leading-3 tracking-tighter text-on-surface-variant uppercase">
                Holistic
                <br />
                Design
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="my-space-lg w-full rounded-3xl bg-surface-container-low/60 px-margin py-space-2xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="mb-space-xl max-w-4xl">
          <div className="inline-flex items-center gap-2 font-label-caps text-label-caps tracking-widest text-secondary uppercase">
            <Icon className="text-base" name="architecture" />
            Philosophical Pillars
          </div>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile font-normal text-primary md:text-headline-lg">
            设计的四重视角：在克制中构筑丰沛
          </h2>
          <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
            拒绝为了复杂而复杂的技术炫技，将每一次视听与操作回馈，沉淀为静水深流的设计资产。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.index}
              className="group flex flex-col justify-between rounded-3xl bg-surface p-space-lg shadow-sm transition-all duration-500 hover:shadow-md md:p-space-xl"
            >
              <div>
                <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-container text-secondary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-container group-hover:text-on-primary">
                  <Icon className="text-2xl" name={pillar.icon} />
                </div>
                <div className="mb-1 flex items-center gap-2 font-label-caps text-label-caps tracking-wider text-secondary uppercase">
                  <span>{pillar.index}</span>
                  <span>•</span>
                  <span>{pillar.en}</span>
                </div>
                <h3 className="mb-space-sm font-headline-sm text-headline-sm font-medium text-primary">{pillar.title}</h3>
                <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">{pillar.body}</p>
              </div>
              <div className="mt-space-md flex items-center justify-between pt-space-sm text-secondary/60">
                {pillar.index === '01' && (
                  <>
                    <span className="font-label-caps text-label-caps">Whitespace Cadence</span>
                    <svg className="h-6 w-24 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 100 24">
                      <path d="M0 12 Q25 2 50 12 T100 12" strokeLinecap="round" />
                    </svg>
                  </>
                )}
                {pillar.index === '02' && (
                  <>
                    <span className="font-label-caps text-label-caps">W3C Token Spec · AAA Accessibility</span>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-secondary" />
                      <span className="h-2 w-2 rounded-full bg-secondary-fixed-dim" />
                      <span className="h-2 w-2 rounded-full bg-primary-container" />
                    </div>
                  </>
                )}
                {pillar.index === '03' && (
                  <>
                    <span className="font-label-caps text-label-caps">Spring Physics & Damping</span>
                    <Icon className="text-sm" name="waves" />
                  </>
                )}
                {pillar.index === '04' && (
                  <>
                    <span className="font-label-caps text-label-caps">Enduring Impact · ROI Driven</span>
                    <Icon className="text-sm" name="all_inclusive" />
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="scroll-mt-28 w-full px-margin py-space-xl md:px-margin-tablet lg:px-margin-desktop" id="experience">
        <div className="mb-space-xl flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 font-label-caps text-label-caps tracking-widest text-secondary uppercase">
              <Icon className="text-base" name="route" />
              Experience & Footprints
            </div>
            <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile font-normal text-primary md:text-headline-lg">
              设计与思考脉络
            </h2>
          </div>
          <p className="max-w-sm font-body-sm text-body-sm text-secondary">
            跨越文化媒介出版、企业级设计中台到生成式 AI 交互领域的 7 年探求历程。
          </p>
        </div>
        <div className="flex flex-col gap-space-md">
          {MILESTONES.map((item) => (
            <article
              key={item.year}
              className="flex flex-col justify-between gap-space-md rounded-3xl bg-surface-container-low/70 p-space-lg shadow-sm transition-all duration-300 hover:bg-surface-container-low md:p-space-xl lg:flex-row lg:items-center"
            >
              <div className="flex items-start gap-space-md">
                <div
                  className={`hidden h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-sm sm:flex ${item.solid ? 'bg-primary-container text-on-primary' : 'bg-surface-container-high text-primary'}`}
                >
                  <span className="font-headline-sm text-sm">{item.year}</span>
                </div>
                <div>
                  <div className="mb-1 flex flex-wrap items-center gap-space-xs">
                    <span
                      className={`rounded-full px-space-xs py-0.5 font-label-caps text-label-caps font-semibold uppercase ${item.solid ? 'bg-secondary-container/60 text-on-secondary-container' : 'bg-surface-container-high text-secondary'}`}
                    >
                      {item.when}
                    </span>
                    <span className="font-label-caps text-label-caps text-secondary">{item.place}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-medium text-primary">{item.title}</h3>
                  <p className="mt-0.5 font-body-sm text-body-sm text-secondary">{item.org}</p>
                  <p className="mt-space-sm max-w-2xl font-body-md text-body-md text-on-surface-variant">{item.body}</p>
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap items-start gap-2 lg:flex-col lg:items-end">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-surface px-space-md py-1 font-label-caps text-label-caps text-secondary shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
          <div className="flex items-center justify-between rounded-2xl bg-surface p-space-md shadow-sm md:p-space-lg">
            <div className="flex items-center gap-space-sm">
              <Icon className="text-xl text-secondary" name="school" />
              <div>
                <span className="font-label-md text-label-md text-primary">
                  B.A. in Industrial Design & Digital Media Art (Double Degree)
                </span>
                <span className="block font-body-sm text-body-sm text-secondary">
                  学院派工业设计工程与数字媒体双重熏陶，兼备实体材质与数字代码的交叉感知。
                </span>
              </div>
            </div>
            <span className="hidden font-label-caps text-label-caps text-secondary md:block">Foundation</span>
          </div>
        </div>
      </section>

      <section className="w-full px-margin py-space-xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="mb-space-xl max-w-3xl">
          <div className="inline-flex items-center gap-2 font-label-caps text-label-caps tracking-widest text-secondary uppercase">
            <Icon className="text-base" name="interests" />
            Analog Inspirations
          </div>
          <h2 className="mt-space-xs font-headline-lg text-headline-lg-mobile font-normal text-primary md:text-headline-lg">
            工作之外的生命体验：灵感的物性源流
          </h2>
          <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
            优秀的数字体验往往脱胎于对实体世界细致入微的凝视。在手工、自然与声学中寻找人机交互的原初共振。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
          {CRAFTS.map((craft) => (
            <article
              key={craft.index}
              className="flex flex-col justify-between rounded-[2.5rem] bg-surface-container-low p-space-lg shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div>
                <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-full bg-surface text-secondary shadow-sm">
                  <Icon className="text-2xl" name={craft.icon} />
                </div>
                <span className="mb-1 block font-label-caps text-label-caps tracking-widest text-secondary uppercase">{craft.index}</span>
                <h3 className="mb-space-xs font-headline-sm text-headline-sm font-medium text-primary">{craft.title}</h3>
                <p className="mt-2 font-body-md text-body-md leading-relaxed text-on-surface-variant">{craft.body}</p>
              </div>
              <div className="mt-space-lg flex items-center gap-2 pt-space-xs font-label-caps text-label-caps text-secondary">
                <Icon className="text-sm" name={craft.metaIcon} />
                <span>{craft.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full px-margin py-space-xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 items-start gap-space-lg lg:grid-cols-12 lg:gap-gutter-desktop">
          <div className="rounded-3xl bg-surface p-space-lg shadow-sm md:p-space-xl lg:col-span-6">
            <div className="mb-space-xs inline-flex items-center gap-2 font-label-caps text-label-caps tracking-widest text-secondary uppercase">
              <Icon className="text-base" name="terminal" />
              Capabilities & Toolkit
            </div>
            <h3 className="mb-space-sm font-headline-sm text-headline-sm font-medium text-primary">设计体系与技术践行</h3>
            <p className="mb-space-lg font-body-sm text-body-sm text-on-surface-variant">
              不设边界的全栈设计表达：从用户同理心调研、高保真物理原型，到直接投产的代码级实现。
            </p>
            <div className="flex flex-wrap gap-2.5">
              {TOOLS.map((tool, index) => (
                <span
                  key={tool}
                  className={`rounded-full px-space-md py-2 font-label-md text-label-md shadow-sm ${index === 1 ? 'bg-secondary-container/70 text-on-secondary-container' : 'bg-surface-container-low text-primary'}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl bg-surface-container-low p-space-lg shadow-sm md:p-space-xl lg:col-span-6">
            <div>
              <div className="mb-space-xs inline-flex items-center gap-2 font-label-caps text-label-caps tracking-widest text-secondary uppercase">
                <Icon className="text-base" name="auto_stories" />
                Canonical Readings
              </div>
              <h3 className="mb-space-sm font-headline-sm text-headline-sm font-medium text-primary">案头经典与思考导师</h3>
              <p className="mb-space-lg font-body-sm text-body-sm text-on-surface-variant">塑造我设计美学观与人机哲学的三部基石著作：</p>
              <div className="flex flex-col gap-space-sm">
                {BOOKS.map(([title, note]) => (
                  <div key={title} className="flex items-start gap-space-sm rounded-2xl bg-surface p-space-sm">
                    <Icon className="mt-0.5 shrink-0 text-xl text-secondary" name="menu_book" />
                    <div>
                      <h4 className="font-headline-sm text-base font-medium text-primary">{title}</h4>
                      <p className="font-body-sm text-body-sm text-secondary">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-margin pt-space-xl pb-space-lg md:px-margin-tablet lg:px-margin-desktop">
        <div className="relative overflow-hidden rounded-[3rem] bg-primary-container p-space-xl text-on-primary shadow-xl md:p-space-2xl">
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-secondary-container/10 blur-2xl" />
          <div className="pointer-events-none absolute top-0 left-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="relative z-10 flex max-w-3xl flex-col">
            <div className="mb-space-xs inline-flex items-center gap-2 font-label-caps text-label-caps tracking-widest text-primary-fixed uppercase">
              <span className="h-2 w-2 animate-ping rounded-full bg-secondary-container" />
              Collaboration & Open Conversation
            </div>
            <h2 className="font-display-hero text-headline-lg-mobile leading-tight font-normal text-surface md:text-headline-lg">
              寻找理念契合的团队，
              <br />
              <span className="font-light text-primary-fixed italic">共赴有深度、有温度的设计挑战。</span>
            </h2>
            <p className="mt-space-md max-w-2xl font-body-lg text-body-lg leading-relaxed text-primary-fixed/80">
              无论您正在孵化下一代具有开创性的产品系统、筹备前沿 AI 体验架构，亦或想就界面触感、设计工程化进行一场 30 分钟的纯粹交流，我都期待聆听您的想法。
            </p>
            <div className="mt-space-xl flex flex-wrap items-center gap-space-md">
              <a
                className="cursor-target inline-flex items-center gap-2.5 rounded-full bg-surface px-space-lg py-3.5 font-label-md text-label-md text-primary shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-surface-bright"
                data-cursor-label="对谈"
                href="mailto:contact@parhelia.design?subject=预约 30 分钟设计哲学对谈"
              >
                <Icon className="text-lg" name="calendar_today" />
                <span>预约 30 分钟设计哲学对谈</span>
              </a>
              <div className="flex items-center gap-2">
                <WeChatButton
                  className="inline-flex items-center gap-2 rounded-full bg-primary/40 px-space-md py-3.5 font-label-md text-label-md text-surface transition-colors hover:bg-primary/60"
                  wechatId="ParheliaStudio"
                >
                  <Icon className="text-base" name="chat" />
                  <span>微信 WeChat</span>
                </WeChatButton>
                <a
                  className="cursor-target inline-flex items-center gap-2 rounded-full bg-primary/40 px-space-md py-3.5 font-label-md text-label-md text-surface transition-colors hover:bg-primary/60"
                  data-cursor-label="GitHub"
                  href="https://github.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="text-base" name="code" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <div className="mt-space-lg flex items-center gap-2 font-label-caps text-label-caps text-primary-fixed-dim">
              <Icon className="text-sm" name="schedule" />
              <span>Current status: accepting select Q2/Q3 advisory & architecture roles</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
