import { Link } from 'react-router-dom';

import quienes from '../assets/quienes.jpg'; // Asegúrate de tener esta imagen en /assets

export default function QuienesSomos() {
  return (
    <section className="py-15 px-6 md:px-20 bg-white flex flex-col md:flex-row items-center gap-10" id="QuienesSomos">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Quiénes somos?</h2>
        <p className="text-gray-700 mb-6">
          ALL LOGISTICS S.A.C. es una empresa peruana especializada en la logística de compra y
          distribución de materiales para proyectos de construcción, infraestructura, minería, hidrocarburos,
          agroindustria y otros sectores estratégicos. Nuestro compromiso es claro: mejorar los tiempos de entrega
          (Lead Time) para nuestros clientes, optimizando cada etapa del proceso de adquisición de productos.
        </p>
        <Link to="/acercade">
          <button className="bg-indigo-700 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded">
            Conócenos
          </button>
        </Link>
      </div>
      <div className="md:w-1/2">
        <img src={quienes} alt="Camión de carga" className="rounded-lg shadow-lg" />
      </div>
      
    </section>
  );
}

/*export default QuienesSomos;*/