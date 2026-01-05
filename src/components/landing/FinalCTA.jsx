import React from "react";
import { Container, Button } from "reactstrap";
import { finalCTAContent } from "../../content/landingContent.js";
import { useLanguage } from "context/LanguageContext";


export default function FinalCTA() {
    const { language } = useLanguage();
    const content = finalCTAContent[language];
  return (
    <section className="section section-dark text-center">
      <Container>
        <h3>{content.text}</h3>
        <Button color="primary" className="btn-round mt-3">
          {content.cta}
        </Button>
      </Container>
    </section>
  );
}
