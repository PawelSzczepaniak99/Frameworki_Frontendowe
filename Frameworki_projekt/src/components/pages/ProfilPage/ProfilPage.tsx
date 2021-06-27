import User from "../../../assets/images/user-image.png";
import { BrowserRouter, Link } from "react-router-dom";
import "./ProfilPage.css";
import React, { Component } from "react";
import EdiText from "react-editext";
import Comments from "../../../assets/icons/comments.png";
import Publications from "../../../assets/icons/publications.png";
import Cog from "../../../assets/icons/cog.png";

export default class ProfilPage extends Component {
  onSave = (val: any) => {
    console.log("Edited Value -> ", val);
  };

  render() {
    return (
      <BrowserRouter>
      <div className="ProfilPageTopBar">
            <img src={Comments} alt="" />
            <p>Messege</p>
            <img src={Publications} alt="" />
            <p>Create a request</p>
            <img src={Cog} alt="" />
            <p>Add to a cluster</p>
            <p>X</p>
          </div>
        <div className="ProfilPage1">
          
          <div className="Profile">
            <img src={User} alt="" />
            <Link to="/profil">
              <p>See profile</p>
            </Link>
          </div>
          <div className="ProfileEditBasic">
            <EdiText
              showButtonsOnHover
              type="text"
              hint="Name & Surname"
              value="Pawel Szczepaniak"
              onSave={this.onSave}
            />
            <EdiText
              showButtonsOnHover
              type="text"
              value=""
              onSave={this.onSave}
            />
            <EdiText
              showButtonsOnHover
              type="text"
              value="New York"
              onSave={this.onSave}
            />
            <EdiText
              showButtonsOnHover
              type="text"
              value="Partner"
              onSave={this.onSave}
            />
          </div>
          <div className="ProfileEditEmail">
            <EdiText
              showButtonsOnHover
              type="text"
              value="pawelszczepaniak99@gmail.com"
              onSave={this.onSave}
            />
            <EdiText
              showButtonsOnHover
              type="text"
              value="+48 666 666 666"
              onSave={this.onSave}
            />
          </div>
        </div>
        <div className="ProfilPage2">
          <p>Expertise</p>
          <EdiText
            showButtonsOnHover
            type="text"
            value="Mergens and actquision"
            onSave={this.onSave}
          />
          <p>Specialities</p>
          <EdiText
            showButtonsOnHover
            type="text"
            value="Cross border operations"
            onSave={this.onSave}
          />
          <p>Admission to practice law</p>
          <EdiText
            showButtonsOnHover
            type="text"
            value="Paris bar accosion"
            onSave={this.onSave}
          />
          <p>Country</p>
          <EdiText
            showButtonsOnHover
            type="text"
            value="Poland"
            onSave={this.onSave}
          />
        </div>
        <div className="ProfilPage3">
          <h3>Panel informations</h3>
          <p>Hourly fee</p>
          <EdiText
            showButtonsOnHover
            type="text"
            value="610$/hour"
            onSave={this.onSave}
          />
          <p>Term & contitions</p>
          <EdiText
            showButtonsOnHover
            type="text"
            value="Monthly 10k$ retainer - see with Jehanine Smith"
            onSave={this.onSave}
          />
          <p>Services & projects</p>
          <EdiText
            showButtonsOnHover
            type="text"
            value="Corporate M&A and international asquisions"
            onSave={this.onSave}
          />
        </div>
      </BrowserRouter>
    );
  }
}
