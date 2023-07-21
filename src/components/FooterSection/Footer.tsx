import "./Footer.scss";
import './BelowFooter.scss'
import {TbMicroscope } from 'react-icons/tb';
const Footer: React.FC = () => {
  return (
    <>
    <footer className="footer__section">
      <div className="footer__container">
        <div className="left-side">
          <div>
            <span className="logo"><TbMicroscope/></span>
            <span className="logo-text">Clinic Sarbeswari</span>
          </div>
          <p className="about">
            Clinic Sarbeswari provides progressive and <br /> affordable
            healthcare, accessible offline and <br /> online for everyone.
          </p>
        </div>
        <ReusableComponentList heading="Clinic" />
        <ReusableComponentList heading="Help" />
      </div>
    </footer>
    <BelowFooter/>
    </>
  );
};
export default Footer;

interface Props {
  heading?: string;
}

export const ReusableComponentList: React.FC<Props> = ({ heading }) => {
  return (
    <div className="right-side">
      <p className="heading__item">{heading}</p>
      <ul className="items">
        <p>About</p>
        <p>Testimonials</p>
        <p>Find A Doctor</p>
      </ul>
    </div>
  );
};

export const BelowFooter: React.FC = () => {
    return <div className="below__container">
        <p>© Copyright 2023. Clinic Sarbeswari. All Rights Reserved.</p>
    </div>
}
