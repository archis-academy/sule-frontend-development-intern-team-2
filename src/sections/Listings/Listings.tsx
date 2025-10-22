
import { type JSX } from "react";
import "./Listings.scss";
import ListingHeader from "@/components/ListingHeader/ListingHeader";

export default function Listings(): JSX.Element {

  const titleId = "listing-header-title";

  return (
    <section className="listings" aria-labelledby={titleId}>
      <ListingHeader labelledById={titleId} />
    </section>
  );
}
