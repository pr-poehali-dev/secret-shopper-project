import { useState, useEffect, useRef } from 'react';
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

  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">BankView</h1>
            <nav className="hidden md:flex gap-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О проекте</a>
              <a href="#stats" className="text-foreground hover:text-primary transition-colors">Статистика</a>
              <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-accent font-semibold">Станьте оценщиком качества</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Работайте тайным покупателем в банках
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
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
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/1d79ec1f-aaf2-4f91-9b9a-46dc5668886a/files/8b7ca32e-6fb8-4d53-84e2-8d35bdcab26f.jpg"
                alt="Современный банк"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">50 000₽</p>
                <p className="text-sm">в месяц</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="stats" 
        ref={(el) => (sectionRefs.current['stats'] = el)}
        className={`py-20 px-6 bg-primary text-primary-foreground ${visibleSections.has('stats') ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">2500+</p>
              <p className="text-xl text-primary-foreground/80">Проведено проверок</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">180+</p>
              <p className="text-xl text-primary-foreground/80">Активных сотрудников</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-xl text-primary-foreground/80">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="about" 
        ref={(el) => (sectionRefs.current['about'] = el)}
        className={`py-20 px-6 ${visibleSections.has('about') ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">О проекте BankView</h3>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Мы помогаем банкам повышать уровень сервиса через независимую оценку качества обслуживания
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="FileCheck" size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Подготовка к проверке</h4>
                <p className="text-muted-foreground">
                  Получите детальную легенду и критерии оценки от заказчика для объективного анализа работы банка
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Building2" size={32} className="text-secondary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Проведение проверки</h4>
                <p className="text-muted-foreground">
                  Посетите отделение банка, взаимодействуйте с сотрудниками и оцените качество услуг согласно критериям
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="ClipboardList" size={32} className="text-accent" />
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

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/1d79ec1f-aaf2-4f91-9b9a-46dc5668886a/files/56a4d00e-ef47-434e-97b0-0c2a2b802050.jpg"
                alt="Рабочее место"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Профессиональная среда</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Работайте с ведущими банками России, получайте доступ к закрытым методикам оценки и развивайтесь в сфере финансовых услуг.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Обучение работе с критериями оценки качества</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Поддержка на всех этапах проверки</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Возмещение всех расходов на проверку</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="benefits" 
        ref={(el) => (sectionRefs.current['benefits'] = el)}
        className={`py-20 px-6 ${visibleSections.has('benefits') ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">Преимущества работы</h3>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Профессиональный рост и достойное вознаграждение за вашу работу
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon name="GraduationCap" size={36} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Развитие навыков</h4>
              <p className="text-muted-foreground">
                Повышайте коммуникативные способности, развивайте аналитическое мышление и узнавайте тонкости работы банковской сферы
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/60 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon name="Wallet" size={36} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Достойная оплата</h4>
              <p className="text-muted-foreground">
                Высокое вознаграждение за выполненные проверки — возможность заработать до 50 000 рублей ежемесячно
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon name="Clock" size={36} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Гибкий график</h4>
              <p className="text-muted-foreground">
                Работайте в удобное время, совмещайте с основной деятельностью. Важны результат и ответственность
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Удалённая работа с достойным доходом</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Выполняйте проверки в удобное время, получайте вознаграждение за каждую выполненную задачу и стройте карьеру в сфере качества обслуживания.
              </p>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border-2 border-primary/20">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold">Рост дохода</p>
                  <p className="text-sm text-muted-foreground">От 15 000₽ до 50 000₽ в месяц</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/1d79ec1f-aaf2-4f91-9b9a-46dc5668886a/files/caba7cf1-3012-4ba0-b1e8-51f07c98175b.jpg"
                alt="Финансовые инструменты"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section 
        id="contact" 
        ref={(el) => (sectionRefs.current['contact'] = el)}
        className={`py-20 px-6 ${visibleSections.has('contact') ? 'animate-scale-in' : 'opacity-0'}`}
      >
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
              <h5 className="text-2xl font-bold mb-2">BankView</h5>
              <p className="text-primary-foreground/80">Профессиональная оценка качества банковских услуг</p>
            </div>
            <div className="flex gap-6">
              <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                О проекте
              </a>
              <a href="#stats" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Статистика
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
            <p>© 2026 BankView. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;