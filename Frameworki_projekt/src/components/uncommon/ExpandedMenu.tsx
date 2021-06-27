import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ExpandedMenu.css";

const PlatformData = [
  {
    title: "Home",
    path: "/",
    icone: `./assets/icons/house.svg`,
  },
  {
    title: "Publications",
    path: "/test",
    icone: `./assets/icons/publications.svg`,
  },
  {
    title: "People",
    path: "/test",
    icone: `./assets/icons/people.svg`,
  },
  {
    title: "Entities",
    path: "/entities",
    icone: `./assets/icons/entities.svg`,
  },
  {
    title: "Administration",
    path: "/test",
    icone: `./assets/icons/administration.svg`,
  },
];

const WorkspacesData = [
  {
    title: "Client contract",
    path: "/client_contract",
    icone: `./assets/icons/publications.svg`,
  },
  {
    title: "Supplier contract",
    path: "/supplier_contract",
    icone: `./assets/icons/publications.svg`,
  },
  {
    title: "Corporate",
    path: "/corporate",
    icone: `./assets/icons/entities2.svg`,
  },
  {
    title: "Group notes",
    path: "/group_notes",
    icone: `./assets/icons/publications.svg`,
  },
];

const AccountData = [
  {
    title: "Privacy",
    path: "/test",
    icone: `./assets/icons/privacy.svg`,
  },
  {
    title: "Settings",
    path: "/test",
    icone: `./assets/icons/settings.svg`,
  },
];

export const ExpandedMenu: FC = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="EM_main" onClick={(e) => e.stopPropagation()}>
      <div>
        <input
          className="EM_filter"
          placeholder="Filter..."
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <div className="EM_element">
        <span>Platform</span>
        {PlatformData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
          <ul key={index} className="EM_ul">
            <NavLink to={elem.path} className="EM_path">
              <img className="EM_icone" src={elem.icone} alt="" />
              <li className="EM_title">{elem.title}</li>
            </NavLink>
          </ul>
        ))}
        <span>Workspace</span>
        {WorkspacesData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
          <ul key={index} className="EM_ul">
            <NavLink to={elem.path} className="EM_path">
              <img className="EM_icone" src={elem.icone} alt="" />
              <li className="EM_title">{elem.title}</li>
            </NavLink>
          </ul>
        ))}
      </div>
      <div>
        <span>Account</span>
        <div className="EM_profilBox">
          <img
            className="EM_userImage"
            src={"./assets/images/user-image.png"}
            alt=""
          />
          <div className="EM_profilInfo">
            <div className="EM_userName"> Mateusz Drzyzga</div>
            <NavLink to="/profil" className="EM_link">
              See profile
            </NavLink>
          </div>
        </div>
        {AccountData.filter((elem) =>
          elem.title.toLowerCase().includes(search)
        ).map((elem, index) => (
          <ul key={index} className="EM_ul">
            <NavLink to={elem.path} className="EM_path">
              <img className="EM_icone" src={elem.icone} alt="" />
              <li className="EM_title">{elem.title}</li>
            </NavLink>
          </ul>
        ))}
      </div>
      <button className="EM_logout">
        <img  src={"./assets/icons/logout.png"} alt="" />
        <span>Logout</span>
      </button>
    </nav>
  );
};
export default ExpandedMenu;
