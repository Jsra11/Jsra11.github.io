import React from "react";

import TarjetaProyectos from "./TarjetaProyectos";

import franco1 from "../assets/proyectos/franco1.jpg";
import franco2 from "../assets/proyectos/franco2.png";
import franco3 from "../assets/proyectos/franco3.jpeg";

import hospital1 from "../assets/proyectos/hospital1.jpg";
import hospital2 from "../assets/proyectos/hospital2.jpg";

import uni1 from "../assets/proyectos/uni1.jpeg";
import uni2 from "../assets/proyectos/uni2.jpeg";
import uni3 from "../assets/proyectos/uni3.jpeg"

import simonbolivar1 from "../assets/proyectos/simonbolivar1.jpeg";
import simonbolivar2 from "../assets/proyectos/simonbolivar2.jpeg";
import simonbolivar3 from "../assets/proyectos/simonbolivar3.jpeg"

const Proyectos = () => {
  return (
    <section id="Proyectos" className="py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Nuestros Proyectos
      </h2>
      <div className="grid gap-8 md:grid-cols-4">
        <TarjetaProyectos
          tipo={1}
          imagenes={[franco1, franco2, franco3]} 
          titulo="Colegio Franco Peruano"
          descripcion="Texto 1"
        />
        <TarjetaProyectos
          tipo={2}
          imagenes={[hospital1, hospital2]} 
          titulo="Hospital Tito Villar Cabezas de Bambamarca"
          descripcion="Texto 2"
        />
        <TarjetaProyectos
          tipo={1}
          imagenes={[uni1, uni2, uni3]} 
          titulo="Universidad PERUANA CAYETANO HEREDIA"
          descripcion="Texto 3"
        />
        <TarjetaProyectos
          tipo={2}
          imagenes={[simonbolivar1, simonbolivar2, simonbolivar3]} 
          titulo=" IEP Libertador Simón Bolivar"
          descripcion="Texto 4"
        />
      </div>
    </section>
  );
};

export default Proyectos;
