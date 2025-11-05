import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setStatus('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(''), 5000)
  }

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <span className="icon"></span>
            <div>
              <strong>Email</strong>
              <p>info@tinamarieharvey.com</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon"></span>
            <div>
              <strong>Phone</strong>
              <p>(919) 438-3030</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon"></span>
            <div>
              <strong>Location</strong>
              <p>Raleigh-Durham, NC
y</p>
            </div>
          </div>
          <blockquote className="contact-quote">
            "The best way to predict the future is to create it."
          </blockquote>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
