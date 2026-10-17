import { Link } from 'react-router-dom'
import { images } from '../data/images'

const LINKS = [
  { to: '/', label: '首页' },
  { to: '/works', label: '作品' },
  { to: '/about', label: '关于我' },
  { to: '/about#experience', label: '个人简介' },
  { to: '/#contact', label: '联系我' },
]

export default function Footer() {
  return (
    <footer className="mt-space-2xl w-full rounded-t-xl bg-surface-container-low py-space-xl">
      <div className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col items-center justify-between gap-space-md pb-space-lg md:flex-row">
          <div className="flex items-center gap-space-sm">
            <img alt="" className="h-8 w-auto object-contain opacity-80" src={images.logo} />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary">Parhelia</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Crafting quiet, purposeful digital realities.
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-space-lg">
            {LINKS.map((item) => (
              <Link
                key={item.label}
                className="cursor-target font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
                data-cursor-label={item.label}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-space-sm pt-space-md text-on-surface-variant md:flex-row">
          <p className="font-body-sm text-body-sm">
            © 2025 Parhelia. All rights reserved. Designed with botanical mindfulness.
          </p>
          <p className="font-label-caps text-label-caps tracking-widest text-secondary">
            ALABASTER • SAGE • CLAY
          </p>
        </div>
      </div>
    </footer>
  )
}
