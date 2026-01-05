import React from "react";
import { Container, Row, Col } from "reactstrap";
import { educationContent } from "../../content/landingContent.js";
import IconList from "./IconList";
import { useLanguage } from "context/LanguageContext";

export default function Education() {
  const { language } = useLanguage();
  const content = educationContent[language]
  return (
    <section className="section">
      <Container>
        <Row>
          <Col md="12" sm="12" xs="12" className="text-right">
            <h3>{content.title}</h3>
            <p>{content.description}</p>
             <IconList items={content.items} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
