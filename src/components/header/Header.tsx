import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { BiRightArrowAlt } from "react-icons/bi";
import { TbMicroscope } from "react-icons/tb";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import ActiveMenu from "../ActiveMenu/ActiveMenu";


const Header: React.FC = () => {

  const menuRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  const[mobileMenu, setMobileMenu] = useState<boolean>(false);

  //for mobile menu
  const handleClickShowPopup = ()=>{

    setMobileMenu(oldState=> !oldState);
    menuRef.current?.classList.toggle("active");


  }
  // for navbar sticky
  const handleScrollEvent = () => {
    const scrollHeight: number = window.scrollY;

    if (scrollHeight > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // for navbar sticky
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const classes = scrolled ? "top-header sticky-nav" : "top-header";

  // for screen size
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //for screen size

  useEffect(() => {
    // console.log(screeenSize);

    if (screenSize < 768) {
      // console.log("mobile");
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
      setMobileMenu(false);
    }
  }, [screenSize]);

  return (
    <header className={classes}>
      <div className="top-header__container">
        <div className="left">
          <span className="arrow">
            <TbMicroscope />
          </span>
          <span>Sarbeswari Labs</span>
        </div>
        <div className="middle">
          <a className="hyperlinks" href="">
            Home
          </a>
          <a className="hyperlinks" href="">
            Product
          </a>
          <a className="hyperlinks" href="">
            Pricing
          </a>
          <a className="hyperlinks" href="">
            Contact
          </a>
        </div>

        {activeMenu && (
          <div className="right">
            <div className="login">Login</div>
            <div className="join-us">
              <span>Join Us</span>
              <span className="arrow">
                <BiRightArrowAlt />
              </span>
            </div>
          </div>
        )}

        {!activeMenu && (
          <span className="arrow right-arrow" ref={menuRef} onClick={handleClickShowPopup}>
            <MdOutlineArrowDropDownCircle />
          </span>
        )}
      </div>
      {
        mobileMenu && (<ActiveMenu/>)
      }
    </header>
  );
};

export default Header;
