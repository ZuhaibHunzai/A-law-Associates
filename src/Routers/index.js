import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "../Components/Footer";
import AboutPage from "../Pages/About";
import ContactPage from "../Pages/Contact";
import HomePage from "../Pages/Home";
import ServicesPage from "../Pages/Services";
import TeamPage from "../Pages/Team";
import HeaderCon from "../Components/HeaderConditional";
import NgoSocietyTrustRegPage from "../Pages/CriminalLitigationPage";
import ChamberPage from "../Pages/ConstitutionalMattersPage";

import UpdatesPage from "../Pages/Updates";
import TaxMattersPage from "../Pages/TaxMattersPage";
import FamilyMattersPage from "../Pages/FamilyMattersPage";
import CivilLitigationPage from "../Pages/CivilLitigationPage";
import CriminalLitigationPage from "../Pages/CriminalLitigationPage";
import ConstitutionalMattersPage from "../Pages/ConstitutionalMattersPage";
import ServicesPageDesign from "../Components/servicesPageDesign/servicesPageDesign";
import OtherLaws from "../Pages/otherLaws";
import CorporateMattersPage from "../Pages/CorporateMatters/corporateMatters";

const Routers = () => {
  return (
    <>
      <Router>
        <HeaderCon />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/new-updates" element={<UpdatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/tax-maters" element={<TaxMattersPage />} />
          <Route
            path="/services/corporate-matters"
            element={<CorporateMattersPage />}
          />
          <Route
            path="/services/family-matters"
            element={<FamilyMattersPage />}
          />
          <Route
            path="/services/civil-litigation"
            element={<CivilLitigationPage />}
          />
          <Route
            path="/services/criminal-litigation"
            element={<CriminalLitigationPage />}
          />
          <Route
            path="/services/constitutional-matters"
            element={<ConstitutionalMattersPage />}
          />
          <Route path="/services/other-laws" element={<OtherLaws />} />
          <Route
            path="/ngo-society-trust-registration"
            element={<NgoSocietyTrustRegPage />}
          />
          <Route path="hello" element={<ServicesPageDesign />} />
          <Route
            path="/chamber-of-commerce-registration"
            element={<ChamberPage />}
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default Routers;
