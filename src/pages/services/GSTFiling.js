import React from "react";

function GSTFiling() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4"style={{color: "#111367"}}>GST Filing</h1>
      <p>
        GST Filing is mandatory for businesses registered under GST. 
        Finaegis provides professional GST filing services ensuring accuracy and compliance with regulations.
      </p>

      <h3 className="mt-4" style={{color: "#111367"}}>Services We Offer</h3>
      <ul>
        <li>Monthly and quarterly GST returns filing</li>
        <li>Reconciliation of invoices and transactions</li>
        <li>Input Tax Credit (ITC) management</li>
        <li>Assistance with GST audits</li>
      </ul>

      <h3 className="mt-4" style={{color: "#111367"}}>Process</h3>
      <ol>
        <li>Collect business invoices and records</li>
        <li>Verify input and output GST calculations</li>
        <li>Prepare and submit GST returns online</li>
        <li>Provide acknowledgment and reports</li>
      </ol>

      <h3 className="mt-4" style={{color: "#111367"}}>Benefits</h3>
      <p>
        Ensure compliance, avoid penalties, and maintain smooth business operations with professional GST filing services.
      </p>
    </div>
  );
}

export default GSTFiling;
