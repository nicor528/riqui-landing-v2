import React from "react";
import { Link } from "react-router-dom";

export default function SplitSection({
  title,
  description,
  cta,
  image,
  align = "left",
  link,
}) {
  return (
    <Link
      to={link}
      className={`split-section ${align}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="split-overlay" />

      <div className="split-content">
        <h1 className="split-title">{title}</h1>
        <p className="split-description">{description}</p>
        <span className="split-cta">{cta}</span>
      </div>
    </Link>
  );
}
