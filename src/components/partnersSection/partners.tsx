import styles from "./partners.module.scss";

const Partners: React.FC = () => {
  const partners = [
    {
      name: "Google",
      image: "google.png",
    },
    {
      name: "Amazon",
      image: "amazon.png",
    },
    {
      name: "Logitech",
      image: "logitech.png",
    },
    {
      name: "Spotify",
      image: "spotify.png",
    },
    {
      name: "Samsung",
      image: "samsung.png",
    },
    {
      name: "Netflix",
      image: "netflix.png",
    },
  ];
  return (
    <section className={styles.partners}>
      <div className={styles.bigBlueBlob}>
        <img src="Ellipse.png" alt="" />
      </div>
      <h6>Trusted by 100+ Companies across the globe! </h6>
      <ul className={styles.logos}>
     {partners.map((partner) => (
  <li key={partner.image} className={styles.logo}>
    <img src={partner.image} alt={partner.name} />
  </li>
))}

      </ul>
    </section>
  );
};

export default Partners;
