import React from "react";

function Services() {
  return (
    <><div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 h-100 text-center p-3 hover-shadow">
              <i className="bi bi-cash-coin display-4 text-primary mb-3"></i>
              <h5 className="card-title">Income Tax Filing</h5>
              <p className="card-text">Professional tax filing & planning services for individuals & businesses.</p>
          </div>
      </div><div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 h-100 text-center p-3 hover-shadow">
                  <i className="bi bi-receipt display-4 text-primary mb-3"></i>
                  <h5 className="card-title">GST Services</h5>
                  <p className="card-text">GST registration, filing & compliance management.</p>
              </div>
          </div><div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 h-100 text-center p-3 hover-shadow">
                  <i className="bi bi-briefcase display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Audit & Assurance</h5>
                  <p className="card-text">Complete audit solutions to ensure financial accuracy.</p>
              </div>
          </div></>

  );
}

export default Services;
