import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import resumePdf from '../assets/Resume.pdf'
import './GetInTouch.css'

const subjectOptions = [
  'Resume Inquiry',
  'Volunteer Opportunity',
  'Project Collaboration',
  'Media / Press Inquiry',
  'Speaking Engagement',
  'Mentorship / Support',
  'Partnership Opportunity',
  'Other (ex. References, Transcripts)',
]

function GetInTouch() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build a mailto link as a simple no-backend solution
    const mailSubject = encodeURIComponent(form.subject || 'Website Inquiry')
    const mailBody = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:info@tinamarieharvey.com?subject=${mailSubject}&body=${mailBody}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <main className="git-page">
      {/* ── Two-column content ── */}
      <section className="git-content">
        {/* Left column */}
        <div className="git-left">
          <h1 className="git-heading">Get In Touch</h1>
          <p className="git-intro">
            I&apos;d love to hear from you! Whether you have a question,
            a project idea, or just want to connect&mdash;reach out.
          </p>
          <p className="git-intro">
            I aim to respond within <strong><em>24 hours</em></strong>.
          </p>

          {/* Contact cards */}
          <div className="git-contact-cards">

            <div className="git-contact-item">
              <div className="git-contact-icon">
                {/* phone icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4 className="git-contact-label">PHONE</h4>
                <p className="git-contact-value">919-438-3030</p>
              </div>
            </div>

            <div className="git-contact-item">
              <div className="git-contact-icon">
                {/* envelope icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <h4 className="git-contact-label">EMAIL</h4>
                <p className="git-contact-value">info@tinamarieharvey.com</p>
              </div>
            </div>



            <div className="git-contact-item">
              <div className="git-contact-icon">
                {/* map-pin icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 className="git-contact-label">LOCATION</h4>
                <p className="git-contact-value">Raleigh-Durham, NC</p>
                <p className="git-contact-sub">Serving locally and beyond</p>
              </div>
            </div>
          </div>

          {/* Quote card */}
          <div className="git-quote-card">
            <span className="git-quote-mark">&ldquo;</span>
            <p className="git-quote-text">
              Providing strategic leadership, professional insight, and service-centered solutions that strengthen communities and organizations.
            </p>
            <p className="git-quote-author">&mdash; <em>Tina Marie Harvey</em></p>
          </div>
        </div>

        {/* Right column — form */}
        <div className="git-right">
          <h2 className="git-form-heading">SEND A MESSAGE</h2>

          <form className="git-form" onSubmit={handleSubmit}>
            <div className="git-form-row">
              <div className="git-form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Type your first name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="git-form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Type your last name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                /> 
              </div>
            </div>

              <div className="git-form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="Type your phone number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="git-form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Type your email address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>


            <fieldset className="git-form-group git-subject-group">
              <legend>Subject</legend>
              <div className="git-subject-grid">
                {subjectOptions.map((opt) => (
                  <label key={opt} className="git-radio-label">
                    <input
                      type="radio"
                      name="subject"
                      value={opt}
                      checked={form.subject === opt}
                      onChange={handleChange}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="git-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="git-form-submit">
              <button type="submit" className="git-send-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </button>
            </div>

            {submitted && (
              <p className="git-success">Your email client has been opened. Thank you!</p>
            )}
          </form>
        </div>
      </section>

      {/* ── Bottom CTA banner ── */}
      <section className="git-cta-banner">
        <div className="git-cta-inner">
          <div className="git-cta-icon">
            {/* handshake icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m11 17 2 2a1 1 0 1 0 3-3" />
              <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88" />
              <path d="m11 17-2-2a1 1 0 1 0-3 3" />
              <path d="m10 14-2.5-2.5a1 1 0 1 0-3 3l3.88 3.88a3 3 0 0 0 4.24 0l.88-.88" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m7 5 1 1" />
              <path d="m17 5-1 1" />
              <path d="M12 2v2" />
            </svg>
          </div>
          <div className="git-cta-text">
            <h3>Let&apos;s Work Together</h3>
            <p>
              Open to meaningful opportunities that create lasting impact.
              Let&apos;s connect and build something great.
            </p>
          </div>
          <a href={resumePdf} download className="git-cta-btn">
            VIEW RESUME
          </a>
        </div>
      </section>
    </main>
  )
}

export default GetInTouch
