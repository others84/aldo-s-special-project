import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, MessageCircle, TrendingDown, Smartphone, ShieldCheck, Stethoscope, UserCog, Headset, Building2 } from "lucide-react";
import hero from "@/assets/hero-doctor.jpg";
import reception from "@/assets/reception.jpg";
import { CTA, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Software para clínicas médicas y sistema de citas médicas | SGCO",
      "Software para clínicas médicas mexicano: agenda médica online, citas 24/7 y recordatorios por WhatsApp. Todo incluido, sin pagos extra. Solicita tu demo.",
      "/",
    ),
  component: Index,
});

const benefits = [
  { icon: CalendarCheck, t: "Citas en línea 24/7", d: "Tus pacientes agendan desde su celular a cualquier hora, sin llamadas." },
  { icon: MessageCircle, t: "Recordatorios por WhatsApp", d: "Confirma y recuerda citas con un solo clic, con mensajes personalizados." },
  { icon: TrendingDown, t: "Hasta 80% menos ausentismo", d: "Pacientes informados llegan a su cita. Menos huecos en tu agenda." },
  { icon: Smartphone, t: "Desde cualquier dispositivo", d: "100% web: celular, tablet, laptop o PC. Sin descargar aplicaciones." },
];

const roles = [
  { icon: UserCog, t: "Administrador de clínica", d: "Controla personal, médicos, consultorios y reportes." },
  { icon: Stethoscope, t: "Médico", d: "Ve sus citas desde el celular, atiende pacientes y consulta sus ingresos." },
  { icon: Headset, t: "Asistente", d: "Agenda, da de alta pacientes, cobra y confirma citas." },
];

function Index() {
  return (
    <>
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="inline-block rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary">🇲🇽 Software médico hecho en México</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Software para clínicas médicas y <span className="text-primary">sistema de citas médicas</span> en la nube
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              SGCO es el software de gestión médica que reemplaza la agenda de papel. Organiza pacientes, médicos y citas en tiempo real desde cualquier dispositivo. Un sistema para consultorios médicos completo, <strong className="text-foreground">sin pagos extra por funcionalidades: todo va incluido en el mismo precio.</strong>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contacto" className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90">Solicitar demo</Link>
              <Link to="/paquetes" className="rounded-md border border-primary px-6 py-3 font-semibold text-primary hover:bg-card">Ver paquetes</Link>
            </div>
          </div>
          <img src={hero} alt="Doctora mostrando la agenda médica online de SGCO en una tablet" width={1536} height={1024} className="rounded-2xl shadow-xl" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold">Agenda médica online que trabaja por ti</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Un programa para agendar citas médicas pensado para médicos de cualquier especialidad que atienden con previa cita.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.t} className="rounded-xl border bg-card p-6 shadow-sm">
              <b.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <img src={reception} alt="Asistente médica usando el software para clínicas en recepción" loading="lazy" width={1536} height={1024} className="rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold">Software para clínicas con acceso para asistentes y médicos</h2>
            <div className="mt-6 space-y-5">
              {roles.map((r) => (
                <div key={r.t} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-secondary"><r.icon className="h-5 w-5 text-primary" /></span>
                  <div><h3 className="font-semibold">{r.t}</h3><p className="text-sm text-muted-foreground">{r.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold">Plataforma de citas médicas para cada tipo de práctica</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { icon: Stethoscope, t: "Médicos independientes", d: "Agenda electrónica para especialistas: ginecología, pediatría, odontología y más." },
            { icon: Building2, t: "Clínicas y policlínicas", d: "Administra varias clínicas médicas o sucursales con datos aislados por clínica." },
            { icon: ShieldCheck, t: "Torres de consultorios", d: "Software administrativo para centros médicos con control de médicos y consultorios." },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border-t-4 border-primary bg-card p-6 shadow-sm">
              <c.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-3 font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">Atendemos clínicas en Puebla, Tlaxcala, CDMX, Guadalajara, Monterrey y todo México.</p>
      </section>
      <CTA />
    </>
  );
}
