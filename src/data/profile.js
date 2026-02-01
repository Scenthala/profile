/**
 * Centralized profile data - Single source of truth.
 * Sourced from LinkedIn + Resume (2024-2025).
 */

export const profile = {
  name: 'Srini Centhala',
  title: 'Data Architect | AI Architect | Cloud Architect',
  company: 'Absolut-e Data Com, Inc.',
  companyUrl: 'https://www.absolut-e.com',
  product: 'BizStats AI',
  productUrl: 'https://www.bizstats.ai',
  role: 'Founder & Chief Architect',
  location: 'San Jose, California',
  phone: '678-570-6353',
  email: 'srini@absolut-e.com',
  linkedin: 'https://linkedin.com/in/srinicenthala',
  bio: 'For over two decades, I have operated as the strategic architect behind the data infrastructure of the world\'s most complex and demanding companies — including AT&T, Walmart, Experian, UPS, and eBay. I design the central nervous system for enterprise intelligence, translating abstract business goals into high-performance data ecosystems that fuel billion-dollar decisions.',
  roles: [
    'Data Architect',
    'AI Architect',
    'Cloud Architect',
    'Data Scientist',
    'BI Architect',
    'Data Engineer',
    'Data Warehouse Architect',
    'AI Solution Designer',
    'System Architect',
  ],
  stats: {
    yearsExperience: '25+',
    publishedBooks: 3,
    linkedinFollowers: '22K+',
    fortune100Clients: '10+',
  },
}

