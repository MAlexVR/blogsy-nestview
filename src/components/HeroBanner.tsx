const HeroBanner = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-primary">
            Bienvenidos al Blog del
            <br />
            <span className="text-brand-blue">Grupo de Investigación</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-secondary">
            Descubre nuestros proyectos, eventos y servicios. Mantente actualizado con las
            últimas noticias y avances en nuestra área de investigación.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 text-white bg-brand-blue rounded-md hover:bg-brand-blue/90 transition-all duration-200 transform hover:scale-105 font-primary">
              Explorar
            </button>
            <button className="px-8 py-3 text-brand-blue bg-white border border-brand-blue rounded-md hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 font-primary">
              Más información →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;