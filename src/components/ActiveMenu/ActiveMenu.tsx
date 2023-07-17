import "./ActiveMenu.scss";
import { AiOutlineHome } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
import { RiContactsLine, RiProductHuntLine } from "react-icons/ri";

const ActiveMenu = () => {
  return (
    <div className="menu">
      <div className="list">
        <DropDownItem name="Home" icon={<AiOutlineHome />} />
        <DropDownItem name="Pricing" icon={<IoPricetagsOutline />} />
        <DropDownItem name="Contact" icon={<RiContactsLine />} />
        <DropDownItem name="Product" icon={<RiProductHuntLine />} />
      </div>
    </div>
  );
};
export default ActiveMenu;

interface Props {
  name: string;
  icon?: any;
}

export const DropDownItem: React.FC<Props> = ({ name, icon }) => {
  return (
    <a className="list-item">
      {icon}
      <span>{name}</span>
    </a>
  );
};


// import React, { useState } from "react";
// import "./ActiveMenu.scss";
// import { AiOutlineHome } from "react-icons/ai";
// import { IoPricetagsOutline } from "react-icons/io5";
// import { RiContactsLine, RiProductHuntLine } from "react-icons/ri";

// const ActiveMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`menu ${isOpen ? "open" : ""}`}>
//       <button className="toggle-button" onClick={toggleMenu}>
//         Toggle Menu
//       </button>
//       <div className="list">
//         <DropDownItem name="Home" icon={<AiOutlineHome />} />
//         <DropDownItem name="Pricing" icon={<IoPricetagsOutline />} />
//         <DropDownItem name="Contact" icon={<RiContactsLine />} />
//         <DropDownItem name="Product" icon={<RiProductHuntLine />} />
//       </div>
//     </div>
//   );
// };

// export default ActiveMenu;

// interface Props {
//   name: string;
//   icon?: any;
// }

// export const DropDownItem: React.FC<Props> = ({ name, icon }) => {
//   return (
//     <a className="list-item">
//       {icon}
//       <span>{name}</span>
//     </a>
//   );
// };
