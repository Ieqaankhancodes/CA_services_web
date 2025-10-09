import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap icons are loaded if not already global
import Footer from "../components/Footer"; // adjust the path as per your project structure


function Home() {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionsRef = useRef([]);

  // Setup Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
            // Optional: stop observing once it's visible
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // trigger when 10% of the element is visible
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup function
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Helper function to assign ref and ID dynamically
  const getSectionProps = (id) => ({
    id,
    ref: (el) => {
      // Ensure we only add non-null elements
      if (el && !sectionsRef.current.includes(el)) {
        sectionsRef.current.push(el);
      }
    },
    className: `transition-item ${visibleSections[id] ? "is-visible" : ""}`,
  });

  return (
    <div>
      {/* Custom Styles for Animation */}
      <style>
        {`
          /* Animation definitions */
          .transition-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }

          .transition-item.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .hover-shadow:hover {
            transform: translateY(-5px);
            box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
            transition: all 0.3s ease-in-out;
          }

          /* Primary color definitions for consistency */
          .text-primary { color: #4840e6ff !important; }
          .bg-primary { background-color: #4840e6ff !important; }
          .btn-primary { 
            background-color: #4840e6ff; 
            border-color: #4840e6ff;
            transition: all 0.3s ease;
          }
          .btn-primary:hover {
            background-color: #36bf27;
            border-color: #36bf27;
          }

          /* Floating button animation */
          .floating-btn-animate {
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(40, 167, 69, 0); }
            100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); }
          }
        `}
      </style>

      {/* Hero Section (No scroll animation needed here) */}
      {/* Hero Section */}
      <section
        className="text-dark text-center p-5 d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "75vh",
          backgroundColor: "#0C1D3B"
      
        }}
      >
        <h1
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "clamp(7.5rem, 12vw, 15rem)",
            color: "#ffffffff",
            letterSpacing: "3px",
          }}
        >
          Finaegis
        </h1>

        <p
          className="lead"
          style={{
            color: "#36bf27",
            fontSize: "clamp(1rem, 3vw, 2rem)",
            marginTop: "-30px",
            fontFamily: "Edu NSW ACT Cursive, cursive",
          }}
        >
          Where your Money matters
        </p>

        <h1
          className="fw-bold text-light"
          style={{
            fontSize: "clamp(1.2rem, 4vw, 2rem)",
            fontFamily: "Mozilla Headline, sans-serif",
            color: "#fff7f7"
          }}
        >
          Trusted Chartered Accountant Services in Bangalore
        </h1>

        <Link
          to="/contact"
          className="btn btn-primary btn-lg mt-3"
          style={{
            background: "#36bf27",
            color: "#FFF",
            border: "none",
            transition: "all 0.3s ease",
          }}
        >
          Book Consultation
        </Link>
      </section>


      {/* Services Section */}
      <section className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Our Services</h2>
        <div className="row">
          {[
            {
              icon: "bi-cash-coin",
              title: "Income Tax Filing",
              text: "Expert assistance in tax filing and planning for individuals and businesses.",
              link: "/services/income-tax-filing"
            },
            {
              icon: "bi-receipt",
              title: "GST Services",
              text: "Complete GST solutions including registration, filing, and compliance.",
              link: "/services/gst-services"
            },
            {
              icon: "bi-briefcase",
              title: "Audit & Assurance",
              text: "Comprehensive audits ensuring financial transparency and accuracy.",
              link: "/services/audit-assurance"
            }
          ].map((service, index) => (
            <div
              className="col-12 col-md-6 mb-4"
              key={index}
              {...getSectionProps(`service-${index}`)}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Link
                to={service.link}
                className="card shadow-sm border-0 h-100 text-center p-4 hover-shadow text-decoration-none text-dark"
              >
                <i className={`bi ${service.icon} display-4 text-primary mb-3`}></i>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.text}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link
            to="/services" // this should match the route in App.js
            className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2 mx-auto"
            style={{ maxWidth: "fit-content" }}
          >
            <i className="bi bi-arrow-right-circle"></i>
            Explore More Services
          </Link>
        </div>

      </section>


      {/* Why Choose Us Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Why Choose Finaegis?</h2>
          <div className="row">
            {[
              {
                icon: "bi-people",
                title: "Experienced Professionals",
                text: "Led by qualified Chartered Accountants with years of hands-on experience in finance, taxation, and compliance.",
              },
              {
                icon: "bi-shield-check",
                title: "Reliable & Transparent",
                text: "We believe in integrity, accuracy, and building long-term trust with our clients.",
              },
              {
                icon: "bi-graph-up-arrow",
                title: "Growth-Oriented Approach",
                text: "We don’t just handle numbers — we provide financial insights that help your business grow.",
              },
            ].map((item, index) => (
              <div
                className="col-12 col-md-4 mb-4"
                key={index}
                {...getSectionProps(`why-us-${index}`)} // Apply animation props
                style={{ transitionDelay: `${index * 0.1}s` }} // Staggered delay
              >
                <div className="card h-100 border-0 shadow-sm p-4 hover-shadow">
                  <i className={`bi ${item.icon} display-5 text-primary mb-3`}></i>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section (No animation added to these cards for simplicity) */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">Our Expertise</h2>
        <div className="row text-center">
          {[
            "Startup Compliance & Registration",
            "Corporate Tax Planning",
            "Accounting & Bookkeeping",
            "Internal Audits",
            "Investment & Financial Advisory",
            "Business Valuation",
          ].map((topic, index) => (
            <div className="col-12 col-md-4 mb-3" key={index}>
              <div className="p-4 border rounded shadow-sm h-100 hover-shadow">
                <i className="bi bi-check-circle-fill text-success mb-2"></i>
                <p className="fw-semibold">{topic}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">What Our Clients Say</h2>
          <div className="row justify-content-center">
            {[
              {
                name: "Ravi Kumar",
                text: "Finaegis made my tax filing process completely stress-free. Highly professional and efficient team!",
              },
              {
                name: "Sneha Patel",
                text: "They helped me register my startup and handle all compliance perfectly. Highly recommend their service.",
              },
            ].map((testimonial, index) => (
              <div
                className="col-12 col-md-5 mb-4"
                key={index}
                {...getSectionProps(`testimonial-${index}`)} // Apply animation props
                style={{ transitionDelay: `${index * 0.1}s` }} // Staggered delay
              >
                <div className="card text-dark p-4 shadow-sm h-100">
                  <p>“{testimonial.text}”</p>
                  <h6 className="mt-3 text-primary">— {testimonial.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <a
        href="tel:+916366922778" // replace with your phone number
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#28a745",
          color: "#fff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          zIndex: 1000,
          fontSize: "28px",
          textDecoration: "none",
        }}
        title="Call Us"
        className="floating-btn-animate" // Add pulsing animation class
      >
        <i className="bi bi-telephone-fill"></i>
      </a>


      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;
