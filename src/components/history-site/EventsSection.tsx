
import { Button } from "@/components/ui/button";

interface HistoricalEventProps {
  image: string;
  altText: string;
  period: string;
  periodColor: string;
  textColor: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const HistoricalEvent = ({
  image,
  altText,
  period,
  periodColor,
  textColor,
  title,
  description,
  reverse = false
}: HistoricalEventProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#F1F0FB] rounded-lg overflow-hidden shadow-md">
      <div className={`md:w-1/3 ${reverse ? 'md:order-2' : ''}`}>
        <img 
          src={image}
          alt={altText}
          className="w-full h-48 md:h-full object-cover"
        />
      </div>
      <div className={`md:w-2/3 p-6 ${reverse ? 'md:order-1' : ''}`}>
        <span className={`inline-block px-3 py-1 ${periodColor} ${textColor} rounded-full text-sm font-semibold mb-3`}>
          {period}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline">Подробнее</Button>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const historicalEvents = [
    {
      image: "https://images.unsplash.com/photo-1552084117-56a987666449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      altText: "Древний Рим",
      period: "Древний мир",
      periodColor: "bg-[#E5DEFF]",
      textColor: "text-[#7E69AB]",
      title: "Расцвет Римской империи",
      description: "Период наивысшего могущества Древнего Рима, распространение римской культуры, архитектуры и права по всему Средиземноморью."
    },
    {
      image: "https://images.unsplash.com/photo-1572066098919-a2d6f9644f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      altText: "Средневековый замок",
      period: "Средние века",
      periodColor: "bg-[#FEC6A1]",
      textColor: "text-[#F97316]",
      title: "Эпоха Крестовых походов",
      description: "Серия религиозных военных походов западных европейцев, направленных на освобождение Иерусалима и Святой земли от мусульман.",
      reverse: true
    },
    {
      image: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      altText: "Вторая мировая война",
      period: "Новейшее время",
      periodColor: "bg-[#D3E4FD]",
      textColor: "text-[#0EA5E9]",
      title: "Вторая мировая война",
      description: "Крупнейший вооруженный конфликт в истории человечества, затронувший территории более 40 стран мира с 1939 по 1945 год."
    }
  ];

  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Важные исторические события</h2>
        <div className="space-y-8">
          {historicalEvents.map((event, index) => (
            <HistoricalEvent 
              key={index}
              image={event.image}
              altText={event.altText}
              period={event.period}
              periodColor={event.periodColor}
              textColor={event.textColor}
              title={event.title}
              description={event.description}
              reverse={event.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
