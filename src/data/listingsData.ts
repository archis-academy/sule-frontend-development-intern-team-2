import house1 from "@/assets/icons/house1.svg";
import house2 from "@/assets/icons/house2.svg";
import house3 from "@/assets/icons/house3.svg";
import house4 from "@/assets/icons/house4.svg";


export interface Listing {
  id: number;
  title: string;
  price: number;
  address: string; 
  beds: number;
  baths: number;
  area: string;
  cover: string;
  alt?: string;
}

export const listingsData: Listing[] = [
  {
    id: 1,
    title: "Tranquil Haven in the Woods",
    price: 5970,
    address: "103 Wright Court, Burien, WA 98168",
    beds: 4,
    baths: 3,
    area: "3500 sq ft",
    cover: house1,
    alt: "Tranquil Haven in the Woods",
  },
  {
    id: 2,
    title: "Serene Retreat by the Lake",
    price: 1970,
    address: "1964 Jehovah Drive, VA 22408",
    beds: 3,
    baths: 2,
    area: "2100 sq ft",
    cover: house2,
    alt: "Serene Retreat by the Lake",
  },
  {
    id: 3,
    title: "Charming Cottage in the Meadow",
    price:  3450,
    address: "1508 Centennial Farm Road, Harlan, 51537",
    beds: 5,
    baths: 4,
    area: "4200 sq ft",
    cover: house3,
    alt: "Charming Cottage in the Meadow",
  },
  {
    id: 4,
    title: "Grand Estate on the Hilltop",
    price: 2389,
    address: "103 Wright Court, Burien, WA 98168",
    beds: 2,
    baths: 2,
    area: "1200 sq ft",
    cover: house4,
    alt: "Grand Estate on the Hilltop",
  }
];


export const listings = listingsData;
