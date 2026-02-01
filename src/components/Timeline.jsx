import ScrollReveal from './ScrollReveal'
import '../App.css'

const milestones = [
  { year: '1994', event: 'B.E. Electronics, Bangalore University', type: 'education' },
  { year: '1994', event: 'Started career at Canny Soft Services, India', type: 'career' },
  { year: '1997', event: 'Moved to USA — on-site consulting begins', type: 'milestone' },
  { year: '1998', event: 'UPS — Re-engineered Pricing Engine (now Oracle R12 Advanced Pricing)', type: 'career' },
  { year: '2002', event: 'State of Florida & Georgia — Led 30+ resource teams, offshore model', type: 'career' },
  { year: '2004', event: 'eBay — 100TB e-commerce data warehouse', type: 'career' },
  { year: '2005', event: 'Lafarge — Largest JD Edwards ERP implementation', type: 'career' },
  { year: '2007', event: 'Founded Absolut-e Data Com Inc.', type: 'milestone' },
  { year: '2009', event: 'Experian — NextGen Credit Bureau; Forrester: "Excellent Architecture"', type: 'career' },
  { year: '2012', event: 'DirecTV — Active Decision Engine, 97% accuracy', type: 'career' },
  { year: '2014', event: 'AT&T / DirecTV — 2PB Content & Viewership Analytics', type: 'career' },
  { year: '2019', event: "Macy's — Teradata to Google Cloud migration", type: 'career' },
  { year: '2020', event: 'Aktana — Life Science AI Engine on Snowflake', type: 'career' },
  { year: '2021', event: 'Walmart — Micro-service architecture for Demand Forecast (IBG)', type: 'career' },
  { year: '2022', event: 'Published "AI for Security" and "AI for Risk Management"', type: 'book' },
  { year: '2023', event: 'Launched BizStats AI Analytics Platform', type: 'milestone' },
  { year: '2024', event: 'DirecTV — Snowflake + Databricks Finance Analytics', type: 'career' },
  { year: '2025', event: 'Published "AI Design & Solution for Risk and Security"', type: 'book' },
]

const typeColors = {
  education: 'var(--gradient-end)',
  career: 'var(--accent-light)',
  milestone: 'var(--success)',
  book: '#f0a030',
}

const typeLabels = {
  education: 'Education',
  career: 'Client',
  milestone: 'Milestone',
  book: 'Book',
}

export default function Timeline() {
  return (
    <section id="timeline" className="section">
      <div className="container">
        <h2 className="section-title">Career Journey</h2>
        <p className="section-subtitle">
          25+ years of architecting data systems — from India to Silicon Valley.
        </p>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {Object.entries(typeLabels).map(([key, label]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: typeColors[key],
                display: 'inline-block',
              }} />
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '40px' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '15px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--border)',
          }} />

          {milestones.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.04} style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', position: 'relative' }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-33px',
                  top: '6px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: typeColors[m.type],
                  border: '2px solid var(--bg-primary)',
                  boxShadow: `0 0 8px ${typeColors[m.type]}40`,
                  zIndex: 1,
                }} />

                {/* Year */}
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: typeColors[m.type],
                  minWidth: '44px',
                  flexShrink: 0,
                }}>
                  {m.year}
                </span>

                {/* Event */}
                <span style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  lineHeight: 1.5,
                }}>
                  {m.event}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
