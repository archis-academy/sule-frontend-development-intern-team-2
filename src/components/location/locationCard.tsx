import styles from "./locationCard.module.scss";
interface LocationCardProps {
  name: string;
  image: string;
  properties: number;
  className: string; 
}

const LocationCard: React.FC<LocationCardProps> = ({ name, image, properties, className }) => (
  <div className={`${styles.locationCard} ${className}`}>
    <img src={image} alt={`Properties in ${name}`} className={styles.image} />

    <div className={styles.contentOverlay}>
      <p className={styles.properties}>{properties}</p>
      <p className={styles.name}>{name}</p>
    </div>
  </div>
);

export default LocationCard;
