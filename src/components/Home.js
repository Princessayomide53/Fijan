import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Choose from "./Choose";
import Jobs from "./Jobs";
import Frequent from "./Frequent";
import Blogs from "./Blogs";
import Settle from "./Settle";
import Consultation from "./Consultation";

const Home = () => {
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
    </>
  );
};

export default Home;
