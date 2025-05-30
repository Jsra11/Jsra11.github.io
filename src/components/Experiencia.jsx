import NumeroAnimado from './NumeroAnimado';

function Experiencia() {
    return (
         <section
      id="experiencia"
      className="py-16 px-6 md:px-20 bg-indigo-700 flex flex-col md:flex-row items-center gap-10"
    >
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-stone-50 mb-4">Nuestra empresa en numeros</h2>
        <p className="text-stone-50 mb-6">
          Nos esforzamos por ser más que un proveedor: somos tu aliado estratégico, asegurando que los materiales lleguen a tiempo, con calidad garantizada y una atención personalizada.
        </p>

        </div>
         <div className="max-w-4xl mx-auto grid grid-cols-3 gap-y-10 gap-x-6 text-center">
            <div class="text-center">
                <NumeroAnimado target={180} className="text-stone-50" />
                <p class="text-sm text-stone-50 md:text-base mt-2">Clientes Satisfechos</p>
            </div>
            <div class="text-center">
              <NumeroAnimado target={95} className="text-stone-50" />
                <p class="text-sm text-stone-50 md:text-base mt-2">Proyectos atendidos</p>
            </div>
            <div class="text-center">
              <NumeroAnimado target={3} className="text-stone-50" />
                <p class="text-sm text-stone-50 md:text-base mt-2">Años de trayectoria</p>
            </div>
            <div class="text Ministry:center">
              <NumeroAnimado target={450} className="text-stone-50" />
                <p class="text-sm text-stone-50 md:text-base mt-2">Colaboradores estrategicos</p>
            </div>
            <div class="text Ministry:center">
              <p class="text-3xl text-stone-50 md:text-5xl font-bold">+<NumeroAnimado target={+16} className="text-stone-50" />
                </p>
                <p class="text-sm text-stone-50 md:text-base mt-2">Años de experiencia</p>
            </div>
        </div>
      </section>
    );
  }
  export default Experiencia;

