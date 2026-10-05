import { createFileRoute } from "@tanstack/react-router";
import asistente from "@/assets/asistente.jpg.asset.json";
import medico from "@/assets/medico.jpg.asset.json";
import { CTA, PageHero, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/como-funciona")({
  head: () =>
    seo(
      "Cómo funciona el sistema de citas médicas | SGCO",
      "Conoce lo que la asistente y el médico pueden hacer en SGCO: agendar, confirmar por WhatsApp, citas en espera, atención y reportes.",
      "/como-funciona",
    ),
  component: Page,
});

const roles = [
  { t: "Rol: Asistente", d: "Organiza la agenda, contacta pacientes y coordina espacios para toda la clínica.", img: asistente.url, alt: "Diagrama de lo que la asistente puede hacer en SGCO" },
  { t: "Rol: Médico", d: "Atiende a sus pacientes y controla los tiempos reales de su consulta.", img: medico.url, alt: "Diagrama de lo que el médico puede hacer en SGCO" },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Cómo funciona" title="Lo que cada rol puede hacer en el sistema" />
      <section className="mx-auto max-w-6xl space-y-14 px-4 py-16">
        {roles.map((r) => (
          <article key={r.t}>
            <h2 className="text-2xl font-bold">{r.t}</h2>
            <p className="mt-1 text-muted-foreground">{r.d}</p>
            <a href={r.img} target="_blank" rel="noreferrer" className="mt-5 block overflow-hidden rounded-2xl border bg-card p-3 shadow-sm">
              <img src={r.img} alt={r.alt} loading="lazy" className="w-full" />
            </a>
          </article>
        ))}
      </section>
      <CTA />
    </>
  );
}
