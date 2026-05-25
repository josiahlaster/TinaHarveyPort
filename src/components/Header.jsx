import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/TMHlogo.png'
import './Header.css'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      // wait for navigation then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="TMH logo" />
          <div className="logo-copy">
            <span className="logo-text">TINA MARIE HARVEY</span>
            <span className="logo-subtitle">LEGAL COMPLIANCE AND POLICY ANALYST</span>
          </div>
        </div>
        <div className="contact-info">
          <span>Email: info@tinamarieharvey.com</span>
          <span>Phone: (919) 438-3030</span>
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('education')}>Education</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
          <button
            className={`nav-projects-btn${location.pathname === '/projects' ? ' active' : ''}`}
            onClick={() => navigate('/projects')}
          >
            Projects
          </button>
          <button
            className={`nav-git-btn${location.pathname === '/get-in-touch' ? ' active' : ''}`}
            onClick={() => navigate('/get-in-touch')}
          >
            Get In Touch
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
