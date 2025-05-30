import React from "react";

export default function TarjetaValores({ imagen, titulo, descripcion }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img src={imagen} alt={titulo} className="w-24 h-24 mb-4" />
      <h4 className="text-xl font-bold mb-2">{titulo}</h4>
      <p className="text-gray-700 text-center">{descripcion}</p>
    </div>
  );
}


