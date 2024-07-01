import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">Cupu ML University</div>
        <div className="footer-other">
          <div className="quotes">
            <span className="who">John Dewey</span>
            <span className="content">
              “Education Is Not Preparation for Life; Education Is Life Itself.”
            </span>
            <span className="reason">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quia a laboriosam eligendi illum vitae.
            </span>
          </div>
          <div className="courses">
            <div className="title">Courses</div>
            <div className="courses-list">
              <Link to={"/"} className="courses-list-link">
                Business Management
              </Link>
              <Link to={"/"} className="courses-list-link">
                Arts Humanities
              </Link>
              <Link to={"/"} className="courses-list-link">
                Mathematics for Teaching
              </Link>
              <Link to={"/"} className="courses-list-link">
                Life Sciences & Medicine
              </Link>
              <Link to={"/"} className="courses-list-link">
                Natural Sciences
              </Link>
              <Link to={"/"} className="courses-list-link">
                Master of Business
              </Link>
              <Link to={"/"} className="courses-list-link">
                Applied Mathematics
              </Link>
            </div>
          </div>
          <div className="contact">
            <div className="title">Contact</div>
            <div className="contact-list">
              <div className="item">
                <span className="material-symbols-rounded">location_on</span>
                <span className="subtitle">Address</span>
                <span className="text">
                  Jl. Sariasih No.54, Sarijadi, Kec. Sukasari, Kota Bandung,
                  Jawa Barat 40151
                </span>
              </div>
              <div className="item">
                <span className="material-symbols-rounded">call</span>
                <span className="subtitle">Phone Number</span>
                <span className="text">+62 812-3456-789</span>
              </div>
              <div className="item">
                <span className="material-symbols-rounded">mail</span>
                <span className="subtitle">Email</span>
                <span className="text">todos@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-copyright">
          <span>
            Copyright <span className="symbol">&copy; </span>
            2024
          </span>
          <span>Powered by Cupu ML University</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
