//import fondo from '../assets/fondo.jpg';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    image: "/fondo1.png",
    title: "ALL LOGISTICS",
    text: "Somos el aliado estratégico en logística cotizamos, compramos y entregamos lo que tu obra necesita.",
  },
  {
    image: "/fondo2.png",
    title: "ALL LOGISTICS",
    text: "Entregamos tus Materiales, Impulsamos tu Proyecto",
  },
  {
    image: "/fondo3.png",
    title: "ALL LOGISTICS",
    text: "Somos tu aliado estratégico en Logística 360°, Cotizamos, Compramos y entregamos lo que tu proyecto necesita.",
  },
];

function Hero() {
  const validSlides = slides;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % validSlides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + validSlides.length) % validSlides.length);
  };

  const { image, title, text } = validSlides[current];

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white transition-all duration-700"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-6">{text}</p>
        <a
          href="#servicios"
          className="bg-indigo-700 hover:bg-indigo-800 text-white py-3 px-6 rounded-lg transition duration-300"
        >
          Nuestros Servicios
        </a>
      </div>

      {/* Flechas de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-black p-3 rounded-full z-20"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-black p-3 rounded-full z-20"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}

export default Hero;
