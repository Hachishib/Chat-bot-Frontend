import { useNavigate } from "react-router-dom";

// ✅ EDIT THIS: Hero headline and buttons
const hero = {
  title: "Know Your Campus",
  subtitle:
    "The centralized hub for student resources, daily news, and AI-powered school assistance.",
  primaryBtn: "Explore News",
  secondaryBtn: "Chat with AI Assistant",
};

// ✅ EDIT THIS: Stats shown in the bottom bar (number + label)
const stats = [
  { number: "2,500+", label: "Students" },
  { number: "150+", label: "Faculty" },
  { number: "98%", label: "Pass Rate" },
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex flex-col">
      {/* ✅ EDIT: Change gradient colors here */}
      <div className="flex-1 bg-gradient-to-br from-teal-500 via-teal-300 to-gray-100 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-2xl">
          {/* ✅ EDIT: hero.title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-5 leading-tight">
            {hero.title}
          </h1>
          {/* ✅ EDIT: hero.subtitle */}
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            {hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* ✅ EDIT: hero.primaryBtn label; ❌ keep navigate("/news") path */}
            <button
              onClick={() => navigate("/news")}
              className="flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              {hero.primaryBtn}
            </button>

            {/* ✅ EDIT: hero.secondaryBtn label; ❌ keep navigate("/chat") path */}
            <button
              onClick={() => navigate("/chat")}
              className="flex items-center gap-2 bg-white/70 text-gray-800 font-semibold px-6 py-3 rounded-full border border-white hover:bg-white transition-all hover:-translate-y-0.5"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              {hero.secondaryBtn}
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      {/* ✅ EDIT: stats array above to change numbers/labels */}
      <div className="bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-3 gap-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-extrabold">{stat.number}</p>
              <p className="text-teal-300 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}