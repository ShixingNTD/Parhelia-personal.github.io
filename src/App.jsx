import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollManager from './components/ScrollManager'
import TargetCursor from './components/target_cursor'
import About from './pages/About'
import Home from './pages/Home'
import Works from './pages/Works'

const TITLES = {
  '/': 'Parhelia — Portfolio',
  '/works': 'Parhelia — 作品',
  '/about': 'Parhelia — 关于我',
}

function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = TITLES[pathname] || 'Parhelia — Portfolio'
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-background font-body text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <TargetCursor
        spinDuration={2}
        hoverDuration={0.2}
        size={36}
        cornerSize={12}
        thickness={3}
        padding={6}
        dotSize={4}
        cursorColor="#ffffff"
        cursorColorOnTarget="#ffffff"
        blendMode="difference"
        parallaxOn
        matchRadius
        showLabel
        clickEffect
        hideDefaultCursor
      />
      <DocumentTitle />
      <ScrollManager />
      <Header />
      <main className="relative z-10 w-full bg-background pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
