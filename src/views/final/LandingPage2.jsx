import React from "react";

import Hero from "components/landing/Hero";
import HowIHelp from "components/landing/HowIHelp";
import ConsultingOffer from "components/landing/ConsultingOffer";
import ImplementationOffer from "components/landing/ImplementationOffer";
import AutomationBots from "components/landing/AutomationBots";
import Education from "components/landing/Education";
import FinalCTA from "components/landing/FinalCTA";
import RiquiTechNavBar from "components/Navbars/riquitech-navbar";
import RiquiFooter from "components/Footers/RiquiFooter.jsx";
import LandingPageHeader from "components/landing/LandingPageHeader";

export default function LandingPage2() {
  return (
    <>
      <RiquiTechNavBar />
      {/*<Hero />*/}
      <LandingPageHeader/>
      <HowIHelp />
      <ConsultingOffer />
      <ImplementationOffer />
      <AutomationBots />
      <Education />
      <FinalCTA />
      <RiquiFooter />
    </>
  );
}
