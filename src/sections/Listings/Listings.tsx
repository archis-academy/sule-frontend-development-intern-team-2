import { type JSX } from "react";
import "./Listings.scss";
import ListingCard from "@/components/ListingCard/ListingCard";
import { listingsData, type Listing } from "@/data/listingsData";

export default function Listings(): JSX.Element {
  return (
    <section
      id="listings"
      className="listings"
      aria-labelledby="listings-title"
    >
      <div className="listings__container">
        <div className="listings__grid" role="list">
          {listingsData.map((item: Listing) => (
            <div
              role="listitem"
              key={item.id}
              className="listings__col"
              id={`listing-${item.id}`}
            >
              <ListingCard item={item} href={`#listing-${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
