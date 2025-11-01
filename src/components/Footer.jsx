import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@portfolio.com</p>
          <p>Phone: (919) 438-3030</p>
          <p>Location: Raleigh-Durham, NC</p>
        </div>
        <div className="footer-section">
          <h4>AFFILIATIONS</h4>
          <p>National Association of Legal Assistants (NALA)</p>
          <p>National Association of Peer Supporters (NAPS)</p>
          <p>National Council of Juvenile and Family Court Judges (NCJFCJ)</p>
          <p>National Forum for Black Public Administrators (NFBPA)</p>
          <p><a href="/resume.pdf" download>Download Resume</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Professional Portfolio. All rights reserved.</p>
        <p className="disclaimer">
          This is a professional portfolio website. All information provided is for informational purposes.
        </p>
      </div>
    </footer>
  )
}

export default Footer
