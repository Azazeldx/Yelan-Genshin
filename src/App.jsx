import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/experience";
import Service from "./components/service/Service";
import Portofolio from "./components/portofolio/Portofolio";
import Testiomonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portofolio />
      <Testiomonial />
      <Footer />
    </>
  );
};

export default App;
