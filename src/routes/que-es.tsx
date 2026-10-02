import { createFileRoute } from "@tanstack/react-router";
import { Flag, Package, Users, Cloud } from "lucide-react";
import desk from "@/assets/desk-stethoscope.jpg";
import { CTA, PageHero, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/que-es")({
  head: () =>
    seo(
      "¿Qué es SGCO? Software de gestión médica multiclínica",
      "SGCO es un software de gestión médica en la nube que conecta pacientes, asistentes y médicos en tiempo real. Software médico mexicano todo incluido.",
      "/que-es",
    ),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="¿Qué es SGCO?" title="Sistema Integral de Gestión Médica y Citas Multiclínica">
        "La plataforma web que conecta a tus pacientes, asistentes y médicos en tiempo real, optimizando la agenda de tu clínica y eliminando el ausentismo."
      </PageHero>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Software médico en la nube, hecho en México</h2>
          <p className="mt-4 text-muted-foreground">
            SGCO (Sistema de Gestión de Citas Online) es un software para clínicas médicas y consultorios que sustituye la agenda de papel. Tus pacientes agendan solos, tu asistente confirma por WhatsApp y tú ves tus citas desde el celular.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              { i: Flag, t: "Mexicano", d: "Desarrollado en Puebla, con soporte en tu idioma y horario." },
              { i: Package, t: "Todo incluido", d: "Sin módulos extra ni cobros ocultos por funcionalidades." },
              { i: Users, t: "Multiclínica", d: "Crece de un consultorio a varias clínicas." },
              { i: Cloud, t: "100% web", d: "Sin instalar nada. Funciona en cualquier navegador." },
            ].map((x) => (
              <div key={x.t} className="rounded-xl border bg-card p-5">
                <x.i className="h-6 w-6 text-primary" />
                <h3 className="mt-2 font-semibold">{x.t}</h3>
                <p className="text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={desk} alt="Laptop con sistema de citas médicas junto a estetoscopio" loading="lazy" width={1536} height={1024} className="rounded-2xl shadow-lg" />
      </section>
      <CTA />
    </>
  );
}
