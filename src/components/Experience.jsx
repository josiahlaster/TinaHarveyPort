import './Experience.css'

function Experience() {
  const experiences = [
            {
      title: "Account Manager",
      company: "Durham Technical Community College | Durham, NC",
      period: "2025 – Present",
      description: [
        "Manage higher education financial administration functions involving student accounts,sponsor billing, third-party funding, Veterans Administration funding, state and federalsupport, payment processing, refunds, collections, and reconciliation.",
        "Review and verify financial records, account activity, authorizations, eligibility documentation, and compliance-related data to support accurate institutional decisionmaking.",
        "Develop and implement Standard Operating Procedures (SOPs), internal controls, and process documentation for grant administration, sponsorship billing, compliance tracking, and financial operations to strengthen governance and operational efficiency.",
        "Conduct advanced accounts receivable analysis, monitor outstanding balances, support reporting and audit requests, and collaborate with Financial Aid, external agencies, and institutional leadership to resolve discrepancies, mitigate risk, and ensure regulatory compliance."
      ]
    },
        {
      title: "Senior Paralegal",
      company: "Satterfield Law, PLLC | Hillsborough, NC",
      period: "2022 – 2025",
      description: [
        "Draft, review, and revise contracts, pleadings, discovery responses, and transactional legal documents; manage e-filing in state and federal courts while ensuring compliance with procedural rules and litigation deadlines.",
        "Conduct advanced legal research utilizing LexisNexis, prepare discovery requests and responses, coordinate document production, and support arbitration and mediation preparation, including exhibits, case summaries, and settlement documentation.",
        "Manage case lifecycle administration using MyCase and legal document management systems, including calendaring, deadline tracking, document organization, and maintaining confidential client and litigation records.",
        "Serve as primary client liaison, coordinating communications, intake, and case updates while tracking billable hours, managing invoices, and supporting hourly billing and matter management."
      ]
    },
    {
      title: "Program Administrator",
      company: "Transformative Justice Youth Program | Cary, NC",
      period: "2022 - Present",
      description: [
        "Administer diversion and transitional programming for justice-involved juveniles, coordinating peer support, vocational rehabilitation, independent living services, and compliance with court directives and community-based alternatives to adjudication.",
        "Provide litigation and case support across juvenile matters, including case documentation review, court coordination, compliance monitoring, and stakeholder communication with attorneys, families, and government agencies.",
        "Oversee financial management operations, encompassing budgeting, fundraising initiatives, grant writing, fund allocation, and financial oversight to ensure program sustainability, accountability, and service delivery.",
        "Develop and enforce policies and operational controls governing service eligibility, program expansion, data protection, and risk management while facilitating housing placements, success coaching, mentoring programs, and social justice advocacy for justice-involved youth."
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
