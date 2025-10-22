import styles from "./partners.module.scss";

const Partners: React.FC = () => {
  const partners = [
    {
      id:1,
      name: "Google",
      image: "google.png",
    },
    {
      id:2,
      name: "Amazon",
      image: "amazon.png",
    },
    {
        id:3,
      name: "Logitech",
      image: "logitech.png",
    },
    {
      id:4,
      name: "Spotify",
      image: "spotify.png",
    },
    {
      id:5,
      name: "Samsung",
      image: "samsung.png",
    },
    {
      id:6,
      name: "Netflix",
      image: "netflix.png",
    },
  ];
  return (
    <section className={styles.partners}>
      <div className={styles.bigBlueBlob}>
        <img src="Ellipse.png" alt={"Ellipse"} />
      </div>
      <h6>Trusted by 100+ Companies across the globe! </h6>
      <ul className={styles.logos}>
     {partners.map((partner) => (
  <li key={partner.id} className={styles.logo}>
    <img src={partner.image} alt={partner.name} />
  </li>
))}

      </ul>
    </section>
  );
};

export default Partners;
