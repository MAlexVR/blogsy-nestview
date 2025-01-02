import { Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "Laboratorios de Servicios Unificados - LSU",
    description: "Centro integrado de servicios técnicos y tecnológicos para la industria y la academia",
    icon: <Building className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Laboratorio de Ensayos para Paneles Solares - LEPS",
    description: "Pruebas y certificación de sistemas fotovoltaicos según estándares internacionales",
    icon: <Building className="h-6 w-6" />
  },
  {
    id: 3,
    title: "Centro de Regeneración de Gases Refrigerantes - CRGR",
    description: "Servicios especializados en recuperación y tratamiento de gases refrigerantes",
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
              <div className="bg-brand-blue rounded-full p-3 text-white">
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