import './CoreOfferings.css'
import coreCompIcon from '../assets/CoreComp.png'
import LeadPro from '../assets/LeadPro.png'
import credsIcon from '../assets/creds.png'

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
            <a href="#" className="card-link">LEARN MORE →</a>
          </div>
        </div>

        <div className="offering-card">
          <div className="card-icon">
            <img src={LeadPro} alt="Leadership Profiles" />
          </div>
          <div className="card-content">
            <h3>LEADERSHIP PROFILES</h3>
            <p>
              Experienced in leading cross-functional teams, collaborating with stakeholders, and supporting institutional goals with integrity and excellence.
            </p>
            <a href="#" className="card-link">VIEW PROFILES →</a>
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
            <a href="#" className="card-link">VIEW CREDENTIALS →</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreOfferings
