import React from "react";

export default function BotTerms() {
  return (
    <div style={styles.container}>
      <h1>Términos y Condiciones – Riquibots</h1>
      <p><strong>Última actualización:</strong> [COMPLETAR FECHA]</p>

      <section>
        <h2>1. Naturaleza del servicio</h2>
        <p>
          Riquibots es una plataforma SaaS orientada a uso comercial y empresarial
          que permite integrar números de WhatsApp Business,
          automatizar respuestas y gestionar conversaciones.
        </p>
      </section>

      <section>
        <h2>2. Suscripciones y pagos</h2>
        <ul>
          <li>El servicio funciona bajo suscripción mensual.</li>
          <li>La suscripción se renueva automáticamente cada mes.</li>
          <li>La falta de pago puede implicar suspensión del servicio.</li>
          <li>No se realizan reembolsos proporcionales por períodos parciales.</li>
        </ul>
      </section>

      <section>
        <h2>3. Obligaciones del usuario</h2>
        <ul>
          <li>Ser titular o estar autorizado a usar el número registrado.</li>
          <li>Cumplir las políticas de Meta y WhatsApp.</li>
          <li>Contar con base legal para contactar a sus clientes.</li>
          <li>No utilizar el servicio para spam o actividades ilícitas.</li>
        </ul>
      </section>

      <section>
        <h2>4. Limitación de responsabilidad</h2>
        <p>
          Riquitech no será responsable por bloqueos o suspensiones decididas por Meta,
          fallas de terceros o interrupciones técnicas.
        </p>
        <p>
          La responsabilidad total se limita al monto abonado por el usuario
          en los últimos tres (3) meses.
        </p>
      </section>

      <section>
        <h2>5. Jurisdicción</h2>
        <p>
          Este servicio se rige por las leyes de la República Argentina.
          Jurisdicción: Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires.
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "60px auto",
    padding: "40px",
    lineHeight: "1.6",
    fontFamily: "Inter, system-ui, sans-serif",
  },
};
