import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const news = [
  {
    id: 1,
    title: "Nuevo Logro en Investigación",
    date: "2024-03-01",
    description: "El grupo de investigación ha alcanzado un importante hito...",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 2,
    title: "Reconocimiento Internacional",
    date: "2024-02-28",
    description: "Nuestro trabajo ha sido reconocido por la comunidad internacional...",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 3,
    title: "Publicación Destacada",
    date: "2024-02-25",
    description: "Nueva publicación en revista científica de alto impacto...",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  }
];

const LatestNews = () => {
  return (
    <section className="py-8 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue">Últimas Noticias</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {news.map((item) => (
              <CarouselItem key={item.id}>
                <Card className="mx-2">
                  <CardHeader>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{item.title}</CardTitle>
                    <CardDescription className="mb-4">{item.description}</CardDescription>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                      <Button variant="outline">Leer más</Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default LatestNews;