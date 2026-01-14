import React from "react";
import SplitSection from "./SplitSection";
import "./homeSplitView.css";
import consult from "../../assets/img/home/consulting.png";
import automa from "../../assets/img/home/automation.png";

export default function HomeSplitView() {
  return (
    <div className="home-split-view">
      <SplitSection
        title="Consultorías"
        description="Claridad técnica, dirección y decisiones correctas para avanzar sin perder tiempo."
        cta="Ver consultorías"
        image={consult}
        align="left"
        link="/consulting"
      />

      <SplitSection
        title="Automatización"
        description="Bots, sistemas y automatizaciones para escalar procesos y reducir carga operativa."
        cta="Explorar automatizaciones"
        image={automa}
        align="right"
        link="/automation"
      />
    </div>
  );
}