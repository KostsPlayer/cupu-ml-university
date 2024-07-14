import React, { useEffect } from "react";
import SmoothScroll from "../../helper/SmoothScroll";
import Navbar from "./../../component/Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Advantage from "./Advantage/Advantage";
import Courses from "./Courses/Courses";
import Footer from "../../component/Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.messageLogin) {
      alert(location.state.messageLogin);
      navigate(location.pathname, {
        state: { ...location.state, messageLogin: undefined },
        replace: true,
      });
    }
  }, [location.state, location.pathname, navigate]);

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
