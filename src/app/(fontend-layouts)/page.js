import React from 'react';
import Service from '../Home/Service';
import AboutUsPage from '../Home/AboutUs';
import Testimonials from '../Home/Testimonials';
import FAQ from '../Home/FAQ';
import Pricing from '../Home/Pricing';

const HomePage = () => {
  return (
    <main>

      <Service />
      <AboutUsPage />
      <Testimonials />
      <Pricing/>
      <FAQ/>
    </main>
  );
};

export default HomePage;