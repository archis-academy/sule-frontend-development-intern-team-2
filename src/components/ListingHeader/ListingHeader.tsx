import { type JSX, memo, useState, useId } from "react";
import styles from "./ListingHeader.module.scss";
import { type FilterKey, type ListingHeaderProps } from "@/types/listing";

const FILTER_OPTIONS: Array<{ key: FilterKey; label: string }> = [
  { key: "all", label: "All" },
  { key: "sell", label: "Sell" },
  { key: "rent", label: "Rent" },
];

function ListingHeaderBase({
  subheading = "CHECKOUT OUR NEW",
  heading = "Latest Listed Properties",
  description = "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
  onFilterChange,
  labelledById,
}: ListingHeaderProps & { labelledById?: string }): JSX.Element {
  const uniqueId = useId();
  const titleId = labelledById ?? `listing-header-title-${uniqueId}`;
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const handleFilterClick = (key: FilterKey): void => {
    setActiveFilter(key);
    if (onFilterChange) onFilterChange(key);
  };

  return (
    <header className={styles.listingHeader} aria-labelledby={titleId}>
      {/* Left side: text content */}
      <div className={styles.listingHeaderContent}>
        <p className={styles.listingHeaderSub}>{subheading}</p>
        <h2 className={styles.listingHeaderTitle} id={titleId}>
          {heading}
        </h2>
        <p className={styles.listingHeaderDesc}>{description}</p>
      </div>

      {/* Right side: filter buttons */}
      <div
        className={styles.listingHeaderFilters}
        role="group"
        aria-label="Filter listings"
      >
        {FILTER_OPTIONS.map(({ key, label }) => {
          const isActive = activeFilter === key;
          return (
            <button
              key={key}
              type="button"
              className={`${styles.filterBtn} ${
                isActive ? styles.isActive : ""
              }`}
              aria-pressed={isActive}
              onClick={() => handleFilterClick(key)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </header>
  );
}

export default memo(ListingHeaderBase);
