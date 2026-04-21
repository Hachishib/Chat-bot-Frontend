import { useState, useEffect } from "react";

// ❌ This type must match your backend's response shape
type NewsItem = {
  id: string | number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl?: string;
};

// ✅ EDIT: Category badge colors
const categoryColors: Record<string, string> = {
  Academics: "bg-blue-100 text-blue-800",
  Sports: "bg-green-100 text-green-800",
  Announcements: "bg-amber-100 text-amber-800",
  Events: "bg-purple-100 text-purple-800",
  Default: "bg-gray-100 text-gray-700",
};

export default function NewsGrid() {
  const [news, setNews] = useState<NewsItem[]>([]); // Start with empty array
  const [loading, setLoading] = useState(false);

  // ❌ DO NOT EDIT this fetch logic unless you change your backend route
  // Remove this useEffect entirely if you have no /api/news endpoint yet
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) return; // No API URL set — use sample data
    setLoading(true);
    fetch(`${apiUrl}/api/news`)
      .then((res) => res.json())
      .then((data: NewsItem[]) => {
        if (Array.isArray(data) && data.length > 0) setNews(data);
      })
      .catch(() => {}) // Silently fall back to sample data on error
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* ✅ EDIT: Section heading */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
        <a href="/news" className="text-teal-700 text-sm font-medium hover:underline">
          View all →
        </a>
      </div>

      {loading && (
        <div className="text-center text-gray-400 py-10">Loading news...</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.slice(0, 3).map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
          >
            {/* Image placeholder (shown if no imageUrl) */}
            <div className="h-40 bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center text-teal-300">
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              ) : (
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 9 4-4 4 4 4-4 4 4"/>
                </svg>
              )}
            </div>

            <div className="p-5">
              {/* Category badge */}
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  categoryColors[item.category] ?? categoryColors["Default"]
                }`}
              >
                {item.category}
              </span>

              <h3 className="mt-2 font-bold text-gray-900 text-base leading-snug group-hover:text-teal-700 transition-colors">
                {item.title}
              </h3>
              <p className="mt-1 text-gray-500 text-sm line-clamp-2">{item.excerpt}</p>
              <p className="mt-3 text-gray-400 text-xs">{item.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}