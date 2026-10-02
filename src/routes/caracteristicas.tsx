import { createFileRoute } from "@tanstack/react-router";
import { Building2, Globe, CalendarDays, MessageCircle, ShieldCheck, BarChart3, MonitorSmartphone } from "lucide-react";
import { CTA, PageHero, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/caracteristicas")({
  head: () =>
    seo(
      "Características del software para consultorios médicos | SGCO",
      "Multiclínica, portal de citas 24/7, agenda inteligente, recordatorios por WhatsApp, roles seguros y reportes financieros. Todo incluido.",
      "/caracteristicas",
    ),
  component: Page,
});

const features = [
  { i: Building2, t: "Modelo multiclínica", items: ["Administra una o decenas de clínicas con aislamiento total de información.", "Los pacientes pertenecen exclusivamente a su clínica.", "Cada clínica tiene su propio administrador de consultorios, médicos y catálogos."] },
  { i: Globe, t: "Portal público de citas en línea 24/7", items: ["Pacientes agendan desde celular, tablet o computadora a cualquier hora.", "Flujo guiado: médico, especialidad, clínica y calendario interactivo.", "Verificación OTP para proteger datos de pacientes recurrentes.", "Registro rápido para nuevos pacientes."] },
  { i: CalendarDays, t: "Agenda médica inteligente", items: ["Vistas mensual, semanal y diaria con filtros por consultorio y estado.", "Medición exacta del tiempo real de consulta.", "Horarios semanales y bloqueo de fechas (vacaciones, congresos).", "Observaciones del paciente e historial de la cita separados."] },
  { i: MessageCircle, t: "Recordatorios por WhatsApp y correo", items: ["Envío de recordatorios con un solo clic.", "Plantillas 100% personalizadas por médico.", "Reduce hasta 80% las citas perdidas."] },
  { i: ShieldCheck, t: "Control de acceso por roles", items: ["Administrador de clínica: personal, médicos, consultorios y reportes.", "Médico: su agenda, sus pacientes y sus ingresos.", "Asistente: citas, altas de pacientes, cobros y confirmaciones."] },
  { i: BarChart3, t: "Reportes financieros y métricas", items: ["Ingresos por fechas, clínica y médico.", "Atenciones y demanda por especialidad.", "Tiempos de atención promedio.", "Top de pacientes más frecuentes."] },
  { i: MonitorSmartphone, t: "100% web y multidispositivo", items: ["Chrome, Safari, Edge y Firefox.", "iPhone, Android, tablets, laptops y PC.", "Sin descargar aplicaciones."] },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Características" title="Todo lo que necesita tu sistema para consultorios médicos">
        Sin módulos extra: todas las funciones están incluidas en cualquier paquete.
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2">
        {features.map((f, i) => (
          <article key={f.t} className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-secondary"><f.i className="h-5 w-5 text-primary" /></span>
              <h2 className="text-lg font-semibold">{i + 1}. {f.t}</h2>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {f.items.map((x) => (
                <li key={x} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{x}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <CTA />
    </>
  );
}
