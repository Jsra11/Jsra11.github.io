import personal from "../assets/personal.png";

function LeadTime() {
  return (
    <section
      id="porque"
      className="relative h-[400px] md:h-[450px] px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 overflow-hidden text-white"
    >
      <video
        src="/videotrabajo.mp4"
        loop
        autoPlay
        muted
        className="object-cover absolute w-full h-full top-0 left-0 -z-20"
      />

      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.7 }}
      ></div>

      <div className="md:w-1/2 z-10">
        <h2 className="text-3xl font-bold mb-4">LeadTime</h2>
        <p className="mb-6">
          En ALL LOGISTICS, nuestro mayor pilar de éxito es la mejora del Lead
          Time. ¿Qué significa eso? Que reducimos los tiempos de espera para que
          recibas tus materiales justo cuando los necesitas.
        </p>
        <a
          href="https://wa.me/51951609869"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-8 py-2 rounded">
            Contiza con nosotros
          </button>
        </a>
      </div>
      <div className="md:w-1/2 z-10 p-0 relative h-[400px] md:h-[550px]">
        <img src={personal} alt="Personal" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
}

export default LeadTime;