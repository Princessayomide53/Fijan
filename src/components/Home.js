import React, { useEffect } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Choose from './Choose';
import Jobs from './Jobs';
import Frequent from './Frequent';
import Blogs from './Blogs';
import Settle from './Settle';
import Consultation from './Consultation';
import Footer from './Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Choose />
      <Jobs />
      <Consultation />
      <Blogs />
      <Settle />
      <Frequent />
      <Footer />
    </>
  );
};

export default Home;
