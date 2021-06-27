import React from "react";
import { BrowserRouter } from "react-router-dom";
import Corpo from "../../../assets/images/corporate.jpg";
import Entities2 from "../../../assets/icons/entities2.png";
import "./WorkspacesPage.css";
import WorkspacesContent from "./WorkspacesContent";

const WorkspacesPageCorporate = () => (
  <BrowserRouter>
    <div className="WorkspacesPage">
      <div className="WorkspacesMain">
        <img className="WorkspacesImage1" src={Corpo} alt="WorkspacesImage1" />
        <div className="WorkspacesMainName">
          <img
            className="WorkspacesImage2"
            src={Entities2}
            alt="WorkspacesImage2"
          />
          <div>
            <h3>Corporate</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. doloribus at sed quis culpa deserunt consectetur qui
              praesentium accusamus fugiat dicta voluptatem rerum ut voluptate
              autem voluptatem repellendus aspernatur dolorem in
            </p>
            <WorkspacesContent />
          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default WorkspacesPageCorporate;
