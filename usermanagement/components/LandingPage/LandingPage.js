import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import OfferSection from "../OfferSection/OfferSection";
import PropertyType from "../PropertyType/PropertyType";

function LandingPage() {
  return (
    <div>
      {/* header */}
      <Header />
      {/* banner */}
      <Navbar />
      {/* OfferSection */}
      <OfferSection />
      {/* PropertyType                  make this component reusable */}
      <PropertyType />               
      {/* PopularIndianDestination */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
