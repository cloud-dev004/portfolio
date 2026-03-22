import './Projects.css'

const projects = [
  // {
  //   title: 'E-Commerce Platform',
  //   description: 'A full-stack MERN e-commerce app with authentication, cart functionality, payment integration, and admin dashboard.',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  //   link: '#',
  // },
  {
    title: 'Social Media Dashboard',
    description: 'Real-time social media analytics dashboard with interactive charts, user management, and notification system.',
    tags: ['React', 'Socket.io', 'MongoDB', 'Chart.js'],
    link: '#',
  },
  // {
  //   title: 'Task Management App',
  //   description: 'A collaborative project management tool with drag-and-drop boards, real-time updates, and team collaboration features.',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
  //   link: '#',
  // },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and stunning animations to showcase projects and skills.',
    tags: ['React', 'CSS3', 'Vite', 'Responsive'],
    link: '#',
  },
  {
    title: 'Blog Platform',
    description: 'A full-featured blog platform with rich text editor, comment system, user authentication, and SEO optimization.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    link: '#',
  },
  // {
  //   title: 'Weather Application',
  //   description: 'A beautiful weather app with location-based forecasts, interactive maps, and real-time weather data integration.',
  //   tags: ['React', 'API', 'CSS3', 'Geolocation'],
  //   link: '#',
  // },
]

function Projects() {
  return (
    <section className="page projects-page" id="projects">
      <div className="page-container">
        <div className="page-label">
          <span className="page-label-dot"></span>
          My Work
        </div>

        <h1 className="page-heading">
          Featured <span className="highlight">Projects</span>
        </h1>

        <p className="page-subtitle">
          Here are some of the projects I've built that showcase my skills and passion.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-number">0{index + 1}</div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-card-tags">
                {project.tags.map((tag, i) => (
                  <span className="project-tag" key={i}>{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-card-link" target="_blank" rel="noopener noreferrer">
                View Project
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
