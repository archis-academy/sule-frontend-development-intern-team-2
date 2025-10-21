import type { JSX, ReactNode } from "react";
import "./ListingCard.scss";

import BedIcon from "@/assets/icons/bed.svg?react";
import BathIcon from "@/assets/icons/bath.svg?react";

export type ListingCardProps = {
  item: {
    id: string | number;
    title: string;
    price: number;
    address: string;
    beds: number | string;
    baths: number | string;
    cover: string;
    alt?: string;
  };
  href?: string;
  bedsIcon?: ReactNode;
  bathsIcon?: ReactNode;
  className?: string;
};

export default function ListingCard({
  item,
  href,
  bedsIcon,
  bathsIcon,
  className,
}: ListingCardProps): JSX.Element {
  const { id, title, price, address, beds, baths, cover, alt } = item;

  const BedsIconNode = bedsIcon ?? <BedIcon aria-hidden="true" />;
  const BathsIconNode = bathsIcon ?? <BathIcon aria-hidden="true" />;

  return (
    <a
      className={["listingCard", className].filter(Boolean).join(" ")}
      href={href ?? `#listing-${id}`}
      aria-label={`${title} details`}
    >
      <div className="listingCardMedia">
        <img src={cover} alt={alt ?? title} loading="lazy" />
      </div>

      <div className="listingCardBody"> 
        <p className="listingCardPrice">
          <span className="sr-only">Price:</span>${" "}
          {Number(price).toLocaleString()}
        </p>

        <h3 className="listingCardTitle" title={title}>
          {title}
        </h3>

        <p className="listingCardDesc" title={address}>
          {address}
        </p>

        <div className="listingCardMeta" aria-label="Property details">
          <div className="metaItem">
            <span className="metaIcon" aria-hidden>
              {BedsIconNode}
            </span>
            <span className="metaText">{beds} Beds</span>
          </div>

          <div className="metaItem">
            <span className="metaIcon" aria-hidden>
              {BathsIconNode}
            </span>
            <span className="metaText">{baths} Bath</span>
          </div>
        </div>
      </div>
    </a>
  );
}
