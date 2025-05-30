import React from 'react';
import TarjetaServicio from './TarjetaServicio';
import ventamimg from '../assets/ventamimg.png';
import materialesobra from '../assets/materialesobra.png';
import logistica from '../assets/logitica.png';
const Servicios = () => {
  return (
    <section id="servicios" className="py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Nuestros Servicios</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <TarjetaServicio
          imagen={ventamimg}
          titulo="Venta de Materiales e Insumos"
          descripcion="Ofrecemos una amplia variedad de materiales logísticos e insumos operativos, garantizando calidad, disponibilidad y precios competitivos para todo tipo de proyecto o necesidad empresarial."
          url="/servicio/alquiler"
        />
        <TarjetaServicio
          imagen={materialesobra}
          titulo="Todos los Materiales Puestos en Obra"
          descripcion="Nos encargamos del transporte y entrega directa de materiales en el lugar de ejecución, optimizando tiempos y recursos para nuestros clientes, con un servicio ágil, seguro y a medida."
          url="/servicio/alquiler"
        />
        <TarjetaServicio
          imagen={logistica}
          titulo="Servicios de Logística Operativa"
          descripcion="Gestionamos de forma integral cada etapa del proceso logístico: planificación, transporte, distribución, almacenamiento temporal y control en campo. Nuestro enfoque está en reducir el lead time al mínimo, asegurando que cada entrega se realice de forma rápida y eficiente, sin comprometer la calidad del servicio."
        />
      </div>
    </section>
  );
};

export default Servicios;