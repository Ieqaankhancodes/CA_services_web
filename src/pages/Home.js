import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center p-5"
        style={{
          background: "linear-gradient(to right, #0066cc, #003366)",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
        <h1 style={{fontFamily: "Bebas Neue, sans-serif", fontSize: "5rem"}}>
          Finaegis
        </h1>
        <h1 className="display-4 fw-bold">Trusted Chartered Accountant Services in Banglore</h1>
        <p className="lead">Helping businesses & individuals with Tax, Audit & Compliance</p>
        <Link to="/contact" className="btn btn-light btn-lg mt-3">Book Consultation</Link>
      </section>

      {/* Services Section */}
      <section className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Our Services</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 h-100 text-center p-3 hover-shadow">
              <i className="bi bi-cash-coin display-4 text-primary mb-3"></i>
              <h5 className="card-title">Income Tax Filing</h5>
              <p className="card-text">Expert assistance in tax filing and planning for individuals and businesses.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 h-100 text-center p-3 hover-shadow">
              <i className="bi bi-receipt display-4 text-primary mb-3"></i>
              <h5 className="card-title">GST Services</h5>
              <p className="card-text">Complete GST solutions including registration, filing & compliance.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 h-100 text-center p-3 hover-shadow">
              <i className="bi bi-briefcase display-4 text-primary mb-3"></i>
              <h5 className="card-title">Audit & Assurance</h5>
              <p className="card-text">Detailed auditing services ensuring compliance and accuracy.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