export const experiences = [
  {
    role: 'Founder & Chief Architect',
    company: 'Absolut-e Data Com / BizStats AI',
    location: 'San Jose, CA',
    period: 'Aug 2007 – Present',
    description:
      'Designs & oversees BizStats AI Data Analytics platform — a web-based SaaS decision support system integrating structured and unstructured data from social media, public data, and competitors using Big Data and statistical modeling. Provides expert consulting to Fortune 100 companies.',
    highlights: [
      'Architected Big Data and KPI API solutions for real-time business event notifications',
      'Defined ML/AI business cases, cloud infrastructure, and ML model selection & training',
      'Built cloud data lakes and warehouses on AWS (Glue, EMR, Athena, Redshift, Kinesis)',
      'Designed metadata-driven EDW adaptable across industries using Star Schema, Snowflake Schema, and Data Vault 2.0',
    ],
    tags: ['AI/ML', 'AWS', 'GCP', 'Big Data', 'SaaS', 'Data Lake'],
  },
  {
    role: 'Sr. Data Architect / Cloud Architect',
    company: 'DirecTV',
    location: 'San Jose, CA',
    period: 'Oct 2024 – Jul 2025',
    description:
      'Designed dimensional modeling modules for Finance Analytics on Snowflake and Databricks platforms with automated data validation frameworks.',
    highlights: [
      'Dimensional Modeling for Finance and Finance Analytics',
      'Snowflake implementation for multi-cloud strategy',
      'Databricks framework implementation',
      'Automated Data Validation framework',
    ],
    tags: ['Snowflake', 'Databricks', 'Finance', 'Data Modeling'],
  },
  {
    role: 'Sr. Data Architect / Cloud Architect',
    company: 'Walmart',
    location: 'San Jose, CA',
    period: 'Oct 2021 – Jul 2024',
    description:
      'Intelligence Business Growth (IBG) — designed micro-service architecture for Demand Forecast, Alert Services, Portfolio Management, and Unified Finance on GCP and Azure.',
    highlights: [
      'Micro-service architecture for Demand Forecast & Unified Finance',
      'Data architecture on GCP + Azure (Data Factory, Azure SQL, Informatica, Matillion)',
      'Automated data validation with Ensure framework and Power BI',
      'Master Data & Hierarchy mappings from TIBCO-EBX',
      'Snowflake multi-cloud strategy implementation',
    ],
    tags: ['GCP', 'Azure', 'Snowflake', 'Power BI', 'Micro-services'],
  },
  {
    role: 'Data Architect',
    company: 'Aktana',
    location: 'San Francisco, CA',
    period: 'Jul 2020 – Jan 2021',
    description:
      'Designed Data Lake and Data Model on Snowflake and AWS RDS for Life Science clients — IQVIA Sales Detection, Veeva sources, and Aktana\'s Decision Support / Suggestion AI Engine.',
    highlights: [
      'Metadata-driven architecture for core and custom deployments',
      'Snowflake + AWS RDS data modeling for Life Science use cases',
    ],
    tags: ['Snowflake', 'AWS', 'Life Science', 'AI Engine'],
  },
  {
    role: 'Data Architect',
    company: 'Macy\'s',
    location: 'San Francisco, CA',
    period: 'Jun 2019 – Oct 2019',
    description:
      'Oversaw migration from on-prem Teradata to Google Cloud Platform using BigQuery, Composer, GCP Storage, and Stack Driver dashboards.',
    tags: ['GCP', 'BigQuery', 'Teradata', 'Cloud Migration'],
  },
  {
    role: 'BI Solution Designer / Data Architect',
    company: 'AT&T / DirecTV',
    location: 'Los Angeles, CA',
    period: 'Sep 2014 – Apr 2019',
    description:
      'CDO Solution design for enterprise payment system, supply chain, content & viewership analytics (2PB log data), DirecTV-Now, NFL-OTT, and XandR.com ad platform products. Migrated on-premises Data Lake to AWS cloud.',
    highlights: [
      'Proof of value of BizStats AI Analytics platform at AT&T-DirecTV',
      'Content Analytics & Viewership Analytics — 2 PB of log data',
      'Encryption (FPE & EFPE) for Secure Private Information on Data Lake & Teradata',
      'Supported CDO data science group and XandR addressable ads platform',
      'Migrated on-prem Data Lake & RDBMS to AWS cloud',
    ],
    tags: ['AWS', 'Teradata', 'Vertica', 'Ad Tech', 'Data Lake', '2PB'],
  },
  {
    role: 'Data Architect',
    company: 'VMware',
    location: 'Palo Alto, CA',
    period: 'Mar 2014 – Aug 2014',
    description:
      'Proof of concept for BizStats AI as Data Discovery Platform. Architected Project Tahoe data access layer with recommendation engine for cross-selling and up-selling.',
    tags: ['Data Discovery', 'Data Science', 'Recommendations'],
  },
  {
    role: 'BI Solution Designer / DW Architect',
    company: 'DirecTV',
    location: 'Los Angeles, CA',
    period: 'Sep 2012 – Mar 2014',
    description:
      'Designed EDW for Supply Chain Management (SAP-ECC, SAP-APO, SAP-BW, TM1) and Active Decision Engine for Customer Care — enabling agents to deliver prioritized, real-time offers to customers.',
    highlights: [
      'Supply Chain EDW — demand planning, procurement, reverse logistics',
      'Active Decision Engine — real-time pricing offers matched 97% accuracy',
      'Master Data Management for Hardware Products, Regions, Dealers',
    ],
    tags: ['SAP', 'Teradata', 'Informatica', 'SCM', 'MDM'],
  },
  {
    role: 'BI / ETL / Data Architect',
    company: 'Experian',
    location: 'Costa Mesa, CA',
    period: 'Dec 2009 – Aug 2012',
    description:
      'Designed and developed NextGen Credit Bureau Product — metadata-driven architecture for "develop once, deploy many" worldwide. Evaluated by Forrester and received feedback of "Excellent Architecture & Design".',
    highlights: [
      'NextGen Credit Bureau Product — worldwide deployment architecture',
      'Metadata-driven code generation for data loads, credit reporting, rules engine',
      'Forrester evaluation: "Excellent Architecture & Design"',
      'Uninterrupted credit reporting while loading at 1000 TPS',
    ],
    tags: ['Big Data', 'Hadoop', 'MongoDB', 'Pentaho', 'Credit Bureau'],
  },
  {
    role: 'Sr. Architect',
    company: 'IMS Health (IQVIA)',
    location: 'Plymouth Meeting, PA',
    period: 'Nov 2007 – Aug 2008',
    description:
      'Built data warehouse to replicate the 40-year-old Primary Factory DDD (Drug Distribution Data) system — designed for evolve & modify deployment across different countries.',
    tags: ['Netezza', 'Ab Initio', 'MicroStrategy', 'Pharma'],
  },
  {
    role: 'BI Architect / Data Architect',
    company: 'Lafarge North America',
    location: 'Herndon, VA',
    period: 'Mar 2005 – Oct 2007',
    description:
      'Largest ERP implementation of JD Edwards Enterprise One. Designed data warehouse for Gypsum Division — Sales & Marketing, Manufacturing, and Finance datamarts with KPI dashboards.',
    tags: ['JD Edwards', 'Cognos', 'MicroStrategy', 'Oracle'],
  },
  {
    role: 'BI Architect / Data Architect',
    company: 'eBay',
    location: 'San Jose, CA',
    period: 'Aug 2004 – Feb 2005',
    description:
      'Designed data warehouse for the 100TB eBay e-commerce platform — ad tracker analytics (Mediaplex, DoubleClick), email campaigns, Simplify Stores subject area, GMV & revenue analysis.',
    tags: ['Teradata', 'MicroStrategy', '100TB', 'Ad Analytics'],
  },
  {
    role: 'Sr. System Architect',
    company: 'UPS (United Parcel Services)',
    location: 'Atlanta, GA',
    period: 'Feb 1998 – Jan 2001',
    description:
      'Re-engineered Revenue Management, Marketing Management, Contract Management, and Pricing Engine (now Oracle R12 Advanced Pricing) for UPS international markets. Built automated SLD data migration from mainframe.',
    tags: ['Oracle', 'Pricing Engine', 'MQ Series', 'Revenue Mgmt'],
  },
]

