import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import { useLanguage } from "context/LanguageContext";
import { heroContent } from "../../content/landingContent.js";
import ConsultationModal from "components/Modals/ConsultationModal";
import headerImage from "assets/img/img-939Qn7MQY2ocov7YaLOiAosS.png";

import AnimatedLogo from "components/Brand/AnimatedLogo";
import IntroLoader from "components/Brand/IntroLoader";

function LandingPageHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { language } = useLanguage();
  const content = heroContent[language];

  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroLoader onFinish={() => setShowIntro(false)} />}

        <div
          className="page-header section-dark"
          style={{
            backgroundImage: `url(${headerImage})`
          }}
        >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            
            {/* LOGO ANIMADO */}
            <div className="mt-3">
              <AnimatedLogo size={200} />
            </div>


            <h1>{content.title}</h1>
            <h3>{content.subtitle}</h3>
            <br />
            <Button
              color="info"
              size="lg"
              className="btn-round mr-2"
              onClick={() => setIsModalOpen(true)}
            >
              {content.primaryCTA}
            </Button>
            <Button color="link" className="btn-neutral">
              {content.secondaryCTA}
            </Button>
          </div>
        </Container>
        <ConsultationModal
          isOpen={isModalOpen}
          toggle={() => setIsModalOpen(!isModalOpen)}
        />
      </div>
    </>
  );
}

export default LandingPageHeader;
