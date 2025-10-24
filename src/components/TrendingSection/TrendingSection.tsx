import styles from "./trending.module.scss";

// Resimler
import trendingSection1 from "../../assets/trendingSection1.svg";
import trendingSection2 from "../../assets/trendingSection2.svg";
import trendingSection3 from "../../assets/trendingSection3.svg";

const TrendingSection = () => {
  return (
    <section className={styles.trendingWrapper}>
      <div className={styles.trendingTitle}>
        <h4>What's Trending</h4>
        <h2>Latest Blogs & Posts</h2>
      </div>

      <div className={styles.postsContainer}>
        <div className={styles.postCard}>
          <div className={styles.dateBadge}>
            <span>28</span>
            <small>Tue</small>
          </div>

          <img src={trendingSection1} alt="Blog 1" />

          <h3>Top 10 Home Buying Mistakes to Avoid</h3>
          <p>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.</p>

          <button className={styles.nextBtn}>→</button>
        </div>

        <div className={styles.postCard}>
          <div className={styles.dateBadge}>
            <span>08</span>
            <small>Mon</small>
          </div>

          <img src={trendingSection2} alt="Blog 2" />

          <h3>How to Stage Your Home for a Quick Sale</h3>
          <p>Nullam odio lacus, dictum quis pretium congue, venenatis nunc.</p>

          <button className={styles.nextBtn}>→</button>
        </div>

        <div className={styles.postCard}>
          <div className={styles.dateBadge}>
            <span>26</span>
            <small>Wed</small>
          </div>

          <img src={trendingSection3} alt="Blog 3" />
          <h3>5 Tips for First-Time Home Sellers</h3>
          <p>
            In hac habitasse platea dictumst. Phasellus vel velit vel augue
            maximus.
          </p>
          <button className={styles.nextBtn}>→</button>
        </div>
      </div>

      <div className={styles.pagination}>
        <div className={`${styles.line} ${styles.active}`}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </section>
  );
};

export default TrendingSection;
