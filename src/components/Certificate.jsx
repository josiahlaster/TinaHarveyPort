import './Education.css'
import civilLitCert from '../assets/civilLitCert.png'
import familyLawCert from '../assets/familyLawCert.png'
import paralegalDiploma from '../assets/paralegalDiploma.png'
import realEstateCert from '../assets/realEstateCert.png'

function Education() {
  const education = [
    {
      degree: "Advanced Certificate",
      field: "Real Estate Law",
      institution: "Blackstone Career Institute",
      year: "2024",
      icon: realEstateCert,
    },
    {
      degree: "Advanced Certificate",
      field: "Civil Litigation",
      institution: "Blackstone Career Institute",
      year: "2021",
      icon: civilLitCert,
    },
    {
      degree: "Advanced Certificate",
      field: "Family Law",
      institution: "Blackstone Career Institute",
      year: "2022",
      icon: familyLawCert,
    },
    {
      degree: "Diploma",
      field: "Legal Assistant/Paralegal",
      institution: "Blackstone Career Institute",
      year: "2019",
      honors: "Honors Distinction",
      icon: paralegalDiploma,
    },

  ]

  return (
    <section id="education" className="education">
      <div className="education-header">
        <h2>PARALEGAL EDUCATION</h2>
        <div className="header-divider">
          <span className="line"></span>
          <span className="diamond">◆</span>
          <span className="line"></span>
        </div>
      </div>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="degree-icon">
              <img src={edu.icon} alt={edu.degree} />
            </div>
            <h3>{edu.degree}</h3>
            <div className="divider">
              <span className="diamond-small">◆</span>
            </div>
            <p className="field">{edu.field}</p>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
            <div className="divider">
              <span className="diamond-small">◆</span>
            </div>
            {edu.honors && <p className="honors">{edu.honors}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
