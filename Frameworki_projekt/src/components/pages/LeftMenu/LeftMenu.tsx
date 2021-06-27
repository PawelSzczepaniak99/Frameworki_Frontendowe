import React from "react";
import { Link } from 'react-router-dom';
import "./LeftMenu.css";
import Publications from "../../../assets/icons/publications.png";
import Ecosystem from "../../../assets/icons/ecosystem.png";
import Entities from "../../../assets/icons/entities.png";
import Network from "../../../assets/icons/network.png";
import Plus from "../../../assets/icons/plus.png";
import PlusUser from "../../../assets/icons/user-plus.png";
import UserPhoto from "../../../assets/images/user-image.png";




const LeftMenu = () => (
  
  <div className="LeftMenu">
  <div className="UserPhoto"><Link to="/profil"><img src={UserPhoto} alt="" /></Link></div>
  <div className="UserName">Pawel Szczepaniak <p>Job title - Company</p></div>
    
    <div className="Inside"> 
    <Link to="/test" ><div className="InsideIcons" ><img src={Network} alt="" /><div className = "MenuIcons">Your network</div><div className = "UserIcons"><img src={PlusUser} alt="" /></div></div></Link>
    <Link to="/test"><div className="InsideIcons" ><img src={Publications} alt="" /><div className = "MenuIcons">Your Publications</div><div className = "UserIcons2"><img src={Plus} alt="" /></div></div></Link>
    </div>
    <div className="BottomList">
    <Link to="/test"><div className="ListIcons" ><img src={Publications} alt="" /><div className = "MenuIcons">Publications</div></div></Link>
    <Link to="/test"><div className="ListIcons" ><img src={Ecosystem} alt="" /><div className = "MenuIcons">Ecosystem</div></div></Link>
    <Link to="/entities"><div className="ListIcons" ><img src={Entities} alt="" /><div className = "MenuIcons">Entities</div></div></Link>
    </div>
   
  </div>
  
);

export default LeftMenu;
