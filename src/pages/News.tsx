import { useState, useEffect } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

type NewsItem = {
  id: string | number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image_url?: string;
};
 
 
// ✅ EDIT: Add or remove categories from filter
const CATEGORIES = ["All", "Academics", "Sports", "Announcements", "Events"];
 
export function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
 
  useEffect(() => {
  const apiUrl = import.meta.env.VITE_API_URL;
  if (!apiUrl) return;
  fetch(`${apiUrl}/api/news`)
    .then((r) => r.json())
    .then((data) => {
      if (Array.isArray(data) && data.length) setNews(data);
    })
  }, []);
 
  const filtered = activeCategory === "All" ? news : news.filter((n) => n.category === activeCategory);
 
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* ✅ EDIT: Page title */}
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">School News</h1>
          <p className="text-gray-500 mb-8">Stay updated with the latest campus happenings.</p>
 
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-teal-700 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-teal-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((item) => (
              <article key={item.id} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition-shadow">
                <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
                <h2 className="mt-2 font-bold text-gray-900">{item.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{item.excerpt}</p>
                <p className="text-gray-400 text-xs mt-3">{item.date}</p>
              </article>
            ))}
          </div>
 
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-16">No news in this category yet.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}