import { heroContent } from "../../content/landingContent.js";
import React from "react";
import { Button, Container } from "reactstrap";

export default function Hero() {
  return (
    <div className="page-header section-dark"  
        style={{
            backgroundImage:
                "url(" + require("assets/img/img-939Qn7MQY2ocov7YaLOiAosS.png") + ")",
        }}
    >
      <Container className="text-center">
        <h1 className="title">{heroContent.title}</h1>
        <p className="description">{heroContent.subtitle}</p>

        <div className="mt-4">
          <Button color="primary" className="btn-round mr-2">
            {heroContent.primaryCTA}
          </Button>
          <Button color="link">
            {heroContent.secondaryCTA}
          </Button>
        </div>
      </Container>
    </div>
  );
}
