import Hero from '../components/Hero';
import QuienesSomos from '../components/QuienesSomos';
import Experiencia from '../components/Experiencia';
import Servicios from '../components/Servicios';
import LeadTime from '../components/LeadTime';
import PorqueNosotros from '../components/PorqueNosotros';
import Proyectos from '../components/Proyectos';
import Financiamiento from '../components/Financiamiento';
// import Contacto from '../components/Contacto'; // si lo necesitas

export default function Home() {
  return (
    <>
      <Hero />
      <QuienesSomos />
      <Experiencia />
      <Servicios />
      <LeadTime />
      <Proyectos />
      <Financiamiento />
      <PorqueNosotros />

    </>
  );
}

