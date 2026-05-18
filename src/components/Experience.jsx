import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: "Graduate Assistant",
      company: "North Carolina Central University | Durham, NC",
      period: "2025 - 2026",
      description: [
        "Contributed to graduate-level instruction in Human Resource Development in Public Administration, with emphasis on workforce development, employee performance, professional development, organizational learning, nonprofit management, and public sector leadership.",
        "Coordinated course preparation, instructional materials, grading support, student engagement, learning management system updates, and academic communication.",
        "Guided graduate students by clarifying assignment expectations, reinforcing course concepts, and strengthening research development.",
        "Reviewed student submissions for organization, clarity, source integration, formatting, and alignment with graduate-level academic standards.",
        "Developed curriculum-related resources, including discussion prompts, presentation content, case-study materials, and research support tools.",
        "Supported training-related instruction connected to performance development, employee motivation, diversity and inclusion, leadership development, and organizational effectiveness.",
        "Maintained instructional records, assignment tracking, communication logs, and course-related documentation in accordance with university procedures.",
        "Partnered with faculty to strengthen learning outcomes, assessment processes, course delivery, and continuous instructional improvement."
      ]
    },
    {
      title: "Account Manager",
      company: "Durham Technical Community College | Durham, NC",
      period: "2025 – Present",
      description: [
        "Manage higher education financial administration functions involving student accounts, sponsor billing, third-party funding, Veterans Administration funding, state and federal support, payment processing, refunds, collections, and reconciliation.",
        "Review and verify financial records, account activity, authorizations, eligibility documentation, and compliance-related data to support accurate institutional decisionmaking.",
        "Develop and implement Standard Operating Procedures (SOPs), internal controls, and process documentation for grant administration, sponsorship billing, compliance tracking, and financial operations to strengthen governance and operational efficiency.",
        "Conduct advanced accounts receivable analysis, monitor outstanding balances, support reporting and audit requests, and collaborate with Financial Aid, external agencies, and institutional leadership to resolve discrepancies, mitigate risk, and ensure regulatory compliance."
      ]
    },
    {
      title: "Senior Paralegal",
      company: "Satterfield Law, PLLC | Hillsborough, NC",
      period: "2022 - 2025",
      description: [
        "Supported complex civil litigation matters involving personal injury, real estate disputes, employment-related claims, EEOC-related issues, mediation, arbitration, and settlement preparation.",
        "Performed legal intake, case review, document analysis, and structured fact-gathering to support litigation strategy, discovery preparation, client advocacy, and compliance-centered case management.",
        "Drafted, reviewed, and revised pleadings, discovery responses, contracts, correspondence, demand materials, and litigation documents requiring accuracy, confidentiality, and procedural compliance.",
        "Managed discovery production, evidence organization, document requests, timelines, case files, and litigation records to support attorney review, case development, mediation, arbitration, and trial preparation.",
        "Reviewed statutes, policies, procedural rules, real estate records, employment-related documents, medical records, insurance materials, and case evidence to identify relevant facts, timelines, damages, compliance issues, and supporting documentation.",
        "Prepared factual summaries, case chronologies, documentation packets, mediation materials, arbitration support documents, and written case materials requiring clear analysis, organization, and attention to detail.",
        "Served as a primary client liaison, maintaining discretion, confidentiality, professional communication, and sensitivity when handling complex legal matters, disputed facts, employment concerns, property issues, and injury-related claims.",
        "Administered case lifecycle functions through MyCase, including calendaring, e-filing, documentation tracking, client communication, records management, and litigation deadline monitoring."
      ]
    },
    {
      title: "Program Administrator",
      company: "Transformative Youth | Cary, NC",
      period: "2021 - Present",
      description: [
        "Support nonprofit administration, board leadership functions, organizational planning, and program development for youth justice, diversion, and transitional support initiatives.",
        "Develop policies, procedures, program standards, operational workflows, and service-delivery models to strengthen compliance, accountability, and organizational structure.",
        "Contribute to budgeting, grant writing, funding strategy, resource planning, and sustainability efforts to support nonprofit growth and program implementation.",
        "Coordinate community engagement, stakeholder communication, referral partnerships, and collaborative relationships with justice, education, behavioral health, and community-based organizations.",
        "Design training materials, outreach content, program resources, and implementation tools related to restorative justice, trauma-informed support, youth development, and reentry-focused services.",
        "Maintain confidential participant, program, board, and administrative records while supporting documentation, reporting, and organizational compliance.",
        "Apply public administration, nonprofit management, policy analysis, and justice reform knowledge to support program design, strategic planning, and community-centered service delivery."
      ]
    },
    {
      title: "Executive Director",
      company: "Trinity Healthcare Partners | Durham, NC",
      period: "2014 - 2021",
      description: [
        "Directed healthcare administration, regulatory compliance, personnel documentation, credentialing, onboarding, recruitment, and staff record management.",
        "Facilitated staff training and compliance education to strengthen workforce readiness, service standards, and regulatory performance.",
        "Maintained organizational policies, procedures, compliance files, quality assurance processes, and internal controls to support CARF accreditation readiness, audit response, and operational accountability.",
        "Analyzed operational data, staffing needs, compliance records, service trends, and quality assurance findings to support reporting, research, process improvement, and leadership decision-making.",
        "Protected confidential client, personnel, medical, and administrative records in accordance with HIPAA privacy standards, healthcare documentation requirements, and internal confidentiality protocols.",
        "Supported workplace safety, personnel compliance, employee documentation, and health-related administrative requirements consistent with OSHA standards and healthcare operational requirements.",
        "Managed budgeting, contract compliance, financial forecasting, staff coordination, and healthcare operations to support compliant and efficient service delivery."
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
