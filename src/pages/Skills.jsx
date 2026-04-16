import './Skills.css';

// Stable unique IDs for mappings instead of using array indexes
const skillsData = [
  { id: 'skill-aws', name: 'AWS', level: 60 },
  { id: 'skill-cloud', name: 'Cloud Architecture', level: 60 },
  { id: 'skill-react', name: 'React.js', level: 75 },
  { id: 'skill-node', name: 'Node.js', level: 70 },
  { id: 'skill-express', name: 'Express.js', level: 70 },
  { id: 'skill-mongodb', name: 'MongoDB', level: 75 },
  { id: 'skill-js', name: 'JavaScript', level: 70 },
  { id: 'skill-html-css', name: 'HTML & CSS', level: 95 },
  { id: 'skill-git', name: 'Git & GitHub', level: 80 },
  { id: 'skill-api', name: 'REST APIs', level: 70 },
];

function Skills() {
  return (
    <section className="page skills-page" id="skills" aria-labelledby="skills-heading">
      <div className="page-container">
        {/* Context Label */}
        <div className="page-label">
          <span className="page-label-dot" aria-hidden="true"></span>
          My Skills
        </div>

        {/* Section Heading */}
        <h1 className="page-heading" id="skills-heading">
          Technologies I <span className="highlight">Work With</span>
        </h1>

        <p className="page-subtitle">
          Here are the tools and technologies I use to bring ideas to life.
        </p>

        {/* Skills Grid */}
        <div className="skills-grid" role="list">
          {skillsData.length > 0 ? (
            skillsData.map((skill) => (
              <div className="skill-item" key={skill.id} role="listitem">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                
                {/* Progress Bar representation */}
                <div 
                  className="skill-bar" 
                  role="progressbar" 
                  aria-valuenow={skill.level} 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                  aria-label={`${skill.name} proficiency level`}
                >
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))
          ) : (
            // Handled edge case where skills data might be empty
            <p>No skills data available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
