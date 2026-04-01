import './Hero.css'
import headshot from '../assets/headshot2.png'
import resumePdf from '../assets/Resume.pdf'

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
          <h1>TINA HARVEY </h1>
          <h3>COMPLIANCE AND LEGAL ANALYST</h3>
          <p className="bio">
           Dedicated to social justice, diversity, and inclusion, Tina Harvey brings over three decades of
impactful experience in the healthcare sector. With a conceptual consciousness, she
advocates for consumers with impartiality and integrity, transcending barriers of race, creed,
class, gender, and color. Tina excels in cultivating public awareness and effectively navigating
resources to provide reliable and comprehensive services to at-risk populations, including
those seeking refuge from homelessness, criminal justice reintegration, family reunification,
crisis stabilization, school-based alternative suspension, and youth independent living.
          </p>
          <blockquote>
            "Success is not final, failure is not fatal: it is the courage to continue that counts."
          </blockquote>
          <div className="hero-actions">
            <a href="#contact" className="btn">Get In Touch</a>
            <a href={resumePdf} download className="btn btn-secondary">Download Resume</a>
            <a href="https://www.linkedin.com/in/tina-marie-harvey-91480b318/" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
