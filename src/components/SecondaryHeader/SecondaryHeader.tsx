import { type JSX, type ReactNode } from "react";
import "./SecondaryHeader.scss";

// Prefer SVGs and clean filenames (no spaces)
import LocationIcon from "@src/assets/icons/icon-pin-alt.svg";
import PhoneIcon from "@src/assets/icons/phone.svg";
import MailIcon from "@src/assets/icons/icon-mail.svg";

type SecondaryHeaderProps = {
  /** Structured address instead of HTML string (to avoid XSS) */
  address?: ReactNode | string;
  phone?: string;
  email?: string;
  className?: string;
};

// Simple helper for joining classes (replace with classnames if available)
const cx = (...parts: Array<string | false | undefined>) =>
  parts.filter(Boolean).join(" ");

/** Clean tel link generator */
function telHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

/** Converts "<strong>...</strong>" in a string into real <strong> elements */
function renderAddressNode(address: ReactNode): ReactNode {
  if (typeof address !== "string") return address;

  const parts: ReactNode[] = [];
  const regex = /<strong>(.*?)<\/strong>/gi;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(address)) !== null) {
    if (match.index > lastIndex) {
      parts.push(address.slice(lastIndex, match.index));
    }
    parts.push(<strong key={`addr-strong-${key++}`}>{match[1]}</strong>);
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < address.length) {
    parts.push(address.slice(lastIndex));
  }

  return parts;
}

export default function SecondaryHeader({
  address = "<strong>Rezilla,</strong> 18 Grattan St, Brooklyn",
  phone = "+1 206–214–2298",
  email = "support@rezilla.com",
  className = "",
}: SecondaryHeaderProps): JSX.Element {
  const rootClass = cx("secondary-header", className);

  return (
    <div className={rootClass} role="contentinfo" aria-label="Contact bar">
      <div className="secondary-header__inner container">
        {/* === Left: Office address === */}
        <address
          className="secondary-header__item secondary-header__item--address"
          title="Office address"
        >
          <img
            src={LocationIcon}
            alt="Location"
            className="secondary-header__icon"
          />
          <span className="secondary-header__text">
            {renderAddressNode(address)}
          </span>
        </address>

        {/* === Right: Phone & Email === */}
        <div className="secondary-header__right">
          <a
            className="secondary-header__item"
            href={telHref(phone)}
            aria-label={`Call ${phone}`}
          >
            <img
              src={PhoneIcon}
              alt="Phone"
              className="secondary-header__icon"
            />
            <span className="secondary-header__text">{phone}</span>
          </a>

          <a
            className="secondary-header__item"
            href={`mailto:${email}`}
            aria-label={`Email ${email}`}
          >
            <img
              src={MailIcon}
              alt="Mail"
              className="secondary-header__icon"
            />
            <span className="secondary-header__text">{email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
