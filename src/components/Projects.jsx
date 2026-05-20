import './Projects.css'
import tlcIcon from '../assets/TLCLogo.png'
import taskforceIcon from '../assets/TaskForceLogo.png'
import toyIcon from '../assets/ToyLogo.png'
import ebonyAngelsIcon from '../assets/ebonyAngelsIcon.png'

const projects = [
  {
    id: 1,
    name: 'Transitions\nLegacy Center',
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
    name: 'Task Force\nLegal Solutions',
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
    name: 'TRANSFORMATIVE JUSTICE YOUTH REFORM',
    url: 'https://ebonyangels.org/',
    domain: 'TRANSFORMATIVE YOUTH ',
    category: 'NONPROFIT ADVOCACY ',
    description:
      'Transformative Justice Youth Reform is a nonprofit organization dedicated to youth reform, restorative justice, trauma-informed awareness, and community-based support for justice-involved youth and families. Program support includes nonprofit leadership, program development, ACEs-informed advocacy, policy research, community outreach, and strategic organizational branding.',
    accentColor: '#6b2d8b',
    icon: toyIcon,
  },
    {
    id: 4,
    name: 'EBONY ANGELS',
    url: 'https://ebonyangels.org/',
    domain: 'Ebony Angels',
    category: 'SOCIAL ORGANIZATION ',
    description:
      'Ebony Angels is a New York–based women’s collective established in 1984, dedicated to sisterhood, friendship, and empowerment. The organization cultivates a strong membership network through fellowship, reunions, leadership enrichment, capacity building, and special events that strengthen unity and engagement while fostering professional development and personal growth.',
    accentColor: '#6b2d8b',
    icon: ebonyAngelsIcon,
  },
]

function ProjectCard({ project }) {
  const titleLines = project.name.split('\n')

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
        <h2 className="card-title">
          {titleLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h2>
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
