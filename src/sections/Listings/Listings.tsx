import { type JSX } from "react";
import "./Listings.scss";
// import ListingHeader from "@/components/ListingHeader/ListingHeader";
import ListingCard from "@/components/ListingCard/ListingCard";
import { listings } from "@/data/listingsData";

export default function Listings(): JSX.Element {
  return (
    <section
      id="listings"
      className="listings"
      aria-labelledby="listings-title"
    >
      <div className="listings__container">
        {/* <ListingHeader /> */}



        <div className="listings__grid" role="list">
          {listings.map((item) => (
            <div role="listitem" key={item.id} className="listings__col">
              <ListingCard
                item={item}
                href={`#listing-${item.id}`}
            
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
