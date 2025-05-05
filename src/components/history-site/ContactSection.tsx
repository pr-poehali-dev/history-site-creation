
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ContactInfoProps {
  icon: string;
  text: string;
}

const ContactInfo = ({ icon, text }: ContactInfoProps) => {
  return (
    <div className="flex items-center">
      <Icon name={icon} className="h-5 w-5 mr-3 text-[#9b87f5]" />
      <span>{text}</span>
    </div>
  );
};

interface SocialIconProps {
  icon: string;
}

const SocialIcon = ({ icon }: SocialIconProps) => {
  return (
    <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#9b87f5]/20">
      <Icon name={icon} className="h-5 w-5" />
    </Button>
  );
};

const ContactForm = () => {
  return (
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
  );
};

const ContactSection = () => {
  const contactInfos = [
    { icon: "Mail", text: "history-teacher@example.com" },
    { icon: "Phone", text: "+7 (999) 123-45-67" },
    { icon: "MapPin", text: "г. Москва, ул. Исторический проспект, д. 42" }
  ];

  const socialIcons = ["Facebook", "Instagram", "Youtube", "Telegram"];

  return (
    <section id="contact" className="py-16 bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Свяжитесь со мной</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <p className="mb-6">
              Если у вас есть вопросы по материалам, предложения о сотрудничестве или вы хотите записаться на индивидуальную консультацию — свяжитесь со мной любым удобным способом.
            </p>
            <div className="space-y-4">
              {contactInfos.map((info, index) => (
                <ContactInfo key={index} icon={info.icon} text={info.text} />
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              {socialIcons.map((icon, index) => (
                <SocialIcon key={index} icon={icon} />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 bg-white text-black p-6 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
