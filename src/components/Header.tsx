import { useState } from 'react'
import './Header.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  // Tracks whether the mobile hamburger menu is open
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo / name — links back to top of page */}
        <a href="#" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-bracket">&lt;</span>
          DT
          <span className="header__logo-bracket"> /&gt;</span>
        </a>

        {/* Desktop navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="header__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button — only visible on small screens */}
        <button
          type="button"
          className="header__menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`header__hamburger ${menuOpen ? 'is-open' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="header__mobile-nav" aria-label="Mobile navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="header__mobile-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
