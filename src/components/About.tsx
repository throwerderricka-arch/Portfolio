import ScrollReveal from './ScrollReveal'
import './About.css'

function About() {
  return (
    <section className="about section" id="about">
      <div className="section__inner about__inner">
        <ScrollReveal>
          <div className="about__header">
            <span className="section__label">About</span>
            <h2 className="section__title">A little about me</h2>
          </div>
        </ScrollReveal>

        <div className="about__grid">
          <ScrollReveal delayClass="scroll-reveal--delay-1">
            <div className="about__text">
              <p>
                I'm a career switcher on the path to becoming a full-stack
                developer. I teach myself by building real things — not just
                watching tutorials — and I'm obsessed with writing clean,
                readable code that actually works.
              </p>
              <p>
                My stack is growing every week: React and TypeScript on the
                front end, Node.js and Express on the back end, plus modern
                tools like Cursor to move faster while I learn. I pick things
                up quickly, debug patiently, and treat every project as a chance
                to level up.
              </p>
              <p>
                I'm based in Brentwood, California, and actively looking for
                my first junior role, apprenticeship, or internship where I
                can contribute, learn from a team, and grow into a strong
                developer.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayClass="scroll-reveal--delay-2">
            <aside className="about__card">
              <h3 className="about__card-title">Quick facts</h3>
              <dl className="about__facts">
                <div className="about__fact">
                  <dt>Location</dt>
                  <dd>Brentwood, California, USA</dd>
                </div>
                <div className="about__fact">
                  <dt>Focus</dt>
                  <dd>Full-Stack Web Development</dd>
                </div>
                <div className="about__fact">
                  <dt>Status</dt>
                  <dd>Career Switcher · Open to Junior Roles</dd>
                </div>
                <div className="about__fact">
                  <dt>Learning</dt>
                  <dd>React, TypeScript, Node.js, Express</dd>
                </div>
              </dl>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default About
