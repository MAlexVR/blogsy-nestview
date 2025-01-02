import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const news = [
  {
    id: 1,
    title: "Nuevo Logro en Investigación",
    date: "2024-03-01",
    description: "El grupo de investigación ha alcanzado un importante hito...",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Reconocimiento Internacional",
    date: "2024-02-28",
    description: "Nuestro trabajo ha sido reconocido por la comunidad internacional...",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Publicación Destacada",
    date: "2024-02-25",
    description: "Nueva publicación en revista científica de alto impacto...",
    image: "/placeholder.svg"
  }
];

const LatestNews = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue">Últimas Noticias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;