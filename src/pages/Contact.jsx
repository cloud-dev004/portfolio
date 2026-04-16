import { useState } from 'react';
import './Contact.css';

function Contact() {
  // Consolidate form fields into a single state object for cleaner management
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // Track form submission status for user feedback (e.g., success message, disabling button)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Generic handler for all text-based inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Mock API call to simulate realistic network delay
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Simulate network request duration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // On success, show feedback and clear form
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 4 seconds
      setTimeout(() => setSubmitSuccess(false), 4000);
    } catch (error) {
      console.error('Failed to submit form:', error);
      // Implement error feedback here if an actual endpoint was used
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="page contact-page" id="contact" aria-labelledby="contact-heading">
      <div className="page-container">
        
        {/* Context Label */}
        <div className="page-label">
          <span className="page-label-dot" aria-hidden="true"></span>
          Get In Touch
        </div>

        {/* Section Heading */}
        <h1 className="page-heading" id="contact-heading">
          Let's <span className="highlight">Connect</span>
        </h1>

        <p className="page-subtitle">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>

        <div className="contact-grid">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit} id="contact-form" noValidate={false}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                disabled={isSubmitting}
              />
            </div>

            <button 
              type="submit" 
              className="contact-submit-btn" 
              id="submit-btn"
              disabled={isSubmitting || submitSuccess}
              aria-live="polite"
            >
              {isSubmitting ? 'Sending...' : submitSuccess ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>

          {/* Contact Info Sidebar */}
          <div className="contact-info" role="list">
            <div className="contact-info-card" role="listitem">
              <div className="contact-info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <h3>Email</h3>
              <p>peratchimanikandan7@gmail.com</p>
            </div>
            
            <div className="contact-info-card" role="listitem">
              <div className="contact-info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <h3>Location</h3>
              <p>India</p>
            </div>
            
            <div className="contact-info-card" role="listitem">
              <div className="contact-info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <h3>Availability</h3>
              <p>Open to freelance & full-time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
