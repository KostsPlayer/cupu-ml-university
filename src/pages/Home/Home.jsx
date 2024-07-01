import React from "react";
import SmoothScroll from "../../helper/SmoothScroll";
import Navbar from "./../../component/Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Advantage from "./Advantage/Advantage";
import Courses from "./Courses/Courses";
import Footer from "../../component/Footer/Footer";

function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <About />
      <Advantage />
      <Courses />
      <Footer />
    </>
  );
}

export default Home;
