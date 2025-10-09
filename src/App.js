import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contactus";

// Service Pages
import IncomeTaxFiling from "./pages/services/IncomeTaxFilling";
import ITRFiling from "./pages/services/ITRFiling";
import GSTFiling from "./pages/services/GSTFiling";
import GSTReturn from "./pages/services/GSTReturn";
import GSTServices from "./pages/services/GSTServices";
import AuditAssurance from "./pages/services/AuditAssurance";
import Auditing from "./pages/services/Auditing";
import BusinessCompliance from "./pages/services/BusinessCompliance";
import CompanyRegistration from "./pages/services/CompanyRegistration";
import LegalAdvisory from "./pages/services/LegalAdvisory";
import FinancialPlanning from "./pages/services/FinancialPlanning";
import Accounting from "./pages/services/Accounting";
import Bookkeeping from "./pages/services/Bookkeeping";
import TaxAdvisory from "./pages/services/TaxAdvisory";
import Services from "./pages/Services"; // import your new page


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service Routes */}
        <Route path="/services/income-tax-filing" element={<IncomeTaxFiling />} />
        <Route path="/services/itr-filing" element={<ITRFiling />} />
        <Route path="/services/gst-filing" element={<GSTFiling />} />
        <Route path="/services/gst-return" element={<GSTReturn />} />
        <Route path="/services/gst-services" element={<GSTServices />} />
        <Route path="/services/audit-assurance" element={<AuditAssurance />} />
        <Route path="/services/auditing" element={<Auditing />} />
        <Route path="/services/business-compliance" element={<BusinessCompliance />} />
        <Route path="/services/company-registration" element={<CompanyRegistration />} />
        <Route path="/services/legal-advisory" element={<LegalAdvisory />} />
        <Route path="/services/financial-planning" element={<FinancialPlanning />} />
        <Route path="/services/accounting" element={<Accounting />} />
        <Route path="/services/bookkeeping" element={<Bookkeeping />} />
        <Route path="/services/tax-advisory" element={<TaxAdvisory />} />
        <Route path="/services" element={<Services />} />

      </Routes>
    </Router>
  );
}

export default App;
