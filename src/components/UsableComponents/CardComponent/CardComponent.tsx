import {FaHeartbeat,FaStethoscope} from "react-icons/fa";
import {BsFileMedical} from "react-icons/bs";
import "./CardComponent.scss";
const CardComponent: React.FC = () => {
  return <div className="card__section">
    

    <MiniCardComponent icon={<FaHeartbeat/>} heading="Online Appointment" />
    <MiniCardComponent icon={<FaStethoscope/>} heading="Emergency Case" />
    <MiniCardComponent icon={<BsFileMedical/>} heading="Cancer Care"/>
  </div>;
};

export default CardComponent;

interface Props {
    heading?: string;
    icon?: any;
}

const MiniCardComponent: React.FC<Props> = ({icon,heading}) => {
  return (
    <div className="card__container">
      <div className="card__item">
        
        <span className="icon">{icon}</span>
        <p className="heading">{heading}</p>
        <span>________</span>
        <p className="about">
          The gradual accumulation of information about atomic and small-scale
          behaviour...
        </p>
      </div>
    </div>
  );
};
