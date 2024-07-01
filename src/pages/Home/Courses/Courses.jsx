import React, { useCallback } from "react";

function Courses() {
  const formatPrice = useCallback((price) => {
    const rupiah = price * 1000;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(rupiah);
  }, []);

  return (
    <>
      <div className="courses">
        <div className="courses-image"></div>
        <div className="courses-info">
          <div className="courses-info-above">
            <div className="title">
              <div className="text">Popular Courses</div>
              <div className="line"></div>
            </div>
            <div className="description">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut voluptate velit esse cillum
            </div>
          </div>
          <div className="courses-info-below">
            <div className="wrapper">
              <div className="year">4 Years</div>
              <div className="content">Business Management</div>
              <div className="price">{formatPrice(5500)}</div>
            </div>
            <div className="wrapper">
              <div className="year">3 Years</div>
              <div className="content">Mathematics For Teaching</div>
              <div className="price">{formatPrice(4500)}</div>
            </div>
            <div className="wrapper">
              <div className="year">4 Years</div>
              <div className="content">Master of Business</div>
              <div className="price">{formatPrice(4000)}</div>
            </div>
            <div className="wrapper">
              <div className="year">5 Years</div>
              <div className="content">Arts & Humanities</div>
              <div className="price">{formatPrice(6500)}</div>
            </div>
            <div className="wrapper">
              <div className="year">2 Years</div>
              <div className="content">Life Sciences & Medicine</div>
              <div className="price">{formatPrice(5500)}</div>
            </div>
            <div className="wrapper">
              <div className="year">3 Years</div>
              <div className="content">Applied Mathematics</div>
              <div className="price">{formatPrice(4000)}</div>
            </div>
            <div className="wrapper">
              <div className="year">5 Years</div>
              <div className="content">Natural Sciences</div>
              <div className="price">{formatPrice(6000)}</div>
            </div>
            <div className="wrapper">
              <div className="year">2 Years</div>
              <div className="content">Digital Marketing</div>
              <div className="price">{formatPrice(3500)}</div>
            </div>
          </div>
          <div className="courses-info-all">View All Courses</div>
        </div>
      </div>
    </>
  );
}

export default Courses;
