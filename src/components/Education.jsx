import './Education.css'

function Education() {
  const education = [
    {
      degree: "Master's",
      field: "Public Administration",
      institution: "North Carolina Central University",
      year: "2024 - 2025",
      honors: "Graduated with Honors"
    },
    {
      degree: "Bachelor's",
      field: "Psychology",
      institution: "Kennesaw State University",
      year: "2022 - 2024",
      honors: "Cum Laude"
    },
    {
      degree: "Associate's",
      field: "Early Education",
      institution: "University of Mount Olive",
      year: "2007 - 2010",
      honors: "Cum Laude"
    },

  ]

  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="degree-icon">{edu.icon}</div>
            <h3>{edu.degree}</h3>
            <p className="field">{edu.field}</p>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
            {edu.honors && <p className="honors">✨ {edu.honors}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
