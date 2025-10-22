import { type JSX, memo, useState } from "react";
import clsx from "clsx";
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
}: ListingHeaderProps): JSX.Element {

  const titleId = labelledById ?? "listing-header-title";
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const onChange = (key: FilterKey) => {
    setActiveFilter(key);
    onFilterChange?.(key);
  };

  return (
    <header className={styles.listingHeader} aria-labelledby={titleId}>
      <div className={styles.listingHeaderContent}>
        <p className={styles.listingHeaderSub}>{subheading}</p>
        <h2 className={styles.listingHeaderTitle} id={titleId}>
          {heading}
        </h2>
        <p className={styles.listingHeaderDesc}>{description}</p>
      </div>

     
      <fieldset
        className={styles.listingHeaderFilters}
        role="radiogroup"
        aria-label="Listing filters"
      >
        <legend className={styles.srOnly}>Listing filters</legend>

        {FILTER_OPTIONS.map(({ key, label }) => {
          const isActive = activeFilter === key;
          return (
            <label key={key} className={styles.filterItem}>
              <input
                className={styles.srOnly}
                type="radio"
                name="listing-filter"
                value={key}
                checked={isActive}
                onChange={() => onChange(key)}
              />
      
              <span
                className={clsx(styles.filterBtn, {
                  [styles.isActive]: isActive,
                })}
              >
                {label}
              </span>
            </label>
          );
        })}
      </fieldset>
    </header>
  );
}

export default memo(ListingHeaderBase);
