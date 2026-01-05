/*!
=========================================================
* Paper Kit React - v1.3.2
=========================================================
*/

import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { useLanguage } from "context/LanguageContext";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function RiquiTechNavBar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const { language, changeLanguage } = useLanguage();

  const navText = {
    es: {
      services: "Nuestros servicios",
      ceo: "Nuestro CEO",
      contact: "Contactanos",
      language: "Idioma",
      selectLanguage: "Selecciona el idioma",
    },
    en: {
      services: "Our services",
      ceo: "Our CEO",
      contact: "Contact us",
      language: "Language",
      selectLanguage: "Select language",
    },
  };

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);
    return () => window.removeEventListener("scroll", updateNavbarColor);
  }, []);

  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link}>
            RIQUI TECH'S SOLUTIONS
          </NavbarBrand>
          <button
            className={classnames("navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
            aria-expanded={navbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>

        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
{/*              <NavItem>
            <NavLink to="/services-page" tag={Link}>
                <i className="nc-icon nc-layout-11" />{" "}
                {navText[language].services}
              </NavLink>
            </NavItem>*/}

            <NavItem>
              <NavLink to="/profile-page-nico" tag={Link}>
                <i className="nc-icon nc-book-bookmark" />{" "}
                {navText[language].ceo}
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://www.linkedin.com/company/riquel-techs-solutions/"
                target="_blank"
                title="LinkedIn"
              >
                <i className="fa fa-linkedin" />
                <p className="d-lg-none">LinkedIn</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                tag={Link}
                to="/contact"
              >
                <i className="nc-icon nc-spaceship" />{" "}
                {navText[language].contact}
              </Button>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                caret
                nav
                color="default"
              >
                {navText[language].language}
                <i className="nc-icon nc-globe ml-1" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-info">
                <DropdownItem header tag="span">
                  {navText[language].selectLanguage}
                </DropdownItem>
                <DropdownItem onClick={() => changeLanguage("es")}>
                  Español
                </DropdownItem>
                <DropdownItem onClick={() => changeLanguage("en")}>
                  English
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default RiquiTechNavBar;
