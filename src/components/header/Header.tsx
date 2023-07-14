import "./Header.scss";
import {BiRightArrowAlt} from 'react-icons/bi'
import {TbMicroscope}   from 'react-icons/tb'
const Header: React.FC = () => {
  return (
    <header className="top-header">
      <div className="top-header__container">
        <div className="left">
            <span className="arrow"><TbMicroscope/></span>
          <span>Sarbeswari Labs</span>
        </div>
        <div className="middle">
          <a className="hyperlinks"  href="">Home</a>
          <a className="hyperlinks" href="">Product</a>
          <a className="hyperlinks" href="">Pricing</a>
          <a className="hyperlinks" href="">Contact</a>
        </div>
        <div className="right">
            <div className="login">Login</div>
            <div className="join-us"> <span>Join Us</span><span className="arrow"><BiRightArrowAlt/></span></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
