export type ListingTag = {
  type: "popular" | "new" | "discount" | string;
  label: string;
};

export type ListingItem = {
  id: string;
  title: string;
  price: number;
  address: string;
  beds: number;
  baths: number;
  tag: ListingTag;
  cover: string;
  alt: string;
};

export const listings: ListingItem[] = [
  {
    id: "1",
    title: "Tranquil Haven in the Woods",
    price: 5970,
    address: "103 Wright Court · Burien, WA 98168",
    beds: 4,
    baths: 3,
    tag: { type: "popular", label: "Popular" },
    cover:
      "src/assets/icons/house1.svg",
    alt: "Modern house with pool and glass facade",
  },
  {
    id: "2",
    title: "Serene Retreat by the Lake",
    price: 1970,
    address: "1964 Jehovah Drive · VA 22408",
    beds: 3,
    baths: 2,
    tag: { type: "new", label: "New Listing" },
    cover:
      "src/assets/icons/house2.svg",
    alt: "Apartment building at sunset",
  },
  {
    id: "3",
    title: "Charming Cottage in the Meadow",
    price: 3450,
    address: "1508 Centennial Farm Road · Harlan, 51537",
    beds: 4,
    baths: 4,
    tag: { type: "discount", label: "Discounted Price" },
    cover: "src/assets/icons/house3.svg",
    alt: "White modern villa with swimming pool under clear sky",
  },
  {
    id: "4",
    title: "Urban Apartment with Skyline View",
    price: 2890,
    address: "882 Skyline Ave · San Diego, CA 92103",
    beds: 2,
    baths: 2,
    tag: { type: "featured", label: "Featured" },
    cover:
      "src/assets/icons/house4.svg",
    alt: "Modern apartment with city skyline view",
  },
];
