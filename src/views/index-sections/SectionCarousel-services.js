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
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// Define los servicios con títulos, descripciones e iconos
const services = [
  {
    title: "Landing pages o páginas de presentación",
    description: "Impulsa tu presencia online con nuestras landing pages personalizadas. Rápidas, efectivas y diseñadas para captar la atención de tus clientes potenciales.",
    icon: "nc-icon nc-badge",
  },
  {
    title: "Desarrollo de nuevas ideas",
    description: "Transforma tus ideas en realidad con nuestro servicio de desarrollo. Innovación y experiencia trabajando juntas para hacer posible lo imposible.",
    icon: "nc-icon nc-bulb-63",
  },
  {
    title: "Estadísticas y Análisis de datos",
    description: "Descubre información valiosa con nuestro servicio de análisis de datos. Transforma números en insights poderosos para impulsar tu negocio hacia el éxito.",
    icon: "nc-icon nc-chart-bar-32",
  },
  {
    title: "Robótica y Domótica",
    description: "Automatiza tu hogar u oficina con nuestra experiencia en robótica y domótica. Soluciones inteligentes para hacer tu vida más cómoda y eficiente.",
    icon: "nc-icon nc-settings-gear-65",
  },
  {
    title: "Marketing digital",
    description: "Eleva tu estrategia digital con nuestro expertise en marketing. Soluciones personalizadas para aumentar tu visibilidad y alcanzar tus objetivos.",
    icon: "nc-icon nc-settings-gear-65",
  },
];

function SectionCarouselServices() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === services.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? services.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <div className="section pt-o" id="carousel">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card className="page-carousel">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
{     /*           <CarouselIndicators
                  items={services}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                  className="mt-4"
                />*/}
                  {services.map((service, index) => (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={index}
                    >
                      <div className="text-center">
                        <div className="icon icon-info mb-4">
                          <i className={service.icon} style={{ fontSize: "4rem" }} />
                        </div>
                        <h4 className="info-title mb-2">{service.title}</h4>
                        <p className="description">{service.description}</p>
                      </div>
                    </CarouselItem>
                  ))}
                <a
                  className="left carousel-control carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-right" />
                  <span className="sr-only">Next</span>
                </a>
              </Carousel>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionCarouselServices;