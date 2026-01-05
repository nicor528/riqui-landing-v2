import React from "react";
import { Row, Col } from "reactstrap";

export default function IconList({ items }) {
  return (
    <Row className="mt-4">
      {items.map((item, index) => (
        <Col md="3" sm="6" xs="12" key={index} className="text-center">
          <div className="info">
            <div className="icon icon-info">
              <i className={`nc-icon ${item.icon}`} />
            </div>
            <div className="info-title">
              <p>{item.text}</p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
