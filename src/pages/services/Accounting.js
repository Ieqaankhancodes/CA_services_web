import { style } from "framer-motion/client";
import React from "react";

function Accounting() {
  return (
    <div className="container py-5" >
      <h1 className="fw-bold mb-4" style={{color: "#111367"}}>Accounting</h1>
      <p>
        Accurate accounting is the backbone of any business. Finaegis provides professional accounting 
        services to ensure proper financial records and reporting.
      </p>

      <h3 className="mt-4" style={{color: "#111367"}}>Services Offered</h3>
      <ul>
        <li>Bookkeeping and ledger maintenance</li>
        <li>Financial statement preparation</li>
        <li>Reconciliation and reporting</li>
        <li>Compliance with accounting standards</li>
      </ul>

      <h3 className="mt-4" style={{color: "#111367"}}>Benefits</h3>
      <p>
        Gain accurate insights, streamline financial operations, and maintain regulatory compliance.
      </p>
     
    </div>
  );
}

export default Accounting;
