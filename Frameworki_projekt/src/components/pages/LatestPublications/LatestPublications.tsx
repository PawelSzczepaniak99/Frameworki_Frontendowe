import React from "react";
import "./LatestPublications.css";
import HandsImage from "../../../assets/images/hands.jpg";
import { Link } from "react-router-dom";
import PublicationsApi from "../../../api/PublicationsApi";

const LatestPublications = () => (
  <div className="LatestPublications">
    <div className="BigImage">
    <div className="BigImageImage">
    </div>
      
    </div>
    <div className="BigImage_Item">
    
    <PublicationsApi />
    </div>
    <div className="PublicationList">
      <div className="Title">
        <strong>Latest Publications</strong>
      </div>

      <div className="PublicationsContener">

        <div>
          <PublicationsApi />
          <img className="PublicationsMainImage"src={HandsImage} alt="" />
        </div>
        <div>
          <PublicationsApi />
          <img className="PublicationsMainImage"src={HandsImage} alt="" />
        </div>
        <div>
          <PublicationsApi />
          <img className="PublicationsMainImage"src={HandsImage} alt="" />
        </div>
      </div>

      <Link to="/test">
        {" "}
        <div className="Link">See more publications</div>
      </Link>
    </div>
  </div>
);

export default LatestPublications;