export const books = [
  {
    title: 'Artificial Intelligence for Security',
    description:
      'Comprehensive guide on applying AI and machine learning to cybersecurity, threat detection, and security automation.',
    tags: ['AI', 'Security', 'Deep Learning'],
  },
  {
    title: 'Artificial Intelligence for Risk Management',
    description:
      'How AI transforms risk assessment, fraud detection, and compliance across financial services and enterprise environments.',
    tags: ['AI', 'Risk', 'Finance'],
  },
  {
    title: 'OneStop Project Management',
    description:
      'Practical guide to managing complex technology projects — methodology, team leadership, and delivery excellence.',
    tags: ['Project Management', 'Leadership'],
  },
]

export const skillGroups = [
  {
    category: 'Cloud Platforms',
    skills: [
      'Google Cloud (BigQuery, Dataflow, Dataproc, Pub/Sub, Cloud SQL, Spanner)',
      'AWS (Redshift, Glue, Kinesis, Athena, EMR, S3, EC2, SageMaker)',
      'Azure (Data Factory, Cosmos DB, SQL Data Warehouse, Databricks)',
      'Snowflake',
      'Databricks',
      'Oracle Cloud',
      'SAP Cloud Platform',
    ],
  },
  {
    category: 'AI / Machine Learning',
    skills: [
      'MLOps & AI Platform Design',
      'Large Language Models (LLMs)',
      'Deep Learning & Neural Networks',
      'TensorFlow, PyTorch, Scikit-Learn',
      'NLP & Chatbots',
      'OpenAI APIs, Google AI Studio',
      'MCP (Model Context Protocol)',
      'CrewAI, n8n Workflows',
    ],
  },
  {
    category: 'Big Data & Databases',
    skills: [
      'Hadoop, HDFS, MapReduce, Spark, Kafka',
      'Snowflake, Databricks, BigQuery',
      'MongoDB, Cassandra, Redis, Neo4j',
      'Oracle, Teradata, DB2, SQL Server, Netezza',
      'VectorDB, Pinecone, Milvus',
      'HBase, Hive, Vertica, MemSQL',
    ],
  },
  {
    category: 'Data Architecture & BI',
    skills: [
      'Star Schema, Snowflake Schema, Data Vault 2.0',
      'ETL/ELT (Informatica, DataStage, Ab Initio, Matillion)',
      'MicroStrategy, Power BI, Tableau, Looker',
      'Cognos, SAP Business Objects, QlikView',
      'Data Modeling (ERwin, Power Designer)',
      'Master Data Management (MDM)',
    ],
  },
  {
    category: 'Languages & Tools',
    skills: [
      'Python, SQL, PL/SQL, Spark SQL',
      'Java, C, C++, Scala, R',
      'Docker, Kubernetes',
      'UNIX Shell, XML, UML',
      'Apache Airflow, NiFi, CDAP',
      'APIGEE, Web Methods, MQ Series',
    ],
  },
  {
    category: 'Industries',
    skills: [
      'Retail (Walmart, Macy\'s, eBay)',
      'Telecom & Media (AT&T, DirecTV)',
      'Finance & Banking (Experian)',
      'Transportation & Logistics (UPS)',
      'Life Science & Pharma (IQVIA, Aktana)',
      'Government, Ad Tech, Manufacturing',
    ],
  },
]

