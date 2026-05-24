import { skillCategories } from '../data/skills'
import ScrollReveal from './ScrollReveal'
import './Skills.css'

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section__inner">
        <ScrollReveal>
          <span className="section__label">Skills</span>
          <h2 className="section__title">Technologies I work with</h2>
          <p className="section__subtitle skills__intro">
            I'm always adding to this list. These are the tools and languages
            I'm currently focused on.
          </p>
        </ScrollReveal>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <ScrollReveal
              key={category.name}
              delayClass={`scroll-reveal--delay-${Math.min(index + 1, 3)}`}
            >
              <div className="skills__category">
                <h3 className="skills__category-name">{category.name}</h3>
                <ul className="skills__list">
                  {category.skills.map((skill) => (
                    <li key={skill} className="skills__item">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
