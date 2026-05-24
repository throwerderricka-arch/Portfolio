import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import './Contact.css'

const EMAIL = 'throwerderricka@gmail.com'
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/throwerderricka-arch',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-1.005-.54-1.98-.185-1.98.115 0 .795.075 1.08.39 1.515 1.005 1.395 2.805 1.005 3.495.765.105-.6.405-1.005.735-1.23-2.565-.285-5.235-1.275-5.235-5.625 0-1.245.45-2.265 1.185-3.06-.12-.285-.525-1.425.12-2.97 0 0 .975-.3 3.195 1.17 1.125-.315 2.325-.465 3.525-.465s2.4.15 3.525.465c2.22-1.485 3.195-1.17 3.195-1.17.645 1.545.24 2.685.12 2.97.735.795 1.185 1.815 1.185 3.06 0 4.365-2.685 5.34-5.25 5.625.42.36.795 1.08.795 2.19 0 1.575-.015 2.85-.015 3.24 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/derrick-thrower-a103391b7',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: GMAIL_COMPOSE,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
]

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* fallback: select isn't needed if clipboard fails silently */
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="section__inner contact__inner">
        <ScrollReveal>
          <span className="section__label">Contact</span>
          <h2 className="section__title">Let's connect</h2>
          <p className="section__subtitle contact__intro">
            I'm a career switcher actively seeking junior developer roles,
            apprenticeships, and internships. If you're hiring — or just want
            to connect — I'd love to hear from you.
          </p>
        </ScrollReveal>

        <ScrollReveal delayClass="scroll-reveal--delay-1">
          <div className="contact__actions">
            <a
              href={GMAIL_COMPOSE}
              className="contact__email-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Say hello
            </a>

            <div className="contact__email-row">
              <a href={GMAIL_COMPOSE} className="contact__email-address" target="_blank" rel="noopener noreferrer">
                {EMAIL}
              </a>
              <button type="button" className="contact__copy-btn" onClick={copyEmail}>
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <ul className="contact__socials">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="contact__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
