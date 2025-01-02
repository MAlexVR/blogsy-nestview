import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-brand-blue">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden border border-white">
          <img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
            alt="Investigador en laboratorio"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="text-white space-y-6">
          <h2 className="text-4xl font-bold">
            ¿Listo para innovar con nosotros?
          </h2>
          <p className="text-lg opacity-90">
            Únete a nuestro equipo de investigación y sé parte de los próximos avances tecnológicos
          </p>
          <Button
            size="lg"
            className="bg-white text-brand-blue hover:bg-brand-green hover:text-white border transition-colors"
          >
            Contáctenos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;