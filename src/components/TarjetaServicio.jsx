import React from "react";

const TarjetaServicio = ({ imagen, titulo, descripcion, url }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={imagen} alt={titulo} className="w-full h-52 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{titulo}</h3>
        <p className="text-sm text-gray-700 mb-4 ">
          {descripcion.length > 200
            ? descripcion.slice(0, 200) + "..."
            : descripcion}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-2 rounded"
        >
          Ver más
        </a>
      </div>
    </div>
  );
};

export default TarjetaServicio;
