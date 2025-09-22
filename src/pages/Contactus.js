import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Send the email using EmailJS
    emailjs
      .sendForm(
        "service_8m01uq9",  // ✅ Your EmailJS Service ID
        "template_b0d33ii",  // ✅ Your EmailJS Template ID
        form.current,
        "RHYJbiXshML_qcS_j"    // ✅ Your EmailJS Public Key
      )
      .then((result) => {
        console.log("✅ Email sent:", result.text);

        // 2. After the email is sent successfully, submit the data to Google Sheets
        const formData = new FormData(form.current);
        const scriptUrl = ""; // ⚠️ Paste your URL here

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
    </div>
  );
}

export default Contact;