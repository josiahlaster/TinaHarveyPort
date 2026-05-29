import './Skills.css'
import complianceIcon from '../assets/Compliance.png'
import legalPolicyIcon from '../assets/legalPolicy.png'
import LeadComp from '../assets/LeadComp.png'

function Skills() {
  const skillCategories = [
    {
      title: "Compliance & Financial Operations",
      icon: complianceIcon,
      skills: [
        "Account Management",
        "Budgeting & Financial Administration",
        "Data Analysis & Reconciliation",
        "Risk Management",
        "Records Management",
        "Process Improvement"
      ]
    },
    {
      title: "Legal, Policy & Case Management",
      icon: legalPolicyIcon,
      skills: [
        "Legal Compliance",
        "Legal Research & Writing",
        "Case Management",
        "Policy Development",
        "Regulatory Compliance",
        "Report Preparation"
      ]
    },
    {
      title: "Leadership, Communication & Training",
      icon: LeadComp,
      skills: [
        "Employee-Facing Communication",
        "Training Support",
        "Organizational Leadership",
        "Project Management",
        "Cross-Functional Collaboration",
        "Conflict Resolution & Professional Judgment"
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2>Professional Skills</h2>
      <div className="header-divider">
        <span className="line"></span>
        <span className="diamond">◆</span>
        <span className="line"></span>
      </div>
      <p className="skills-subtitle">
        <em>Strategic capabilities aligned with compliance, policy, operations, and organizational leadership.</em>
      </p>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <div className="category-icon-circle">
                <img src={category.icon} alt={category.title} className="category-icon-img" />
              </div>
              <h3>{category.title}</h3>
            </div>
            <div className="category-divider"></div>
            <ul className="skills-list">
              {category.skills.map((skill, i) => (
                <li key={i}>
                  <span className="checkmark" aria-hidden="true">
                    <svg viewBox="0 0 22 22" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11" cy="11" r="10" stroke="#d4af37" strokeWidth="1.5"/>
                      <polyline points="6,11 10,15 16,8" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
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
