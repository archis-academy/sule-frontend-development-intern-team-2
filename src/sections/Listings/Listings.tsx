// Listings.tsx
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
    
        <header className="listings__header">
          <h2 id="listings-title" className="listings__title">
            Listings
          </h2>
        </header>

        <div className="listings__grid" role="list">
          {listingsData.map((item: Listing) => (
            <div
              role="listitem"
              key={item.id}
              className="listings__col"
              id={`listing-${item.id}`}
            >
              <ListingCard item={item} href={`/listings/${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
