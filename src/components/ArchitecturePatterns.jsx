import { architecturePatterns } from '../data/profile'
import ScrollReveal from './ScrollReveal'
import '../App.css'

export default function ArchitecturePatterns() {
  return (
    <section id="patterns" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Architecture Patterns Library</h2>
          <p className="section-subtitle">
            Reference architectures from 25+ years of enterprise implementations — patterns that work at scale.
          </p>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
        }}>
          {architecturePatterns.map((pattern, i) => (
            <ScrollReveal key={pattern.title} delay={i * 0.08}>
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '10px' }}>
                  {pattern.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  marginBottom: '18px',
                  flex: 1,
                }}>
                  {pattern.description}
                </p>

                {/* Layer visualization */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{
                    display: 'flex',
                    gap: '2px',
                    flexWrap: 'wrap',
                  }}>
                    {pattern.layers.map((layer, j) => (
                      <span key={j} style={{
                        padding: '4px 10px',
                        fontSize: '0.72rem',
                        fontFamily: "'JetBrains Mono', monospace",
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}>
                        {j > 0 && <span style={{ color: 'var(--accent-light)' }}>&rarr;</span>}
                        {layer}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {pattern.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
