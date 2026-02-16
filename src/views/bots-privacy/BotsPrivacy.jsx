import React from "react";

export default function BotsPrivacy() {
  return (
    <div style={styles.container}>
      <h1>Política de Privacidad – Riquibots</h1>
      <p><strong>Última actualización:</strong>  Domingo 15 de Febrero del año 2026</p>

      <section>
        <h2>1. Responsable del tratamiento</h2>
        <p>
          Nicolás Agustín Riquelme Silva – CUIT 20-40256179-4<br />
          Domicilio legal: Federico Lacroze 1868 4A, Ciudad Autónoma de Buenos Aires, Argentina<br />
          Email: nicolasriquelme528@gmail.com
        </p>
        <p>
          El tratamiento de datos se realiza conforme a la Ley 25.326 de Protección de Datos Personales.
        </p>
      </section>

      <section>
        <h2>2. Alcance</h2>
        <p>
          Esta política aplica a los usuarios empresariales que utilizan Riquibots
          y a los datos procesados en el marco de la integración con WhatsApp Business API.
        </p>
      </section>

      <section>
        <h2>3. Datos recopilados</h2>
        <h3>Datos del usuario SaaS</h3>
        <ul>
          <li>Nombre y apellido</li>
          <li>Email</li>
          <li>CUIT (si corresponde)</li>
          <li>Datos de facturación</li>
          <li>Información técnica de integración</li>
        </ul>

        <h3>Datos de contactos finales</h3>
        <ul>
          <li>Número de teléfono</li>
          <li>Nombre visible en WhatsApp</li>
          <li>Metadata de conversaciones</li>
          <li>Resúmenes automatizados</li>
          <li>Contenido completo de los últimos 3 chats activos</li>
        </ul>
      </section>

      <section>
        <h2>4. Finalidad</h2>
        <ul>
          <li>Automatización de respuestas</li>
          <li>Gestión de conversaciones</li>
          <li>Generación de resúmenes con IA</li>
          <li>Facturación y gestión de suscripciones</li>
          <li>Soporte técnico</li>
        </ul>
      </section>

      <section>
        <h2>5. Conservación</h2>
        <p>
          Los datos se almacenan mientras la cuenta esté activa o hasta que el usuario elimine una conversación.
          Tras la baja del servicio, serán eliminados o anonimizados en un plazo razonable.
        </p>
      </section>

      <section>
        <h2>6. Derechos</h2>
        <p>
          Los titulares pueden solicitar acceso, rectificación o supresión enviando un correo a
          nicolasriquelme528@gmail.com.
        </p>
      </section>

      <section>
        <h2>7. Seguridad</h2>
        <p>
          Se aplican medidas técnicas razonables como cifrado HTTPS,
          control de accesos y minimización de datos almacenados.
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
