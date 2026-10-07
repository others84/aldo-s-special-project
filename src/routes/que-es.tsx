import { createFileRoute } from "@tanstack/react-router";
import { RefreshCw, Package, Building2, Cloud } from "lucide-react";
import logoAsset from "@/assets/logo-sgco.png.asset.json";
import { CTA, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/que-es")({
  head: () =>
    seo(
      "¿Qué es SGCO? Sistema de gestión de citas online",
      "SGCO es un software de gestión médica en la nube que conecta pacientes y médicos en tiempo real. Software para consultorios y clínicas, todo incluido.",
      "/que-es",
    ),
  component: Page,
});

const cards = [
  { i: RefreshCw, t: "Mejora continua", d: "Sistema en proceso de mejora continua sin costos adicionales para el médico." },
  { i: Package, t: "Todo incluido", d: "Sin cobros ocultos por funcionalidades extra." },
  { i: Building2, t: "Policlínica", d: "Administra un edificio de consultorios de varias especialidades en una misma pantalla." },
  { i: Cloud, t: "100% web", d: "Sin instalar nada. Funciona en cualquier navegador." },
];

function Page() {
  return (
    <>
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">¿Qué es SGCO?</p>
            <h1 className="mt-2 text-3xl font-bold md:text-5xl">Sistema de gestión de citas online</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              "La plataforma web que conecta a pacientes y médicos en tiempo real, optimizando la agenda de tu consultorio o clínica y reduciendo drásticamente el ausentismo."
            </p>
          </div>
          <div className="grid place-items-center rounded-2xl bg-card p-10 shadow-xl">
            <img src={logoAsset.url} alt="Logotipo SGCO" width={400} height={300} className="h-56 w-auto object-contain" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Software médico en la nube</h2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          SGCO (Sistema de Gestión de Citas Online) es un software para consultorios y clínicas médicas que sustituye la agenda tradicional de papel.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((x) => (
            <div key={x.t} className="rounded-xl border bg-card p-6 shadow-sm">
              <x.i className="h-7 w-7 text-primary" />
              <h3 className="mt-3 font-semibold">{x.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
