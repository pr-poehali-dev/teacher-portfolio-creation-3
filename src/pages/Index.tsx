import { useState } from "react";
import Icon from "@/components/ui/icon";

const TEACHER_PHOTO = "https://cdn.poehali.dev/projects/6f969e72-c557-47bc-ba79-e3eb6c789a9d/files/7a1ffd62-5e93-470a-984d-5e926c6a5aa1.jpg";

const achievements = [
  {
    year: "2024",
    title: "Знакомство с правителями",
    category: "Личное достижение",
    description: "Лично знакома со всеми русскими правителями — от Рюрика до наших дней. Уникальный исторический опыт, который оживляет каждый урок.",
    icon: "Crown",
    color: "#B45309",
    bg: "#FEF3C7",
  },
  {
    year: "2024",
    title: "Учитель года",
    category: "Региональный конкурс",
    description: "Победитель регионального этапа конкурса «Учитель года» среди 120 участников.",
    icon: "Trophy",
    color: "#F2A730",
    bg: "#FEF3C7",
  },
  {
    year: "2023",
    title: "Лучший наставник",
    category: "Всероссийская олимпиада",
    description: "Подготовила 5 призёров Всероссийской олимпиады по истории.",
    icon: "Star",
    color: "#E8533A",
    bg: "#FFE8E3",
  },
  {
    year: "2022",
    title: "Инновационный урок",
    category: "Педагогический форум",
    description: "Авторская методика интерактивного обучения признана лучшей на федеральном форуме.",
    icon: "Lightbulb",
    color: "#2A7B7C",
    bg: "#CCEFEF",
  },
  {
    year: "2021",
    title: "Грант «Образование»",
    category: "Министерство образования",
    description: "Получила федеральный грант на разработку цифровых учебных материалов по истории.",
    icon: "Award",
    color: "#8B5CF6",
    bg: "#EDE9FE",
  },
  {
    year: "2020",
    title: "100 лучших учителей",
    category: "Рейтинг EdTech Russia",
    description: "Вошла в топ-100 лучших педагогов России по версии образовательного издания.",
    icon: "Medal",
    color: "#EC4899",
    bg: "#FCE7F3",
  },
  {
    year: "2019",
    title: "Почётная грамота",
    category: "Министерство просвещения",
    description: "Награждена почётной грамотой за многолетний вклад в развитие образования.",
    icon: "Scroll",
    color: "#059669",
    bg: "#D1FAE5",
  },
];

const works = [
  { id: 1, title: "Интерактивное задание №1", type: "Упражнение", url: "https://learningapps.org/watch?v=phcyuus8n26" },
  { id: 2, title: "Интерактивное задание №2", type: "Упражнение", url: "https://learningapps.org/watch?v=ppkn6c80a26" },
  { id: 3, title: "Интерактивное задание №3", type: "Упражнение", url: "https://learningapps.org/watch?v=pxff6xs2v26" },
  { id: 4, title: "Кто хочет стать Сталионнером?", type: "Викторина", url: "https://learningapps.org/watch?v=pymb6ki6526" },
  { id: 5, title: "Интерактивное задание №5", type: "Упражнение", url: "https://learningapps.org/watch?v=pugg1rwcn26" },
  { id: 6, title: "Интерактивное задание №6", type: "Упражнение", url: "https://learningapps.org/watch?v=pnqv9ycp326" },
  { id: 7, title: "Интерактивное задание №7", type: "Упражнение", url: "https://learningapps.org/watch?v=pudmqwcwn26" },
  { id: 8, title: "Интерактивное задание №8", type: "Упражнение", url: "https://learningapps.org/watch?v=peb2w67i526" },
  { id: 9, title: "Правильная хронология событий", type: "Хронология", url: "https://learningapps.org/watch?v=pkmwh3w7j26" },
  { id: 10, title: "Найди пару", type: "Соотнеси событие и дату", url: "https://learningapps.org/watch?v=px8rf4p4t26" },
];

