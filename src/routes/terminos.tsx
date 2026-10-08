import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/terminos")({
  head: () =>
    seo(
      "Términos del servicio | SGCO",
      "Términos y condiciones del sistema de gestión de citas online SGCO: suscripción, pago por transferencia, facturación, cancelación y jurisdicción.",
      "/terminos",
    ),
  component: Page,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-bold text-foreground">{title}</h2>
      {children}
    </div>
  );
}

const li = "ml-5 list-disc";

function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Términos del servicio">
        Última actualización: 8 de octubre de 2026.
      </PageHero>
      <section className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-muted-foreground">
        <Section title="Objeto y modalidad del servicio">
          <p>
            SGCO es un sistema de gestión de citas online que se entrega mediante suscripción mensual o anual. Al contratar y utilizar el servicio aceptas estos términos.
          </p>
          <p>
            Los precios vigentes son los publicados en la{" "}
            <Link to="/paquetes" className="font-semibold text-primary hover:underline">
              página de Paquetes
            </Link>
            , expresados en pesos mexicanos más IVA; el pago anual equivale a pagar 10 meses y usar 12.
          </p>
        </Section>

        <Section title="Contrato de prestación del servicio">
          <p>
            La contratación se formaliza con un <strong className="text-foreground">contrato de prestación del servicio que se firma de forma electrónica</strong>, sin uso de papel. La firma se
            realiza en el primer acceso al sistema, junto con el registro de la <strong className="text-foreground">cédula profesional</strong> del especialista.
          </p>
          <p>
            De acuerdo con la legislación mexicana, el contrato firmado electrónicamente produce los mismos efectos que uno firmado de puño y letra.
          </p>
          <p>
            Al firmar el contrato, el usuario acepta estos términos y el tratamiento de datos personales descrito en el{" "}
            <Link to="/aviso-privacidad" className="font-semibold text-primary hover:underline">
              Aviso de privacidad
            </Link>
            .
          </p>
        </Section>

        <Section title="Pago y facturación">
          <p>
            El pago de la suscripción se realiza mediante <strong className="text-foreground">transferencia bancaria</strong> a la cuenta que SGCO indique al momento de la contratación. La
            suscripción se activa una vez confirmado el pago y, al aplicarse, se emite la <strong className="text-foreground">factura electrónica (CFDI)</strong> correspondiente.
          </p>
          <p>
            Si el pago no se recibe dentro del periodo de facturación en curso, SGCO podrá suspender el servicio hasta que se regularice la situación. Los periodos ya pagados no son reembolsables.
          </p>
        </Section>

        <Section title="Responsabilidades del usuario">
          <ul className="space-y-1">
            <li className={li}>Garantizar la veracidad de la información que captura en el sistema.</li>
            <li className={li}>Custodiar sus accesos y usuarios, y responder por las acciones realizadas con ellos.</li>
            <li className={li}>Usar el sistema conforme a la ley, en particular en el tratamiento de los datos personales de sus pacientes.</li>
          </ul>
        </Section>

        <Section title="Disponibilidad del servicio">
          <p>
            SGCO mantiene esfuerzos razonables para ofrecer disponibilidad continua del servicio, salvo mantenimientos programados, interrupciones de proveedores de infraestructura o causas de
            fuerza mayor.
          </p>
        </Section>

        <Section title="Cancelación y eliminación de datos">
          <p>
            La suscripción puede cancelarse en cualquier momento. Al concluir la suscripción, <strong className="text-foreground">la información cargada en el sistema se borra</strong>, por lo que
            es responsabilidad del cliente conservar las copias que necesite antes de ese momento.
          </p>
        </Section>

        <Section title="Propiedad intelectual">
          <p>
            El software, la marca SGCO y su documentación pertenecen a SGCO. Los datos y contenidos que el consultorio registra en el sistema siguen siendo propiedad del cliente.
          </p>
        </Section>

        <Section title="Ley aplicable y jurisdicción">
          <p>
            Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia relacionada con ellos, las partes se someten a los tribunales competentes de la ciudad
            de Puebla, Puebla, México.
          </p>
          <p>Para cualquier duda, utiliza la página de Contacto.</p>
        </Section>

        <p className="border-t pt-6 text-sm">Fecha de última actualización: 8 de octubre de 2026.</p>
      </section>
    </>
  );
}
