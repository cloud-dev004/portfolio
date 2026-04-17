import './Projects.css';

// Using stable IDs for list rendering instead of array indices is a React best practice,
// as it prevents rendering bugs and improves performance during list mutations.
const projectsData = [
  {
    id: 'proj-1',
    title: 'LOCALLENS',
    description: 'A platform for local workers to connect with customers and showcase their skills.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MYSQL'],
    link: '#',
  },
  {
    id: 'proj-2',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and stunning animations to showcase projects and skills.',
    tags: ['React', 'CSS3', 'Vite', 'Node.js'],
    link: 'https://cloud-dev-portfolio.netlify.app/',
  },
  {
    id: 'proj-3',
    title: 'UYIR',
    description: 'A platform to rescue the stray animals and to provide them shelter and medical care.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://uyir-animal-rescue-platform.netlify.app/',
  },
];

function Projects() {
  return (
    <section className="page projects-page" id="projects" aria-labelledby="projects-heading">
      <div className="page-container">
        {/* Section Label */}
        <div className="page-label">
          <span className="page-label-dot" aria-hidden="true"></span>
          My Work
        </div>

        {/* Header */}
        <h1 className="page-heading" id="projects-heading">
          Featured <span className="highlight">Projects</span>
        </h1>

        <p className="page-subtitle">
          Here are some of the projects I've built that showcase my skills and passion.
        </p>

        {/* Projects Grid */}
        <div className="projects-grid" role="list">
          {projectsData.length > 0 ? (
            projectsData.map((project, index) => (
              <div className="project-card" key={project.id} role="listitem">
                {/* Visual Numbering for styling purposes */}
                <div className="project-card-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="project-card-title">{project.title}</h3>

                <p className="project-card-desc">{project.description}</p>

                {/* Tech Stack Tags */}
                <div className="project-card-tags" aria-label={`Technologies used in ${project.title}`}>
                  {project.tags.map((tag) => (
                    // Tags are unique per project, so the tag string itself is a stable key
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="project-card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} project in a new tab`}
                >
                  View Project
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            ))
          ) : (
            // Realistic edge case check for empty project list
            <p className="no-projects-msg">More projects coming soon!</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
