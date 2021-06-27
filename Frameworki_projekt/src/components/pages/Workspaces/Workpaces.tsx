import React from 'react';
import "./Workspaces.css";
import Hand2 from "../../../assets/images/hand2.jpg";
import Corpo from "../../../assets/images/corporate.jpg";
import Library from "../../../assets/images/library.jpg";
import Notes from "../../../assets/icons/notes.png";
import Entities from "../../../assets/icons/entities2.png";
import Publications from "../../../assets/icons/publications.png";
import People from "../../../assets/icons/people.png";
import { Link } from 'react-router-dom';

const Workspaces = () => (

    <div className= "Workspaces">
        <p>Workspaces</p>
                                                                                                                               {/*zmienic na tablice*/}
        <Link to="/client_contract"><div className= "Contener"><img src={Hand2} alt="" />
            <div className= "Contener_box"><img src={Notes} alt=""/><p>Client contract</p></div>
            <div className= "Contener_content">
            <img src={Notes} alt=""/><p>Contract</p><p>•</p><img src={People} alt=""/><p>150 users </p> 
            </div>
            <div className= "Contener_content2">
                <p>Last update 2 days ago</p>
            </div>
        </div></Link>

        <Link to="/supplier_contract"><div className= "Contener"><img src={Hand2} alt="" />
            <div className= "Contener_box"><img src={Notes} alt=""/><p>Supplier contract</p></div>
            <div className= "Contener_content">
            <img src={Notes} alt=""/><p>Contract</p><p>•</p><img src={People} alt=""/><p>25 users </p>
            </div>
            <div className= "Contener_content2">
                <p>Last update 2 days ago</p>
            </div>
        </div></Link>

        <Link to="/corporate"><div className= "Contener"><img src={Corpo} alt="" />
            <div className= "Contener_box"><img src={Entities} alt=""/><p>Corporate</p></div>
            <div className= "Contener_content">
            <img src={Entities} alt=""/><p>Corporate</p><p>•</p><img src={People} alt=""/><p>666 users </p> 
            </div>
            <div className= "Contener_content2">
                <p>Last update 2 days ago</p>
            </div>
        </div></Link>

        <Link to="/group_notes"><div className= "Contener"><img src={Library} alt="" />
            <div className= "Contener_box"><img src={Publications} alt=""/><p>Group notes</p></div>
            <div className= "Contener_content">
            <img src={Publications} alt=""/><p>Norms</p><p>•</p><img src={People} alt=""/><p>25 users </p>
            </div>
            <div className= "Contener_content2">
                <p>Last update 2 days ago</p>
            </div>
        </div></Link>
    </div>
    );
     
    export default Workspaces;