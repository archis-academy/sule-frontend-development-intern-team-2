import { useNavigate } from "react-router-dom";
import styles from "./ctaBanner.module.scss";
import artist from "../../assets/bannerArtist.svg";
const CtaBanner: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };
  return (
    <section className={styles.banner}>
      <div className={styles.imageWrapper}>
        <img src={artist} alt="Agent" />
      </div>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Become a Agent.</h2>
          <p className={styles.description}>
            Fusce venenatis tellus a felis scelerisque.
            <br />
            Venenatis tellus a felis scelerisque.
          </p>
        </div>

        <button onClick={handleClick} className={styles.button}>
          Register Now
        </button>
      </div>
    </section>
  );
};

export default CtaBanner;
