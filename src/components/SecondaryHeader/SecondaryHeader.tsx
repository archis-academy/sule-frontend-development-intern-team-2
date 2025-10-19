import { type JSX } from "react";
import "./SecondaryHeader.scss";

/* 🎨 Icon importları */
import LocationIcon from "@src/assets/icon _pin alt_.png";
import PhoneIcon from "@src/assets/phone.png";
import MailIcon from "@src/assets/icon _mail_.png";

type SecondaryHeaderProps = {
  address?: string;
  phone?: string;
  email?: string;
  className?: string;
};

function telHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

export default function SecondaryHeader({
  address = "<strong>Rezilla,</strong> 18 Grattan St, Brooklyn",
  phone = "+1 206–214–2298",
  email = "support@rezilla.com",
  className = "",
}: SecondaryHeaderProps): JSX.Element {
  const rootClass = ["secondary-header", className].filter(Boolean).join(" ");

  return (
    <div className={rootClass} role="contentinfo" aria-label="Contact bar">
      <div className="secondary-header__inner container">
        {/* Sol: Adres */}
        <address
          className="secondary-header__item secondary-header__item--address"
          title="Office address"
        >
          <img
            src={LocationIcon}
            alt="Location"
            className="secondary-header__icon"
          />
          <span
            className="secondary-header__text"
            dangerouslySetInnerHTML={{ __html: address }}
          />
        </address>

        {/* Sağ: Telefon + E-posta */}
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
