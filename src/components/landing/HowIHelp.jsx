import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { howIHelpContent } from "../../content/landingContent.js";
import { useLanguage } from "context/LanguageContext";


export default function HowIHelp() {
    const { language } = useLanguage();
    const content = howIHelpContent[language];
  return (
    <section className="section">
      <Container>
        <Row>
          {content.map((item, index) => (
            <Col md="4" key={index}>
              <Card className="text-center">
                <CardBody>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
