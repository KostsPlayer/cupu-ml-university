import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Token from "../../helper/Token";
import axios from "axios";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [active, setActive] = useState(location.pathname);
  const { token } = Token();

  const handleActive = (path) => {
    setActive(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    axios
      .delete("https://cupu-ml-university-api.vercel.app/logout")
      .then((res) => {
        navigate("/login", {
          state: { messageLogout: res.data.message },
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="navbar">
        <Link to={"/cupu-ml-university"} className="navbar-logo">
          Cupu ML University
        </Link>
        {token && token ? (
          <div className="navbar-auth" onClick={handleLogout}>
            Logout
          </div>
        ) : (
          <Link to={"/login"} className="navbar-auth">
            Login
          </Link>
        )}
        <div className="navbar-list">
          <Link
            to="/cupu-ml-university"
            className={`link ${
              active === "/cupu-ml-university" ? "active" : ""
            }`}
            onClick={() => handleActive("/cupu-ml-university")}
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
