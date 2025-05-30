import React, { useState } from "react";

const TarjetaProyectos = ({ tipo, imagenes = [], titulo, descripcion }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % imagenes.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  // Si solo hay una imagen, no mostrar flechas
  const showArrows = imagenes.length > 1;

  // Selecciona la imagen actual
  const imagenActual = imagenes[current];

  // Estructura según tipo
  if (tipo === 1) {
    return (
      <div className="bg-white overflow-hidden relative">
        <div className="relative w-full h-52 flex items-center justify-center">
          <img src={imagenActual} alt={titulo} className="w-full h-52 object-cover" />
          {showArrows && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1"
                aria-label="Anterior"
              >
                {"<"}
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1"
                aria-label="Siguiente"
              >
                {">"}
              </button>
            </>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{titulo}</h3>
          <p className="text-sm text-gray-700 mb-4 ">
            {descripcion.length > 200 ? descripcion.slice(0, 200) + "..." : descripcion}
          </p>
        </div>
      </div>
    );
  } else if (tipo === 2) {
    return (
      <div className="bg-white overflow-hidden relative">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{titulo}</h3>
          <p className="text-sm text-gray-700 mb-4 ">
            {descripcion.length > 200 ? descripcion.slice(0, 200) + "..." : descripcion}
          </p>
        </div>
        <div className="relative w-full h-52 flex items-center justify-center">
          <img src={imagenActual} alt={titulo} className="w-full h-52 object-cover" />
          {showArrows && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1"
                aria-label="Anterior"
              >
                {"<"}
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1"
                aria-label="Siguiente"
              >
                {">"}
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
};

export default TarjetaProyectos;