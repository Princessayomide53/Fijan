import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Abouts from "../Routers/About/Abouts";
import Home from "./Home";
import Contacts from "../Routers/Contact/Contacts";
import Service from "../Routers/Services/Service";
import Career from "../Routers/Careers/Career";
import Layout from "./Layout";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Layout>
              <Abouts />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contacts />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Service />
            </Layout>
          }
        />
        <Route
          path="/careers"
          element={
            <Layout>
              <Career />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