const stats = [
  { value: "15+", label: "лет опыта" },
  { value: "800+", label: "учеников" },
  { value: "30+", label: "наград" },
  { value: "98%", label: "сдают ОГЭ/ЕГЭ" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<"home" | "achievements" | "works">("home");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-golos" style={{ background: "#FDF6EC" }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{
          background: "rgba(253,246,236,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(232,83,58,0.12)",
        }}
      >
        <div className="font-cormorant text-2xl font-bold" style={{ color: "#1A1209" }}>
          <span style={{ color: "#E8533A" }}>А</span>лёна Усова
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveSection("home")}
            className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
            style={
              activeSection === "home"
                ? { background: "#E8533A", color: "#FDF6EC" }
                : { background: "transparent", color: "#1A1209" }
            }
          >
            Главная
          </button>
          <button
            onClick={() => setActiveSection("achievements")}
            className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
            style={
              activeSection === "achievements"
                ? { background: "#E8533A", color: "#FDF6EC" }
                : { background: "transparent", color: "#1A1209" }
            }
          >
            Достижения
          </button>
          <button
            onClick={() => setActiveSection("works")}
            className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
            style={
              activeSection === "works"
                ? { background: "#E8533A", color: "#FDF6EC" }
                : { background: "transparent", color: "#1A1209" }
            }
          >
            Работы
          </button>
        </div>
      </nav>

      {/* HOME SECTION */}
      {activeSection === "home" && (
        <div className="pt-20">
          {/* Hero */}
          <section className="relative min-h-screen flex items-center overflow-hidden px-8 lg:px-20">
            {/* Decorative circles */}
            <div
              className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20 animate-float"
              style={{ background: "radial-gradient(circle, #F2A730, #E8533A)" }}
            />
            <div
              className="absolute bottom-20 left-5 w-64 h-64 rounded-full opacity-10"
              style={{ background: "#2A7B7C" }}
            />
            <div
              className="absolute top-1/2 right-1/3 w-8 h-8 rounded-full"
              style={{ background: "#E8533A", opacity: 0.6 }}
            />

            {/* Rotating ring */}
            <div
              className="absolute right-16 top-32 w-72 h-72 border-4 rounded-full animate-spin-slow"
              style={{
                borderColor: "transparent",
                borderTopColor: "#F2A730",
                borderRightColor: "#E8533A",
                opacity: 0.4,
              }}
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
              {/* Text */}
              <div className="animate-slide-left">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
                  style={{ background: "#F5C5B0", color: "#E8533A" }}
                >
                  <Icon name="GraduationCap" size={16} />
                  Учитель истории · Высшая категория
                </div>
                <h1
                  className="font-cormorant text-7xl lg:text-8xl font-bold leading-none mb-4"
                  style={{ color: "#1A1209" }}
                >
                  Алёна
                  <br />
                  <span style={{ color: "#E8533A", fontStyle: "italic" }}>Усова</span>
                </h1>
                <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color: "#4A3728" }}>
                  Превращаю историю в захватывающее путешествие сквозь века. 15 лет открываю детям
                  красоту прошлого и смысл настоящего.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <button
                    onClick={() => setActiveSection("achievements")}
                    className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ background: "#E8533A", color: "#FDF6EC" }}
                  >
                    Мои достижения
                  </button>
                  <button
                    className="px-8 py-4 rounded-full font-semibold text-base border-2 transition-all duration-300 hover:scale-105"
                    style={{ borderColor: "#1A1209", color: "#1A1209", background: "transparent" }}
                  >
                    Связаться
                  </button>
                </div>
              </div>

              {/* Photo */}
              <div className="relative flex justify-center animate-fade-in">
                <div className="relative">
                  <div
                    className="absolute -inset-4 rounded-[40px] opacity-30"
                    style={{ background: "linear-gradient(135deg, #F2A730, #E8533A)" }}
                  />
                  <img
                    src={TEACHER_PHOTO}
                    alt="Алёна Алексеевна Усова"
                    className="relative rounded-[32px] object-cover"
                    style={{ width: 380, height: 460, filter: "saturate(1.1)" }}
                  />
                  {/* Floating badges */}
                  <div
                    className="absolute -top-6 -left-8 px-4 py-3 rounded-2xl shadow-lg animate-float"
                    style={{ background: "#FDF6EC", animationDelay: "1s" }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🏆</span>
                      <div>
                        <div className="text-xs font-medium" style={{ color: "#4A3728" }}>
                          Учитель года
                        </div>
                        <div className="text-xs" style={{ color: "#E8533A" }}>
                          2024
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute -bottom-4 -right-6 px-4 py-3 rounded-2xl shadow-lg animate-float"
                    style={{ background: "#1A1209", animationDelay: "2.5s" }}
                  >
                    <div className="text-sm font-bold" style={{ color: "#F2A730" }}>
                      800+ учеников
                    </div>
                    <div className="text-xs" style={{ color: "rgba(253,246,236,0.7)" }}>
                      за карьеру
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-20 px-8 lg:px-20">
            <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-8 rounded-3xl transition-all duration-300 hover:scale-105"
                  style={{ background: i % 2 === 0 ? "#1A1209" : "#E8533A" }}
                >
                  <div
                    className="font-cormorant text-5xl font-bold mb-2"
                    style={{ color: i % 2 === 0 ? "#F2A730" : "#FDF6EC" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: i % 2 === 0 ? "#F5C5B0" : "rgba(253,246,236,0.8)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About */}
          <section className="py-20 px-8 lg:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ background: "#CCEFEF", color: "#2A7B7C" }}
              >
                О себе
              </div>
              <h2
                className="font-cormorant text-5xl font-bold mb-6 leading-tight"
                style={{ color: "#1A1209" }}
              >
                История — это
                <br />
                <span style={{ color: "#2A7B7C", fontStyle: "italic" }}>
                  диалог с прошлым
                </span>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#4A3728" }}>
                Я убеждена, что каждый ребёнок способен полюбить историю — нужен лишь правильный
                подход. Мои уроки строятся на живых историях, дискуссиях и открытиях.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#4A3728" }}>
                Выпускница ТОГУ, кандидат педагогических наук. Автор методики
                «История через судьбы», которую используют более 50 школ страны.
              </p>
            </div>
          </section>
        </div>
      )}

      {/* ACHIEVEMENTS SECTION */}
      {activeSection === "achievements" && (
        <div className="pt-24 px-8 lg:px-20 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ background: "#FFE8E3", color: "#E8533A" }}
              >
                ✦ Профессиональные достижения
              </div>
              <h1
                className="font-cormorant text-6xl lg:text-7xl font-bold mb-4"
                style={{ color: "#1A1209" }}
              >
                Мои{" "}
                <span style={{ color: "#E8533A", fontStyle: "italic" }}>победы</span>
              </h1>
              <p className="text-lg max-w-xl mx-auto" style={{ color: "#4A3728" }}>
                Каждая награда — это результат труда моих учеников и любви к своему делу
              </p>
            </div>

            {/* Achievement cards */}
            <div className="grid lg:grid-cols-2 gap-6">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative p-8 rounded-3xl border cursor-default"
                  style={{
                    background: hoveredCard === i ? item.bg : "white",
                    borderColor: hoveredCard === i ? item.color : "#E8D5C4",
                    transform: hoveredCard === i ? "translateY(-4px)" : "none",
                    boxShadow:
                      hoveredCard === i
                        ? `0 20px 60px ${item.color}30`
                        : "0 2px 12px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: item.bg }}
                    >
                      <Icon name={item.icon} size={26} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{ background: item.bg, color: item.color }}
                        >
                          {item.category}
                        </span>
                        <span
                          className="font-cormorant text-3xl font-bold"
                          style={{ color: hoveredCard === i ? item.color : "#D1C4B4" }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <h3
                        className="font-cormorant text-2xl font-bold mb-2"
                        style={{ color: "#1A1209" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B5744" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-16 text-center p-12 rounded-3xl"
              style={{ background: "#1A1209" }}
            >
              <h3
                className="font-cormorant text-4xl font-bold mb-3"
                style={{ color: "#F2A730" }}
              >
                Хотите узнать больше?
              </h3>
              <p className="text-base mb-6" style={{ color: "rgba(253,246,236,0.7)" }}>
                Свяжитесь со мной, чтобы обсудить учёбу вашего ребёнка
              </p>
              <button
                className="px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ background: "#E8533A", color: "#FDF6EC" }}
              >
                Написать мне
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WORKS SECTION */}
      {activeSection === "works" && (
        <div className="pt-24 px-8 lg:px-20 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ background: "#CCEFEF", color: "#2A7B7C" }}
              >
                ✦ Интерактивные задания
              </div>
              <h1
                className="font-cormorant text-6xl lg:text-7xl font-bold mb-4"
                style={{ color: "#1A1209" }}
              >
                Мои <span style={{ color: "#2A7B7C", fontStyle: "italic" }}>работы</span>
              </h1>
              <p className="text-lg max-w-xl mx-auto" style={{ color: "#4A3728" }}>
                Интерактивные задания для подготовки к урокам истории
              </p>
            </div>

            {/* Works grid */}
            <div className="grid lg:grid-cols-2 gap-5">
              {works.map((work, i) => (
                <a
                  key={work.id}
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    background: "white",
                    borderColor: "#E8D5C4",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#2A7B7C";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(42,123,124,0.15)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#E8D5C4";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Number */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-cormorant text-xl font-bold transition-all duration-300"
                    style={{ background: "#CCEFEF", color: "#2A7B7C" }}
                  >
                    {work.id}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium mb-1" style={{ color: "#8B7355" }}>
                      {work.type}
                    </div>
                    <div
                      className="font-semibold text-base leading-snug truncate"
                      style={{ color: "#1A1209" }}
                    >
                      {work.title}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                    style={{ background: "#F5C5B0" }}
                  >
                    <Icon name="ArrowRight" size={16} style={{ color: "#E8533A" }} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-8 text-center border-t" style={{ borderColor: "#E8D5C4" }}>
        <p className="text-sm" style={{ color: "#8B7355" }}>
          © 2024 Алёна Алексеевна Усова · Учитель истории
        </p>
      </footer>
    </div>
  );
}