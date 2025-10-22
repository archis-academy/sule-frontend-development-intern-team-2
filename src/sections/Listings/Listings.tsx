import { type JSX } from "react";
import "./Listings.scss";
import ListingCard from "@/components/ListingCard/ListingCard";
import { listingsData, type Listing } from "@/data/listingsData";

export default function Listings(): JSX.Element {
  return (
    <section
      id="listings"
      className="listingsSection"
      aria-labelledby="listingsTitle"
    >
      <div className="listingsContainer">
        <header className="listingsHeader">
          <h2 id="listingsTitle" className="listingsTitle">
            Listings
          </h2>
        </header>

        <div className="listingsGrid" role="list">
          {listingsData.map((item: Listing) => (
            <div
              role="listitem"
              key={item.id}
              className="listingsCol"
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
