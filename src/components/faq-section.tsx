import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько стоит съёмка ролика?",
      answer:
        "Стоимость зависит от формата, длительности и сложности проекта. Простой ролик для соцсетей — от 30 000 ₽, рекламный ролик — от 80 000 ₽. Напишите нам — рассчитаем точную стоимость под ваш запрос.",
    },
    {
      question: "Сколько времени занимает производство видео?",
      answer:
        "Короткий ролик для соцсетей — 3–5 дней. Рекламный ролик — 1–2 недели. Корпоративный фильм — 2–4 недели. Сроки зависят от объёма съёмок и сложности постпродакшна.",
    },
    {
      question: "Вы работаете только в Москве?",
      answer:
        "Мы базируемся в Москве, но выезжаем на съёмки в любую точку России и за рубеж. Транспортные расходы обсуждаются отдельно.",
    },
    {
      question: "Что входит в стоимость съёмки?",
      answer:
        "Полный цикл: предпродакшн (бриф, сценарий, локации), съёмка (оператор, свет, звук), постпродакшн (монтаж, цветокоррекция, музыка). Всё включено — никаких скрытых доплат.",
    },
    {
      question: "Можно ли заказать только монтаж?",
      answer:
        "Да, мы берём проекты на монтаж и постпродакшн: цветокоррекция, моушн-графика, звуковой дизайн, VFX. Пришлите материал — оценим объём работы.",
    },
    {
      question: "Как начать работу с EFFECTS?",
      answer:
        "Оставьте заявку на сайте или напишите нам. Мы обсудим задачу, предложим формат и бюджет, согласуем детали — и запустим проект. Первый созвон бесплатный.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о наших услугах, ценах и процессе работы.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
