import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  const [activeSection, setActiveSection] = useState('career');

  const navigationItems = [
    { id: 'career', icon: 'Home', label: 'Моя карьера' },
    { id: 'map', icon: 'Map', label: 'Карьерная карта' },
    { id: 'plan', icon: 'Target', label: 'Мой план развития' },
    { id: 'catalog', icon: 'BookOpen', label: 'Каталог возможностей' },
    { id: 'achievements', icon: 'Trophy', label: 'Мои достижения' },
    { id: 'assistant', icon: 'Bot', label: 'Мой Штурман' },
    { id: 'profile', icon: 'User', label: 'Мой профиль' },
    { id: 'portfolio', icon: 'Briefcase', label: 'Мое портфолио' },
  ];

  const achievements = [
    { id: 1, name: 'Первый шаг', icon: '🎯', description: 'Завершен первый курс', color: 'bg-primary' },
    { id: 2, name: 'Быстрый старт', icon: '⚡', description: '3 курса за месяц', color: 'bg-accent' },
    { id: 3, name: 'Наставник', icon: '🎓', description: 'Помощь 5 коллегам', color: 'bg-secondary' },
    { id: 4, name: 'Инноватор', icon: '💡', description: 'Предложена новая идея', color: 'bg-warning' },
  ];

  const currentGoals = [
    { id: 1, title: 'Освоить React Advanced', progress: 75, deadline: '15 дек' },
    { id: 2, title: 'Получить сертификат AWS', progress: 45, deadline: '28 дек' },
    { id: 3, title: 'Завершить проект "Alpha"', progress: 90, deadline: '10 дек' },
  ];

  const stats = [
    { label: 'Курсов пройдено', value: '12', icon: 'BookOpen', color: 'text-primary' },
    { label: 'Часов обучения', value: '48', icon: 'Clock', color: 'text-secondary' },
    { label: 'Проектов', value: '5', icon: 'Folder', color: 'text-accent' },
    { label: 'Достижений', value: '24', icon: 'Award', color: 'text-warning' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50 to-blue-50 flex">
      <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
              <Icon name="Rocket" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold">Career Pilot</h1>
              <p className="text-xs text-sidebar-foreground/60">Ваш карьерный навигатор</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-lg scale-105'
                  : 'hover:bg-sidebar-accent/50 text-sidebar-foreground/70 hover:text-sidebar-foreground'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-2">
            <Avatar className="w-10 h-10 ring-2 ring-primary">
              <AvatarImage src="" alt="User" />
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-heading">
                АП
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Александр Петров</p>
              <p className="text-xs text-sidebar-foreground/60">Уровень 8</p>
            </div>
            <Button size="icon" variant="ghost" className="text-sidebar-foreground/60 hover:text-sidebar-foreground">
              <Icon name="Settings" size={18} />
            </Button>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground">
                {navigationItems.find(item => item.id === activeSection)?.label}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Добро пожаловать в карьерный дашборд</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="relative">
                <Icon name="Bell" size={20} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full text-xs text-white flex items-center justify-center font-bold animate-pulse">
                  3
                </span>
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Search" size={20} />
              </Button>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 p-6 bg-gradient-to-br from-primary via-purple-600 to-secondary text-white shadow-xl border-0 animate-fade-in">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-white/20 text-white border-0 text-sm px-3 py-1">
                      Уровень 8
                    </Badge>
                    <Badge className="bg-accent text-white border-0 text-sm px-3 py-1 animate-pulse">
                      1250 XP
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-2">Привет, Александр! 👋</h3>
                  <p className="text-white/80">Вы на пути к уровню 9. Осталось всего 250 XP!</p>
                </div>
                <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center animate-float">
                  <Icon name="Sparkles" size={40} className="text-yellow-300" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Прогресс до следующего уровня</span>
                  <span className="font-bold">83%</span>
                </div>
                <Progress value={83} className="h-3 bg-white/20" />
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg border-2 border-primary/20 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg">Профиль заполнен</h4>
                  <p className="text-xs text-muted-foreground">Почти готово!</p>
                </div>
              </div>
              <Progress value={92} className="h-2 mb-2" />
              <p className="text-sm text-muted-foreground">92% завершено</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="p-5 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-l-4 border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon name={stat.icon} className={stat.color} size={28} />
                  <span className="text-3xl font-heading font-bold">{stat.value}</span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 bg-white shadow-lg animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Target" className="text-primary" size={24} />
                <h3 className="text-xl font-heading font-bold">Текущие цели</h3>
              </div>
              <div className="space-y-4">
                {currentGoals.map((goal) => (
                  <div key={goal.id} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm">{goal.title}</h4>
                      <Badge variant="outline" className="text-xs">{goal.deadline}</Badge>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">{goal.progress}% завершено</p>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                <Icon name="Plus" size={18} className="mr-2" />
                Добавить новую цель
              </Button>
            </Card>

            <Card className="p-6 bg-white shadow-lg animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Award" className="text-accent" size={24} />
                <h3 className="text-xl font-heading font-bold">Последние достижения</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="p-4 rounded-xl bg-gradient-to-br from-muted to-muted/50 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                  >
                    <div className={`w-14 h-14 rounded-full ${achievement.color} flex items-center justify-center text-3xl mb-3 mx-auto group-hover:animate-float`}>
                      {achievement.icon}
                    </div>
                    <h4 className="font-heading font-bold text-sm text-center mb-1">{achievement.name}</h4>
                    <p className="text-xs text-muted-foreground text-center">{achievement.description}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Смотреть все достижения
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </Card>
          </div>

          <Card className="p-6 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 border-2 border-dashed border-primary/30 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
                <Icon name="Bot" className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-heading font-bold mb-1">Карьерный Штурман готов помочь! 🚀</h3>
                <p className="text-muted-foreground text-sm">
                  Задайте вопрос об обучении, карьерном пути или получите персональные рекомендации
                </p>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Открыть чат
                <Icon name="MessageCircle" size={18} className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
