import React from "react";
import { Container, Row, Col } from "reactstrap";
import { automationBotsContent } from "../../content/landingContent.js";
import IconList from "./IconList";
import { useLanguage } from "context/LanguageContext";

export default function AutomationBots() {
  const { language } = useLanguage();
  const content = automationBotsContent[language]
  return (
    <section className="section section-gray">
      <Container>
        <Row>
          <Col md="12" sm="12" xs="12" className="text-left">
            <h3>{content.title}</h3>
            <p>{content.description}</p>

            <IconList items={content.items} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
