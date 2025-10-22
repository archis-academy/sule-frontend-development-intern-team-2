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
    tags?: string[]; 
  };
  href?: string;
  bedsIcon?: ReactNode;
  bathsIcon?: ReactNode;
  className?: string;
};

const plural = (value: number, one: string, many: string): string =>
  `${value} ${value === 1 ? one : many}`;

export default function ListingCard({
  item,
  href,
  bedsIcon,
  bathsIcon,
  className,
}: ListingCardProps): JSX.Element {
  const { id, title, price, address, beds, baths, cover, alt, tags } = item;

  const BedsIconNode = bedsIcon ?? <BedIcon aria-hidden={true} />;
  const BathsIconNode = bathsIcon ?? <BathIcon aria-hidden={true} />;

  const bedsNum = Number(beds);
  const bathsNum = Number(baths);

  return (
    <a
      className={["listingCard", className].filter(Boolean).join(" ")}
      href={href ?? `/listings/${id}`} 
      aria-label={`${title} details`}
    >
      <div className="listingCardMedia">
        <img src={cover} alt={alt ?? title} loading="lazy" />

        {/* (3) Optional tags */}
        {Array.isArray(tags) && tags.length > 0 && (
          <ul className="listingCardTags" aria-label="Property tags">
            {tags.map((t, i) => (
              <li className="listingCardTag" key={i}>
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="listingCardBody">
        <p className="listingCardPrice">
          <span className="sr-only">Price:</span>$
          {Number(price).toLocaleString()} 
        </p>

        <h3 className="listingCardTitle clamp-2" title={title}>
          {title}
        </h3>

        <p className="listingCardDesc clamp-2" title={address}>
          {address}
        </p>

        <div className="listingCardMeta" aria-label="Property details">
          <div className="metaItem">
            <span className="metaIcon" aria-hidden={true}>
              {BedsIconNode}
            </span>
            <span className="metaText">
              {Number.isFinite(bedsNum)
                ? plural(bedsNum, "Bed", "Beds")
                : `${beds} Beds`}
            </span>
          </div>

          <div className="metaItem">
            <span className="metaIcon" aria-hidden={true}>
              {BathsIconNode}
            </span>
            <span className="metaText">
              {Number.isFinite(bathsNum)
                ? plural(bathsNum, "Bath", "Baths")
                : `${baths} Bath`}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
