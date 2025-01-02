import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Desarrollo Sostenible",
    description: "Investigación sobre prácticas sostenibles en la región",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Innovación Tecnológica",
    description: "Aplicaciones de IA en procesos industriales",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Biotecnología",
    description: "Avances en biotecnología aplicada",
    image: "/placeholder.svg"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;