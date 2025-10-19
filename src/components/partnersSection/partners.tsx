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
      name: "Microsoft",
      image: "logitech.png",
    },
    {
      name: "Microsoft",
      image: "spotify.png",
    },
    {
      name: "Microsoft",
      image: "samsung.png",
    },
    {
      name: "Microsoft",
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
        {partners.map((partner, index) => (
          <li key={index} className={styles.logo}>
            <img src={partner.image} alt={partner.name} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Partners;
