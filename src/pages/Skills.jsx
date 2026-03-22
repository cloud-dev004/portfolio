import './Skills.css'

const skills = [
  { name: 'AWS', level: 60},
  { name: 'Cloud Architecture', level: 60 },
  { name: 'React.js', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'Express.js', level: 70 },
  { name: 'MongoDB', level: 75 },
  { name: 'JavaScript', level: 70 },
  { name: 'HTML & CSS', level: 95 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'REST APIs', level: 70 },
]

function Skills() {
  return (
    <section className="page skills-page" id="skills">
      <div className="page-container">
        <div className="page-label">
          <span className="page-label-dot"></span>
          My Skills
        </div>

        <h1 className="page-heading">
          Technologies I <span className="highlight">Work With</span>
        </h1>

        <p className="page-subtitle">
          Here are the tools and technologies I use to bring ideas to life.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
