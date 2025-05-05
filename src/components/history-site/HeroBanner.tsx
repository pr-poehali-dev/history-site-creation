
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroBanner = () => {
  return (
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
  );
};

export default HeroBanner;
