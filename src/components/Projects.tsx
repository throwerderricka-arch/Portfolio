import { projects } from '../data/projects'
import ScrollReveal from './ScrollReveal'
import './Projects.css'

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section__inner">
        <ScrollReveal>
          <span className="section__label">Projects</span>
          <h2 className="section__title">Things I've built</h2>
          <p className="section__subtitle projects__intro">
            I'm early in my journey, but I'm already shipping real work.
            This portfolio is project #1 — more full-stack apps are on the way.
          </p>
        </ScrollReveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delayClass={`scroll-reveal--delay-${Math.min(index + 1, 4)}`}
            >
              <article className={`project-card${project.comingSoon ? ' project-card--coming-soon' : ''}`}>
                {/* Preview area — replace gradient with <img> when you have screenshots */}
                <div
                  className="project-card__image"
                  style={{ background: project.gradient }}
                  aria-hidden="true"
                >
                  <span className="project-card__image-label">{project.title}</span>
                </div>

                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>

                  <ul className="project-card__tags" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <li key={tag} className="project-card__tag">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="project-card__links">
                    {project.comingSoon ? (
                      <span className="project-card__status">Coming soon</span>
                    ) : (
                      <>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="project-card__link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live demo ↗
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            className="project-card__link project-card__link--muted"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
