import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <section className="page about-page" id="about">
      <div className="page-container">
        <div className="page-label">
          <span className="page-label-dot"></span>
          About Me
        </div>

        <h1 className="page-heading">
          Cloud Architect & <span className="highlight">MERN Stack</span> Developer
        </h1>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm Peratchi Manikandan, a Cloud Architect and MERN Stack Developer who
              loves designing scalable cloud infrastructure and turning ideas into
              elegant, performant web applications.
            </p>
            <p>
              My journey started with curiosity and has evolved into a passion for
              cloud solutions and full-stack development. I work with AWS, React,
              Node.js, Express, and MongoDB to build end-to-end solutions.
            </p>

            <div className="about-stats">
              <div className="about-stat-item">
                <span className="about-stat-number">1+</span>
                <span className="about-stat-label">Years Experience</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-number">10+</span>
                <span className="about-stat-label">Projects Built</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-number">5+</span>
                <span className="about-stat-label">Technologies</span>
              </div>
            </div>
          </div>

          <div className="about-info-cards">
            <div className="info-card">
              <div className="info-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
              </div>
              <h3>Education</h3>
              <p>Master of Computer Application</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" /></svg>
              </div>
              <h3>Experience</h3>
              <p>Fresher</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
              </div>
              <h3>Goal</h3>
              <p>Build impactful digital solutions</p>
            </div>
          </div>
        </div>

        <Link to="/contact" className="page-cta-btn">Let's Work Together</Link>
      </div>
    </section>
  )
}

export default About
