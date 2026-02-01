# Backlog - Srini Centhala Portfolio

**Repo**: https://github.com/Scenthala/profile
**Stack**: React 19 + Vite 5 | Dark/Light theme | Deployed: TBD
**Gap Analysis**: `docs/gap-analysis.md` (vs. top 15 influencers)

---

## Priority 1 - Core (Remaining)
- [ ] Add professional headshot/avatar image to Hero section
- [ ] Add actual book cover images (source from Business Expert Press or Amazon)
- [ ] Upload resume PDF to `public/Srini_Centhala_Resume.pdf` (download button already wired)
- [ ] Create OG image (`public/og-image.png`, 1200x630) for social sharing previews
- [ ] Add favicon (proper .ico or .png, replace inline SVG placeholder)

## Priority 2 - Portfolio Sections (Gaps vs. Influencers)

### Case Studies & Social Proof (Gap vs. Allie Miller, Cassie Kozyrkov, Brent Dykes)
- [ ] Add interactive case studies section with anonymized client stories, architecture diagrams, ROI metrics
- [ ] Write 3-5 case studies: Walmart (Demand Forecast), AT&T (2PB Analytics), Experian (NextGen Forrester), eBay (100TB DW), DirecTV (97% SCM accuracy)
- [ ] Add testimonials/recommendations section with client quotes
- [ ] Quantify impact: "$XM saved", "X% improvement", "XPB processed"

### Thought Leadership Hub (Gap vs. Tristan Handy, Chip Huyen, Joe Reis)
- [ ] Add Substack newsletter embed/link section
- [ ] Add YouTube channel embed section
- [ ] Add podcast appearances section
- [ ] Add Medium articles section
- [ ] Create "Thought Leadership" nav section combining all content

### Named Methodology (Gap vs. Cassie Kozyrkov "Decision Intelligence", Zhamak Dehghani "Data Mesh", Chad Sanderson "Data Contracts")
- [ ] Define and brand "Enterprise Intelligence Architecture" (or similar) as Srini's signature methodology
- [ ] Create a visual framework diagram for the methodology
- [ ] Add dedicated section on portfolio explaining the methodology
- [ ] Write foundational article: "The Enterprise Intelligence Architect: A New Role for the AI Era"

### Technology Radar (Gap vs. ThoughtWorks)
- [ ] Add Technology Radar section (Adopt / Trial / Assess / Hold)
- [ ] Categorize: Agentic AI, MCP, CrewAI, n8n (Adopt); Data Mesh, SLMs (Trial); Graph+LLM (Assess)

### Architecture Patterns Library (Gap vs. Maxime Beauchemin open-source)
- [ ] Create downloadable reference architectures (Lakehouse, MLOps, Data Mesh, Agentic AI + MCP)
- [ ] Add interactive architecture diagrams with hover/expand
- [ ] Create "Cloud Architecture Decision Matrix: AWS vs Azure vs GCP" PDF lead magnet
- [ ] Create "Lakehouse Migration Checklist" PDF lead magnet

