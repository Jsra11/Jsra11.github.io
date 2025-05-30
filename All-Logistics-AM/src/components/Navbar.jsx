import logo from "../assets/logo1.png";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Íconos (puedes usar Heroicons o FontAwesome si prefieres)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-indigo-700 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {
          <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
            <img
              src={logo}
              alt="Logo de All Logistics"
              className="h-10 w-auto"
            />
            {/*<span className="text-xl font-bold">ALL LOGISTICS S.A.C</span>*/}
          </div>
        }
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a href="#hero" className="hover:text-gray-300">
              Inicio
            </a>
          </li>
          <li>
            <a href="#QuienesSomos" className="hover:text-gray-300">
              ¿Quiénes somos?
            </a>
          </li>
          <li>
            <a href="#servicios" className="hover:text-gray-300">
              Servicios
            </a>
          </li>
          <li>
            <a href="#PorqueNosotros" className="hover:text-gray-300">
              ¿Por qué nosotros?
            </a>
          </li>
          <li>
            <a href="#Proyectos" className="hover:text-gray-300">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-gray-300">
              Contacto
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 px-4 pb-4">
          <ul className="space-y-3 font-medium">
            <li>
              <a href="#hero" onClick={toggleMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#QuienesSomos" onClick={toggleMenu}>
                ¿Quiénes somos?
              </a>
            </li>
            <li>
              <a href="#servicios" onClick={toggleMenu}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#porque-nosotros" onClick={toggleMenu}>
                ¿Por qué nosotros?
              </a>
            </li>
            <li>
              <a href="#Proyectos" onClick={toggleMenu}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={toggleMenu}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
