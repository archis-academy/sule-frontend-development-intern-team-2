import { type JSX, memo } from "react";
import "./ListingHeader.scss";

export type FilterKey = "all" | "sell" | "rent";

export type ListingHeaderProps = {
  subheading?: string;
  heading?: string;
  description?: string;
  activeFilter?: FilterKey;
  onFilterChange?: (key: FilterKey) => void;
};

function ListingHeaderBase({
  subheading = "CHECKOUT OUR NEW",
  heading = "Latest Listed Properties",
  description = "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
  activeFilter = "sell",
  onFilterChange = () => {},
}: ListingHeaderProps): JSX.Element {
  const filters: Array<{ key: FilterKey; label: string }> = [
    { key: "all", label: "All" },
    { key: "sell", label: "Sell" },
    { key: "rent", label: "Rent" },
  ];

  return (
    <header className="listingHeader" aria-labelledby="listing-header-title">
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
              onClick={() => onFilterChange(f.key)}
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
