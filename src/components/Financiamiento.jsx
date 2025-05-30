import financiamiento from '../assets/financiamiento.png'; 

function Nosotros() {
    return (
    <section className="py-16 px-6 md:px-20 bg-indigo-700 text-white flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
        <img src={financiamiento} alt="Camión de carga" className="rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold  mb-4">Planes de Financiamiento</h2>
        <p className="mb-6">
          En All Logistics AM entendemos las necesidades de nuestros clientes, por eso ofrecemos opciones de financiamiento flexibles que se adaptan a cada proyecto.
Brindamos la posibilidad de acceder a créditos directos, con evaluaciones rápidas y condiciones accesibles para facilitar la ejecución de obras, compras de materiales o servicios logísticos.
Consulta con nuestro equipo comercial para conocer los requisitos y acceder a un plan de financiamiento personalizado.
        </p>
      </div>
 
    </section>
    );
  }
  export default Nosotros;