import './Projects.css'
import tlcIcon from '../assets/TLCLogo.png'
import taskforceIcon from '../assets/TaskForceLogo.png'
import toyIcon from '../assets/ToyLogo.png'
import ebonyAngelsIcon from '../assets/ebonyAngelsIcon.png'

const projects = [
  {
    id: 1,
    name: 'Transitions Legacy Center',
    url: 'https://transitionslegacycenter.com/',
    domain: 'Transitions Legacy Center',
    category: 'COMMUNITY SUPPORT',
    description:
      'Transitions Legacy Center is a community-based organization focused on peer support, reentry services, resource navigation, and transition-focused programming for individuals and families. Core support includes compliance guidance, policy development, nonprofit management, operational structure, and strategic service planning to strengthen organizational growth and mission delivery.',
    accentColor: '#4e8c6e',
    icon: tlcIcon,
  },
  {
    id: 2,
    name: 'Task Force Legal Solutions',
    url: 'https://taskforcelegalsolutions.com',
    domain: 'Task Force Legal Solutions',
    category: 'PARALEGAL SERVICES',
    description:
      'Task Force Legal Solutions provides professional legal consulting, document preparation support, compliance assistance, and administrative legal services for individuals, organizations, and public-service initiatives. Service areas include legal analysis, regulatory compliance, civil documentation, and case management support for efficient, ethical, and client-centered service delivery.',
    accentColor: '#1a3a5c',
    icon: taskforceIcon,
  },
  {
    id: 3,
    name: 'Transformitive Youth',
    url: 'https://ebonyangels.org/',
    domain: 'Transformitive Youth',
    category: 'NONPROFIT ADVOCACY ',
    description:
      'Transformative Justice Youth Reform is a nonprofit organization dedicated to youth reform, restorative justice, trauma-informed awareness, and community-based support for justice-involved youth and families. Program support includes nonprofit leadership, program development, ACEs-informed advocacy, policy research, community outreach, and strategic organizational branding.',
    accentColor: '#6b2d8b',
    icon: toyIcon,
  },
    {
    id: 4,
    name: 'Transformitive Youth',
    url: 'https://ebonyangels.org/',
    domain: 'Ebony Angels',
    category: 'Nonprofit | Youth Reform ',
    description:
      'Ebony Angels is a nonprofit organization committed to uplifting women and families through health equity advocacy, community outreach, and holistic wellness programs. Tina applied her skills in grant development, healthcare coordination, and organizational branding to amplify the organization\'s impact and community reach.',
    accentColor: '#6b2d8b',
    icon: ebonyAngelsIcon,
  },
]

function ProjectCard({ project }) {
  return (
    <article className="project-card" style={{ '--accent': project.accentColor }}>
      <div className="card-accent-bar" />
      <div className="card-body">
        {project.icon && (
          <div className="card-icon">
            <img src={project.icon} alt={`${project.name} icon`} className="project-icon-img" />
          </div>
        )}
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
           A curated selection of organizations and initiatives supported through strategic leadership, legal compliance, nonprofit administration, operational development, and community-centered service.
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
