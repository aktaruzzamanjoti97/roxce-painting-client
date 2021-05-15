import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Header from "../Header/Header";
import OurServices from "../OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import WorkingSkills from "../WorkingSkills/WorkingSkills";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <WhatWeDo />
      <OurServices />
      <WorkingSkills />
      <Testimonials />
    </div>
  );
};

export default Home;
