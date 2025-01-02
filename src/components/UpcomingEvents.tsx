import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const UpcomingEvents = () => {
  const events = [
    {
      title: "Ciclo de Talleres Proyecta",
      date: "15 de Mayo, 2024",
      time: "14:00 - 17:00",
      description: "Serie de talleres sobre metodologías de investigación",
      image: "photo-1605810230434-7631ac76ec81",
    },
    {
      title: "Workshop de Innovación",
      date: "20 de Mayo, 2024",
      time: "10:00 - 12:00",
      description: "Encuentro de investigadores y empresas",
      image: "photo-1519389950473-47ba0277781c",
    },
    {
      title: "Seminario de Tecnologías Emergentes",
      date: "25 de Mayo, 2024",
      time: "15:00 - 18:00",
      description: "Presentación de nuevas tecnologías",
      image: "photo-1505373877841-8d25f7d46678",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Calendar className="h-6 w-6 text-brand-blue" />
          <h2 className="text-3xl font-bold text-brand-blue">Próximos Eventos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={`https://source.unsplash.com/${event.image}`}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-brand-blue">{event.title}</CardTitle>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;