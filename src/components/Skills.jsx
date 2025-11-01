import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: "Business Solutions",
      icon: "💼",
      skills: [
        "Data Analysis",
        "Project Management",
        "Team Leadership & Development",
        "Financial Management"
      ]
    },
    {
      title: "Public Relations",
      icon: "⚙️",
      skills: [
        "Strategic Planning",
        "Talent Acquisition",
        "Consumer Advocacy",
        "Technical Writing"
      ]
    },
    {
      title: "Professional Skills",
      icon: "🎯",
      skills: [
        "Problem Solving & Critical Thinking",
        "Negotiation & Conflict Resolution",
        "Presentation & Public Speaking",
        "Cross-Functional Collaboration"
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <blockquote className="skills-quote">
        "Excellence is not a destination; it is a continuous journey that never ends."
      </blockquote>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <ul className="skills-list">
              {category.skills.map((skill, i) => (
                <li key={i}>
                  <span className="checkmark">✓</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
