
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface MaterialCardProps {
  icon: string;
  title: string;
  description: string;
}

const MaterialCard = ({ icon, title, description }: MaterialCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Icon name={icon} className="h-8 w-8 text-[#9b87f5] mr-3" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="ghost" className="flex items-center text-[#9b87f5]">
          Подробнее
          <Icon name="ArrowRight" className="ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

const MaterialsSection = () => {
  const materials = [
    {
      icon: "BookOpen",
      title: "Конспекты уроков",
      description: "Подробные конспекты по всем темам школьной программы с 5 по 11 класс."
    },
    {
      icon: "FileText",
      title: "Тесты и задания",
      description: "Контрольные работы, тесты и интерактивные задания для проверки знаний."
    },
    {
      icon: "Video",
      title: "Видеоматериалы",
      description: "Образовательные видео, документальные фильмы и лекции по истории."
    }
  ];

  return (
    <section id="materials" className="py-16 bg-[#F1F0FB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Учебные материалы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <MaterialCard 
              key={index}
              icon={material.icon}
              title={material.title}
              description={material.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
