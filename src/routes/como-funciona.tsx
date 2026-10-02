import { createFileRoute } from "@tanstack/react-router";
import { CalendarPlus, MessageCircle, Timer, BarChart3 } from "lucide-react";
import { CTA, PageHero, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/como-funciona")({
  head: () =>
    seo(
      "Cómo funciona el sistema de citas médicas | SGCO",
      "Así funciona SGCO: portal de citas en línea para pacientes, confirmación por WhatsApp, medición de tiempos reales de consulta y reportes.",
      "/como-funciona",
    ),
  component: Page,
});

const steps = [
  { i: CalendarPlus, t: "El paciente agenda en línea", d: "Desde el portal público elige médico, especialidad y horario en un calendario visual. Los pacientes recurrentes se verifican con código OTP." },
  { i: MessageCircle, t: "La asistente confirma por WhatsApp", d: "Con un clic envía recordatorios personalizados por WhatsApp o correo, reduciendo el ausentismo." },
  { i: Timer, t: "El médico atiende", d: "El sistema registra la hora real de inicio y término de cada consulta y guarda observaciones e historial." },
  { i: BarChart3, t: "Consultas tus reportes", d: "Ingresos, demanda por especialidad, tiempos promedio y pacientes frecuentes en gráficas interactivas." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Cómo funciona" title="Un sistema web para que los pacientes agenden sus citas">
        Cuatro pasos simples que conectan a pacientes, asistentes y médicos en tiempo real.
      </PageHero>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <ol className="relative space-y-10 border-l-2 border-primary/30 pl-8">
          {steps.map((s, idx) => (
            <li key={s.t} className="relative">
              <span className="absolute -left-[3.05rem] grid h-10 w-10 place-items-center rounded-full bg-primary font-bold text-primary-foreground">{idx + 1}</span>
              <div className="rounded-xl border bg-card p-6 shadow-sm">
                <s.i className="h-7 w-7 text-accent" />
                <h2 className="mt-3 text-xl font-semibold">{s.t}</h2>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <CTA />
    </>
  );
}
