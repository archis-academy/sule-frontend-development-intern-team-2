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
  id: number;
}

const locations: LocationData[] = [
  
// TODO: In the future, fetch locations dynamically from backend instead of using static data
  { properties: 216, name: "New York City, NY", image: image1, id: 1 },
  { properties: 141, name: "Houston, TX", image: image2, id: 2 },
  { properties: 212, name: "San Diego, CA", image: image3, id: 3 },
  { properties: 183, name: "Philadelphia, PA", image: image4, id: 4 },
  { properties: 112, name: "San Francisco, CA", image: image5, id: 5 }
];

const Location: React.FC = () => {
  return (
    <section className={styles.location}>
      <div className={styles.header}>
        <h2 className={styles.subtitle}>AREAS ACROSS THE TOWN</h2>
        <p className={styles.title}>Neighborhood Properties</p>
      </div>

      <div className={styles.gridContainer}>
        {locations.map((loc) => (
          <LocationCard
            key={loc.id}
            name={loc.name}
            image={loc.image}
            properties={loc.properties}
            className={styles.item}
          />
        ))}
      </div>
    </section>
  );
};

export default Location;
