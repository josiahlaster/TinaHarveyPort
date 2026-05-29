import './Hero.css'
import headshot from '../assets/headshot2.png'
import heroBackground from '../assets/HeroBackGround.png'
import resumePdf from '../assets/TinaMarieHarveyResume.pdf'

function Hero() {
  return (
    <section id="about" className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="hero-content">
        <div className="hero-image">
          <div className="profile-frame">
            <div className="profile-photo">
              <img src={headshot} alt="Tina Harvey" />
            </div>
          </div>
        </div>
        <div className="hero-text">
          <h1>TINA MARIE HARVEY </h1>
          <h3>LEGAL COMPLIANCE AND POLICY ANALYST</h3>
          <p className="bio">
            North Carolina Certified Paralegal and public administration professional seeking to contribute a multidisciplinary background in legal, healthcare, financial, nonprofit, and higher education administration to a high-level role requiring sound judgment, confidentiality, policy awareness, and operational accountability. Brings a strong ability to review complex information, identify issues, communicate professionally, support compliance requirements, and produce clear documentation that strengthens decision-making, risk management, and organizational performance.
          </p>
          <blockquote>
            "There is in this world no such force as the force of a person determined to rise ~ W.E.B. DuBois"
          </blockquote>
          <div className="hero-actions">
            <a href="#contact" className="btn get-in-touch">
              <span className="btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z" />
                  <path d="M4 4l8 8 8-8" />
                </svg>
              </span>
              Get In Touch
            </a>
            <a href={resumePdf} download className="btn btn-secondary">
              <span className="btn-icon document-icon">
                <img src="/documentIcon.png" alt="Document icon" />
              </span>
              Download Resume
            </a>
            <a href="https://www.linkedin.com/in/tinamarieharvey" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin">
              <span className="btn-icon">
                <img src="/linkedin.png" alt="LinkedIn" />
              </span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
