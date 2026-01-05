/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function InglishContactPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/contacto.png") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="main">
            <div className="section landing-section">
            <Container>
            <Row>
                <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Contact Us</h2>
                <Form className="contact-form">
                    <Row>
                    <Col md="12">
                        <label>Phone</label>
                        <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <i className="nc-icon nc-mobile" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Phone" type="text" value={"+541169018596"} />
                        </InputGroup>
                    </Col>
                    <Col md="12">
                        <label>Email</label>
                        <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" value={"nicolasriquelme528@gmail.com"} ></Input>
                        </InputGroup>
                    </Col>
                    </Row>
    {/*                  <label>Message</label>
                    <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                    />*/}
    {/*                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                        <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                        </Button>
                    </Col>
                    </Row>*/}
                </Form>
                </Col>
            </Row>
            </Container>
        </div>
    </div>
      </div>
    </>
  );
}

export default InglishContactPageHeader;
