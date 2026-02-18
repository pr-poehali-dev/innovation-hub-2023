import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алина Соколова",
    role: "Маркетолог, TechStart",
    avatar: "/professional-woman-scientist.png",
    content:
      "EFFECTS сделали рекламный ролик для нашего продукта за неделю. Конверсия выросла на 40% — видео продаёт лучше любого баннера.",
  },
  {
    name: "Дмитрий Волков",
    role: "Основатель, Event Lab",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Заказывали съёмку конференции на 500 человек. Два оператора, дрон, aftermovie через 3 дня. Качество на уровне топовых продакшнов.",
  },
  {
    name: "Мария Ким",
    role: "SMM-директор, Freshline",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Ребята понимают, как делать контент для соцсетей. Вертикальные ролики, динамичный монтаж — охваты наших Reels выросли в 3 раза.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят те, кто уже работал с EFFECTS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
