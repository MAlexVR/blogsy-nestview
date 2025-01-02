import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-brand-blue text-white">
      <div className="max-w-4xl mx-auto text-center">
        <Building className="mx-auto h-16 w-16 mb-6" />
        <h2 className="text-4xl font-bold mb-4">
          ¿Listo para innovar con nosotros?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Únete a nuestro equipo de investigación y sé parte de los próximos avances tecnológicos
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-brand-blue hover:bg-gray-100"
          >
            Contactar
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-brand-blue"
          >
            Conocer más
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;