export const certifications = [
  {
    name: 'Databricks Fundamentals',
    issuer: 'Databricks',
    url: 'https://credentials.databricks.com/6b068bec-8964-41ce-b05e-d00049e9cbde#acc.fkKyOIAV',
  },
  {
    name: 'Databricks Lakehouse Fundamentals',
    issuer: 'Databricks',
    url: 'https://credentials.databricks.com/59afe467-45ed-462d-8dbd-cb97e070c123#acc.3WCp41RD',
  },
  {
    name: 'Databricks Generative AI Fundamentals',
    issuer: 'Databricks',
    url: 'https://credentials.databricks.com/0872c333-7e49-4ee8-96bc-f7257a61fc72#acc.QC1Y8sHA',
  },
  {
    name: 'Neural Networks and Deep Learning',
    issuer: 'Coursera (deeplearning.ai)',
    url: 'https://www.coursera.org/account/accomplishments/certificate/88V2QCKPKKR1',
  },
  {
    name: 'Machine Learning (Stanford University)',
    issuer: 'Coursera',
    url: 'https://www.coursera.org/account/accomplishments/certificate/VJLUBDUQ8WUN',
  },
  {
    name: 'AWS Machine Learning',
    issuer: 'Coursera',
    url: 'https://www.coursera.org/account/accomplishments/certificate/TWPER89FFQ2B',
  },
  {
    name: 'Architecting with Google Cloud Platform (Specialization)',
    issuer: 'Coursera / Google',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/MABZ97YKHSQE',
  },
  {
    name: 'GCP Professional Data Engineer Prep',
    issuer: 'Coursera / Google',
    url: 'https://www.coursera.org/account/accomplishments/certificate/DA5ACAKA4W5P',
  },
  {
    name: 'MongoDB Basics',
    issuer: 'MongoDB University',
    url: 'http://university.mongodb.com/course_completion/9272af1b-f79a-4656-a01e-88252db1f67e',
  },
  {
    name: 'MongoDB Aggregation Framework',
    issuer: 'MongoDB University',
    url: 'http://university.mongodb.com/course_completion/04623b8c-8135-4ee7-9e58-ff9dda3359ed',
  },
  {
    name: 'MongoDB for Python Developers',
    issuer: 'MongoDB University',
    url: 'http://university.mongodb.com/course_completion/b7d12a8d-a98d-4935-98ba-3dce663c1ed8',
  },
]

export const services = [
  'Data Architecture & Strategy',
  'AI/ML Platform Design & MLOps',
  'Cloud Migration (AWS, GCP, Azure)',
  'Data Warehouse & Data Lake Design',
  'Business Intelligence & Analytics',
  'Enterprise Data Governance',
  'SaaS Product Development',
  'Big Data Engineering',
]

export const education = {
  degree: 'Bachelor of Engineering (Electronics)',
  university: 'Bangalore University',
}

export const clients = [
  'AT&T', 'Walmart', 'Experian', 'UPS', 'eBay',
  'DirecTV', 'Macy\'s', 'Aktana', 'VMware',
  'IMS Health (IQVIA)', 'Lafarge', 'Temple Inland',
  'State of Georgia', 'State of Florida',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Books', href: '#books' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]
