import './Hero.css'
import headshot from '../assets/headshot2.png'
import resumePdf from '../assets/TinaMarieHarveyResume.pdf'

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <div className="profile-photo">
            <img src={headshot} alt="Tina Harvey" />
          </div>
        </div>
        <div className="hero-text">
          <h1>TINA MARIE HARVEY </h1>
          <h3>COMPLIANCE AND LEGAL ANALYST</h3>
          <p className="bio">
            Multidisciplinary professional with experience spanning legal support, accounting operations, quality assurance, policy development, organizational branding, workforce development and recruitment strategy, healthcare coordination, insurance operations, grant development, and nonprofit management. Demonstrates strong operational leadership and regulatory knowledge across public, private, and nonprofit sectors, with the ability to align legal, financial, and programmatic functions to enhance organizational performance, strengthen compliance, and support sustainable, mission-driven growth.
          </p>
          <blockquote>
            "Success is not final, failure is not fatal: it is the courage to continue that counts."
          </blockquote>
          <div className="hero-actions">
            <a href="#contact" className="btn">Get In Touch</a>
            <a href={resumePdf} download className="btn btn-secondary">Download Resume</a>
            <a href="https://www.linkedin.com/in/tinamarieharvey" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
