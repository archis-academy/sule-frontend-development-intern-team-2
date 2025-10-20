import type { JSX, ReactNode } from "react";
import "./About.scss";

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
    <div className="feature-pill" role="listitem">
      <div className="feature-pill__icon" aria-hidden="true">
        {icon}
      </div>
      <div className="feature-pill__text">
        <h4 className="feature-pill__title">{title}</h4>
        <p className="feature-pill__desc">{desc}</p>
      </div>
    </div>
  );
}

export default function About(): JSX.Element {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__grid">
     
        <div className="about__copy">
          <p className="about__eyebrow">WHO ARE WE</p>
          <h2 id="about-title" className="about__title">
            Assisting individuals in <br /> locating the appropriate <br />
            real estate.
          </h2>
          <p className="about__lead">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
            malesuada leo volutpat.
          </p>

          <div className="about__features" role="list">
            <FeaturePill
              icon={<img src={aboutIcon} alt="Icon" />}
              title="Donec porttitor euismod"
              desc="Nullam a lacinia ipsum, nec dignissim purus. Nulla"
            />
            <FeaturePill
              icon={<img src={aboutUser} alt="User" />}
              title="Donec porttitor euismod"
              desc="Nullam a lacinia ipsum, nec dignissim purus. Nulla"
            />
          </div>
        </div>

        {/* RIGHT: media collage */}
        <div className="about__media" aria-hidden="true">
          <img
            className="about__circular-text"
            src={circularText}
            alt="text"
            loading="lazy"
          />
          <img
            className="about__img about__img--main"
            src={poolHouse}
            alt="Modern villa with a pool"
            loading="lazy"
          />
          <div className="about__media--right">
            <img
              className="about__img about__img--top"
              src={bedroom}
              alt="Cozy bedroom interior"
              loading="lazy"
            />
            <img
              className="about__img about__img--bottom"
              src={room}
              alt="Bright living room with plants"
              loading="lazy"
            />
            <span className="about__dot">
              <img src={aboutDot} alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
