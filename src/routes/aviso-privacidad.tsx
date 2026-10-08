import { createFileRoute } from "@tanstack/react-router";
import { PageHero, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/aviso-privacidad")({
  head: () =>
    seo(
      "Aviso de privacidad | SGCO",
      "Aviso de privacidad de SGCO: responsable de los datos, finalidades del tratamiento, cómo ejercer tus derechos ARCO y plazo de respuesta.",
      "/aviso-privacidad",
    ),
  component: Page,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-bold text-foreground">{title}</h2>
      {children}
    </div>
  );
}

const li = "ml-5 list-disc";

function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Aviso de privacidad">
        Última actualización: 8 de octubre de 2026.
      </PageHero>
      <section className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-muted-foreground">
        <Section title="Responsable del tratamiento de tus datos">
          <p>
            <strong className="text-foreground">Victor Puig Morales</strong>, con RFC <strong className="text-foreground">PUMV800527HF3</strong> y domicilio en Privada 19 Sur 1915, Puebla, México,
            es responsable del tratamiento de los datos personales que nos proporcionas, con el mismo domicilio para oír y recibir notificaciones.
          </p>
          <p>
            Este aviso se rige por la <strong className="text-foreground">Ley General de Protección de Datos Personales en Posesión de los Particulares</strong> y su reglamento.
          </p>
        </Section>

        <Section title="Datos que recabamos">
          <ul className="space-y-1">
            <li className={li}>Los que nos proporcionas al solicitar información o el demo: nombre, correo electrónico, teléfono, consultorio o clínica, ciudad y el mensaje que nos escribes.</li>
            <li className={li}>Tu <strong className="text-foreground">cédula profesional</strong>, que se solicita al firmar el contrato de prestación del servicio, en el primer acceso al sistema.</li>
            <li className={li}>Los que se generan al usar el sistema: agendas, horarios, citas y los datos de pacientes que el especialista o su asistente registran.</li>
            <li className={li}>Los de facturación necesarios para emitir tu comprobante fiscal.</li>
          </ul>
        </Section>

        <Section title="Finalidades del tratamiento">
          <ul className="space-y-1">
            <li className={li}>Atender tu solicitud de información y facilitarte el acceso al demo.</li>
            <li className={li}>Verificar la cédula profesional y firmar el contrato de prestación del servicio con el que se otorga el acceso al sistema.</li>
            <li className={li}>Cobrar, facturar y administrar la suscripción contratada.</li>
            <li className={li}>Brindar, operar y dar soporte técnico al servicio de gestión de citas.</li>
            <li className={li}>Enviarte avisos relacionados con el servicio, como mantenimientos programados o cambios relevantes.</li>
          </ul>
        </Section>

        <Section title="Cómo ejercer tus derechos ARCO">
          <p>
            Puedes solicitar el <strong className="text-foreground">acceso, rectificación, cancelación u oposición</strong> al tratamiento de tus datos personales (derechos ARCO) mediante un correo
            electrónico dirigido a <strong className="text-foreground">soporte@sgcopuebla.com.mx</strong>.
          </p>
          <p>Tu solicitud debe incluir:</p>
          <ul className="space-y-1">
            <li className={li}>Nombre completo del titular de los datos.</li>
            <li className={li}>Copia de la credencial para votar (INE) u otra identificación oficial vigente.</li>
            <li className={li}>El derecho que se solicita de forma concreta: acceso, rectificación, cancelación u oposición, y la descripción de lo que se pide.</li>
          </ul>
          <p>
            SGCO responde a la solicitud en el plazo establecido por la ley, <strong className="text-foreground">20 días hábiles</strong>, plazo que puede ampliarse por una sola vez por un periodo
            igual cuando exista una causa que lo justifique.
          </p>
        </Section>

        <Section title="Transferencia y compartición de datos">
          <p>
            Tus datos personales no se venden ni se comparten con terceros para fines distintos a los señalados en este aviso. Solo se ponen a disposición de las autoridades competentes cuando una
            ley, un procedimiento, una decisión de autoridad o un mandato judicial así lo exija.
          </p>
        </Section>

        <Section title="Cambios al aviso de privacidad">
          <p>
            Cualquier modificación a este aviso se publicará en esta misma página, indicando la fecha de su última actualización. Te recomendamos revisarla de vez en cuando.
          </p>
        </Section>

        <p className="border-t pt-6 text-sm">Fecha de última actualización: 8 de octubre de 2026.</p>
      </section>
    </>
  );
}
