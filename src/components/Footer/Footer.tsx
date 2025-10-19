import type { FormEvent, JSX } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

import houseIcon from "@/assets/icons/14-House.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import mailIcon from "@/assets/icons/icon-mail.svg";
import instagram from "@/assets/icons/icon_instagram.svg";
import linkedin from "@/assets/icons/icon_linkedin.svg";
import facebook from "@/assets/icons/facebook.svg";
import arrow from "@/assets/icons/Arrow.svg";

const QUICK_LINKS: Array<{ to: string; label: string }> = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/listings", label: "Listings" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blogs" },
  { to: "/become-agent", label: "Become a Agent" },
];

const DISCOVERY_LINKS: Array<{ to: string; label: string }> = [
  { to: "/listings?region=Canada", label: "Canada" },
  { to: "/listings?region=United%20States", label: "United States" },
  { to: "/listings?region=Germany", label: "Germany" },
  { to: "/listings?region=Africa", label: "Africa" },
  { to: "/listings?region=India", label: "India" },
];

export default function Footer(): JSX.Element {
  const onSubscribe = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("subscribe:", data.get("email"));
    e.currentTarget.reset();
  };

  return (
    <footer className={styles["site-footer"]}>
      <div className={`${styles.container ?? ""} ${styles["footer__grid"]}`}>
        <div className={styles["footer__brand"]}>
          <a href="/" className={styles["footer__logo"]}>
            <span className={styles["footer__badge"]} aria-hidden="true">
              <img src={houseIcon} alt="Rezilla" />
            </span>
            <span className={styles["footer__brandText"]}>Rezilla</span>
          </a>

          <address className={styles["footer__addr"]}>
            2728 Hickory Street
            <br />
            Salt Lake City, UT 84104
          </address>

          <a className={styles["footer__contact"]} href="tel:+12062142298">
            <span className={styles["footer__icon"]} aria-hidden="true">
              <img src={phoneIcon} alt="phone" />
            </span>
            <span>+1 206–214–2298</span>
          </a>

          <a
            className={styles["footer__contact"]}
            href="mailto:support@rezilla.com"
          >
            <span className={styles["footer__icon"]} aria-hidden="true">
              <img src={mailIcon} alt="mail" />
            </span>
            <span>support@rezilla.com</span>
          </a>
        </div>

        <nav className={styles["footer__col"]} aria-label="Quick Links">
          <h3 className={styles["footer__title"]}>Quick Links</h3>
          <ul className={styles["footer__links"]}>
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles["footer__col"]} aria-label="Discovery">
          <h3 className={styles["footer__title"]}>Discovery</h3>
          <ul className={styles["footer__links"]}>
            {DISCOVERY_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles["footer__col"]}>
          <h3 className={styles["footer__title"]}>
            Subscribe to our
            <br />
            Newsletter!
          </h3>

          <form className={styles.newsletter} onSubmit={onSubscribe}>
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
              className={styles["newsletter__btn"]}
              aria-label="Subscribe"
            >
              <img src={arrow} alt="arrow" />
            </button>
          </form>

          <div className={styles["footer__social"]}>
            <span
              className={`${styles["footer__title"]} ${styles["footer__title--small"]}`}
            >
              Follow Us on
            </span>
            <div className={styles["footer__socialRow"]}>
              <a
                href="#"
                aria-label="LinkedIn"
                className={styles["footer__socialLink"]}
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className={styles["footer__socialLink"]}
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className={styles["footer__socialLink"]}
              >
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["footer__bar"]}>
        <div
          className={`${styles.container ?? ""} ${styles["footer__barRow"]}`}
        >
          <small>© Rezilla — All rights reserved</small>
          <nav aria-label="Legal">
            <ul className={styles["footer__legal"]}>
              <li>
                <NavLink to="/legal/terms">Terms and Conditions</NavLink>
              </li>
              <li>
                <NavLink to="/legal/privacy">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/legal/disclaimer">Disclaimer</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
