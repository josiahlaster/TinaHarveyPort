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
          <h3>LEGAL COMPLIANCE AND POLICY ANALYST</h3>
          <p className="bio">
            North Carolina Certified Paralegal and public administration professional seeking to contribute a multidisciplinary background in legal, healthcare, financial, nonprofit, and higher education administration to a high-level role requiring sound judgment, confidentiality, policy awareness, and operational accountability. Brings a strong ability to review complex information, identify issues, communicate professionally, support compliance requirements, and produce clear documentation that strengthens decision-making, risk management, and organizational performance.
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
