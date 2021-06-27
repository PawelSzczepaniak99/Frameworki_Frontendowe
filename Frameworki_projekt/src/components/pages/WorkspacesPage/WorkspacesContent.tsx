import React from "react";
import "./WorkspacesPage.css";
import Entities2 from "../../../assets/icons/entities2.png";
import Network from "../../../assets/icons/network.png";
import Calendar from "../../../assets/icons/calendar.png";

import { Pagination } from "@material-ui/lab";
import ResumeApi from "../../../api/ResumeApi";





const WorkspacesContent = () => (
  <div>
    <p>Start working on corporate matters</p>
    <div className="WorkspacesConteners">
      <div className="WorkspacesContener1">
        <img
          className="WorkspacesImage2"
          src={Entities2}
          alt="WorkspacesImage2"
        />
        <div className="WorkspacesMainNameContent">
          <h3>Explore your entities</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
      </div>
      <div className="WorkspacesContener2">
        <img
          className="WorkspacesImage2"
          src={Network}
          alt="WorkspacesImage2"
        />
        <div className="WorkspacesMainNameContent">
          <h3>Structure the <strong>ownership</strong></h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
      </div>
      <div className="WorkspacesContener3">
        <img
          className="WorkspacesImage2"
          src={Calendar}
          alt="WorkspacesImage2"
        />
        <div className="WorkspacesMainNameContent">
          <h3>Define your <strong>calendar</strong></h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
      </div>
    </div>
    <div className="AboveResApi">
        <h3>Latest updates</h3>
        <div className="Buttons">
          <button className="Button1">All</button>
          <button className="Button2">SAS</button>
          <button className="Button3">SARL</button>
          <button className="Button4">Secondary business</button>
          <button className="Button5">Communities</button>
          <button className="Button6">POA</button>
          <button className="Button7">Survey</button>
          <button className="Button8">...</button>
        </div>
        <input
          className="SearchBar__Resume"
          type="text"
          placeholder="Filter by title..."
          id="DropdownInput"
        ></input>
      </div>
      <div className="Res3">
            {[...Array(10)].map((x, i) =>
    <ResumeApi key={i} />
  )}
<div className="Pagination" >
    
    <Pagination count={10} color="primary"/>
        </div>
  </div>
      </div>
      
  
);
export default WorkspacesContent;
