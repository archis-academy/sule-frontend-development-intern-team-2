import { type JSX } from "react";
import "./Listings.scss";
import ListingHeader from "@/components/ListingHeader/ListingHeader";

export default function Listings(): JSX.Element {
  return (
    <section
      id="listings"
      className="listings"
      aria-labelledby="listings-title"
    >
      <ListingHeader />
    </section>
  );
}
