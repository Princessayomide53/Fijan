import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Abouts from '../Routers/About/Abouts';
import Home from './Home';
import Contacts from '../Routers/Contact/Contacts';
import Career from '../Routers/Careers/Career';
import Layout from './Layout';
import Homecare from '../Routers/HomeCare/Homecare';
import Nurses from '../Routers/NursingCare/Nurses';
import Mental from '../Routers/Mental Care/Mental';

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/about'
          element={
            <Layout>
              <Abouts />
            </Layout>
          }
        />
        <Route
          path='/contact'
          element={
            <Layout>
              <Contacts />
            </Layout>
          }
        />

        <Route
          path='/employers'
          element={
            <Layout>
              <Career />
            </Layout>
          }
        />
        <Route
          path='/nurses'
          element={
            <Layout>
              <Homecare />
            </Layout>
          }
        />
        <Route
          path='/medicalDoctors'
          element={
            <Layout>
              <Nurses />
            </Layout>
          }
        />
        <Route
          path='/careSupport'
          element={
            <Layout>
              <Mental />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
