import React from "react";

function Bookkeeping() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4" style={{color: "#111367"}}>Bookkeeping</h1>
      <p>
        Finaegis provides comprehensive bookkeeping services to maintain accurate records of all business transactions. 
        This helps in smooth financial management and decision making.
      </p>

      <h3 className="mt-4" style={{color: "#111367"}}>Our Services</h3>
      <ul>
        <li>Recording daily transactions</li>
        <li>Maintaining ledgers and journals</li>
        <li>Bank reconciliation and monitoring</li>
        <li>Preparation of periodic financial reports</li>
      </ul>

      <h3 className="mt-4" style={{color: "#111367"}}>Benefits</h3>
      <p>
        Keep financial records organized, make informed business decisions, and ensure compliance.
      </p>
    </div>
  );
}

export default Bookkeeping;
