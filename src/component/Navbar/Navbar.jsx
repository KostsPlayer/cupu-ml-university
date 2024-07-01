import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleActive = (path) => {
    setActive(path);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">Cupu ML University</div>
        <div className="navbar-list">
          <Link
            to="/"
            className={`link ${active === "/" ? "active" : ""}`}
            onClick={() => handleActive("/")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`link ${active === "/about" ? "active" : ""}`}
            onClick={() => handleActive("/about")}
          >
            About
          </Link>
          <Link
            to="/courses"
            className={`link ${active === "/courses" ? "active" : ""}`}
            onClick={() => handleActive("/courses")}
          >
            Courses
          </Link>
          <Link
            to="/teachers"
            className={`link ${active === "/teachers" ? "active" : ""}`}
            onClick={() => handleActive("/teachers")}
          >
            Teachers
          </Link>
          <Link
            to="/gallery"
            className={`link ${active === "/gallery" ? "active" : ""}`}
            onClick={() => handleActive("/gallery")}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className={`link ${active === "/contact" ? "active" : ""}`}
            onClick={() => handleActive("/contact")}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
