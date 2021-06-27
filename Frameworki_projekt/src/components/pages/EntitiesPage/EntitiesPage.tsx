import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./EntitiesPage.css";
import Cog from "../../../assets/icons/cog.png";
import EntitiesApi from "../../../api/EntitiesApi";





const EntitiesPage = () => (
  <BrowserRouter>
    <div className="EntitiesPage">
    
      <div className="EntitiesTitle">
      <h2>Entities</h2>
      <img src={Cog} alt="" />
      </div>
      <div className="EntitiesNav">
        
<button>All</button>
<button>Sort</button>
<button>Filters</button>

<button
onClick={() => navigator.clipboard.writeText('localhost:3000/entities')}>
Share
</button>

 </div>
  
      <EntitiesApi />

 </div>
  </BrowserRouter>
);

export default EntitiesPage;
