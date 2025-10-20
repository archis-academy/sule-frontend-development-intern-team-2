import style from './ourServicesCard.module.scss';  

export interface ServiceItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface OurServicesCardProps {
  service: ServiceItem;
}

const OurServicesCard: React.FC<OurServicesCardProps> = ({ service }) => {
  return (
    <div className={style.servicesCard}>
      <div className={style.iconContainer}>

        <img src={service.image} alt="" className={style.ourServicesIcon}/>
      </div>
      <div className={style.cardContent}>
      <h3 className={style.cardTitle}>{service.title}</h3>
      <p className={style.cardDescription}>{service.description}</p>
      </div>
    </div>
  );
};

export default OurServicesCard;