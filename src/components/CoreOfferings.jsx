import './CoreOfferings.css'
import { Link } from 'react-router-dom'
import coreCompIcon from '../assets/CoreComp.png'
import LeadPro from '../assets/LeadPro.png'
import credsIcon from '../assets/creds.png'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function CoreOfferings() {
  return (
    <section className="core-offerings">
      <div className="offerings-container">
        <div className="offering-card">
          <div className="card-icon">
            <img src={coreCompIcon} alt="Core Competencies" />
          </div>
          <div className="card-content">
            <h3>CORE COMPETENCIES</h3>
            <p>
              Financial administration, compliance oversight, policy analysis, risk management, records management, and operational accountability.
            </p>
            <button onClick={() => scrollTo('skills')} className="card-link">LEARN MORE →</button>
          </div>
        </div>

        <div className="offering-card">
          <div className="card-icon">
            <img src={LeadPro} alt="Leadership Profiles" />
          </div>
          <div className="card-content">
            <h3>EXECUTIVE PROFILES</h3>
            <p>
              Experienced in leading cross-functional teams, collaborating with stakeholders, and supporting institutional goals with integrity and excellence.
            </p>
            <Link to="/leadership-portfolio" className="card-link">VIEW PROFILES →</Link>
          </div>
        </div>

        <div className="offering-card">
          <div className="card-icon">
            <img src={credsIcon} alt="Credentials" />
          </div>
          <div className="card-content">
            <h3>CAREER CREDENTIALS</h3>
            <p>
              North Carolina Certified Paralegal with a background in public administration and continuous professional development.
            </p>
            <button onClick={() => scrollTo('education')} className="card-link">VIEW CREDENTIALS →</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreOfferings
