import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import "./index.scss";
import "./tsremote-mf-decl.d";

import Navigation from "header/Navigation";
import Dashboard from "dashboard/Dashboard";


const App = () => (



  <BrowserRouter>
    <Link to="/" className="fontRed"> <b>Main Link </b> </Link> 
    <Link to="/dashboard">/ <b>Dashboard Link </b></Link> <br /><br /><br /><br />
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>


);
ReactDOM.render(<App />, document.getElementById("app"));
