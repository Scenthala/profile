import { useState } from 'react'
import { caseStudies } from '../data/profile'
import ScrollReveal from './ScrollReveal'
import '../App.css'

export default function CaseStudies() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="case-studies" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Anonymized highlights from Fortune 100 engagements — architecture decisions, scale challenges, and measurable outcomes.
          </p>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.client} delay={i * 0.08}>
              <div
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => setExpanded(expanded === i ? null : i)}
                role="button"
                tabIndex={0}
                aria-expanded={expanded === i}
                onKeyDown={e => e.key === 'Enter' && setExpanded(expanded === i ? null : i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.8rem',
                        color: 'var(--accent-light)',
                        fontWeight: 600,
                      }}>
                        {cs.client}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{cs.period}</span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '8px' }}>
                      {cs.title}
                    </h3>
                  </div>
                  <span style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-muted)',
                    transition: 'transform 0.3s',
                    transform: expanded === i ? 'rotate(180deg)' : 'rotate(0)',
                    flexShrink: 0,
                  }}>
                    &#9662;
                  </span>
                </div>

                {expanded === i && (
                  <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                    <div style={{ marginBottom: '16px' }}>
                      <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-light)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Challenge
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                        {cs.challenge}
                      </p>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-light)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Solution
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                        {cs.solution}
                      </p>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-light)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Impact
                      </h4>
                      <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8, listStyle: 'none', padding: 0 }}>
                        {cs.impact.map((item, j) => (
                          <li key={j} style={{ paddingLeft: '20px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--success)' }}>&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Architecture flow diagram */}
                    {cs.architecture && (
                      <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-light)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Architecture Flow
                        </h4>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          flexWrap: 'wrap',
                          padding: '14px 16px',
                          background: 'var(--bg-secondary)',
                          borderRadius: '8px',
                          border: '1px solid var(--border)',
                        }}>
                          {cs.architecture.map((step, k) => (
                            <span key={k} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <span style={{
                                padding: '5px 10px',
                                fontSize: '0.75rem',
                                fontFamily: "'JetBrains Mono', monospace",
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border)',
                                borderRadius: '6px',
                                color: 'var(--text-secondary)',
                                whiteSpace: 'nowrap',
                              }}>
                                {step}
                              </span>
                              {k < cs.architecture.length - 1 && (
                                <span style={{ color: 'var(--accent-light)', fontSize: '0.9rem', flexShrink: 0 }}>&rarr;</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {cs.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
