import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: "Program Administrator",
      company: "Transformative Justice Youth Program | Cary, NC",
      period: "2022 - Present",
      description: [
        "Implement all project initiatives in accordance with the bylaws and policies of the Board of Directors that define the purpose of nonprofit management.",
        "Analyze strengths, gaps, and efficiencies of the organization, balancing its health with its programmatic needs and functions.mplemented innovative solutions resulting in 30% efficiency improvement",
        "Develop policies for personnel management, financial operations, fundraising activities, and client service delivery.",
        "Promote collaboration between community-based organizations and local government agencies in order to broaden public engagement."
      ]
    },
    {
      title: "Executive Director",
      company: "Trinity Healthcare Partners | Durham, NC",
      period: "2014 - 2021",
      description: [
        "Manage the day-to-day operations of the organization in order to maintain business integrity and establish mutually beneficial community partnerships.",
        "Ensure that LME/MCO contracts and applicable governing laws are adhered to when developing and implementing programmatic and administrative outcomes.",
        "Oversee all contract programs, analyze annual budgets, and consolidate statistical data to maintain quality assurance.",
        "Provide professional consultation, methods, and procedures for program development and administration."
      ]
    },
    {
      title: "CEO and Center Director",
      company: "Triumph Learning Academy | Durham, NC",
      period: "2010 - 2014",
      description: [
        "Deliver evidence-based and culturally sensitive counseling, education, and activities.",
        "Organize professional development seminars to maintain a working knowledge of the current best practices of curriculum and administration in child development programs.",
        "Adopt and adhere to administrative policies and operational procedures according to NC DHHS Division of Child Development and Early Education and NC Secretary of Health and Human Services.",
        "Conduct all administrative functions, including budgeting, finance, human resources, and regulatory compliance."
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-marker"></div>
            <div className="timeline-date">{exp.period}</div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <ul className="responsibilities">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
