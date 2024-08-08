import React from "react";
import Navbar from "../Components/Navbar";
import Start from '../sections/start';
import Features from "../sections/features";
import Pricing from "../sections/pricing";
import Faqs from "../sections/faqs";
import About from "../sections/about";

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

function Home(){ 
    return (
      <div>
      <Navbar onScrollToSection={scrollToSection} />
      <Start />
      <hr />
      <Features />
      <hr />
      <Pricing OnScrollToSection={scrollToSection} />
      <hr />
      <Faqs />
      <hr />
      <About />
    </div>
    );
}

export default Home;
