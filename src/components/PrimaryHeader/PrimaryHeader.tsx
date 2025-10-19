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

/* ===============================
   Custom Hook: useEventListener
   =============================== */
function useEventListener(
  type: string,
  listener: (e: Event) => void,
  options?: AddEventListenerOptions,
  target: Document | Window = document
) {
  const saved = useRef(listener);

  // Update saved listener if it changes
  useEffect(() => {
    saved.current = listener;
  }, [listener]);

  useEffect(() => {
    const handler = (e: Event) => saved.current(e);
    target.addEventListener(type, handler, options);
    return () => target.removeEventListener(type, handler, options);
  }, [type, target, options]);
}

/* ===============================
   Component: PrimaryHeader
   =============================== */
export default function PrimaryHeader(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const location = useLocation();

  // Click outside closes menu
  useEventListener("mousedown", (e) => {
    if (!open) return;
    const target = e.target as Node;
    if (menuRef.current && !menuRef.current.contains(target)) {
      setOpen(false);
    }
  });

  // ESC key closes menu
  useEventListener("keydown", (e) => {
    if ((e as KeyboardEvent).key === "Escape") setOpen(false);
  });

  // Add shadow on scroll
  useEffect(() => {
    setSticky(window.scrollY > 8);
  }, []);

  useEventListener(
    "scroll",
    () => setSticky(window.scrollY > 8),
    { passive: true },
    window
  );

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Disable body scroll when menu is open
  useEffect(() => {
    const { body } = document;
    if (open) {
      const scrollbarComp =
        window.innerWidth - document.documentElement.clientWidth;
      body.style.setProperty(
        "--scrollbar-comp",
        `${Math.max(0, scrollbarComp)}px`
      );
      body.classList.add("body-no-scroll");

      setTimeout(() => firstLinkRef.current?.focus(), 0);

      return () => {
        body.classList.remove("body-no-scroll");
        body.style.removeProperty("--scrollbar-comp");
      };
    }
  }, [open]);

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

        {/* Mobile: actions inside hamburger */}
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

    {/* RIGHT (Desktop): User actions */}
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

  {/* Overlay when menu is open */}
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
