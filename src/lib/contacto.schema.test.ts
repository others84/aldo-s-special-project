import { describe, expect, test } from "bun:test";
import { contactoSchema, hostingerConfig } from "./contacto.schema";

describe("Contact request", () => {
  const request = { nombre: "Prueba", correo: "prueba@example.com", demo: true };
  test("does not collect clinic or specialty", () => {
    expect(contactoSchema.parse({ ...request, clinica: "Consultorio" })).not.toHaveProperty("clinica");
  });
  test("does not collect city", () => {
    expect(contactoSchema.parse({ ...request, ciudad: "Puebla" })).not.toHaveProperty("ciudad");
  });
  test("uses the requested Hostinger secure outgoing server", () => {
    expect(hostingerConfig).toEqual({ host: "smtp.hostinger.com", port: 465, secure: true, tlsPolicy: "require-tls" });
  });
});