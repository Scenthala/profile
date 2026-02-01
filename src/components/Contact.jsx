import { profile, services } from '../data/profile'
import '../App.css'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
        <h2 className="section-title" style={{ display: 'inline-block' }}>Let's Connect</h2>
        <p className="section-subtitle" style={{ margin: '12px auto 48px' }}>
          Looking for a data architect, AI strategist, or enterprise consultant?
          Available for Corp-to-Corp contracts through Absolut-e Data Com Inc.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            LinkedIn Profile &rarr;
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn-outline">
            {profile.email}
          </a>
        </div>

        {/* Contact details */}
        <div style={{
          marginTop: '32px',
          display: 'flex',
          gap: '32px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
        }}>
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
        </div>

        {/* Services code block */}
        <div style={{
          marginTop: '48px',
          padding: '28px',
          background: 'var(--bg-card)',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          textAlign: 'left',
        }}>
          <div style={{
            fontSize: '0.82rem',
            fontFamily: "'JetBrains Mono', monospace",
            color: 'var(--text-secondary)',
            lineHeight: 2,
          }}>
            <span style={{ color: 'var(--accent-light)' }}>const</span> services = [<br />
            {services.map((s, i) => (
              <span key={i}>
                &nbsp;&nbsp;<span style={{ color: 'var(--success)' }}>"{s}"</span>
                {i < services.length - 1 ? ',' : ''}
                <br />
              </span>
            ))}
            ];<br /><br />
            <span style={{ color: 'var(--accent-light)' }}>const</span> companies = {'{'}<br />
            &nbsp;&nbsp;consultancy: <span style={{ color: 'var(--success)' }}>"<a href={profile.companyUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--success)' }}>{profile.company}</a>"</span>,<br />
            &nbsp;&nbsp;product: <span style={{ color: 'var(--success)' }}>"<a href={profile.productUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--success)' }}>{profile.product}</a>"</span>,<br />
            {'}'};
          </div>
        </div>
      </div>
    </section>
  )
}
