import { books } from '../data/profile'
import '../App.css'

export default function Books() {
  return (
    <section id="books" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Published Books</h2>
        <p className="section-subtitle">
          Co-author of 3 books on AI, security, risk management, and project management.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {books.map((book, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '100%',
                height: '180px',
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
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>
                {book.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                marginBottom: '16px',
                flex: 1,
                lineHeight: 1.6,
              }}>
                {book.description}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {book.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
