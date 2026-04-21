import { Link } from "react-router-dom";

// ✅ EDIT THIS: Quick-access cards on the homepage
const quickLinks = [
  {
    icon: "📰",
    label: "School News",
    description: "Stay updated with the latest campus announcements.",
    path: "/news",
    color: "bg-blue-50 hover:bg-blue-100",
  },
  {
    icon: "🤖",
    label: "AI Assistant",
    description: "Ask questions about school policies, schedules, and more.",
    path: "/chat",
    color: "bg-teal-50 hover:bg-teal-100",
  },
  {
    icon: "📋",
    label: "Admissions",
    description: "Learn about enrollment requirements and application steps.",
    path: "/admissions",
    color: "bg-amber-50 hover:bg-amber-100",
  },
  {
    icon: "ℹ️",
    label: "About the School",
    description: "History, vision, mission, and faculty information.",
    path: "/about",
    color: "bg-purple-50 hover:bg-purple-100",
  },
];

export default function QuickLinks() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* ✅ EDIT: Section heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Access</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${item.color} rounded-2xl p-6 transition-colors group`}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">
                {item.label}
              </h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}