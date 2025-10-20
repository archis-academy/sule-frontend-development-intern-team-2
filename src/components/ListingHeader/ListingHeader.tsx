import { type JSX, memo, useState } from "react";
import "./ListingHeader.scss";

export type FilterKey = "all" | "sell" | "rent";

export type ListingHeaderProps = {
  subheading?: string;
  heading?: string;
  description?: string;
  onFilterChange?: (key: FilterKey) => void;
};


const filters: Array<{ key: FilterKey; label: string }> = [
  { key: "all", label: "All" },
  { key: "sell", label: "Sell" },
  { key: "rent", label: "Rent" },
];

function ListingHeaderBase({
  subheading = "CHECKOUT OUR NEW",
  heading = "Latest Listed Properties",
  description = "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
  onFilterChange = () => {},
}: ListingHeaderProps): JSX.Element {
  
  const [activeFilter, setActiveFilter] = useState<FilterKey>("sell");

  const handleFilterClick = (key: FilterKey) => {
    setActiveFilter(key);
    onFilterChange(key);
  };

  return (
   
    <header
      id="home"
      className="listingHeader"
      aria-labelledby="listing-header-title"
    >
      {/* Left: text block */}
      <div className="listingHeader__content">
        <p className="listingHeader__sub">{subheading}</p>
        <h2 className="listingHeader__title" id="listing-header-title">
          {heading}
        </h2>
        <p className="listingHeader__desc">{description}</p>
      </div>

      {/* Right: filters */}
      <div
        className="listingHeader__filters"
        role="group"
        aria-label="Filter listings"
      >
        {filters.map((f) => {
          const isActive = activeFilter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              className={`filterBtn${isActive ? " is-active" : ""}`}
              aria-pressed={isActive}
              onClick={() => handleFilterClick(f.key)}
            >
              {f.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}

const ListingHeader = memo(ListingHeaderBase);
export default ListingHeader;
