import razones from "../assets/razones.jpg";
import TarjetaRazones from "./TarjetaRazones";
function PorqueNosotros() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white flex flex-col md:flex-row items-center gap-10" id="PorqueNosotros">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          ¿Por Qué Elegir All Logistics?
        </h2>
        <p className="text-gray-700 mb-6">
          En All Logistics S.A.C., somos más que un proveedor: somos tu{" "}
          <b>aliado estratégico integral</b> para el éxito de tus proyectos.
          Entendemos la criticidad de contar con materiales de calidad,
          entregados justo a tiempo y sin complicaciones. Por eso, te ofrecemos:
        </p>

        <div className="space-y-6">
          <TarjetaRazones
            title="Suministro Total y Confiable:"
            description="Accede a un amplio catálogo de materiales e insumos, seleccionados por su calidad y con precios competitivos para ajustarnos a las necesidades de cada proyecto, sin importar su envergadura."
            // icon={CheckCircleIcon} // Puedes pasar un componente de ícono de Heroicons
          />
          <TarjetaRazones
            title="Logística Sin Complicaciones:"
            description="Nos encargamos de llevar todos los materiales directamente a la obra, optimizando tus tiempos y recursos. Nuestro servicio de entrega ágil, seguro y a medida te permite enfocarte en lo que realmente importa: la ejecución de tu proyecto."
          />
          <TarjetaRazones
            title="Eficiencia Operativa Integral:"
            description="Gestionamos cada etapa del proceso logístico, desde la planificación hasta el control en campo. Nuestro objetivo es reducir al mínimo el lead time, garantizando entregas rápidas y eficientes sin sacrificar la calidad que tus proyectos demandan."
          />
          <TarjetaRazones
            title="Experiencia y Compromiso:"
            description="Contamos con la experiencia y el conocimiento del mercado para ofrecerte soluciones logísticas efectivas y adaptadas a los desafíos específicos de tu sector. Nuestro compromiso es impulsar tu proyecto a través de un servicio confiable y de excelencia."
          />
        </div>
        <div className="py-10 px-6 space-y-6">
          <p className="text-gray-900 mb-6">
            <b>
              Deja que All Logistics sea el motor logístico de tus grandes
              proyectos. Simplificamos la complejidad para que tú construyas el
              futuro.
            </b>
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src={razones}
          alt="Camión de carga"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
export default PorqueNosotros;
