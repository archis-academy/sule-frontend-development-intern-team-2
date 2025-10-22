import { type JSX } from "react";
import "./Listings.scss";
import ListingCard from "@/components/ListingCard/ListingCard";
import { listingsData, type Listing } from "@/data/listingsData";
import ListingHeader from "@/components/ListingHeader/ListingHeader";

export default function Listings(): JSX.Element {
  const titleId = "listing-header-title";

  return (
    <section
      id="listings"
      className="listingsSection"
      aria-labelledby={titleId}
    >
      <div className="listingsContainer">
        <header className="listingsHeader">
          {/* h2 sadece referans noktası olarak tanımlı */}
          <h2 id={titleId} className="sr-only">
            <ListingHeader labelledById={titleId} />
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
