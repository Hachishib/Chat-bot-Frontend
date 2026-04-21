// ============================================================
// NAVBAR.TSX
// ✅ EDITABLE: navLinks array (add/remove nav items)
// ✅ EDITABLE: School name, logo emoji
// ✅ EDITABLE: Colors via Tailwind classes
// ❌ NOT EDITABLE (without breaking): Link paths must match App.tsx routes
// ❌ NOT EDITABLE (without breaking): isScrolled logic controls sticky shadow behavior
// ============================================================

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpg";

// ✅ EDIT THIS: Add, remove, or rename navigation links
// { label: "Display Name", path: "/route" }
const navLinks = [
  { label: "Home", path: "/" },
  { label: "News", path: "/news" },
  { label: "AI Chat", path: "/chat" },
  { label: "Admissions", path: "/admissions" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* ✅ EDIT: Change school name or logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-gray-900">
          <span> <img src={logo} style={{ width: "50px", height: "50px", borderRadius: "50%" }}/></span>
          <span>SPIST</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}