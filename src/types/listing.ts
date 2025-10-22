export type FilterKey = "all" | "sell" | "rent";

export type ListingHeaderProps = {
  subheading?: string;
  heading?: string;
  description?: string;
  onFilterChange?: (key: FilterKey) => void;

  labelledById?: string;
};
