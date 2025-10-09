import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* ===== Company Info ===== */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase" style={{ color: "#36bf27ff" }}>
              Finaegis
            </h5>
            <p className="small">
              Finaegis is a trusted Chartered Accountant firm based in Bangalore,
              offering expert services in taxation, auditing, business advisory, and
              startup consulting. Our mission is to simplify compliance and empower
              businesses to grow with confidence.
            </p>
          </div>

          {/* ===== Quick Links ===== */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white text-decoration-none">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== Contact Info ===== */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase">Contact Us</h5>
            <p className="small mb-1">
              <i className="bi bi-geo-alt-fill text-success me-2"></i>
              Bangalore, Karnataka, India
            </p>
            <p className="small mb-1">
              <i className="bi bi-envelope-fill text-success me-2"></i>
              finaegis123@gmail.com
            </p>
            <p className="small mb-1">
              <i className="bi bi-telephone-fill text-success me-2"></i>
              +91 6366922778  |  +91 9036759426  |  +91 9113949910
            </p>
            <div className="mt-2">
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/ibsar-ahmed-garag/" className="text-white me-3">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <hr className="border-secondary" />
        <div className="text-center small">
          © {new Date().getFullYear()} <strong>Finaegis</strong> | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
