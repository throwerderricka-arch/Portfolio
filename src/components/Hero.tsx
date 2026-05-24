import './Hero.css'

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="section__inner hero__inner">
        <div className="hero__glow" aria-hidden="true" />

        <div className="hero__content">
          <p className="hero__greeting animate-fade-up">
            Hi, my name is
          </p>

          <h1 className="hero__name animate-fade-up animate-delay-1">
            Derrick Andrew Thrower.
          </h1>

          <h2 className="hero__tagline animate-fade-up animate-delay-2">
            Self-taught Developer | Passionate about clean code and solving problems.
          </h2>

          <p className="hero__bio animate-fade-up animate-delay-3">
            Self-taught aspiring junior full-stack developer focused on building
            clean, modern web applications. Currently sharpening my skills with
            React, TypeScript, Node.js, and AI tools like Cursor. Passionate about
            learning fast, shipping real projects, and looking for my first
            opportunity to contribute and grow as a developer.
          </p>

          <div className="hero__actions animate-fade-up animate-delay-4">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View my work
            </a>
            <a href="#contact" className="hero__btn hero__btn--secondary">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
