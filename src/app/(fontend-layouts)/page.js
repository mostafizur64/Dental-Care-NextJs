import React from 'react';
import Service from '../Home/Service';
import AboutUsPage from '../Home/AboutUs';
import Testimonials from '../Home/Testimonials';
import FAQ from '../Home/FAQ';
import Pricing from '../Home/Pricing';
import OurDoctor from '../Home/OurDoctor';

const HomePage = () => {
  return (
    <main>

      <Service />
      <AboutUsPage />
      <Testimonials />
      <Pricing/>
      <FAQ/>
      <OurDoctor/>
    </main>
  );
};

export default HomePage;