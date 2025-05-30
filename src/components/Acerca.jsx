import TarjetaValores from "./TarjetaValores";
import quienes from '../assets/quienes.jpg';
import compromiso from "../assets/compromiso.png"; 
import agilidad from "../assets/agilidad.png";
import transparencia from "../assets/transparencia.png";
import excelencia from "../assets/excelencia.png";
import asesoria from "../assets/asesoria.png";

export default function Acerca() {
  return (
    <section
      className="py-15 px-6 md:px-20 bg-white flex flex-col items-center gap-10"
      id="Acerca"
    >
      <div className="pt-15 items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ¿Quiénes somos?
        </h2>
      </div>

      <p className="text-gray-700 mb-6">
        ALL LOGISTICS S.A.C. es una empresa peruana especializada en la
        logística de compra y distribución de materiales para proyectos de
        construcción, infraestructura, minería, hidrocarburos, agroindustria y
        otros sectores estratégicos. Nuestro compromiso es claro: mejorar los
        tiempos de entrega (Lead Time) para nuestros clientes, optimizando cada
        etapa del proceso de adquisición de productos.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4"> Visión</h3>
          <p className="text-gray-700 mb-6">
            Ser la empresa referente en logística de adquisición de materiales
            en el Perú, reconocida por nuestra agilidad operativa, eficiencia en
            el Lead Time y relaciones de confianza con nuestros clientes a nivel
            nacional.
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4"> Misión</h3>
          <p className="text-gray-700 mb-6">
            Ofrecer una solución logística integral con foco en la reducción del
            Lead Time, brindando materiales de calidad a través de un
            VTarjetaValores ágil, transparente y con asesoría experta, adaptado
            a las necesidades específicas de cada empresa o proyecto.
          </p>
          <p className="text-gray-700 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Nuestro compromiso contigo
            </h3>
            En ALL LOGISTICS, entendemos que el tiempo vale oro, especialmente
            en proyectos con plazos exigentes. Por eso, nuestra prioridad es
            mejorar el Lead Time, facilitando la adquisición rápida y eficiente
            de materiales para que cada proyecto avance sin interrupciones.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={quienes}
            alt="Camión de carga"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Nuestros valores
      </h3>
      <div className=" flex flex-col md:flex-row">
        <div className="grid gap-8 md:grid-cols-5">
          <TarjetaValores
            imagen={compromiso}
            titulo="Compromiso"
            descripcion="Estamos 100% enfocados en cumplir y superar las expectativas de
            nuestros clientes."
          />
          <TarjetaValores
            imagen={agilidad}
            titulo="Agilidad:"
            descripcion="Aceleramos cada proceso para garantizar entregas oportunas. "
          />
          <TarjetaValores
            imagen={transparencia}
            titulo="Transparencia:"
            descripcion="Comunicación honesta y constante en todo momento. "
          />
          <TarjetaValores
            imagen={excelencia}
            titulo="Excelencia:"
            descripcion="Buscamos la mejora continua en cada operación. "
          />
          <TarjetaValores
            imagen={asesoria}
            titulo="Orientación al cliente:"
            descripcion="Ponemos a nuestros clientes en el centro de cada decisión."
          />
        </div>
      </div>
    </section>
  );
}
