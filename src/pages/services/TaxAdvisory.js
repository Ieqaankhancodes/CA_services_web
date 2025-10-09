import React from "react";

function TaxAdvisory() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4" style={{color: "#111367"}}>Tax Advisory</h1>
      <p>
        Finaegis provides expert tax advisory services for individuals and businesses. 
        Our team helps minimize tax liability while staying fully compliant with regulations.
      </p>

      <h3 className="mt-4" style={{color: "#111367"}}>Our Services</h3>
      <ul>
        <li>Corporate and individual tax planning</li>
        <li>Advice on deductions and exemptions</li>
        <li>GST and indirect tax advisory</li>
        <li>Support for audits and notices</li>
      </ul>

      <h3 className="mt-4" style={{color: "#111367"}}>Benefits</h3>
      <p>
        Efficient tax management, reduced liabilities, and expert guidance to optimize your finances.
      </p>
    </div>
  );
}

export default TaxAdvisory;
