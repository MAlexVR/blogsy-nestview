import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Workshop de Investigación",
    date: "2024-03-15",
    description: "Taller sobre metodologías de investigación",
  },
  {
    id: 2,
    title: "Seminario Internacional",
    date: "2024-03-20",
    description: "Presentación de resultados de investigación",
  },
  {
    id: 3,
    title: "Conferencia Anual",
    date: "2024-04-05",
    description: "Encuentro de investigadores y presentación de proyectos",
  }
];

const UpcomingEvents = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-blue">Calendario de Actividades</h2>
        <div className="space-y-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-brand-blue rounded-full p-3">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{new Date(event.date).toLocaleDateString()}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <p className="text-gray-600">{event.description}</p>
                <Button variant="outline" className="gap-2">
                  Más información <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;