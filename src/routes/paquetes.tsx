import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { PageHero, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/paquetes")({
  head: () =>
    seo(
      "Precios del software para clínicas en México | SGCO",
      "Paquetes de software médico económico: Consultorio desde $800 MXN al mes. Pago anual: paga 10 meses y usa 12. Todo incluido.",
      "/paquetes",
    ),
  component: Page,
});

function monthly(doctors: number) {
  let total = 800;
  for (let n = 2; n <= doctors; n++) total += n <= 5 ? 400 : 200;
  return total;
}
const fmt = (n: number) => n.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

const plans = [
  { name: "Consultorio", min: 1, max: 1, people: "1 médico · 1 asistente · 1 administrador de clínica" },
  { name: "Clínica", min: 2, max: 5, people: "2 a 5 médicos · 2 asistentes · 1 administrador de clínica", featured: true },
  { name: "Clínica extendida", min: 6, max: 10, people: "6 a 10 médicos · 4 asistentes · 1 administrador de clínica" },
];

function Page() {
  const [annual, setAnnual] = useState(false);
  const [docs, setDocs] = useState(3);
  const mult = annual ? 10 : 1;
  const per = annual ? "/año" : "/mes";
  return (
    <>
      <PageHero eyebrow="Paquetes" title="Software para clínicas: precio claro, todo incluido" />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto flex w-fit rounded-full border bg-card p-1">
          {["Mensual", "Anual"].map((l, i) => (
            <button key={l} onClick={() => setAnnual(i === 1)} className={`rounded-full px-5 py-2 text-sm font-semibold ${annual === (i === 1) ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
              {l}{i === 1 && " (2 meses gratis)"}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`flex flex-col rounded-2xl border bg-card p-7 shadow-sm ${p.featured ? "border-2 border-primary" : ""}`}>
              {p.featured && <span className="mb-2 w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Más popular</span>}
              <h2 className="text-xl font-bold">{p.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.people}</p>
              <p className="mt-6 text-sm text-muted-foreground">{p.min === p.max ? "" : "Desde"}</p>
              <p className="text-4xl font-bold text-primary">{fmt(monthly(p.min) * mult)}<span className="text-base font-medium text-muted-foreground">{per}</span></p>
              {p.min !== p.max && <p className="text-sm text-muted-foreground">Hasta {fmt(monthly(p.max) * mult)}{per}</p>}
              <p className="text-xs text-muted-foreground">+ IVA</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm">
                {["Todas las funciones incluidas", "Portal de citas 24/7", "Recordatorios por WhatsApp", "Reportes financieros"].map((f) => (
                  <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-primary" />{f}</li>
                ))}
              </ul>
              <Link to="/contacto" className="mt-6 rounded-md bg-accent py-3 text-center font-semibold text-accent-foreground hover:opacity-90">Solicitar demo</Link>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-xl rounded-2xl border bg-card p-7 text-center">
          <h2 className="text-xl font-bold">Calcula tu precio</h2>
          <p className="mt-1 text-sm text-muted-foreground">Primer médico $800 · del 2 al 5: $400 c/u · del 6 al 10: $200 c/u</p>
          <label className="mt-5 block text-sm font-medium">Número de médicos: <strong>{docs}</strong></label>
          <input type="range" min={1} max={10} value={docs} onChange={(e) => setDocs(+e.target.value)} className="mt-2 w-full accent-[var(--primary)]" />
          <p className="mt-4 text-3xl font-bold text-primary">{fmt(monthly(docs) * mult)}<span className="text-base text-muted-foreground">{per} + IVA</span></p>
        </div>
      </section>
    </>
  );
}
