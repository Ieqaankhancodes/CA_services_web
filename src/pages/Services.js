import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link

function Services() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Service items with their respective links
  const services = [
    {
      icon: "bi bi-cash-coin",
      title: "Income Tax Filing",
      text: "Professional tax filing & planning services for individuals & businesses.",
      link: "/services/income-tax-filing",
    },
    {
      icon: "bi bi-receipt",
      title: "GST Services",
      text: "GST registration, filing & compliance management.",
      link: "/services/gst-services",
    },
    {
      icon: "bi bi-briefcase",
      title: "Audit & Assurance",
      text: "Complete audit solutions to ensure financial accuracy.",
      link: "/services/audit-assurance",
    },
    {
      icon: "bi bi-file-earmark-text",
      title: "ITR Filing",
      text: "Easy and accurate ITR filing services for salaried and business individuals.",
      link: "/services/itr-filing",
    },
    {
      icon: "bi bi-file-earmark-bar-graph",
      title: "GST Filing",
      text: "Hassle-free GST filing services to keep your business compliant.",
      link: "/services/gst-filing",
    },
    {
      icon: "bi bi-journal-check",
      title: "GST Return",
      text: "Timely GST return preparation and submission for businesses.",
      link: "/services/gst-return",
    },
    {
      icon: "bi bi-building",
      title: "Company Registration",
      text: "End-to-end company registration and incorporation services.",
      link: "/services/company-registration",
    },
    {
      icon: "bi bi-calculator",
      title: "Accounting",
      text: "Comprehensive accounting solutions for businesses of all sizes.",
      link: "/services/accounting",
    },
    {
      icon: "bi bi-check2-circle",
      title: "Auditing",
      text: "Detailed auditing to ensure compliance and financial accuracy.",
      link: "/services/auditing",
    },
    {
      icon: "bi bi-pie-chart",
      title: "Financial Planning",
      text: "Strategic financial planning for long-term stability and growth.",
      link: "/services/financial-planning",
    },
    {
      icon: "bi bi-shield-check",
      title: "Business Compliance",
      text: "Ensure complete legal and regulatory compliance for your business.",
      link: "/services/business-compliance",
    },
    {
      icon: "bi bi-balance-scale",
      title: "Legal Advisory",
      text: "Expert legal advisory services for businesses and individuals.",
      link: "/services/legal-advisory",
    },
  ];

  return (
    <div className="container my-5">
      <motion.div
        className="row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
          >
            {/* Wrap card in Link */}
            <Link
              to={service.link}
              className="text-decoration-none text-dark"
            >
              <div className="card border-0 h-100 text-center p-4 shadow-sm">
                <i className={`${service.icon} display-4 text-primary mb-3`}></i>
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text text-muted">{service.text}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Call Button */}
      <a
        href="tel:+911234567890" // replace with your phone number
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
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        title="Call Us"
      >
        <i className="bi bi-telephone-fill"></i>
      </a>
    </div>
  );
}

export default Services;
