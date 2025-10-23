import React from "react";
import styles from "./teamMembers.module.scss";
import team1 from "@/assets/teamMember1.svg";
import team2 from "@/assets/teamMember2.svg";
import team3 from "@/assets/teamMember3.svg";
import team4 from "@/assets/teamMember4.svg";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
}

const teamData: TeamMember[] = [
  {
    id: 1,      
    name: "Brendon M",
    title: "CEO & Founder",
    image: team1,
  },
  {
    id: 2,
    name: "Jodi J. Appleby",
    title: "Real Estate Developer",
    image: team2,
  },
  {
    id: 3,
    name: "Justin S. Meza",
    title: "Listing Agent",
    image: team3,
  },
  {
    id: 4,
    name: "Susan T. Smith",
    title: "Buyer’s Agent",
    image: team4,
  },
];

const TeamMembers: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.header}>
        <p className={styles.intro}>INTRODUCE YOURSELF TO</p>
        <h2 className={styles.title}>Our Team of Experts</h2>
      </div>
      <div className={styles.teamGrid}>
        {teamData.map((member) => (
          <div key={member.id} className={styles.card}>
            <img src={member.image} alt={member.name} />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.title}>{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
