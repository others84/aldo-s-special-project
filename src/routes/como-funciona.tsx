import { createFileRoute } from "@tanstack/react-router";
import { CalendarPlus, MessageCircle, Timer, CalendarClock } from "lucide-react";
import { CTA, PageHero, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/como-funciona")({
  head: () =>
    seo(
      "Cómo funciona el sistema de citas médicas | SGCO",
      "Así funciona SGCO: el paciente agenda en línea o por teléfono, el consultorio confirma, el médico atiende y se programa la siguiente cita.",
      "/como-funciona",
    ),
  component: Page,
});

const steps = [
  { i: CalendarPlus, t: "El paciente agenda su cita", d: "Hay 2 opciones: 1) el paciente agenda desde la página web del médico, o 2) el paciente se comunica con el consultorio para agendar una cita." },
  { i: MessageCircle, t: "El asistente y/o médico confirman la cita", d: "La confirmación y los recordatorios se envían por WhatsApp o correo." },
  { i: Timer, t: "El médico atiende", d: "El médico atiende al paciente en el horario agendado." },
  { i: CalendarClock, t: "Se programa la siguiente cita", d: "Al terminar la consulta se agenda la próxima cita de seguimiento." },
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
