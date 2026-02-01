import { profile, clients } from '../data/profile'
import '../App.css'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)',
        top: '-100px',
        right: '-100px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
        bottom: '-50px',
        left: '-100px',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{ maxWidth: '750px' }}>
          <div style={{ display: 'inline-block', marginBottom: '20px' }}>
            <span className="tag" style={{ fontSize: '0.85rem', padding: '6px 16px' }}>
              {profile.role} @ {profile.company}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '24px',
          }}>
            Hi, I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {profile.name}
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '24px',
            maxWidth: '650px',
          }}>
            {profile.bio}
          </p>

          {/* Client logos marquee */}
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '32px',
          }}>
            {clients.slice(0, 8).map(client => (
              <span key={client} style={{
                padding: '4px 14px',
                fontSize: '0.78rem',
                fontFamily: "'JetBrains Mono', monospace",
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                background: 'var(--bg-secondary)',
              }}>
                {client}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <a href="#contact" className="btn btn-primary">
              Get in Touch
              <span style={{ fontSize: '1.1rem' }}>&rarr;</span>
            </a>
            <a href="#experience" className="btn btn-outline">
              View Experience
            </a>
          </div>

          <p style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            {profile.location} &middot; US On-site Since 1997
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: '48px',
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
          }}>
            {[
              { value: profile.stats.yearsExperience, label: 'Years Experience' },
              { value: profile.stats.fortune100Clients, label: 'Fortune 100 Clients' },
              { value: String(profile.stats.publishedBooks), label: 'Published Books' },
              { value: profile.stats.linkedinFollowers, label: 'LinkedIn Followers' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
