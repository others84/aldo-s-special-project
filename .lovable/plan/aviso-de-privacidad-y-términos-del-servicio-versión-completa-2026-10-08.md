# Aviso de privacidad y Términos del servicio: versión completa

Ambas páginas hoy solo tienen tres párrafos generales. Se reescriben con los datos que dio Victo y la cláusula preventiva de pago.

## 1. Aviso de privacidad

Contenido que se publicará:

- **Responsable:** Victor Puig Morales, RFC PUMV800527HF3, domicilio en Privada 19 Sur 1915, Puebla, México, con domicilio para oír y recibir notificaciones en el mismo.
- **Fundamento legal:** Ley General de Protección de Datos Personales en Posesión de los Particulares.
- **Datos que se recaban:** los del formulario de contacto (nombre, correo, teléfono, consultorio o clínica, ciudad y mensaje) y los que se generan al usar el sistema (agendas, citas y datos de pacientes registrados por el especialista).
- **Finalidades:** atender solicitudes de información y el demo, cobrar y facturar la suscripción, brindar y soportar el servicio, y enviar avisos relacionados con él.
- **Derechos ARCO:** el medio concreto es el correo electrónico **soporte@sgcopuebla.com.mx**. La solicitud debe incluir nombre completo del titular, copia de la INE (identificación oficial) y señalamiento concreto del derecho que se pide: acceso, rectificación, cancelación u oposición. SGCO responde en el plazo que marca la ley (20 días hábiles, ampliable por una sola vez).
- **Terceros:** los datos no se venden ni se comparten con terceros para fines distintos de los señalados.
- **Cambios al aviso:** cualquier actualización se publica en esta misma página con su fecha.
- **Última actualización:** 8 de octubre de 2026.

## 2. Términos del servicio

Contenido que se publicará:

- **Objeto y suscripción:** SGCO es un sistema de gestión de citas online que se entrega por suscripción mensual o anual. Los precios vigentes son los publicados en la página de Paquetes (pesos mexicanos más IVA; el pago anual equivale a 10 meses).
- **Cláusula preventiva de pago:** el pago se realiza por transferencia bancaria a la cuenta que SGCO indique al momento de la contratación. La suscripción se activa una vez confirmado el pago, y al aplicar se emite la factura electrónica (CFDI) correspondiente. Si el pago no se recibe dentro del periodo de facturación en curso, SGCO podrá suspender el servicio hasta que se regularice; los periodos ya pagados no son reembolsables.
- **Responsabilidades del usuario:** veracidad de la información capturada, custodia de sus accesos y usuarios, y uso del sistema conforme a la ley, incluyendo el tratamiento de datos de sus pacientes.
- **Disponibilidad:** SGCO mantiene esfuerzos razonables de disponibilidad continua, salvo mantenimientos programados o causas de fuerza mayor.
- **Datos al cancelar:** la suscripción puede cancelarse en cualquier momento y, al concluirla, la información cargada en el sistema se borra.
- **Propiedad intelectual:** el software, su marca y su documentación pertenecen a SGCO; los datos y el contenido del consultorio siguen siendo del cliente.
- **Ley aplicable:** tribunales y leyes de Puebla, México.
- **Última actualización:** 8 de octubre de 2026.

## Archivos a modificar (por prioridad)

1. **src/routes/aviso-privacidad.tsx** — responsable con RFC y domicilio, ley vigente, finalidades, medio ARCO con correo, requisitos de identificación, plazo de respuesta y fecha de actualización.
2. **src/routes/terminos.tsx** — cláusula de pago por transferencia con CFDI, referencia a Paquetes, borrado de datos al cancelar, jurisdicción Puebla y fecha de actualización.
3. **src/components/site/Layout.tsx** — sin cambios salvo que decidas mostrar soporte@sgcopuebla.com.mx también en el pie de página.

## Detalles técnicos

- Las dos páginas conservan su estructura actual (PageHero + columna de texto) y suman títulos y listas para que se lean; el correo de ARCO queda visible solo en la página del aviso, no en el formulario de Contacto.
- Se actualiza la descripción de búsqueda (head/seo) de cada página para reflejar el contenido nuevo.
- Se guardan en memoria del proyecto los datos legales (responsable, RFC, domicilio, correo ARCO, forma de pago, borrado al cancelar) para no volver a preguntarlas.
- La fecha de última actualización se deja fija en el texto: "8 de octubre de 2026".
