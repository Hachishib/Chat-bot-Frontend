import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const admissionSteps = [
  { step: "01", title: "Inquire", description: "Visit the school or contact the registrar's office to ask about enrollment requirements and slot availability." },
  { step: "02", title: "Submit Requirements", description: "Prepare and submit all required documents listed below. Incomplete submissions will not be processed." },
  { step: "03", title: "Assessment / Interview", description: "Qualified applicants will be scheduled for an entrance assessment or brief interview with an adviser." },
  { step: "04", title: "Enrollment", description: "Upon acceptance, complete the enrollment form and pay the initial fees to officially secure your slot." },
];
 
const requirements = [
  "Form 138 / Report Card (original)",
  "PSA Birth Certificate (photocopy)",
  "Certificate of Good Moral Character",
  "2x2 ID Photo (white background, 2 pieces)",
  "Barangay Clearance",
];
 
export function Admissions() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* Hero */}
        <div className="bg-teal-700 text-white py-16 px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-3">Admissions</h1>
          <p className="text-teal-200 max-w-xl mx-auto">Join our campus community. Learn about enrollment requirements and the application process.</p>
        </div>
 
        <div className="max-w-4xl mx-auto px-6 py-14 space-y-14">
          {/* Steps */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {admissionSteps.map((s) => (
                <div key={s.step} className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-4">
                  <span className="text-3xl font-extrabold text-teal-200">{s.step}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{s.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
 
          {/* Requirements */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
            <ul className="space-y-2">
              {requirements.map((req) => (
                <li key={req} className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs">✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </section>
 
          {/* Contact CTA */}
          <section className="bg-teal-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Have questions?</h2>
            <p className="text-gray-500 mb-4">Our registrar's office is happy to assist you.</p>
            <a href="https://www.facebook.com/spistofficial" className="inline-block bg-teal-700 text-white px-6 py-2.5 rounded-full font-medium hover:bg-teal-800 transition-colors">
              Contact Us
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
 
// ─── About.tsx ───────────────────────────────────────────────
// ✅ EDITABLE: All school info — history, vision, mission, core values, faculty
 
export function About() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="bg-teal-800 text-white py-16 px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-3">About SHS Campus</h1>
          <p className="text-teal-200 max-w-xl mx-auto">Learn about our school's history, values, and community.</p>
        </div>
 
        <div className="max-w-4xl mx-auto px-6 py-14 space-y-12">
          {/* ✅ EDIT: School history */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our History</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in [year], SHS Campus has been providing quality senior high school education to students across [region/city]. Over the years, we have grown into a vibrant learning community committed to academic excellence and holistic development.
            </p>
          </section>
 
          {/* ✅ EDIT: Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-teal-50 rounded-2xl p-6">
              <h3 className="font-bold text-teal-800 text-lg mb-2">Vision</h3>
              <p className="text-gray-600 text-sm">A premier senior high school that nurtures globally competitive and values-driven graduates.</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Mission</h3>
              <p className="text-gray-600 text-sm">To provide quality education through innovative instruction, community involvement, and holistic student development.</p>
            </div>
          </div>
 
          {/* ✅ EDIT: Core values */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h2>
            <div className="flex flex-wrap gap-3">
              {["Excellence", "Integrity", "Service", "Innovation", "Respect"].map((v) => (
                <span key={v} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                  {v}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}