import { type JSX, type ReactNode } from "react";
import "./SecondaryHeader.scss";

import LocationIcon from "@icons/icon-pin-alt.svg?react";
import PhoneIcon from "@icons/phone.svg?react";
import MailIcon from "@icons/mail.svg?react";


type SecondaryHeaderProps = {
 
  address?: ReactNode;
  phone?: string;
  email?: string;
  className?: string;
};


const cx = (...parts: Array<string | false | undefined>) =>
  parts.filter(Boolean).join(" ");

function telHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

export default function SecondaryHeader({
  address = (
    <>
      <strong>Rezilla,</strong> 18 Grattan St, Brooklyn
    </>
  ),
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
          <LocationIcon
            className="secondary-header__icon"
            aria-hidden={true}
          />
          <span className="secondary-header__text">{address}</span>
        </address>

        {/* === Right: Phone & Email === */}
        <div className="secondary-header__right">
          <a
            className="secondary-header__item"
            href={telHref(phone)}
            aria-label={`Call ${phone}`}
          >
            <PhoneIcon className="secondary-header__icon" aria-hidden={true} />
            <span className="secondary-header__text">{phone}</span>
          </a>

          <a
            className="secondary-header__item"
            href={`mailto:${email}`}
            aria-label={`Email ${email}`}
          >
            <MailIcon className="secondary-header__icon" aria-hidden={true} />
            <span className="secondary-header__text">{email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
