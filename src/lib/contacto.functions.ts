import { createServerFn } from "@tanstack/react-start";
import { contactoSchema, hostingerConfig } from "./contacto.schema";

export const enviarContacto = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactoSchema.parse(data))
  .handler(async ({ data }) => {
    let password = process.env["HOSTINGER_SMTP_PASSWORD"];
    if (!password) {
      // El servidor Node compilado (VPS) no carga .env por sí solo.
      try {
        const dotenv = await import("dotenv");
        dotenv.config();
        password = process.env["HOSTINGER_SMTP_PASSWORD"];
      } catch {
        // Entorno sin dotenv (por ejemplo, la nube): se ignora.
      }
    }
    if (!password) return { ok: false as const, reason: "email_not_ready" as const };

    const filas = [
      ["Nombre", data.nombre],
      ["Correo", data.correo],
      ["Teléfono", data.telefono || "—"],
      ["Acceso al demo", data.demo ? "Sí" : "No"],
    ] as const;

    const html = `
      <h2 style="margin:0 0 12px;">Solicitud de información SGCO</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">${filas
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px;font-weight:600;white-space:nowrap;vertical-align:top;">${escapeHtml(k)}</td><td style="padding:6px 12px;">${escapeHtml(String(v))}</td></tr>`,
        )
        .join("")}</table>
      ${data.mensaje ? `<h3 style="margin:20px 0 6px;">Mensaje</h3><p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;">${escapeHtml(data.mensaje)}</p>` : ""}
    `;
    const text = [
      "Solicitud de información SGCO",
      ...filas.map(([k, v]) => `${k}: ${v}`),
      data.mensaje ? `\nMensaje:\n${data.mensaje}` : "",
    ].join("\n");

    const subject = `Solicitud de información SGCO — ${data.nombre}`;
    try {
      // Nube de Lovable (workerd): conector de sockets de Cloudflare.
      const { EdgeMailer } = await import("edge-mailer/cloudflare");
      await EdgeMailer.send(
        {
          ...hostingerConfig,
          credentials: { username: "ventas@sgcopuebla.com.mx", password },
          signal: AbortSignal.timeout(20000),
        },
        {
          to: "ventas@sgcopuebla.com.mx",
          from: "ventas@sgcopuebla.com.mx",
          reply: data.correo,
          subject,
          html,
          text,
        },
      );
      return { ok: true as const };
    } catch {
      // Respaldo para el VPS (Node): nodemailer usa los sockets de Node.
      try {
        const nodemailer = await import("nodemailer");
        const transport = nodemailer.createTransport({
          host: hostingerConfig.host,
          port: hostingerConfig.port,
          secure: hostingerConfig.secure,
          auth: { user: "ventas@sgcopuebla.com.mx", pass: password },
          connectionTimeout: 20000,
        });
        await transport.sendMail({
          to: "ventas@sgcopuebla.com.mx",
          from: "ventas@sgcopuebla.com.mx",
          replyTo: data.correo,
          subject,
          html,
          text,
        });
        return { ok: true as const };
      } catch {
        return { ok: false as const, reason: "send_failed" as const };
      }
    }
  });

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
