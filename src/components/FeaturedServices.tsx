import { Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "Laboratorio de Análisis",
    description: "Servicios especializados de análisis y pruebas",
    icon: <Building className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Consultoría Técnica",
    description: "Asesoramiento experto en proyectos de investigación",
    icon: <Building className="h-6 w-6" />
  },
  {
    id: 3,
    title: "Desarrollo de Prototipos",
    description: "Diseño y construcción de prototipos especializados",
    icon: <Building className="h-6 w-6" />
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue">Servicios Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-brand-blue rounded-full p-3">
                {service.icon}
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices;