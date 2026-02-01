import { profile } from '../data/profile'
import ScrollReveal from './ScrollReveal'
import '../App.css'

const expertise = [
  {
    icon: '\u{1F3D7}',
    title: 'Enterprise Data Architecture',
    description: 'Designing data lakes, cloud data warehouses, and EDW systems using Star Schema, Snowflake Schema, and Data Vault 2.0. Expert in metadata-driven architectures for "develop once, deploy many" strategies.',
  },
  {
    icon: '\u{1F916}',
    title: 'AI & MLOps Platform Design',
    description: 'End-to-end AI platform architecture — from defining ML business cases and selecting algorithms to MLOps pipelines, LLMs, deep learning, NLP, and production AI systems using TensorFlow, PyTorch, and OpenAI APIs.',
  },
  {
    icon: '\u2601',
    title: 'Multi-Cloud Architecture',
    description: 'Google Cloud, AWS, and Azure certified. Building cloud data lakes (S3, Glue, Athena, Kinesis, Redshift), real-time streaming analytics, and multi-cloud strategies with Snowflake and Databricks.',
  },
  {
    icon: '\u{1F4CA}',
    title: 'Business Intelligence & Analytics',
    description: 'Designing decision support systems, KPI frameworks, and BI solutions with MicroStrategy, Power BI, Tableau, Cognos, and the BizStats AI analytics platform.',
  },
  {
    icon: '\u{1F504}',
    title: 'Data Engineering & Big Data',
    description: 'Hadoop, Spark, Kafka, MapReduce at petabyte scale. ETL/ELT pipelines with Informatica, DataStage, Ab Initio, Matillion. Real-time and batch processing architectures.',
  },
  {
    icon: '\u{1F3E2}',
    title: 'C-Suite Strategy & Consulting',
    description: 'Partnering with CIOs, CDOs, and CTOs to architect comprehensive data strategies. Translating abstract business goals into high-performance data ecosystems for Fortune 100 companies.',
  },
]

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">What I Do</h2>
        <p className="section-subtitle">
          Designing the central nervous system for enterprise intelligence.
        </p>

        {/* Roles strip */}
        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}>
          {profile.roles.map(role => (
            <span key={role} className="tag">{role}</span>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {expertise.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
            <div className="card">
              <div style={{ fontSize: '1.8rem', marginBottom: '14px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