### "Ask an Architect" FAQ (Gap vs. Monica Rogati, Brent Dykes)
- [ ] Add FAQ section (20-30 questions): When Data Mesh vs Data Fabric? How to migrate to cloud? MLOps ROI?
- [ ] Create "Enterprise AI Maturity Pyramid" framework visual (like Monica Rogati's Hierarchy of Needs)

### Services & Training (Gap vs. Allie Miller training, Cassie Kozyrkov consulting)
- [ ] Add detailed services page with engagement types (Strategy Sprint, Architecture Assessment, Training)
- [ ] Package "Executive AI Architecture Workshop" offering
- [ ] Add Calendly booking integration for consultations
- [ ] Add "Fractional Chief Data Architect" positioning option

### BizStats AI Showcase (Gap vs. Barr Moses Monte Carlo, Tristan Handy dbt)
- [ ] Add public demo / architecture walkthrough of BizStats AI platform
- [ ] List BizStats AI on G2 and Capterra for visibility
- [ ] Create product comparison page (vs. other BI/analytics platforms)

## Priority 3 - Content & Platform Expansion (Critical Gaps)

### LinkedIn Content Strategy (Gap: 22K vs 100K-2M followers)
- [ ] Define 3 content pillars: (1) Business-to-Technical Architecture, (2) AI/ML in Production, (3) Modern Data Architecture
- [ ] Start posting 3x/week cadence (Mon: trend insight, Wed: case study carousel, Fri: personal lesson)
- [ ] Optimize LinkedIn headline to match top influencer style
- [ ] Target LinkedIn Top Voice badge through consistent, niche content
- [ ] Engage with top 15 influencers' content (thoughtful comments, build visibility)

### Substack Newsletter (Gap vs. Tristan Handy, Joe Reis)
- [ ] Launch "Architecture Insights with Srini" on Substack
- [ ] Commit to bi-weekly publishing
- [ ] First article: "25 Years of Data Architecture: What's Changed, What Hasn't"
- [ ] Cross-publish to Medium for SEO discovery

### YouTube Channel (Gap vs. Andreas Kretz 230K, Ben Rogojan 50K)
- [ ] Create YouTube channel: "Srini Centhala — Enterprise Architecture"
- [ ] Record first video: architecture walkthrough of a client pattern
- [ ] Create series: "AWS vs Azure vs GCP for [use case]" comparisons
- [ ] Create series: "Data Vault 2.0 → Lakehouse Migration" tutorials

### Podcast Presence (Gap vs. Joe Reis 180 episodes)
- [ ] Pitch as guest to: Data Engineering Podcast, Humans of Data, Software Engineering Daily
- [ ] Consider launching own podcast: "Data Architecture Decoded"
- [ ] Target 5 guest appearances in first 6 months

### Open Source / GitHub (Gap vs. Maxime Beauchemin)
- [ ] Create public repo: "enterprise-architecture-patterns" with reference architectures
- [ ] Publish Airflow DAG templates, Snowflake patterns, Databricks notebooks
- [ ] Target 100+ stars in 6 months
- [ ] Add GitHub link to portfolio site

### Conference Speaking (Gap vs. Pascal Bornet 100+ keynotes/year)
- [ ] Build speaker kit: bio, headshot, 5 talk topics, demo video
- [ ] Submit proposals to Enterprise Data World (May 2026), Data Summit, QCon AI, ArchConf
- [ ] Target MLOps World / GenAI Summit (Oct 2025, Austin)
- [ ] Add "Speaking" section to portfolio with past/upcoming talks

### Media & PR (Gap vs. Brent Dykes Forbes, Pascal Bornet Bloomberg)
- [ ] Apply to Forbes Technology Council
- [ ] Pitch articles to VentureBeat, InfoWorld, The New Stack
- [ ] Submit to awards: CIO 100, CDO Magazine Top Data Leaders, AI Breakthrough Awards

### Community Building (Gap vs. Chad Sanderson Data Quality Camp, Chip Huyen MLOps Discord)
- [ ] Create LinkedIn Group: "Enterprise Data & AI Architecture"
- [ ] Or create Discord server for data architects
- [ ] Join existing: Data Quality Camp, MLOps Discord, dbt Community Slack, Modern Data 101

### Online Course (Gap vs. Allie Miller AI-First course 300K students)
- [ ] Create "Enterprise AI Architecture Masterclass" on Udemy or own platform
- [ ] Create "Data Vault 2.0 to Lakehouse Migration" course
- [ ] Offer through BizStats AI as premium content

## Priority 4 - Technical Improvements (Website)
- [ ] Contact form with backend (Formspree or EmailJS — spec in `docs/api/contact-form-spec.md`)
- [ ] Add analytics (Plausible recommended — privacy-friendly)
- [ ] Lazy loading for images and below-the-fold sections
- [ ] Add PWA support (service worker, manifest.json)
- [ ] Add unit tests (Vitest + React Testing Library)
- [ ] Performance optimization (code splitting, dynamic imports)
- [ ] Add sitemap.xml and robots.txt for SEO
- [ ] Framer Motion for richer page transitions

## Priority 5 - Certifications (from Gap Analysis)
- [ ] AWS Solutions Architect Professional — most respected globally
- [ ] TOGAF 10 — used by 80% of Fortune 500; 20-30% salary premium
- [ ] Snowflake SnowPro Advanced Architect — $550 total
- [ ] Databricks Data Engineer Professional — fastest-growing platform
- [ ] Google Professional Cloud Architect — complements existing GCP certs
- [ ] Terraform Associate — IaC multi-cloud (gap vs. modern orchestration leaders)
- [ ] dbt Analytics Engineering Certification — modern data stack standard

## Priority 6 - Emerging Tech Skills (from Gap Analysis)

### Gaps to Close
- [ ] Data Contracts — author implementation guide (gap vs. Chad Sanderson)
- [ ] Active Metadata — hands-on with Atlan or Collibra (gap vs. Prukalpa Sankar)
- [ ] Data Mesh implementation — write position paper (gap vs. Zhamak Dehghani)
- [ ] Terraform / IaC — add to toolkit (gap vs. cloud-native architects)

### Strengths to Amplify (Already Have — Need to Showcase)
- [ ] Agentic AI (CrewAI, n8n) — write content, create demos, position as expert
- [ ] MCP — write "MCP for Enterprise" guide, ahead of most influencers
- [ ] Vector Databases (Pinecone, Milvus) — create RAG architecture tutorial
- [ ] MLOps — publish production ML pipeline patterns
- [ ] Data Vault 2.0 → Lakehouse — own the migration narrative
- [ ] BizStats AI — demonstrate as real product, not just resume line

---

## 30-60-90 Day Action Plan

### Days 1-30: Foundation
1. [ ] Launch Substack newsletter
2. [ ] Start LinkedIn 3x/week posting cadence
3. [ ] Add 3 case studies to portfolio website
4. [ ] Create GitHub "enterprise-architecture-patterns" repo
5. [ ] Define "Enterprise Intelligence Architecture" methodology
6. [ ] Register for AWS Solutions Architect Professional exam
7. [ ] Build speaker kit (bio, headshot, talk topics)

### Days 31-60: Momentum
8. [ ] 12+ LinkedIn posts published
9. [ ] 6+ Substack newsletters published
10. [ ] 2+ YouTube videos recorded and published
11. [ ] Submit speaking proposals to 3 conferences
12. [ ] Pitch Forbes Technology Council membership
13. [ ] Join Data Quality Camp + MLOps Discord
14. [ ] Write foundational article on named methodology

### Days 61-90: Authority
15. [ ] AWS certification passed
16. [ ] Featured on 2+ podcasts as guest
17. [ ] Portfolio has case studies, patterns, methodology, FAQ
18. [ ] GitHub repo has 5+ reference architectures
19. [ ] 5,000+ LinkedIn followers milestone
20. [ ] 1,000+ newsletter subscribers
21. [ ] BizStats AI public demo/walkthrough published

---

## Completed
- [x] Initial site scaffold with React + Vite
- [x] Dark & modern theme with gradient accents
- [x] Light theme with theme toggle (localStorage persistence)
- [x] Responsive navbar with mobile menu + theme toggle
- [x] Hero section with stats, client badges, resume download button
- [x] About section with 6 expertise cards + role tags
- [x] Experience section with 13 client engagements (expandable highlights)
- [x] Published books section (4 books with Business Expert Press links)
- [x] Skills section with 6 categories (Cloud, AI/ML, Big Data, BI, Languages, Industries)
- [x] Certifications section with 11 verified credential URLs + education
- [x] Interactive career timeline (1994-2025, 18 milestones, color-coded)
- [x] Contact section with services code block + company links
- [x] Footer with social links (LinkedIn, Absolut-e, BizStats)
- [x] ScrollReveal fade-in animations on sections
- [x] SEO: meta tags, Open Graph, Twitter cards, JSON-LD structured data
- [x] Accessibility: skip-to-content link, focus-visible, prefers-reduced-motion, ARIA labels
- [x] Centralized data layer (`src/data/profile.js`)
- [x] CI/CD pipeline (GitHub Actions, manual dispatch)
- [x] Full project documentation (UML, data model, architecture, design tokens, wireframes)
- [x] Influencer research report (`docs/influencer-research.md`)
- [x] Gap analysis vs. 15 influencers (`docs/gap-analysis.md`)
- [x] GitHub repo pushed (https://github.com/Scenthala/profile)
