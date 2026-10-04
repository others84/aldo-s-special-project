# Cambios solicitados por Aldo

## Inicio
- Título principal: solo "Sistema de citas médicas online" (se quita el texto actual debajo del título).
- Primera imagen (médico con tablet) se reemplaza por imagen1.jpg.
- Segunda imagen (asistente): se usa imagen2 como base y se edita para mostrar el letrero "Consultorio Dra. Sandra Carmina" con "Dentista" en letras pequeñas.
- Leyenda final: "Atendemos en toda la República Mexicana".

## Menú y pie de página
- Nueva opción "Contacto" en el menú (celular y computadora) que abre la página de contacto.
- Pie de página: enlaces "Términos del servicio" y "Aviso de privacidad", cada uno con su propia página (texto genérico provisional que Aldo debe revisar).
- Logotipo: se coloca el favicon.png de SGCO en encabezado y pie (en lugar de "LOGO") y también como ícono de la pestaña.

## Cómo funciona
1. El paciente agenda la cita — dos opciones: desde la página web del médico, o comunicándose con el consultorio.
2. El asistente y/o médico confirman la cita.
3. El médico atiende.
4. Se programa la siguiente cita.
- Se quita la tarjeta "Consulta tus reportes".

## Características
Se aplican textualmente todos los cambios del documento:
- Multiclínica, Portal 24/7 (se quita "Flujo guiado"), Agenda inteligente (incluye bloqueo de fechas y horas de no atención), Recordatorios, Roles (nuevos textos).
- Se elimina "Reportes financieros y métricas"; "100% web y multidispositivo" pasa a ser la número 6.

## Paquetes
- Se quita la frase "Precios en pesos mexicanos más IVA. En el pago anual pagas 10 meses y usas 12."
- Nuevos precios mensuales (+ IVA):
  - Primer médico / Consultorio: $800
  - Médicos del 2 al 5: $400 c/u (Clínica: de $1,200 a $2,400)
  - Médicos del 6 al 10: $200 c/u (Clínica extendida: de $2,600 a $3,400)
- La calculadora y todas las tarjetas usan estos precios. Anual se sigue calculando como 10 meses.

## Archivos a modificar (por prioridad)
1. Página de Inicio
2. Encabezado/pie compartido (menú, logo, enlaces legales)
3. Página Cómo funciona
4. Página Características
5. Página Paquetes
6. Nuevas páginas: Términos del servicio y Aviso de privacidad
7. Configuración general del sitio (ícono de pestaña)
8. Imágenes nuevas (imagen1 e imagen2 editada)

## Detalles técnicos
- Imágenes subidas vía lovable-assets; imagen2 editada con imagegen y guardada en src/assets.
- favicon.png copiado a public/, link en __root.tsx, se borra favicon.ico.
- Rutas nuevas `terminos.tsx` y `aviso-privacidad.tsx` con head() propio.
- Actualizar memoria de precios.
