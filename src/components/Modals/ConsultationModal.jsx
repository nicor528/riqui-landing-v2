import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "reactstrap";
import { useLanguage } from "context/LanguageContext";
import "./consultationModal.css";

export default function ConsultationModal({ isOpen, toggle }) {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Agendar consultoría",
      whatsapp: "Hablar por WhatsApp",
      calendar: "Agendar reunión",
      description:
        "Elegí cómo querés continuar. Podés escribirme directo o agendar una reunión.",
    },
    en: {
      title: "Book a consultation",
      whatsapp: "Chat on WhatsApp",
      calendar: "Schedule a meeting",
      description:
        "Choose how you'd like to continue. You can message me directly or schedule a meeting.",
    },
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>
        {content[language].title}
      </ModalHeader>
      <ModalBody className="text-center">
        <p>{content[language].description}</p>

        <div className="d-flex flex-column gap-3 mt-4">
          {/* WHATSAPP */}
          <Button
            color="success"
            size="lg"
            className="btn-round mb-3"
            href="https://wa.me/541169018596"
            target="_blank"
          >
            <i className="nc-icon nc-chat-33 mr-2" />
            {content[language].whatsapp}
          </Button>

          {/* GOOGLE CALENDAR */}
          <Button
            color="info"
            size="lg"
            className="btn-round"
            href="https://calendly.com/nicolas-riquelme-bue/30min"
            target="_blank"
          >
            <i className="nc-icon nc-calendar-60 mr-2" />
            {content[language].calendar}
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
}
