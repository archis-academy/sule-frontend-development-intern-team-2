import type { JSX, ReactNode } from "react";
import styles from "./About.module.scss";

import poolHouse from "@/assets/pool_house.png";
import bedroom from "@/assets/bedroom.png";
import room from "@/assets/room.png";
import circularText from "@/assets/text__circle.svg";
import aboutDot from "@/assets/icons/about_dot.svg";
import aboutUser from "@/assets/icons/about_user.svg";
import aboutIcon from "@/assets/icons/about_icon1.svg";

type FeaturePillProps = {
  icon: ReactNode;
  title: string;
  desc: string;
};

function FeaturePill({ icon, title, desc }: FeaturePillProps): JSX.Element {
  return (
    <li className={styles["feature-pill"]}>
      <div className={styles["feature-pill__icon"]} aria-hidden="true">
        {icon}
      </div>
      <div className={styles["feature-pill__text"]}>
        <h4 className={styles["feature-pill__title"]}>{title}</h4>
        <p className={styles["feature-pill__desc"]}>{desc}</p>
      </div>
    </li>
  );
}

export default function About(): JSX.Element {
  return (
    <section className={styles.about} aria-labelledby="about-title">
      <div className={styles["about__grid"]}>
        <div className={styles["about__copy"]}>
          <p className={styles["about__eyebrow"]}>WHO ARE WE</p>
          <h2 id="about-title" className={styles["about__title"]}>
            Assisting individuals in locating the appropriate real estate.
          </h2>
          <p className={styles["about__lead"]}>
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
            malesuada leo volutpat.
          </p>

          <ul className={styles["about__features"]}>
            <FeaturePill
              icon={<img src={aboutIcon} alt="" />}
              title="Property Consultation"
              desc="Expert advice on finding and evaluating properties."
            />
            <FeaturePill
              icon={<img src={aboutUser} alt="" />}
              title="Client Support"
              desc="Personalized assistance through every step of the process."
            />
          </ul>
        </div>

        {/* RIGHT: media collage */}
        <div className={styles["about__media"]} aria-hidden="true">
          <img
            className={styles["about__circular-text"]}
            src={circularText}
            alt="Circular promotional text"
            loading="lazy"
          />
          <img
            className={styles["about__img--main"]}
            src={poolHouse}
            alt="Modern villa with a pool"
            loading="lazy"
          />
          <div className={styles["about__media--right"]}>
            <img
              className={styles["about__img--top"]}
              src={bedroom}
              alt="Cozy bedroom interior"
              loading="lazy"
            />
            <img
              className={styles["about__img--bottom"]}
              src={room}
              alt="Bright living room with plants"
              loading="lazy"
            />
            <span className={styles["about__dot"]}>
              <img src={aboutDot} alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
