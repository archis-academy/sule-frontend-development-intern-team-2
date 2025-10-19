import LocationCard from "./locationCard";
import styles from "./location.module.scss";
import image1 from "../../assets/location1.jpg";
import image2 from "../../assets/location2.jpg";
import image3 from "../../assets/location3.jpg";
import image4 from "../../assets/location4.jpg";
import image5 from "../../assets/location5.jpg";

interface LocationData {
  properties: number;
  name: string;
  image: string;
}

const locations: LocationData[] = [
  { properties: 216, name: "New York City, NY", image: image1 },
  { properties: 141, name: "Houston, TX", image: image2 },
  { properties: 212, name: "San Diego, CA", image: image3 },
  { properties: 183, name: "Philadelphia, PA", image: image4 },
  { properties: 112, name: "San Francisco, CA", image: image5 },
  
];

const Location: React.FC = () => {
  return (
    <section className={styles.location}>
      <div className={styles.header}>
        <p className={styles.subtitle}>AREAS ACROSS THE TOWN</p>
        <h2 className={styles.title}>Neighborhood Properties</h2>
      </div>

      <div className={styles.gridContainer}>
        {locations.map((loc, index) => (
          <LocationCard
            key={index}
            name={loc.name}
            image={loc.image}
            properties={loc.properties}
            className={styles[`item-${index + 1}` as keyof typeof styles]}
          />
        ))}
      </div>
    </section>
  );
};

export default Location;