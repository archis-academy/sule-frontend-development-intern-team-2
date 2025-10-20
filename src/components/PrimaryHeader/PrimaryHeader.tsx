import { useCallback, useEffect, useRef, useState, type JSX } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import cn from "classnames";
import "./PrimaryHeader.scss";

import HouseIcon from "../assets/14-House.svg?react";
import UserIcon from "../assets/human.svg?react";

const NAV_LINKS = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#listings", label: "Listings" },
  { to: "#services", label: "Services" },
  { to: "#blog", label: "Blog" },
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
   Yardımcı: sayfa içi kaydırma
   =============================== */
function scrollToHash(hash: string) {
  if (!hash.startsWith("#")) return;
  const id = hash.slice(1);
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function PrimaryHeader(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Sticky header
  const handleScroll = useCallback(() => {
    setSticky(window.scrollY > 8);
  }, []);
  useEffect(() => {
    handleScroll();
  }, [handleScroll]);
  useEventListener("scroll", handleScroll, { passive: true }, window);

  // Close menu on route/hash change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll when menu open
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
      const id = setTimeout(() => firstLinkRef.current?.focus(), 0);
      return () => {
        clearTimeout(id);
        body.classList.remove("body-no-scroll");
        body.style.removeProperty("--scrollbar-comp");
      };
    }
  }, [open]);

  // One-page link click handler
  const onSectionLinkClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    hash: string
  ) => {
    e.preventDefault();

    if (location.pathname !== "/") {
  
      await navigate("/" + hash, { replace: false });
      requestAnimationFrame(() => {
        window.location.hash = hash; 
        scrollToHash(hash);
      });
    } else {
     
      window.location.hash = hash; 
      scrollToHash(hash);
    }

    setOpen(false);
  };

  return (
    <header className={cn("site-header", { "site-header--sticky": sticky })}>
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
            className={cn("nav-list", { "is-open": open })}
            role={open ? "dialog" : undefined}
            aria-modal={open ? "true" : undefined}
          >
            {NAV_LINKS.map((item, idx) => {
              const isActive =
                location.pathname === "/" &&
                (location.hash || "#home") === item.to;

              return (
                <li key={item.to}>
                  <a
                    href={item.to}
                    className={cn("nav-link", { "is-active": isActive })}
                    aria-current={isActive ? "page" : undefined}
                    ref={idx === 0 ? firstLinkRef : undefined}
                    onClick={(e) => onSectionLinkClick(e, item.to)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}

            {/* Mobile: user actions hamburger içinde */}
            <li className="nav-actions">
              <NavLink to="/login" className="header-actions__link">
                <UserIcon aria-hidden="true" />
                <span>Login/Register</span>
              </NavLink>
              <NavLink
                to="/add-listing"
                className="btn btn--primary header-actions__cta"
              >
                <HouseIcon aria-hidden="true" />
                <span>Add Listing</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* CENTER: Brand logo */}
        <NavLink
          to="/"
          className="brand"
          aria-label="Go to homepage"
          title="Go to homepage"
        >
          <span className="brand__badge" aria-hidden="true">
            <HouseIcon aria-hidden="true" />
          </span>
          <span className="brand__text">Rezilla</span>
        </NavLink>

        {/* RIGHT (Desktop only): User actions */}
        <div className="header-actions header-actions--desktop">
          <NavLink to="/login" className="header-actions__link">
            <UserIcon aria-hidden="true" />
            <span>Login/Register</span>
          </NavLink>
          <NavLink
            to="/add-listing"
            className="btn btn--primary header-actions__cta"
          >
            <HouseIcon aria-hidden="true" />
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
          type="button"
        />
      )}
    </header>
  );
}
