import { createFileRoute } from "@tanstack/react-router";
import { Building2, Globe, CalendarDays, MessageCircle, ShieldCheck, MonitorSmartphone } from "lucide-react";
import { CTA, PageHero, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/caracteristicas")({
  head: () =>
    seo(
      "Características del software para consultorios médicos | SGCO",
      "Multiclínica, portal de citas 24/7, agenda inteligente, recordatorios por WhatsApp y control de acceso por roles. Todo incluido.",
      "/caracteristicas",
    ),
  component: Page,
});

const features = [
  { i: Building2, t: "Modelo multiclínica", items: ["Gestiona una o más clínicas en una misma pantalla.", "Gestión sencilla de pacientes de cada clínica.", "Administración de clínicas."] },
  { i: Globe, t: "Portal público de citas en línea 24/7", items: ["Agenda desde cualquier dispositivo conectado a internet a cualquier hora.", "Verificación OTP para proteger datos de pacientes recurrentes.", "Registro rápido para nuevos pacientes."] },
  { i: CalendarDays, t: "Agenda médica inteligente", items: ["Vistas mensual, semanal y diaria de la agenda del médico.", "Medición exacta del tiempo real de consulta.", "Configuración de bloqueo de fechas y horas de no atención de citas médicas (vacaciones, horarios de comida, etc.).", "Información de seguimiento a pacientes recurrentes."] },
  { i: MessageCircle, t: "Recordatorios por WhatsApp y correo", items: ["Envío de recordatorios con un par de clics.", "Plantillas de notificaciones 100% personalizadas por médico.", "Reducción hasta 80% de las citas perdidas."] },
  { i: ShieldCheck, t: "Control de acceso por roles", items: ["Administrador de clínica: administración de consultorios, médicos, catálogos y accesos.", "Médico: gestión de su agenda, pacientes, citas y reportes de ingresos.", "Asistentes: gestión de citas, pacientes y seguimiento."] },
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
