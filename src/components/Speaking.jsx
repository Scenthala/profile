import { speakingTopics, profile } from '../data/profile'
import ScrollReveal from './ScrollReveal'
import '../App.css'

export default function Speaking() {
  return (
    <section id="speaking" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Speaking</h2>
          <p className="section-subtitle">
            Available for keynotes, panels, and workshops at enterprise data & AI conferences.
          </p>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '850px' }}>
          {speakingTopics.map((topic, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="card">
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{
                    fontSize: '1.5rem',
                    color: 'var(--accent-light)',
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: '2px',
                  }}>
                    &#127908;
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '6px' }}>
                      {topic.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                      {topic.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div style={{
            marginTop: '40px',
            padding: '24px 28px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            maxWidth: '850px',
          }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
              Interested in having me speak at your event? Reach out via{' '}
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}
              or <a href={`mailto:${profile.email}`}>{profile.email}</a> with event details, audience size, and preferred topic.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
