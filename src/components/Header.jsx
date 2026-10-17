import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { images } from '../data/images'
import Icon from './Icon'

const NAV = [
  {
    to: '/',
    label: '首页',
    isActive: (pathname, hash) => pathname === '/' && hash !== '#contact',
  },
  {
    to: '/works',
    label: '作品',
    isActive: (pathname) => pathname === '/works',
  },
  {
    to: '/about',
    label: '关于我',
    isActive: (pathname, hash) => pathname === '/about' && hash !== '#experience',
  },
  {
    to: '/about#experience',
    label: '个人简介',
    isActive: (pathname, hash) => pathname === '/about' && hash === '#experience',
  },
  {
    to: '/#contact',
    label: '联系我',
    isActive: (pathname, hash) => pathname === '/' && hash === '#contact',
  },
]

function linkClass(active) {
  return active
    ? 'cursor-target bg-primary-container text-on-primary font-label-md text-label-md rounded-full px-space-md py-space-xs transition-all duration-300'
    : 'cursor-target font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-md py-space-xs rounded-full transition-all duration-300'
}

export default function Header() {
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-surface/85 shadow-[0_4px_24px_-4px_rgba(45,58,49,0.06)] backdrop-blur-md">
      <div className="flex h-20 w-full items-center justify-between px-margin md:px-margin-tablet lg:px-margin-desktop">
        <Link to="/" className="cursor-target flex items-center gap-space-sm" data-cursor-label="首页" onClick={() => setOpen(false)}>
          <img alt="Parhelia 标志" className="h-8 w-auto object-contain" src={images.logo} />
          <span className="flex flex-col">
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary">Parhelia</span>
            <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase">
              Portfolio & Atelier
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-space-md">
          <nav
            aria-label="主导航"
            className="hidden items-center gap-space-xs rounded-full bg-surface-container-low/90 p-space-xs shadow-[0_2px_12px_rgba(45,58,49,0.04)] md:flex"
          >
            {NAV.map((item) => {
              const active = item.isActive(pathname, hash)
              return (
                <Link
                  key={item.label}
                  aria-current={active ? 'page' : undefined}
                  className={linkClass(active)}
                  data-cursor-label={item.label}
                  to={item.to}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <img
            alt=""
            className="h-8 w-8 rounded-full object-cover shadow-sm ring-2 ring-secondary-container/50"
            src={images.portrait}
          />

          <button
            aria-expanded={open}
            aria-label={open ? '关闭菜单' : '打开菜单'}
            className="cursor-target inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-low text-primary md:hidden"
            data-cursor-label={open ? '关闭' : '菜单'}
            type="button"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="移动端导航" className="flex flex-col gap-1 px-margin pb-space-md md:hidden">
          {NAV.map((item) => {
            const active = item.isActive(pathname, hash)
            return (
              <Link
                key={item.label}
                aria-current={active ? 'page' : undefined}
                className={linkClass(active)}
                data-cursor-label={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
