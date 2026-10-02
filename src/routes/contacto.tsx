import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, CheckCircle2, AlertTriangle } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { PageHero, seo } from "@/components/site/Layout";
import { enviarContacto } from "@/lib/contacto.functions";

export const Route = createFileRoute("/contacto")({
  head: () =>
    seo(
      "Contacto y demo del sistema de citas médicas | SGCO",
      "Solicita información y acceso al demo de SGCO, el software médico mexicano para consultorios y clínicas. Escríbenos a ventas@sgcopuebla.com.mx.",
      "/contacto",
    ),
  component: Page,
});

const fields = [
  { n: "nombre", l: "Nombre completo", t: "text", r: true },
  { n: "correo", l: "Correo electrónico", t: "email", r: true },
  { n: "telefono", l: "Teléfono / WhatsApp", t: "tel", r: false },
  { n: "clinica", l: "Clínica o especialidad", t: "text", r: false },
  { n: "ciudad", l: "Ciudad", t: "text", r: false },
] as const;

function Page() {
  const enviar = useServerFn(enviarContacto);
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error" | "no-listo">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    setEstado("enviando");
    const res = await enviar({
      data: {
        nombre: String(d.get("nombre") ?? "").trim().slice(0, 100),
        correo: String(d.get("correo") ?? "").trim().slice(0, 255),
        telefono: String(d.get("telefono") ?? "").trim().slice(0, 50),
        clinica: String(d.get("clinica") ?? "").trim().slice(0, 200),
        ciudad: String(d.get("ciudad") ?? "").trim().slice(0, 100),
        mensaje: String(d.get("mensaje") ?? "").trim().slice(0, 2000),
        demo: d.get("demo") === "on",
      },
    });
    if (res.ok) {
      setEstado("ok");
      form.reset();
    } else {
      setEstado(res.reason === "email_not_ready" ? "no-listo" : "error");
    }
  }

  const input = "mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary";
  return (
    <>
      <PageHero eyebrow="Contacto" title="Solicita información y acceso al demo">
        Cuéntanos sobre tu consultorio o clínica y te enviaremos acceso al demo.
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3">
        <form onSubmit={submit} className="grid gap-4 rounded-2xl border bg-card p-7 shadow-sm md:col-span-2 sm:grid-cols-2">
          {fields.map((f) => (
            <label key={f.n} className="text-sm font-medium">
              {f.l}{f.r && " *"}
              <input name={f.n} type={f.t} required={f.r} maxLength={f.n === "correo" ? 255 : 200} className={input} />
            </label>
          ))}
          <label className="text-sm font-medium sm:col-span-2">
            Mensaje
            <textarea name="mensaje" rows={4} maxLength={2000} className={input} />
          </label>
          <label className="flex items-center gap-2 text-sm sm:col-span-2">
            <input type="checkbox" name="demo" defaultChecked /> Quiero acceso al demo
          </label>
          <button
            type="submit"
            disabled={estado === "enviando"}
            className="rounded-md bg-accent py-3 font-semibold text-accent-foreground hover:opacity-90 disabled:opacity-60 sm:col-span-2"
          >
            {estado === "enviando" ? "Enviando…" : "Enviar solicitud"}
          </button>
          {estado === "ok" && (
            <p className="flex items-start gap-2 text-sm text-primary sm:col-span-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              ¡Gracias! Tu solicitud fue enviada; te contactaremos a la brevedad.
            </p>
          )}
          {estado === "no-listo" && (
            <p className="flex items-start gap-2 text-sm sm:col-span-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              El envío de correos aún no está activo para el dominio de SGCO. Escríbenos mientras tanto a{" "}
              <a href="mailto:ventas@sgcopuebla.com.mx" className="underline">ventas@sgcopuebla.com.mx</a>.
            </p>
          )}
          {estado === "error" && (
            <p className="flex items-start gap-2 text-sm sm:col-span-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              No pudimos enviar tu solicitud en este momento. Intenta de nuevo o escríbenos a{" "}
              <a href="mailto:ventas@sgcopuebla.com.mx" className="underline">ventas@sgcopuebla.com.mx</a>.
            </p>
          )}
        </form>
        <aside className="rounded-2xl bg-primary p-7 text-primary-foreground">
          <Mail className="h-8 w-8" />
          <h2 className="mt-4 text-xl font-bold">Escríbenos directo</h2>
          <a href="mailto:ventas@sgcopuebla.com.mx" className="mt-2 block break-all font-semibold underline">ventas@sgcopuebla.com.mx</a>
          <p className="mt-4 text-sm opacity-90">Atendemos médicos y clínicas en Puebla, Tlaxcala, CDMX, Guadalajara, Monterrey y todo México.</p>
        </aside>
      </section>
    </>
  );
}
