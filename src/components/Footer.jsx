import { profile } from '../data/profile'
import '../App.css'

export default function Footer() {
  return (
    <footer style={{
      padding: '32px 0',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-secondary)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            LinkedIn
          </a>
          <a href={profile.companyUrl} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Absolut-e.com
          </a>
          <a href={profile.productUrl} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            BizStats.AI
          </a>
        </div>
      </div>
    </footer>
  )
}
