import { Link } from "react-router-dom";

// ✅ EDIT THIS: Your school's contact info
const schoolInfo = {
  name: "SPIST",
  tagline: "The centralized hub for student resources, daily news, and AI-powered school assistance.",
  address: "Tia Maria Bldg., E. Aguinaldo Highway, Anabu 2-A, Imus, Philippines, 4103",
  email: "spistmarketing@spist.edu.ph",
  phone: "+ 63 917 132 8042",
};

// ✅ EDIT THIS: Footer link columns
const footerLinks = [
  {
    heading: "Navigate",
    links: [
      { label: "Home", path: "/" },
      { label: "News", path: "/news" },
      { label: "Admissions", path: "/admissions" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "AI Assistant", path: "/chat" },
      { label: "About", path: "/about" },
    ],
  },
];

// ✅ EDIT THIS: Social media links (set href to "#" to disable)
const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/spistofficial", icon: "f" },
  { label: "Email", href: "mailto:spistmarketing@spist.edu.ph", icon: "@" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-lg mb-3">
              <span>🏫</span>
              <span>{schoolInfo.name}</span>
            </div>
            <p className="text-teal-200 text-sm leading-relaxed mb-4 max-w-xs">
              {schoolInfo.tagline}
            </p>
            <div className="text-teal-300 text-sm space-y-1">
              <p>{schoolInfo.address}</p>
              <p>{schoolInfo.email}</p>
              <p>{schoolInfo.phone}</p>
            </div>
            {/* Social icons */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-teal-700 hover:bg-teal-600 flex items-center justify-center text-xs transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 text-teal-300">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-teal-200 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-teal-700 mt-10 pt-6 text-teal-400 text-xs flex flex-col md:flex-row justify-between gap-2">
        </div>
      </div>
    </footer>
  );
}