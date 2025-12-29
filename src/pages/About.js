import React from "react";
import { motion } from "framer-motion"; // For smooth fade/slide animations
import Footer from "../components/Footer";
function About() {
  // Simple animation for each section
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
    <div
      className="container mt-5 mb-5"
      style={{
        fontFamily: "Poppins, sans-serif",
        color: "#222",
        lineHeight: "1.8",
        maxWidth: "900px",
      }}
    >
      {/* Title */}
      <motion.h2
        className="text-center fw-bold mb-4"
        style={{ color: "#111367" }}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        About Us
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        className="lead text-center mb-5"
        style={{ color: "#555", margin: "0 auto" }}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
      >
        <strong>FINAEGIS</strong> is a professional consultancy firm based in
        Bangalore, India, co-founded by <strong>Ahmed Garag</strong>. We provide
        comprehensive financial, audit, tax, and strategic advisory services
        designed to empower startups and small-to-medium enterprises (SMEs) to
        grow with confidence and compliance.
      </motion.p>

      {/* Mission */}
      <motion.section
        className="mb-5"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.4}
      >
        <h4 className="fw-bold mb-3" style={{ color: "#111367" }}>
          Our Mission
        </h4>
        <p style={{ color: "#444" }}>
          At <strong>FINAEGIS</strong>, our mission is to simplify financial and
          regulatory complexities for entrepreneurs. We aim to help businesses
          make informed decisions, maintain strong financial health, and achieve
          sustainable growth through expert advisory and compliance solutions.
        </p>
      </motion.section>

      {/* What We Do */}
      <motion.section
        className="mb-5"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.6}
      >
        <h4 className="fw-bold mb-3" style={{ color: "#111367" }}>
          What We Do
        </h4>
        <p style={{ color: "#444" }}>
          We specialize in providing end-to-end support for startups and SMEs —
          from <strong>business incorporation</strong> and{" "}
          <strong>regulatory compliance</strong> to{" "}
          <strong>financial management</strong> and{" "}
          <strong>growth planning</strong>. Our team ensures that your business
          remains compliant while you focus on innovation and scaling your
          operations.
        </p>
      </motion.section>

      {/* Startup Support */}
      <motion.section
        className="mb-5"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.8}
      >
        <h4 className="fw-bold mb-3" style={{ color: "#111367" }}>
          Startup & Operational Support
        </h4>
        <p style={{ color: "#444" }}>
          We assist early-stage businesses in setting up a strong operational
          foundation through:
        </p>
        <ul style={{ color: "#444", paddingLeft: "20px" }}>
          <li>Financial planning and forecasting</li>
          <li>Internal controls and business process optimization</li>
          <li>Regulatory and tax compliance</li>
          <li>Strategic financial advisory for growth</li>
        </ul>
      </motion.section>

      {/* Ethical Investments */}
      <motion.section
        className="mb-5"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.0}
      >
        <h4 className="fw-bold mb-3" style={{ color: "#111367" }}>
          Ethical & Shariah-Compliant Investments
        </h4>
        <p style={{ color: "#444" }}>
          <strong>FINAEGIS</strong> connects promising startups with investors
          seeking ethical and Shariah-compliant opportunities. We facilitate
          partnerships under:
        </p>
        <ul style={{ color: "#444", paddingLeft: "20px" }}>
          <li>
            <strong>Mudarib Agreements</strong> – Trust-based investment
            partnerships where FINAEGIS or the entrepreneur manages the project
            on behalf of the investor.
          </li>
          <li>
            <strong>Musharakah Agreements</strong> – Profit-and-loss sharing
            partnerships where both parties contribute capital and share in the
            outcomes.
          </li>
        </ul>
        <p style={{ color: "#444" }}>
          These transparent and principled models align with Islamic finance
          values, offering secure and ethical investment options for both local
          and international investors.
        </p>
      </motion.section>

      {/* Join Network */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.2}
      >
        <h4 className="fw-bold mb-3" style={{ color: "#111367" }}>
          Join Our Network
        </h4>
        <p style={{ color: "#444" }}>
          We are actively seeking <strong>investors</strong> and{" "}
          <strong>startups</strong> looking to collaborate in sustainable,
          Shariah-compliant ventures. Our network includes vetted businesses
          across diverse sectors, backed by due diligence and transparency.
        </p>
      </motion.section>

      <hr className="mt-5" />
      <p className="text-center text-muted mt-3">
        © 2025 FINAEGIS | Empowering Businesses with Ethical Financial
        Excellence
      </p>

      {/* Floating Call Button */}
      <a
        href="tel:+911234567890"
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
    <Footer/>
    </>
  );
}

export default About;

