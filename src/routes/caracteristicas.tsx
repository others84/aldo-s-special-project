import { createFileRoute } from "@tanstack/react-router";
import { Building2, Globe, CalendarDays, MessageCircle, ShieldCheck, MonitorSmartphone } from "lucide-react";
import desk from "@/assets/desk-stethoscope.jpg";
import { CTA, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/caracteristicas")({
  head: () =>
    seo(
      "Características del software para consultorios médicos | SGCO",
      "Gestión de clínicas, agenda de citas en línea 24/7, agenda inteligente, recordatorios por WhatsApp y control de acceso por roles. Todo incluido.",
      "/caracteristicas",
    ),
  component: Page,
});

const features = [
  { i: Building2, t: "Gestión de consultorios y policlínicas", items: ["Gestiona uno o más consultorios en una misma pantalla.", "Gestión sencilla de pacientes de cada clínica.", "Administración de catálogos y tareas comunes para cada consultorio"] },
  { i: Globe, t: "Agenda de citas por parte de los pacientes en línea 24/7", items: ["Los pacientes pueden agendar desde cualquier dispositivo conectado a internet a cualquier hora visualizando tu agenda y los horarios y fechas disponibles.", "Verificación OTP (contraseña de un solo uso) para proteger datos de pacientes recurrentes."] },
  { i: CalendarDays, t: "Agenda médica inteligente", items: ["Vistas mensual, semanal y diaria de la agenda del médico.", "Medición exacta del tiempo real de consulta.", "Configuración de bloqueo de fechas y horas de no atención de citas médicas (vacaciones, horarios de comida, etc.).", "Información de seguimiento a pacientes recurrentes."] },
  { i: MessageCircle, t: "Recordatorios por WhatsApp y correo", items: ["Envío de recordatorios con un par de clics.", "Plantillas de notificaciones 100% personalizadas por médico."] },
  { i: ShieldCheck, t: "Control de acceso por roles", items: ["Administrador de clínica: administración de consultorios, médicos, catálogos y accesos.", "Médico: gestión de su agenda, pacientes, citas y reportes de ingresos.", "Asistentes: gestión de citas, pacientes y seguimiento."] },
  { i: MonitorSmartphone, t: "100% web y multidispositivo", items: ["Chrome, Safari, Edge y Firefox.", "iPhone, Android, tablets, laptops y PC.", "Sin descargar aplicaciones."] },
];

function Page() {
  return (
    <>
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Características</p>
            <h1 className="mt-2 text-3xl font-bold md:text-5xl">Todo lo que necesitas para consultorios médicos y policlínicas</h1>
          </div>
          <img src={desk} alt="Laptop con sistema de citas médicas junto a estetoscopio" width={1536} height={1024} className="rounded-2xl shadow-lg" />
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2">
        {features.map((f, i) => (
          <article key={f.t} className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-secondary"><f.i className="h-5 w-5 text-primary" /></span>
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
