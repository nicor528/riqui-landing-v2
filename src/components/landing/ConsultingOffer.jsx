import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { consultingContent } from "../../content/landingContent.js";
import IconList from "./IconList";
import { useLanguage } from "context/LanguageContext";

export default function ConsultingOffer() {
  const { language } = useLanguage();
  const content = consultingContent[language]
  return (
    <section className="section section-gray">
      <Container>
        <Row>
          <Col md="12" sm="12" xs="12" className="text-left">
            <h2>{content.title}</h2>
            <h4 className="info-title">{content.description}</h4>

            <IconList items={content.items} />

            <Button color="info" className="btn-round mt-3">
              {content.cta}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
