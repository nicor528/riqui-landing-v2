import React from "react";
import { Container, Row, Col } from "reactstrap";
import { implementationContent } from "../../content/landingContent.js";
import IconList from "./IconList";
import { useLanguage } from "context/LanguageContext";


export default function ImplementationOffer() {
    const { language } = useLanguage();
    const content = implementationContent[language];
  return (
    <section className="section">
      <Container>
        <Row>
          <Col md="12" sm="12" xs="12" className="text-right">
            <h3>{content.title}</h3>
            <p>{content.description}</p>

            <IconList items={content.items} />

{/*            <small className="text-muted">
              {content.note}
            </small>*/}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="text-center">
            <p>{content.note}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
