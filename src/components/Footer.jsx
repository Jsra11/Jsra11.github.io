import logo from '../assets/logo2.png';
const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-16 px-6 md:px-20">
      <div className="grid gap-10 md:grid-cols-4">
        {/* Logo y descripción */}
        <div>
          <div className="mb-4">
            <img src={logo} alt="Logo de All Logistics" className="h-25 w-auto" />
          </div>
          <p className="text-sm">
            Somos el aliado estratégico en logística cotizamos, compramos y entregamos lo que tu obra necesita.
          </p>
        </div>

        {/* Cotizaciones */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Cotizaciones</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Venta de insumos</a></li>
            <li><a href="#" className="hover:text-white">Traslado</a></li>
            <li><a href="#" className="hover:text-white">Otro</a></li>
            <li><a href="#" className="hover:text-white">Otro</a></li>
          </ul>
        </div>

        {/* Información */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">ALL LOGISTICS</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">¿Quiénes Somos?</a></li>
            <li><a href="#" className="hover:text-white">Servicios</a></li>
            <li><a href="#" className="hover:text-white">Planes de Financiamiento</a></li>
            <li><a href="#" className="hover:text-white"></a></li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Contacto</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-white">
                <i className="fab fa-facebook-square"></i> Tlf: 552233333
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-white">
                <i className="fab fa-twitter-square"></i> Correo
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-white">
                <i className="fab fa-linkedin"></i> WhatsApp
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-white">
                <i className="fab fa-instagram-square"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Jheilyn Ramirez. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;