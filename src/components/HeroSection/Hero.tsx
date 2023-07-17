import React from "react";
import HeroPNG from "../../assets/hero.jpg";
import './Hero.scss'
const Hero: React.FC = () => {
  return (
    <div className="hero__section">
      <div className="hero__container">
        <div className="left-side">
          <div className="heading">
            A Great Place to
            <br />
            Receive Care
          </div>
            <div className="sub-heading">
                Medical Recover is most focused in helping you
                discover your most beautiful smile
            </div>
            <div className="buttons">
                <div className="get__quote__now">Get Quote Now</div>
                <div className="learn__more">Learn More</div>
                </div>
        </div>
        <div className="right-side">
            <img src={HeroPNG} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
