import { useState, useEffect } from 'react'
import { navLinks } from '../data/profile'
import useTheme from '../hooks/useTheme'
import '../App.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '16px 0',
        background: scrolled
          ? (theme === 'dark' ? 'rgba(10, 10, 15, 0.9)' : 'rgba(248, 249, 252, 0.9)')
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" aria-label="Go to top" style={{
          fontSize: '1.3rem',
          fontWeight: 700,
          background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          SC
        </a>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              fontWeight: 500,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--accent-light)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '6px 10px',
              cursor: 'pointer',
              fontSize: '1rem',
              lineHeight: 1,
              transition: 'all 0.2s',
            }}
          >
            {theme === 'dark' ? '\u2600\uFE0F' : '\u{1F319}'}
          </button>
        </div>

        {/* Mobile controls */}
        <div style={{ display: 'none', gap: '12px', alignItems: 'center' }} className="mobile-controls">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '6px 10px',
              cursor: 'pointer',
              fontSize: '1rem',
              lineHeight: 1,
            }}
          >
            {theme === 'dark' ? '\u2600\uFE0F' : '\u{1F319}'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
          >
            {menuOpen ? '\u2715' : '\u2630'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          background: theme === 'dark' ? 'rgba(10, 10, 15, 0.95)' : 'rgba(248, 249, 252, 0.95)',
          backdropFilter: 'blur(20px)',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
