import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Рекламные ролики",
    description: "Продающие видео для бизнеса: от идеи и сценария до готового ролика с цветокоррекцией и звуком.",
    icon: "🎬",
    badge: "Хит",
  },
  {
    title: "Корпоративное видео",
    description: "Презентации компании, обучающие фильмы, HR-видео и контент для внутренних коммуникаций.",
    icon: "🏢",
    badge: "Бизнес",
  },
  {
    title: "Event-съёмка",
    description: "Профессиональная съёмка конференций, праздников, концертов и спортивных мероприятий.",
    icon: "🎤",
    badge: "Events",
  },
  {
    title: "Монтаж и постпродакшн",
    description: "Цветокоррекция, моушн-графика, VFX-эффекты и звуковой дизайн — доведём ваше видео до идеала.",
    icon: "✂️",
    badge: "Pro",
  },
  {
    title: "Музыкальные клипы",
    description: "Креативные клипы с режиссурой, раскадровкой и кинематографичной картинкой для артистов и лейблов.",
    icon: "🎵",
    badge: "Клипы",
  },
  {
    title: "Контент для соцсетей",
    description: "Короткие вовлекающие ролики для Instagram, YouTube, TikTok — адаптированные под каждую платформу.",
    icon: "📱",
    badge: "SMM",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Полный цикл видеопродакшна — от съёмки до готового результата
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{feature.icon}</span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
