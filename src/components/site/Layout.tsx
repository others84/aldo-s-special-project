import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import logoAsset from "@/assets/logo-sgco.png.asset.json";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/que-es", label: "¿Qué es SGCO?" },
  { to: "/como-funciona", label: "Cómo funciona" },
  { to: "/caracteristicas", label: "Características" },
  { to: "/paquetes", label: "Paquetes" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="SGCO inicio">
      <img src={logoAsset.url} alt="Logotipo SGCO" width={40} height={30} className="h-10 w-auto" />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const linkCls = "text-sm font-medium text-muted-foreground hover:text-primary transition-colors";
  return (
    <header className="sticky top-0 z-40 border-b bg-card/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className={linkCls} activeProps={{ className: "text-primary font-semibold" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <Link to="/contacto" className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90">
            Solicitar demo
          </Link>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t bg-card px-4 py-4 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className={linkCls} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link to="/contacto" onClick={() => setOpen(false)} className="rounded-md bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground">
            Solicitar demo
          </Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground">
            Software médico mexicano en la nube para consultorios y policlínicas.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-primary">{n.label}</Link>
          ))}
        </div>
        <div className="text-sm">
          <p className="font-semibold">Contacto</p>
          <Link to="/contacto" className="mt-2 flex items-center gap-2 text-primary hover:underline">
            <CalendarCheck className="h-4 w-4" /> Solicita información o el demo
          </Link>
          <div className="mt-4 flex flex-col gap-2">
            <Link to="/terminos" className="text-muted-foreground hover:text-primary">Términos del servicio</Link>
            <Link to="/aviso-privacidad" className="text-muted-foreground hover:text-primary">Aviso de privacidad</Link>
          </div>
        </div>
      </div>
      <p className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} SGCO Puebla. Todos los derechos reservados.</p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
        <h1 className="mt-2 max-w-3xl text-3xl font-bold md:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-4">
      <div className="rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground">
        <h2 className="text-2xl font-bold md:text-3xl">Prueba la agenda médica online sin compromiso</h2>
        <p className="mx-auto mt-3 max-w-xl opacity-90">Solicita acceso al demo y descubre cómo organizar las citas de tu consultorio desde el celular.</p>
        <Link to="/contacto" className="mt-6 inline-block rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90">
          Solicitar demo gratis
        </Link>
      </div>
    </section>
  );
}

export function seo(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
