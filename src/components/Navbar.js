import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Navbar() {
  const primaryColor = "#4840e6ff";
  const accentColor = "#36bf27";

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-sm py-2"
      style={{
        backgroundColor: "#ffffff",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Finaegis Logo"
            style={{
              height: "48px",
              width: "48px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "12px",
              boxShadow: "0 0 8px rgba(107, 107, 107, 0.58)",
            }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {/* Normal Links */}
            <li className="nav-item mx-2">
              <Link className="nav-link fw-medium" to="/" style={{ color: primaryColor }}>
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link fw-medium" to="/about" style={{ color: primaryColor }}>
                About
              </Link>
            </li>

            {/* Services Mega Dropdown */}
            <li
              className="nav-item dropdown position-static mx-2"
              onMouseEnter={(e) => e.currentTarget.classList.add("show")}
              onMouseLeave={(e) => e.currentTarget.classList.remove("show")}
            >
              <a
                className="nav-link fw-medium dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: primaryColor }}
              >
                Services
              </a>
              <div
                className="dropdown-menu show-on-hover w-100 p-4 border-0 shadow-lg"
                aria-labelledby="servicesDropdown"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                }}
              >
                <div className="row">
                  {/* Column 1 */}
                  <div className="col-md-3">
                    <h6 className="fw-bold text-primary">Tax & Filing</h6>
                    <ul className="list-unstyled">
                      <li>
                        <Link className="dropdown-item" to="/services/income-tax-filing">
                          Income Tax Filing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/services/itr-filing">
                          ITR Filing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/services/gst-filing">
                          GST Filing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/services/gst-return">
                          GST Return
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/services/gst-services">
                          GST Services
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div className="col-md-3">
                    <h6 className="fw-bold text-primary">Audit & Assurance</h6>
                    <ul className="list-unstyled">
                      <li>
                        <Link className="dropdown-item" to="/services/audit-assurance">
                          Audit & Assurance
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/services/auditing">
                          Auditing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/services/business-compliance">
                          Business Compliance
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div className="col-md-3">
                    <h6 className="fw-bold text-primary">Business & Legal</h6>
                    <ul className="list-unstyled">
                      <li>
                        <Link className="dropdown-item" to="/services/company-registration">
                          Company Registration
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/services/legal-advisory">
                          Legal Advisory
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/services/financial-planning">
                          Financial Planning
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 4 */}
                  <div className="col-md-3">
                    <h6 className="fw-bold text-primary">Accounting</h6>
                    <ul className="list-unstyled">
                      <li>
                        <Link className="dropdown-item" to="/services/accounting">
                          Accounting
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/services/bookkeeping">
                          Bookkeeping
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/services/tax-advisory">
                          Tax Advisory
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Contact */}
            <li className="nav-item mx-2">
              <Link className="nav-link fw-medium" to="/contact" style={{ color: primaryColor }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Inline Styles */}
      <style>
        {`
          .nav-link:hover {
            color: ${accentColor} !important;
          }
          .dropdown-menu {
            display: none;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.3s ease;
          }
          .nav-item.dropdown.show .dropdown-menu {
            display: block;
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
          .dropdown-item {
            color: #333;
            font-size: 0.95rem;
            padding: 6px 0;
            transition: 0.2s ease;
          }
          .dropdown-item:hover {
            color: ${accentColor};
            background-color: #f5f7ff;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
