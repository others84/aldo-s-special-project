import { z } from "zod";

export const contactoSchema = z.object({
  nombre: z.string().trim().min(1).max(100),
  correo: z.string().trim().email().max(255),
  telefono: z.string().trim().max(50).optional().or(z.literal("")),
  mensaje: z.string().trim().max(2000).optional().or(z.literal("")),
  demo: z.boolean(),
});

export const hostingerConfig = {
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  tlsPolicy: "require-tls",
} as const;