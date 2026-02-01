import { useState } from 'react'
import { experiences } from '../data/profile'
import '../App.css'

export default function Experience() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          25+ years architecting data systems for the world's largest enterprises.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="card"
              style={{ cursor: exp.highlights ? 'pointer' : 'default' }}
              onClick={() => exp.highlights && setExpanded(expanded === i ? null : i)}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: '20px',
                alignItems: 'start',
              }}
                className="exp-grid"
              >
                <div>
                  <div style={{
                    color: 'var(--accent-light)',
                    fontSize: '0.8rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                  }}>
                    {exp.period}
                  </div>
                  <div style={{
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    marginTop: '4px',
                  }}>
                    {exp.company}
                  </div>
                  {exp.location && (
                    <div style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.8rem',
                      marginTop: '2px',
                    }}>
                      {exp.location}
                    </div>
                  )}
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '8px' }}>
                      {exp.role}
                    </h3>
                    {exp.highlights && (
                      <span style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.8rem',
                        flexShrink: 0,
                        marginLeft: '12px',
                      }}>
                        {expanded === i ? '\u25B2' : '\u25BC'}
                      </span>
                    )}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '12px', lineHeight: 1.6 }}>
                    {exp.description}
                  </p>

                  {/* Expandable highlights */}
                  {expanded === i && exp.highlights && (
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 14px 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}>
                      {exp.highlights.map((h, j) => (
                        <li key={j} style={{
                          color: 'var(--text-secondary)',
                          fontSize: '0.85rem',
                          paddingLeft: '16px',
                          position: 'relative',
                          lineHeight: 1.5,
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: 'var(--success)',
                            fontSize: '0.6rem',
                            top: '5px',
                          }}>&#9679;</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {exp.tags.map(tag => (
                      <span key={tag} className="tag" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <style>{`
                @media (max-width: 700px) {
                  .exp-grid { grid-template-columns: 1fr !important; }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
