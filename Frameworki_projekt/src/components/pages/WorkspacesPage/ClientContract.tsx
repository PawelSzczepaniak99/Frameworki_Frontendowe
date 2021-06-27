import React from "react";
import WorkspacesContent from "./WorkspacesContent";
import { BrowserRouter } from "react-router-dom";
import "./WorkspacesPage.css";
import Notes from "../../../assets/icons/notes.png";
import Hand2 from "../../../assets/images/hand2.jpg";

const ClientContract = () => (
  <BrowserRouter>
    <div className="WorkspacesPage">
      <div className="WorkspacesMain">
        <img className="WorkspacesImage1" src={Hand2} alt="WorkspacesImage1" />
        <div className="WorkspacesMainName">
          <img
            className="WorkspacesImage2"
            src={Notes}
            alt="WorkspacesImage2"
          />
          <div>
            <h3>Client contract</h3>
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

export default ClientContract;
