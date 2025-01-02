import { Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const FeaturedServices = () => {
  const services = [
    {
      title: "Laboratorio de Prototipado",
      description: "Desarrollo y prueba de prototipos tecnológicos",
      icon: <Building className="h-8 w-8 text-brand-blue" />,
    },
    {
      title: "Laboratorio de Software",
      description: "Desarrollo de soluciones de software a medida",
      icon: <Building className="h-8 w-8 text-brand-blue" />,
    },
    {
      title: "Consultoría Tecnológica",
      description: "Asesoramiento en implementación de tecnologías",
      icon: <Building className="h-8 w-8 text-brand-blue" />,
    },
    {
      title: "Laboratorio de IoT",
      description: "Investigación y desarrollo en Internet de las Cosas",
      icon: <Building className="h-8 w-8 text-brand-blue" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Building className="h-6 w-6 text-brand-blue" />
          <h2 className="text-3xl font-bold text-brand-blue">Servicios Destacados</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-brand-blue text-center">{service.title}</CardTitle>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;