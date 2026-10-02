# Sitio web SGCO Puebla — Sistema de gestión de citas médicas

Sitio promocional en español (México), responsive, con páginas separadas (sin auto-scroll), optimizado para SEO con las palabras clave del documento.

## Menú (en este orden)
1. Inicio
2. ¿Qué es SGCO?
3. Cómo funciona
4. Características
5. Paquetes
6. Contacto (botón destacado "Solicitar demo")

Cada opción abre una pantalla distinta (ruta propia), empezando arriba.

## Contenido por página
- **Inicio**: H1 "Software para clínicas médicas y sistema de citas médicas en la nube", subtítulo con el diferencial (software mexicano, todo incluido, sin pagos extra). Beneficios clave (citas 24/7, recordatorios WhatsApp, reducción de ausentismo hasta 80%, multidispositivo), resumen de perfiles (Administrador, Médico, Asistente), bloque "Para quién es" (consultorios, clínicas, policlínicas, torres de consultorios), llamada a la acción a demo.
- **¿Qué es SGCO?**: "Sistema Integral de Gestión Médica y Citas Multiclínica" + frase de valor, por qué mexicano y todo incluido.
- **Cómo funciona**: pasos visuales: el paciente agenda en el portal (con verificación OTP) → asistente confirma/recuerda por WhatsApp → médico atiende y se mide tiempo real → reportes.
- **Características**: las 7 secciones del documento (Multiclínica, Portal público 24/7, Agenda inteligente, Notificaciones WhatsApp/correo, Roles y seguridad, Reportes, Tecnología web multidispositivo), con iconos.
- **Paquetes** (precios en MXN + IVA), selector Mensual/Anual (anual = paga 10 meses):
  - Consultorio: $1,000/mes (anual $10,000).
  - Clínica (2 a 5 médicos): $1,000 el primer médico + $500 por cada médico del 2 al 5 (de $1,500 a $3,000/mes).
  - Clínica extendida (6 a 10 médicos): igual que Clínica hasta 5 médicos + $250 por cada médico del 6 al 10 (de $3,250 a $4,250/mes).
  - Calculadora: el visitante elige el número de médicos y ve el total mensual o anual.
- **Contacto**: formulario (nombre, correo, teléfono, clínica/especialidad, ciudad, mensaje, casilla "quiero acceso al demo") que abre el correo del visitante dirigido a ventas@sgcopuebla.com.mx, más el correo visible.

## Diseño
- Paleta médica clara: fondo blanco/gris muy claro, azul clínico como color principal, rojo médico como acento en botones de acción, grises para texto.
- Tipografía moderna y legible (Sora para títulos, Manrope para texto).
- Tarjetas limpias, iconos, animaciones suaves al entrar; menú hamburguesa en celular.
- Imágenes generadas: consultorios modernos, médicos usando tablet/laptop con la agenda, y composiciones de pantallas web mezcladas con utensilios médicos (estetoscopio, etc.).
- Espacio reservado para el logotipo en el encabezado y pie (se reemplaza cuando Aldo lo envíe).

## SEO
- Título y metadescripción (≤155 caracteres) únicos por página con palabras clave principales.
- Palabra clave en H1, primeras 100 palabras y al menos 2 subtítulos; long-tail y geolocalizadas (Puebla, CDMX, Guadalajara, Monterrey, Tlaxcala) integradas en textos de forma natural.
- Datos estructurados (SoftwareApplication / Organization), idioma `es-MX`, robots.txt.

## Recomendación de tecnologías (respuesta a la pregunta)
React + TanStack Start (rápido, buen SEO al generar las páginas en el servidor), Tailwind CSS, componentes shadcn/ui, iconos Lucide y animaciones con Motion.

## Pendientes de Aldo
- Archivo del logotipo.
- Mención de firma digital de consentimiento: se incluirá solo si el sistema la tiene (aparece en palabras clave, no en características).

## Detalles técnicos
- Rutas: `index`, `que-es`, `como-funciona`, `caracteristicas`, `paquetes`, `contacto`, cada una con su `head()`.
- Layout compartido (encabezado y pie) en `__root.tsx`; `scrollRestoration` lleva al inicio en cada cambio.
- Tokens de color en `src/styles.css`; fuentes cargadas vía `<link>` en root.
- Formulario de contacto vía `mailto:` (sin backend). Se puede migrar a envío real de correo más adelante.
