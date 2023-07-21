import ProfilePicture from "../../assets/profile.jpg";
import "./ExpertsSection.scss";
const ExpertsSection: React.FC = () => {
  return (
    <div className="experts__section">
      <div className="experts__container">
        <div className="left-side">
          <SmallHeaderSection />
        </div>

        <div className="right-side">
          <img src={ProfilePicture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExpertsSection;

export const SmallHeaderSection: React.FC = () => {
  return (
    <div className="small-header__section">
      <p className="sub-heading">Practice Advise</p>
      <p className="heading">Meet Our Expert</p>
      {/* <p className="about">
        Problems trying to resolve the conflict between <br /> the two major
        realms of Classical physics: Newtonian mechanics
      </p> */}
      <p className="about">
      Pediatric Virtuoso: Exemplary Expertise in Fostering Children's Wellness and Flourishing Potential.
      </p>
    </div>
  );
};
