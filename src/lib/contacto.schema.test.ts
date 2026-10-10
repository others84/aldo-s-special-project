import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { contactoSchema, hostingerConfig } from "./contacto.schema";

describe("Contact request", () => {
  const request = { nombre: "Prueba", correo: "prueba@example.com", demo: true };
  test("does not collect clinic or specialty", () => {
    assert.equal("clinica" in contactoSchema.parse({ ...request, clinica: "Consultorio" }), false);
  });
  test("does not collect city", () => {
    assert.equal("ciudad" in contactoSchema.parse({ ...request, ciudad: "Puebla" }), false);
  });
  test("uses the requested Hostinger secure outgoing server", () => {
    assert.deepEqual(hostingerConfig, { host: "smtp.hostinger.com", port: 465, secure: true, tlsPolicy: "require-tls" });
  });
});