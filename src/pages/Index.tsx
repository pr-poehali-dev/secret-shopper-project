import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">FrankRG</h1>
            <nav className="hidden md:flex gap-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О проекте</a>
              <a href="#work" className="text-foreground hover:text-primary transition-colors">Как работать</a>
              <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
            <span className="text-accent font-semibold">Станьте оценщиком качества</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Работайте тайным покупателем в банках
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Оценивайте качество обслуживания финансовых учреждений и зарабатывайте до 50 000 рублей в месяц
          </p>
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
          >
            Оставить заявку
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">О проекте FrankRG</h3>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Мы помогаем банкам повышать уровень сервиса через независимую оценку качества обслуживания
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="FileCheck" size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Подготовка к проверке</h4>
                <p className="text-muted-foreground">
                  Получите детальную легенду и критерии оценки от заказчика для объективного анализа работы банка
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Building2" size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Проведение проверки</h4>
                <p className="text-muted-foreground">
                  Посетите отделение банка, взаимодействуйте с сотрудниками и оцените качество услуг согласно критериям
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="ClipboardList" size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Составление отчёта</h4>
                <p className="text-muted-foreground">
                  Заполните подробную анкету с описанием всех аспектов обслуживания и соответствия стандартам качества
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">Преимущества работы</h3>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Профессиональный рост и достойное вознаграждение за вашу работу
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="GraduationCap" size={36} className="text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Развитие навыков</h4>
              <p className="text-muted-foreground">
                Повышайте коммуникативные способности, развивайте аналитическое мышление и узнавайте тонкости работы банковской сферы
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Wallet" size={36} className="text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Достойная оплата</h4>
              <p className="text-muted-foreground">
                Высокое вознаграждение за выполненные проверки — возможность заработать до 50 000 рублей ежемесячно
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" size={36} className="text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Гибкий график</h4>
              <p className="text-muted-foreground">
                Работайте в удобное время, совмещайте с основной деятельностью. Важны результат и ответственность
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать?</h3>
            <p className="text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами для обсуждения условий сотрудничества
            </p>
          </div>
          <Card id="contact-form" className="border-none shadow-lg">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ivan@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение (необязательно)
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о своём опыте или задайте вопрос"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6">
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h5 className="text-2xl font-bold mb-2">FrankRG</h5>
              <p className="text-primary-foreground/80">Профессиональная оценка качества банковских услуг</p>
            </div>
            <div className="flex gap-6">
              <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                О проекте
              </a>
              <a href="#work" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Как работать
              </a>
              <a href="#benefits" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Преимущества
              </a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Контакты
              </a>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>© 2026 FrankRG. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
