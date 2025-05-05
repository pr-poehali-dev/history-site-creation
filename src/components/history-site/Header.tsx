
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
