import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2, AlertTriangle, Phone } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { PageHero, seo } from "@/components/site/Layout";
import { enviarContacto } from "@/lib/contacto.functions";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contacto")({
  head: () =>
    seo(
      "Contacto y demo del sistema de citas médicas | SGCO",
      "Solicita información y/o acceso al sistema demo de SGCO. Cuéntanos sobre los servicios que brindas y obtén acceso al sistema demo.",
      "/contacto",
    ),
  component: Page,
});

const fields = [
  { n: "nombre", l: "Nombre completo", t: "text", r: true },
  { n: "correo", l: "Correo electrónico", t: "email", r: true },
  { n: "telefono", l: "Teléfono", t: "tel", r: false },
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
      <PageHero eyebrow="Contacto" title="Solicita información y/o acceso al sistema demo">
        Cuéntanos sobre los servicios que brindas y obtén acceso al sistema demo.
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
          <Button
            type="submit"
            disabled={estado === "enviando"}
            className="rounded-md bg-accent py-3 font-semibold text-accent-foreground hover:opacity-90 disabled:opacity-60 sm:col-span-2"
          >
            {estado === "enviando" ? "Enviando…" : "Enviar solicitud"}
          </Button>
          {estado === "ok" && (
            <p className="flex items-start gap-2 text-sm text-primary sm:col-span-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              ¡Gracias! Tu solicitud fue enviada; te contactaremos a la brevedad.
            </p>
          )}
          {estado === "no-listo" && (
            <p className="flex items-start gap-2 text-sm sm:col-span-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              El envío de correos aún no está activo. Tu solicitud no se ha enviado; inténtalo más tarde.
            </p>
          )}
          {estado === "error" && (
            <p className="flex items-start gap-2 text-sm sm:col-span-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              No pudimos enviar tu solicitud en este momento. Intenta de nuevo en unos minutos.
            </p>
          )}
        </form>
        <aside className="rounded-2xl bg-primary p-7 text-primary-foreground">
          <CalendarCheck className="h-8 w-8" />
          <h2 className="mt-4 text-xl font-bold">Así funciona tu solicitud</h2>
          <ul className="mt-4 space-y-3 text-sm opacity-95">
            <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> Llena el formulario con los datos de tu consultorio.</li>
            <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> Recibirás un correo solicitando la información necesaria para poder acceder al sistema DEMO.</li>
            <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> Sin compromiso: decides después de probar el sistema.</li>
          </ul>
          <p className="mt-5 flex items-center gap-2 text-sm font-semibold">
            <Phone className="h-4 w-4" /> Tel. <a href="tel:+522311381947" className="hover:underline">231 138 1947</a>
          </p>
          <p className="mt-3 text-sm opacity-90">Atendemos médicos y clínicas en toda la República Mexicana.</p>
        </aside>
      </section>
    </>
  );
}
