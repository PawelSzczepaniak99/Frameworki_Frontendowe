import React from "react";
import WorkspacesContent from "./WorkspacesContent";
import { BrowserRouter } from "react-router-dom";
import "./WorkspacesPage.css";
import Publications from "../../../assets/icons/publications.png";
import Library from "../../../assets/images/library.jpg";

const GroupNotes = () => (
  <BrowserRouter>
    <div className="WorkspacesPage">
      <div className="WorkspacesMain">
        <img className="WorkspacesImage1" src={Library} alt="WorkspacesImage1" />
        <div className="WorkspacesMainName">
          <img
            className="WorkspacesImage2"
            src={Publications}
            alt="WorkspacesImage2"
          />
          <div>
            <h3>Group Notes</h3>
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

export default GroupNotes;
