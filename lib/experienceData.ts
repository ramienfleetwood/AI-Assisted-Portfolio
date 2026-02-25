export interface ExperienceEntry {
  id: number
  company: string
  industry: string  // shown in the collapsed header
  title: string     // shown when expanded
  dateRange: string // shown when expanded
  duties: string[]  // bullet points shown when expanded
}

export const experienceData: ExperienceEntry[] = [
  {
    id: 0,
    company: 'Norwegian Cruise Line',
    industry: 'Travel & Hospitality',
    title: 'Digital Product Owner',
    dateRange: '2025',
    duties: [
      'Expanded beyond healthcare into travel & hospitality, rapidly internalizing new domain terminology and stakeholder dynamics to apply transferable product expertise from day one.',
      'Led agile ceremonies and owned backlog refinement for the Quest booking engine, consistently delivering high-value enhancements while maintaining sprint velocity.',
      'Authored user stories and acceptance criteria that reduced refinement time and gave engineering and QA a clear, shared definition of done.',
      'Collaborated across engineering, QA, and stakeholder teams on UAT, release planning, and cross-team coordination — delivering quality product increments on schedule.',
    ],
  },
  {
    id: 1,
    company: 'ModMed',
    industry: 'Healthcare Technology',
    title: 'Product Owner · Conversion Analyst',
    dateRange: '2021 – 2025',
    duties: [
      'Deepened my command of the full product development lifecycle — from discovery and sprint planning through UAT, release, and stakeholder alignment — working on the EMA EHR platform and its integrations with legacy clinical systems.',
      'Acted as the liaison between engineering and business stakeholders, translating complex clinical workflows and compliance requirements into clear user stories, product specs, and acceptance criteria.',
      'Led cross-functional delivery between Product, Engineering, and Business Development, driving process improvements that measurably improved sprint efficiency and release quality.',
      'Honed Scrum/Agile expertise and gained direct insight into what separates good products from great ones — shipping features that genuinely reduced friction for clinicians and staff.',
    ],
  },
  {
    id: 2,
    company: 'Integrative Physical Medicine',
    industry: 'Healthcare Operations',
    title: 'Regional Clinical & Operations Manager',
    dateRange: '2019 – 2021',
    duties: [
      'Took on broader operational ownership — overseeing regional staffing, office operations, and employee training across 20+ staff — which challenged me to view healthcare systems more objectively and identify where the real gaps lived.',
      'Audited and quality-controlled Vericle EHR and Salesforce CRM documentation, building an eye for process integrity and the downstream consequences of poor data hygiene.',
      'Served as the primary escalation point for patient and staff issues, sharpening cross-functional communication and the ability to resolve high-pressure situations with empathy and clarity.',
      'Gained a ground-level understanding of how operational inefficiencies translate into real clinical risk — perspective that continues to inform how I approach product decisions.',
    ],
  },
  {
    id: 3,
    company: 'RSBuddy',
    industry: 'Data & Product Analytics',
    title: 'Data Analyst · Part-time',
    dateRange: '2018 – 2021',
    duties: [
      'Introduced to the power of data-driven decision-making — learned to surface the stories hidden in subscriber behavior and translate them into product insights that shaped the roadmap.',
      'Built and maintained dashboards in Power BI, Tableau, and Excel tailored to stakeholders across technical and non-technical audiences, making key metrics accessible and actionable.',
      'Leveraged SQL, R, VLOOKUP, and pivot table analysis to maintain relational database integrity and conduct both quantitative and qualitative deep-dives into user trends.',
      'Developed a foundational discipline around evidence-based thinking that has since underpinned every product and operational role I\'ve held.',
    ],
  },
  {
    id: 4,
    company: 'Mount Sinai Hospital',
    industry: 'Healthcare Technology',
    title: 'Therapy Services Coordinator',
    dateRange: '2016 – 2017',
    duties: [
      'My entry point into healthcare technology — immersed in the high-stakes world of outpatient hospital care, where I quickly learned that the gap between systems and people has real consequences for patients.',
      'Managed insurance authorizations for hundreds of patients daily, uploading correspondence to Epic EHR records to ensure continuity of care and minimize authorization-related delays.',
      'Developed foundational fluency in payer plan structures, insurance carrier workflows, and the interplay between providers, payers, and patient outcomes.',
      'Gained hands-on experience with Epic, Cerner, Eagle (Mainframe), Epaces, Passport, and Ptar — establishing the clinical systems literacy that anchors everything built since.',
    ],
  },
]
