import { createFileRoute } from "@tanstack/react-router";
import { PageHero, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/terminos")({
  head: () => seo("Términos del servicio | SGCO", "Términos y condiciones de uso del Sistema de citas médicas online SGCO.", "/terminos"),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Términos del servicio" />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-muted-foreground">
        <p>Al contratar y utilizar SGCO aceptas estos términos. El servicio se ofrece mediante suscripción mensual o anual, con precios en pesos mexicanos más IVA.</p>
        <p>El usuario es responsable de la veracidad de la información capturada y del uso adecuado de sus accesos. SGCO procura la disponibilidad continua del servicio, salvo mantenimientos programados o causas de fuerza mayor.</p>
        <p>La suscripción puede cancelarse en cualquier momento; los periodos ya pagados no son reembolsables. Para cualquier duda, utiliza la página de Contacto.</p>
      </section>
    </>
  );
}
