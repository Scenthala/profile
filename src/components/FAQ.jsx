import { useState } from 'react'
import { faqItems } from '../data/profile'
import ScrollReveal from './ScrollReveal'
import '../App.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Ask an Architect</h2>
          <p className="section-subtitle">
            Common enterprise architecture questions — answered from 25+ years of Fortune 100 experience.
          </p>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '850px' }}>
          {faqItems.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s',
                  borderColor: openIndex === i ? 'var(--accent)' : 'var(--border)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    textAlign: 'left',
                    lineHeight: 1.5,
                  }}
                >
                  {faq.question}
                  <span style={{
                    fontSize: '1.2rem',
                    color: 'var(--accent-light)',
                    transition: 'transform 0.3s',
                    transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                    flexShrink: 0,
                  }}>
                    +
                  </span>
                </button>

                {openIndex === i && (
                  <div style={{
                    padding: '0 24px 20px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    lineHeight: 1.8,
                  }}>
                    {faq.answer}
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
