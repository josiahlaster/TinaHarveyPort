import './Certificate.css'

function Certificates() {
  const education = [
    {
      degree: "Advanced Certificate",
      field: "Real Estate Law",
      institution: "Blackstone Career Institute",
      year: "2024",
      honors: ""
    },
    {
      degree: "Advanced Certificate",
      field: "Civil Litigation",
      institution: "Blackstone Career Institute",
      year: "2021",
      honors: ""
    },
    {
      degree: "Advanced Certificate",
      field: "Family Law",
      institution: "Blackstone Career Institute",
      year: "2020",
      honors: ""
    },
    {
      degree: "Diploma",
      field: "Legal Assistant/Paralegal",
      institution: "Blackstone Career Institute",
      year: "2019",
      honors: "Honors Distinction"
    },
    

  ]

  return (
    <section id="certificates" className="certificate">
      <h2>Paralegal Education</h2>
      <div className="certificate-grid">
        {education.map((edu, index) => (
          <div key={index} className="certificate-card">
            <div className="certificate-icon">{edu.icon}</div>
            <h3>{edu.degree}</h3>
            <p className="field">{edu.field}</p>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
            {edu.honors && <p className="honors"> {edu.honors}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificates
