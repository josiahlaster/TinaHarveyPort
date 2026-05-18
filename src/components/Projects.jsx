import './Projects.css'

const projects = [
  {
    id: 1,
    name: 'Transitions Legacy Center',
    url: 'https://transitionslegacycenter.com/',
    domain: 'Transitions Legacy Center',
    category: 'Community Services',
    description:
      'Transitions Legacy Center is a community-focused nonprofit dedicated to empowering individuals and families through supportive services, programming, and resources that foster lasting positive change. Tina contributed expertise in compliance, policy development, and nonprofit management to help strengthen organizational operations and mission delivery.',
    accentColor: '#4e8c6e',
  },
  {
    id: 2,
    name: 'Taskforce Legal Solutions',
    url: 'https://taskforcelegalsolutions.com',
    domain: 'Taskforce Legal Solutions',
    category: 'Legal Services',
    description:
      'Taskforce Legal Solutions provides accessible, professional consulting services to individuals and organizations navigating complex legal landscapes. Tina\'s background in legal analysis, regulatory compliance, and document preparation was instrumental in shaping efficient and client-centered service delivery.',
    accentColor: '#1a3a5c',
  },
  {
    id: 3,
    name: 'Transformitive Youth',
    url: 'https://ebonyangels.org/',
    domain: 'Ebony Angels',
    category: 'Nonprofit | Youth Reform ',
    description:
      'Ebony Angels is a nonprofit organization committed to uplifting women and families through health equity advocacy, community outreach, and holistic wellness programs. Tina applied her skills in grant development, healthcare coordination, and organizational branding to amplify the organization\'s impact and community reach.',
    accentColor: '#6b2d8b',
  },
]

function ProjectCard({ project }) {
  return (
    <article className="project-card" style={{ '--accent': project.accentColor }}>
      <div className="card-accent-bar" />
      <div className="card-body">
        <div className="card-icon">{project.icon}</div>
        <span className="card-category">{project.category}</span>
        <h2 className="card-title">{project.name}</h2>
        <p className="card-description">{project.description}</p>
        <div className="card-visit-area">
          <span className="card-visit-label">Visit</span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            {project.domain}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-hero">
        <div className="projects-hero-inner">
          <span className="projects-eyebrow">Portfolio</span>
          <h1 className="projects-heading">Featured Projects</h1>
          <p className="projects-subheading">
            A selection of organizations and initiatives Tina has supported
            through strategic leadership, compliance expertise, and operational excellence.
          </p>
        </div>
      </div>

      <section className="projects-grid-section">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects
