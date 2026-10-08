# Cambios de Aldo: imágenes de roles, pie de página y páginas legales

## 1. Reemplazar imágenes de roles (Página "Cómo funciona")
- Subir asistente-2.jpg y medico-2.jpg con lovable-assets y reemplazar los punteros existentes `src/assets/asistente.jpg.asset.json` y `src/assets/medico.jpg.asset.json`.
- Así la página "Cómo funciona" muestra los diagramas nuevos sin cambiar código (los diagramas nuevos traen su propio título y el detalle de cada rol).
- Borrar los assets viejos que quedan huérfanos con `lovable-assets delete`.

## 2. Pie de página
- En `src/components/site/Layout.tsx` cambiar:
  - Antes: "Software médico mexicano en la nube para consultorios, clínicas y policlínicas. Desde Puebla para todo México."
  - Después: "Software médico mexicano en la nube para consultorios y policlínicas".

## 3. Términos y Aviso de privacidad — ¿falta algo?
El texto actual es genérico. Lo que convendría agregar (Aldo debe confirmar o mandar el texto oficial):

**Aviso de privacidad** (`src/routes/aviso-privacidad.tsx`):
- Identificación del responsable (nombre legal del negocio, RFC y domicilio de contacto).
- Citar la ley vigente: Ley General de Protección de Datos Personales en Posesión de los Particulares (hoy el texto cita la ley anterior, LFPDPPP).
- Medio concreto para ejercer derechos ARCO (correo de contacto del titular de los datos).
- Fecha de última actualización del aviso.

**Términos del servicio** (`src/routes/terminos.tsx`):
- Referencia a la página de Paquetes como fuente de precios vigentes (MXN + IVA, anual = 10 meses).
- Condiciones de pago, facturación y qué ocurre con los datos si se cancela la suscripción.
- Ley aplicable y jurisdicción (Puebla, México).
- Fecha de última actualización.

## Archivos a modificar (por prioridad)
1. src/assets/asistente.jpg.asset.json y src/assets/medico.jpg.asset.json (imágenes nuevas)
2. src/components/site/Layout.tsx (pie de página)
3. src/routes/terminos.tsx y src/routes/aviso-privacidad.tsx (solo si Aldo aprueba agregar lo anterior)

## Detalles técnicos
- `lovable-assets create --file /mnt/user-uploads/asistente-2.jpg --filename asistente.jpg > src/assets/asistente.jpg.asset.json` (ídem medico.jpg).
- `lovable-assets delete --file` de los punteros antiguos después de subir los nuevos.
- No se toca src/routes/como-funciona.tsx: ya importa los punteros.
