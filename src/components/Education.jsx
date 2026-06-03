import './Education.css'
import associateOfScience from '../assets/associateOfScience.png'
import bachelorOfScience from '../assets/bachelorOfScience.png'
import masterofAdmin from '../assets/masterofAdmin.png'
import graduateCert from '../assets/graduateCert.png'

function Education() {
  const education = [
    {
      degree: "Graduate Certificate",
      field: "Nonprofit Management",
      institution: "North Carolina Central University",
      year: "2026",
      honors: "Graduate Certificate",
      icon: graduateCert,
    },
    {
      degree: "Master of Public Administration",
      field: "Executive Track",
      institution: "North Carolina Central University",
      year: "2025",
      honors: "Summa Cum Laude",
      icon: masterofAdmin,
    },
    {
      degree: "Bachelor of Science",
      field: "Psychology",
      institution: "Kennesaw State University",
      year: "2024",
      honors: "Cum Laude",
      icon: bachelorOfScience,
    },
    {
      degree: "Associate of Science",
      field: "Early Childhood Education",
      institution: "University of Mount Olive",
      year: "2010",
      honors: "Magna Cum Laude",
      icon: associateOfScience,
    },

  ]

  return (
    <section id="education" className="education">
      <div className="education-header">
        <h2>COLLEGE EDUCATION</h2>
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
