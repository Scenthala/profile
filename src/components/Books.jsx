import { books } from '../data/profile'
import ScrollReveal from './ScrollReveal'
import '../App.css'

export default function Books() {
  return (
    <section id="books" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Published Books</h2>
        <p className="section-subtitle">
          Co-author of 4 books on AI, security, risk management, and project management.
          Published by{' '}
          <a href="https://www.businessexpertpress.com/srini-centhala/" target="_blank" rel="noopener noreferrer">
            Business Expert Press
          </a>.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {books.map((book, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{
                width: '100%',
                height: '160px',
                background: `linear-gradient(135deg, var(--bg-primary), var(--bg-card))`,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                border: '1px solid var(--border)',
              }}>
                <span style={{ fontSize: '3rem', opacity: 0.6 }}>&#128214;</span>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '10px', lineHeight: 1.4 }}>
                {book.publisherUrl ? (
                  <a href={book.publisherUrl} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--text-primary)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent-light)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                  >
                    {book.title}
                  </a>
                ) : book.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.88rem',
                marginBottom: '16px',
                flex: 1,
                lineHeight: 1.6,
              }}>
                {book.description}
              </p>
              {book.publisher && (
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.78rem',
                  marginBottom: '12px',
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  {book.publisher}
                </p>
              )}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {book.tags.map(tag => (
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
