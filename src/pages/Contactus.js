import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Footer from "../components/Footer";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8m01uq9",  // ✅ Your EmailJS Service ID
        "template_b0d33ii", // ✅ Your EmailJS Template ID
        form.current,
        "RHYJbiXshML_qcS_j" // ✅ Your EmailJS Public Key
      )
      .then((result) => {
        console.log("✅ Email sent:", result.text);

        const formData = new FormData(form.current);
        const scriptUrl = "https://script.google.com/macros/s/AKfycbyTQMuDbLIGE-dcyCTrTe37WatMUUfsDOLqtQjgy0m3EsiprSowB00QZotPx4uUIy-ICQ/exec"; // ⚠️ Your Google Script URL

        fetch(scriptUrl, {
          method: "POST",
          body: formData,
          mode: "no-cors",
        })
          .then(() => {
            console.log("✅ Form submitted to Google Sheets!");
            alert("Message sent successfully!");
            form.current.reset();
          })
          .catch((error) => {
            console.error("❌ Google Sheets submission error:", error);
            alert("Failed to save message to spreadsheet.");
          });
      })
      .catch((error) => {
        console.error("❌ EmailJS Error:", error);
        alert("Failed to send email: " + JSON.stringify(error));
      });
  };

  return (
    <>
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="user_name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="user_email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea name="message" className="form-control" rows="5" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
      </form>

      {/* Location Section */}
      <div className="mt-5 text-center">
        <h3 className="fw-bold mb-3">Our Location</h3>
        <p className="mb-4">
          📍 Public School, Dinnur Main Rd, beside R. T. Nagar, Kauser Nagar, Dinnur, RT Nagar, Bengaluru, Karnataka 560032 <br />
          📞 +91  +91 6366922778, +91 9113949910 <br />
          ✉️ finaegis123@gmail.com
        </p>

        {/* Google Maps Embed */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.837861706481!2d77.59239867484233!3d13.02472368729552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17002a5c4111%3A0x8c43341be70c7b6c!2sFinaegis!5e1!3m2!1sen!2sin!4v1758636502990!5m2!1sen!2sin"
            width="200"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
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
        }}
        title="Call Us"
      >
        <i className="bi bi-telephone-fill"></i>
      </a>
      

    </div>
    <Footer/>
    </>
  );
}

export default Contact;
