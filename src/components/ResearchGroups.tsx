import { Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const groups = [
  {
    id: 1,
    title: "Semillero de Innovación",
    description: "Grupo enfocado en desarrollo de nuevas tecnologías",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Semillero de Sostenibilidad",
    description: "Investigación en desarrollo sostenible y medio ambiente",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Semillero de Biotecnología",
    description: "Estudio de aplicaciones biotecnológicas",
    image: "/placeholder.svg"
  }
];

const ResearchGroups = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue">Nuestros Semilleros</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {groups.map((group) => (
          <Card key={group.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="relative">
                <img
                  src={group.image}
                  alt={group.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 bg-brand-blue rounded-full p-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{group.title}</CardTitle>
              <CardDescription>{group.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ResearchGroups;