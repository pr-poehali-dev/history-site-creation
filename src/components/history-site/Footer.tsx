
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#403E43] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">ИсторияПлюс</h3>
            <p className="text-sm text-gray-300 mt-1">© {currentYear} Все права защищены.</p>
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
  );
};

export default Footer;
