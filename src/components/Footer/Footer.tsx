import type { FormEvent, JSX } from "react";
import "./Footer.scss";

export default function Footer(): JSX.Element {
  const onSubscribe = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("subscribe:", data.get("email"));
    e.currentTarget.reset();
  };

  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        {/* Brand + contact */}
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            <span className="footer__badge" aria-hidden="true">
              <img src="src/assets/icons/14-House.svg" alt="Rezilla" />
            </span>
            <span className="footer__brandText">Rezilla</span>
          </a>

          <address className="footer__addr">
            2728 Hickory Street
            <br />
            Salt Lake City, UT 84104
          </address>

          <a className="footer__contact" href="tel:+12062142298">
            <span className="footer__icon" aria-hidden="true">
              <img src="src/assets/icons/phone.svg" alt="phone" />
            </span>
            <span>+1 206–214–2298</span>
          </a>

          <a className="footer__contact" href="mailto:support@rezilla.com">
            <span className="footer__icon" aria-hidden="true">
              <img src="src/assets/icons/icon-mail.svg" alt="mail" />
            </span>
            <span>support@rezilla.com</span>
          </a>
        </div>

        {/* Quick Links */}
        <nav className="footer__col" aria-label="Quick Links">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Listings</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Become a Agent</a>
            </li>
          </ul>
        </nav>

        {/* Discovery */}
        <nav className="footer__col" aria-label="Discovery">
          <h3 className="footer__title">Discovery</h3>
          <ul className="footer__links">
            <li>
              <a href="#">Canada</a>
            </li>
            <li>
              <a href="#">United States</a>
            </li>
            <li>
              <a href="#">Germany</a>
            </li>
            <li>
              <a href="#">Africa</a>
            </li>
            <li>
              <a href="#">India</a>
            </li>
          </ul>
        </nav>

        {/* Newsletter + Socials */}
        <div className="footer__col">
          <h3 className="footer__title">
            Subscribe to our
            <br />
            Newsletter!
          </h3>

          <form className="newsletter" onSubmit={onSubscribe}>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Email Address"
              autoComplete="email"
            />
            <button
              type="submit"
              className="newsletter__btn"
              aria-label="Subscribe"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>

          <div className="footer__social">
            <span className="footer__title footer__title--small">
              Follow Us on
            </span>
            <div className="footer__socialRow">
              <a href="#" aria-label="LinkedIn" className="footer__socialLink">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM0 8h5v16H0V8Zm7.5 0h4.8v2.2h.06c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5V16.5c0-1.79-.03-4.08-2.49-4.08-2.49 0-2.88 1.94-2.88 3.95V24h-5V8Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="footer__socialLink">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 22v-8h3l1-4h-4V7.5c0-1.1.9-2 2-2h2V2h-3a5 5 0 0 0-5 5V10H6v4h3v8h4Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="footer__socialLink">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__barRow">
          <small>© Rezilla — All rights reserved</small>
          <nav aria-label="Legal">
            <ul className="footer__legal">
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Disclaimer</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
