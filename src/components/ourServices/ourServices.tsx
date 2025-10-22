import React from "react";
import OurServicesCard, { type ServiceItem } from "./ourServicesCard";
import styles from "./ourServices.module.scss";

import house from "./../../assets/icons/house.svg";
import search from "./../../assets/icons/search.svg"; 
import bed from "./../../assets/icons/bed.svg";

const services: ServiceItem[] = [
  {
    id: 1,
    image: search,
    title: "Buy a New Home",
    description:
      "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
  },
  {
    id: 2,
    image: house,
    title: "Sell a House",
    description:
      "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
  },
  {
    id: 3,
    image: bed,
    title: "Rent a House",
    description:
      "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
  },
];

const OurServices: React.FC = () => {
  return (
    <section className={styles.ourServices}>
      <div className={styles.container}>
        <p className={styles.subtitle}>OUR SERVICES</p>
        <h2 className={styles.title}>Donec porttitor euismod dignissim</h2>
      </div>
      <div className={styles.cardGrid}>
        {services.map((service) => (
          <OurServicesCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;

