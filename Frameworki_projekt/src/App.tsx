import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.scss";


import ProfilPage from "./components/pages/ProfilPage/ProfilPage";
import TestPage from "./components/pages/TestPage/TestPage";
import ClientContract from "./components/pages/WorkspacesPage/ClientContract";
import EntitiesPage from "./components/pages/EntitiesPage/EntitiesPage";
import Corporate from "./components/pages/WorkspacesPage/Corporate";
import SupplierContract from "./components/pages/WorkspacesPage/SupplierContract";
import GroupNotes from "./components/pages/WorkspacesPage/GroupNotes";
import LatestPublications from "./components/pages/LatestPublications/LatestPublications";

import Resume from "./components/pages/ResumeYourWork/Resume";
import LeftMenu from "./components/pages/LeftMenu/LeftMenu";
import TopNav from "./components/pages/TopNav/TopNav";
import Workspaces from "./components/pages/Workspaces/Workpaces";


const App = () => (
  <BrowserRouter>
    <>
      <TopNav />
      <LeftMenu />
      <Route exact path="/" component={LatestPublications} />
      <Route exact path="/" component={Workspaces} />
      <Route exact path="/" component={Resume} />
      <Route path="/client_contract" component={ClientContract} />
      <Route path="/supplier_contract" component={SupplierContract} />
      <Route path="/corporate" component={Corporate} />
      <Route path="/group_notes" component={GroupNotes} />
      <Route path="/test" component={TestPage} />
      <Route path="/entities" component={EntitiesPage} />
      <Route path="/profil" component={ProfilPage} />
    </>
  </BrowserRouter>
);

export default App;
