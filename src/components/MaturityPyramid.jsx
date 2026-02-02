import { useState } from 'react'
import { maturityPyramid } from '../data/profile'
import ScrollReveal from './ScrollReveal'
import '../App.css'

export default function MaturityPyramid() {
  const [activeLevel, setActiveLevel] = useState(null)

  return (
    <section id="maturity" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">{maturityPyramid.title}</h2>
          <p className="section-subtitle">{maturityPyramid.description}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div style={{ maxWidth: '750px', margin: '0 auto' }}>
            {/* Pyramid visualization */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
            }}>
              {maturityPyramid.levels.map((level) => (
                <div
                  key={level.level}
                  onMouseEnter={() => setActiveLevel(level.level)}
                  onMouseLeave={() => setActiveLevel(null)}
                  onClick={() => setActiveLevel(activeLevel === level.level ? null : level.level)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setActiveLevel(activeLevel === level.level ? null : level.level)}
                  style={{
                    width: level.width,
                    padding: '16px 20px',
                    background: activeLevel === level.level ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                    border: `1px solid ${activeLevel === level.level ? level.color : 'var(--border)'}`,
                    borderLeft: `4px solid ${level.color}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: activeLevel === level.level ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: activeLevel === level.level ? `0 0 20px ${level.color}22` : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: activeLevel === level.level ? '10px' : 0 }}>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: level.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      flexShrink: 0,
                    }}>
                      {level.level}
                    </span>
                    <span style={{
                      fontWeight: 600,
                      fontSize: '0.92rem',
                    }}>
                      {level.name}
                    </span>
                  </div>
                  {activeLevel === level.level && (
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      lineHeight: 1.7,
                      paddingLeft: '40px',
                    }}>
                      {level.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <p style={{
              textAlign: 'center',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              fontFamily: "'JetBrains Mono', monospace",
              marginTop: '16px',
            }}>
              Click or hover on each level to learn more
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
