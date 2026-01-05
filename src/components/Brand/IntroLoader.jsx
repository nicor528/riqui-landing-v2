import React, { useEffect } from "react";
import AnimatedLogo from "./AnimatedLogo.jsx";
import "./introLoader.css";

export default function IntroLoader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="intro-loader">
      <AnimatedLogo size={180} />
    </div>
  );
}
