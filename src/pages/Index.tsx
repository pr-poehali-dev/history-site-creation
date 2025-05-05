
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Шапка сайта */}
      <header className="bg-[#1A1F2C] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ИсторияПлюс</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-[#D6BCFA] transition-colors">Обо мне</a>
            <a href="#materials" className="hover:text-[#D6BCFA] transition-colors">Материалы</a>
            <a href="#events" className="hover:text-[#D6BCFA] transition-colors">События</a>
            <a href="#contact" className="hover:text-[#D6BCFA] transition-colors">Контакты</a>
          </nav>
          <Button variant="ghost" className="md:hidden" aria-label="Меню">
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="relative bg-[#9b87f5] text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Добро пожаловать на сайт учителя истории</h2>
            <p className="text-lg mb-6">Изучайте прошлое, чтобы понимать настоящее и создавать будущее</p>
            <Button className="bg-white text-[#9b87f5] hover:bg-[#F1F0FB]">
              Узнать больше
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
              alt="Античные книги и свиток" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Обо мне */}
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

      {/* Учебные материалы */}
      <section id="materials" className="py-16 bg-[#F1F0FB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Учебные материалы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="BookOpen" className="h-8 w-8 text-[#9b87f5] mr-3" />
                  <h3 className="text-xl font-semibold">Конспекты уроков</h3>
                </div>
                <p className="text-gray-600 mb-4">Подробные конспекты по всем темам школьной программы с 5 по 11 класс.</p>
                <Button variant="ghost" className="flex items-center text-[#9b87f5]">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-2" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="FileText" className="h-8 w-8 text-[#9b87f5] mr-3" />
                  <h3 className="text-xl font-semibold">Тесты и задания</h3>
                </div>
                <p className="text-gray-600 mb-4">Контрольные работы, тесты и интерактивные задания для проверки знаний.</p>
                <Button variant="ghost" className="flex items-center text-[#9b87f5]">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-2" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Video" className="h-8 w-8 text-[#9b87f5] mr-3" />
                  <h3 className="text-xl font-semibold">Видеоматериалы</h3>
                </div>
                <p className="text-gray-600 mb-4">Образовательные видео, документальные фильмы и лекции по истории.</p>
                <Button variant="ghost" className="flex items-center text-[#9b87f5]">
                  Подробнее
                  <Icon name="ArrowRight" className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Исторические события */}
      <section id="events" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Важные исторические события</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center bg-[#F1F0FB] rounded-lg overflow-hidden shadow-md">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1552084117-56a987666449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="Древний Рим" 
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <span className="inline-block px-3 py-1 bg-[#E5DEFF] text-[#7E69AB] rounded-full text-sm font-semibold mb-3">Древний мир</span>
                <h3 className="text-xl font-semibold mb-2">Расцвет Римской империи</h3>
                <p className="text-gray-600 mb-4">
                  Период наивысшего могущества Древнего Рима, распространение римской культуры, архитектуры и права по всему Средиземноморью.
                </p>
                <Button variant="outline">Подробнее</Button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center bg-[#F1F0FB] rounded-lg overflow-hidden shadow-md">
              <div className="md:w-1/3 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1572066098919-a2d6f9644f20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="Средневековый замок" 
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 md:order-1">
                <span className="inline-block px-3 py-1 bg-[#FEC6A1] text-[#F97316] rounded-full text-sm font-semibold mb-3">Средние века</span>
                <h3 className="text-xl font-semibold mb-2">Эпоха Крестовых походов</h3>
                <p className="text-gray-600 mb-4">
                  Серия религиозных военных походов западных европейцев, направленных на освобождение Иерусалима и Святой земли от мусульман.
                </p>
                <Button variant="outline">Подробнее</Button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center bg-[#F1F0FB] rounded-lg overflow-hidden shadow-md">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="Вторая мировая война" 
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <span className="inline-block px-3 py-1 bg-[#D3E4FD] text-[#0EA5E9] rounded-full text-sm font-semibold mb-3">Новейшее время</span>
                <h3 className="text-xl font-semibold mb-2">Вторая мировая война</h3>
                <p className="text-gray-600 mb-4">
                  Крупнейший вооруженный конфликт в истории человечества, затронувший территории более 40 стран мира с 1939 по 1945 год.
                </p>
                <Button variant="outline">Подробнее</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-16 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Свяжитесь со мной</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="mb-6">
                Если у вас есть вопросы по материалам, предложения о сотрудничестве или вы хотите записаться на индивидуальную консультацию — свяжитесь со мной любым удобным способом.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 mr-3 text-[#9b87f5]" />
                  <span>history-teacher@example.com</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="h-5 w-5 mr-3 text-[#9b87f5]" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-5 w-5 mr-3 text-[#9b87f5]" />
                  <span>г. Москва, ул. Исторический проспект, д. 42</span>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#9b87f5]/20">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#9b87f5]/20">
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#9b87f5]/20">
                  <Icon name="Youtube" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#9b87f5]/20">
                  <Icon name="Telegram" className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 bg-white text-black p-6 rounded-lg shadow-lg">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]" 
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]" 
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Тема</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]" 
                    placeholder="Тема сообщения"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]" 
                    placeholder="Ваше сообщение"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">Отправить сообщение</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Подвал сайта */}
      <footer className="bg-[#403E43] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">ИсторияПлюс</h3>
              <p className="text-sm text-gray-300 mt-1">© 2025 Все права защищены.</p>
            </div>
            <nav className="flex flex-wrap gap-4 md:gap-8">
              <a href="#about" className="text-sm hover:text-[#D6BCFA] transition-colors">Обо мне</a>
              <a href="#materials" className="text-sm hover:text-[#D6BCFA] transition-colors">Материалы</a>
              <a href="#events" className="text-sm hover:text-[#D6BCFA] transition-colors">События</a>
              <a href="#contact" className="text-sm hover:text-[#D6BCFA] transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
