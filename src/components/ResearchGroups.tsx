import { Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const groups = [
  {
    id: 1,
    title: "Semillero de Electricidad",
    description: "Investigación en sistemas eléctricos, energías renovables y eficiencia energética",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Semillero de Electrónica",
    description: "Desarrollo de sistemas embebidos, IoT y electrónica aplicada",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Semillero de Telecomunicaciones",
    description: "Innovación en redes, comunicaciones inalámbricas y sistemas de transmisión",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Semillero de Pedagogía",
    description: "Investigación en metodologías de enseñanza y aprendizaje en ingeniería",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Semillero PVeIO",
    description: "Prospectiva, Vigilancia e Inteligencia Organizacional para la innovación tecnológica",
    image: "/placeholder.svg"
  }
];

const ResearchGroups = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue">Nuestros Semilleros</h2>
      <Carousel className="max-w-7xl mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {groups.map((group) => (
            <CarouselItem key={group.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="h-full hover:shadow-lg transition-shadow">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default ResearchGroups;