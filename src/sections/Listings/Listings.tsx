import { type JSX } from "react";
import "./Listings.scss";
import ListingHeader from "@/components/ListingHeader/ListingHeader";

export default function Listings(): JSX.Element {
  return (
    <section className="listings" aria-labelledby="listing-header-title">
      <ListingHeader />
    </section>
  );
}
