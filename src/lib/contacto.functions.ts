import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactoSchema = z.object({
  nombre: z.string().trim().min(1).max(100),
  correo: z.string().trim().email().max(255),
  telefono: z.string().trim().max(50).optional().or(z.literal("")),
  clinica: z.string().trim().max(200).optional().or(z.literal("")),
  ciudad: z.string().trim().max(100).optional().or(z.literal("")),
  mensaje: z.string().trim().max(2000).optional().or(z.literal("")),
  demo: z.boolean(),
});

export const enviarContacto = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactoSchema.parse(data))
  .handler(async ({ data }) => {
    const { sendLovableEmail } = await import("@lovable.dev/email-js");

    const filas = [
      ["Nombre", data.nombre],
      ["Correo", data.correo],
      ["Teléfono / WhatsApp", data.telefono || "—"],
      ["Clínica o especialidad", data.clinica || "—"],
      ["Ciudad", data.ciudad || "—"],
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

    try {
      await sendLovableEmail(
        {
          to: "ventas@sgcopuebla.com.mx",
          from: "ventas@sgcopuebla.com.mx",
          sender_domain: "sgcopuebla.com.mx",
          reply_to: data.correo,
          subject: `Solicitud de información SGCO — ${data.nombre}`,
          html,
          text,
          purpose: "sales_inquiry",
          label: "contacto-sgco",
        },
        { apiKey: process.env["LOVABLE_API_KEY"]! },
      );
      return { ok: true as const };
    } catch (err) {
      const code = (err as { code?: string }).code ?? "";
      const status = (err as { status?: number }).status ?? 0;
      if (code === "emails_disabled" || status === 400) {
        return { ok: false as const, reason: "email_not_ready" as const };
      }
      return { ok: false as const, reason: "send_failed" as const };
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
