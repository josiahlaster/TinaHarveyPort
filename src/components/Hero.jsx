import './Hero.css'

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <div className="profile-photo">
            <span className="photo-placeholder">👤</span>
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
            <a href="/resume.pdf" download className="btn btn-secondary">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
