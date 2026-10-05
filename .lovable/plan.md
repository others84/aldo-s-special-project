# Segunda ronda de cambios de Aldo

## General
- Quitar la palabra "Multiclínica" en todo el sitio (títulos, textos, descripciones para buscadores y datos para Google).

## Inicio
- Etiqueta superior: "Software 100% mexicano adaptado a las necesidades nacionales".
- Subtítulo: "Un software para agendar citas pensado para médicos de cualquier especialidad atendiendo en el esquema "previa cita"."
- Segunda imagen: volver a la foto original de la asistente (imagen2 sin el letrero).
- Título de esa sección: "Software para consultorios y clínicas con acceso a través de roles".
- Quitar el cuadro "Torres de consultorios" (quedan 2 cuadros, centrados).
- Quitar el texto "Atendemos en toda la República Mexicana".

## ¿Qué es SGCO?
- Título: se quita "Multiclínica" → "Sistema Integral de Gestión Médica y Citas".
- Frase del recuadro azul: "La plataforma web que conecta a pacientes y médicos en tiempo real, optimizando la agenda de tu consultorio o clínica y reduciendo drásticamente el ausentismo."
- A la derecha del recuadro azul: logotipo de SGCO grande; el recuadro se amplía para verse como el de Inicio.
- "Software médico en la nube" (sin "hecho en México").
- Párrafo: "SGCO (Sistema de Gestión de Citas Online) es un software para consultorios y clínicas médicas que sustituye la agenda tradicional de papel."
- Se quita la foto de la laptop con estetoscopio; las 4 tarjetas pasan a ocupar todo el ancho (4 columnas).
- Tarjetas:
  - "Mejora continua": "Sistema en proceso de mejora continua sin costos adicionales para el médico."
  - "Todo incluido": "Sin cobros ocultos por funcionalidades extra."
  - "Policlínica" (antes Multiclínica): "Administra un edificio de consultorios de varias especialidades en una misma pantalla."
  - "100% web": sin cambio.

## Cómo funciona
- Se reemplaza todo el contenido por dos secciones con las imágenes enviadas:
  - "Rol: Asistente" con asistente.jpg.
  - "Rol: Médico" con medico.jpg.
- Cada una con un título corto y la imagen a todo el ancho (se puede ampliar al tocarla).

## Características
- Encabezado: "Todo lo que necesitas para consultorios médicos y policlínicas", con la foto de la laptop y estetoscopio a un lado.
- Se quita "Sin módulos extra: todas las funciones están incluidas en cualquier paquete."
- Tarjeta 1 (se renombra a "Gestión de clínicas y consultorios", sin "Multiclínica"): el punto "Administración de clínicas" cambia a "Administración de catálogos y tareas comunes para cada clínica o consultorio evitando el retrabajo de configuración de cada clínica o consultorio".
- Tarjeta 2: título "Agenda de citas por parte de los pacientes en línea 24/7"; primer punto: "Los pacientes pueden agendar desde cualquier dispositivo conectado a internet a cualquier hora visualizando tu agenda y los horarios y fechas disponibles".
- Tarjeta 4: se quita "Reducción hasta 80% de las citas perdidas".

## Envío de correo del formulario de Contacto
- Causa: el dominio sgcopuebla.com.mx aún no está conectado para enviar correos, por eso el formulario no envía.
- Paso: abrir la configuración de dominio de correo para que Aldo conecte sgcopuebla.com.mx (requiere acceso a la administración del dominio). En cuanto se verifique, el formulario enviará sin más cambios.
- Nota: el documento menciona ventas@sgcopuebla.com (sin .mx). Se mantiene ventas@sgcopuebla.com.mx salvo que Aldo indique lo contrario.

## Archivos a modificar (por prioridad)
1. Página Inicio
2. Página ¿Qué es SGCO?
3. Página Cómo funciona (+ imágenes de roles)
4. Página Características
5. Datos generales del sitio (quitar "Multiclínica" para Google)
6. Configuración del correo del dominio

## Detalles técnicos
- asistente.JPG y medico.JPG subidas con lovable-assets; imagen2.webp subida con lovable-assets reemplazando reception-dentista.jpg.
- Barrido con `rg -i multicl` en src/ para eliminar todas las menciones (incluye JSON-LD de __root.tsx).
- Correo: email_domain setup para sgcopuebla.com.mx.
