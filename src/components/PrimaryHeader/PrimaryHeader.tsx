import { useEffect, useRef, useState, type JSX } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./PrimaryHeader.scss";

import HouseIcon from "../assets/14-House.svg";
import UserIcon from "../assets/human.svg";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/listings", label: "Listings" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blogs" },
];

export default function PrimaryHeader(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const location = useLocation();

  // Close menu when clicking outside of it
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Close menu when pressing the ESC key
  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  // Close menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Disable body scroll and focus the first link when the menu is open
  useEffect(() => {
    const { body } = document;
    if (open) {
      const prev = body.style.overflow;
      body.style.overflow = "hidden";
      setTimeout(() => firstLinkRef.current?.focus(), 0);
      return () => {
        body.style.overflow = prev;
      };
    }
  }, [open]);

  // Add a shadow to the header when scrolling
  useEffect(() => {
    function handleScroll() {
      setSticky(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${sticky ? "site-header--sticky" : ""}`}>
      <div className="container site-header__inner">
        {/* LEFT: Hamburger + Navigation */}
        <button
          className="nav-toggle"
          aria-controls="primary-nav"
          aria-expanded={open ? "true" : "false"}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>

        <nav className="primary-nav" aria-label="Primary">
          {/* On mobile, the nav acts as a modal dialog when opened */}
          <ul
            id="primary-nav"
            ref={menuRef}
            className={`nav-list ${open ? "is-open" : ""}`}
            role={open ? "dialog" : undefined}
            aria-modal={open ? "true" : undefined}
          >
            {NAV_LINKS.map((item, idx) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "is-active" : ""}`
                  }
                  ref={idx === 0 ? firstLinkRef : undefined}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Mobile: user actions inside the hamburger menu */}
            <li className="nav-actions">
              <NavLink to="/login" className="header-actions__link">
                <img src={UserIcon as string} alt="" aria-hidden="true" />
                <span>Login/Register</span>
              </NavLink>
              <NavLink
                to="/add-listing"
                className="btn btn--primary header-actions__cta"
              >
                <img src={HouseIcon as string} alt="" aria-hidden="true" />
                <span>Add Listing</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* CENTER: Brand logo */}
        <NavLink to="/" className="brand" aria-label="Rezilla Home">
          <span className="brand__badge" aria-hidden="true">
            <img src={HouseIcon as string} alt="" />
          </span>
          <span className="brand__text">Rezilla</span>
        </NavLink>

        {/* RIGHT (Desktop only): User actions */}
        <div className="header-actions header-actions--desktop">
          <NavLink to="/login" className="header-actions__link">
            <img src={UserIcon as string} alt="" aria-hidden="true" />
            <span>Login/Register</span>
          </NavLink>
          <NavLink
            to="/add-listing"
            className="btn btn--primary header-actions__cta"
          >
            <img src={HouseIcon as string} alt="" aria-hidden="true" />
            <span>Add Listing</span>
          </NavLink>
        </div>
      </div>

      {/* Overlay background when mobile menu is open */}
      {open && (
        <button
          className="nav-overlay"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
