import React, { useEffect } from 'react';
import Hero from './Hero';
import Frequent from '../../components/Frequent';
import ContactPage from './ContactPage';

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <div>
      <Hero />
      <ContactPage />
      {/* <Frequent /> */}
    </div>
  );
};

export default Contacts;
