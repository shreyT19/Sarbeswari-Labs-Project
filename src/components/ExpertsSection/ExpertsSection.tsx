
import './ExpertsSection.scss';
const ExpertsSection: React.FC = () => {

    return <div className="experts__section">
        <SmallHeaderSection />
        <div className="experts__container">
            <div className="left-side">

            </div>
        </div>
    </div>
}

export default ExpertsSection;


export const SmallHeaderSection: React.FC = () => {
    return <div className="small-header__section">
        <p className="sub-heading">Practice Advise</p>
        <p className="heading">Meet Our Experts</p>
        <p className="about">
            Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics
        </p>
    </div>
}