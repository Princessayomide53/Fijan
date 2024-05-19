// Layout.js
import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Scroll from './Scroll';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      {/* <Scroll /> */}
      <Footer />
    </div>
  );
};

export default Layout;
