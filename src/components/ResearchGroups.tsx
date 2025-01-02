import { Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ResearchGroups = () => {
  const groups = [
    {
      name: "Semillero de IA",
      description: "Investigación en inteligencia artificial y machine learning",
      members: 12,
      image: "photo-1552664730-d307ca884978",
    },
    {
      name: "Grupo de Desarrollo Sostenible",
      description: "Investigación en tecnologías verdes y sostenibilidad",
      members: 8,
      image: "photo-1544654803-b69140b285a1",
    },
    {
      name: "Innovación Tecnológica",
      description: "Desarrollo de soluciones tecnológicas innovadoras",
      members: 15,
      image: "photo-1523240795612-9a054b0db644",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Users className="h-6 w-6 text-brand-blue" />
          <h2 className="text-3xl font-bold text-brand-blue">Nuestros Semilleros</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={`https://source.unsplash.com/${group.image}`}
                  alt={group.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-brand-blue">{group.name}</CardTitle>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{group.members} miembros</span>
                </div>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchGroups;