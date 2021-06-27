import { FC } from "react";
import "./TopNav.css";
import BellIcon from "../../../assets/icons/bell.png";
import HouseIcon from "../../../assets/icons/house.png";
import HouseIcon2 from "../../../assets/icons/house2.png";
import CommentsIcon from "../../../assets/icons/comments.png";
import Logo from "../../../assets/images/logo.png";
import Search from "../../../assets/icons/search.png";
import ArrowDown from "../../../assets/icons/arrow-down.png";
import { Link } from "react-router-dom";
import useDropdown from "react-dropdown-hook";
import { ExpandedMenu } from "../../uncommon/ExpandedMenu";

export const TopNav: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  return (
    <div className="TopNav">
      <div className="LeftSite">
        <Link to="/">
          <img className="Logo" src={Logo} alt="" />
        </Link>
        <div className="dropdown" ref={wrapperRef}>
        <Link to="/">
          <button className="dropdown-btn" onClick={toggleDropdown}>
          
            <img className="HouseIcon" src={HouseIcon2} alt="" />
            <p>Home</p>
            <img className="Arrow"src={ArrowDown} alt="" />
          </button>
          </Link>
          <div className="dropdown-content">
            {dropdownOpen && <>{<ExpandedMenu />}</>}
          </div>
        </div>
      </div>

      <div className="MiddleSite">
        <input
          className="SearchBar"
          type="text"
          placeholder="Search..."
        ></input>
        <img src={Search} alt="" />
      </div>

      <div className="RightSite">
        <img src={HouseIcon} alt="" />
        <img src={CommentsIcon} alt="" />
        <img src={BellIcon} alt="" />
      </div>
    </div>
  );
};

export default TopNav;
