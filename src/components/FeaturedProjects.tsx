import { Grid2x2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Proyecto Alpha",
      description: "Investigación sobre inteligencia artificial aplicada",
      image: "photo-1488590528505-98d2b5aba04b",
    },
    {
      title: "Proyecto Beta",
      description: "Desarrollo de sistemas sostenibles",
      image: "photo-1486312338219-ce68d2c6f44d",
    },
    {
      title: "Proyecto Gamma",
      description: "Innovación en tecnologías emergentes",
      image: "photo-1498050108023-c5249f4df085",
    },
    {
      title: "Proyecto Delta",
      description: "Soluciones para smart cities",
      image: "photo-1487058792275-0ad4aaf24ca7",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Grid2x2 className="h-6 w-6 text-brand-blue" />
          <h2 className="text-3xl font-bold text-brand-blue">Proyectos Destacados</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={`https://source.unsplash.com/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-brand-blue">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;