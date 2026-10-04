import { createFileRoute } from "@tanstack/react-router";
import { PageHero, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/aviso-privacidad")({
  head: () => seo("Aviso de privacidad | SGCO", "Conoce cómo SGCO protege y trata los datos personales de médicos, clínicas y pacientes.", "/aviso-privacidad"),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Aviso de privacidad" />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-muted-foreground">
        <p>SGCO Puebla es responsable del tratamiento de los datos personales que nos proporcionas, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>
        <p>Los datos recabados (nombre, correo, teléfono, clínica y ciudad) se usan únicamente para atender solicitudes de información, brindar el servicio y enviar comunicaciones relacionadas.</p>
        <p>Puedes ejercer tus derechos de acceso, rectificación, cancelación u oposición (ARCO) solicitándolo desde la página de Contacto.</p>
      </section>
    </>
  );
}
