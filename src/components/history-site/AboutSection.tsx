
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Обо мне</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
              alt="Учитель истории" 
              className="rounded-full w-64 h-64 object-cover shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Иванов Иван Иванович</h3>
            <p className="text-gray-700 mb-4">
              Учитель истории высшей категории с 15-летним стажем преподавания. Закончил исторический факультет Московского государственного университета. Автор методических пособий и участник педагогических конференций.
            </p>
            <p className="text-gray-700 mb-6">
              Моя цель — сделать изучение истории интересным и увлекательным для каждого ученика, помочь им понять, что история — это не просто даты и факты, а захватывающие истории о реальных людях и событиях, которые сформировали мир, в котором мы живем сегодня.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="flex items-center">
                <Icon name="FileText" className="mr-2" />
                Резюме
              </Button>
              <Button variant="outline" className="flex items-center">
                <Icon name="Award" className="mr-2" />
                Достижения
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
