import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          Built by Derrick Thrower &middot; {year}
        </p>
        <a href="#" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer
