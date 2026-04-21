import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const admissionSteps = [
  { step: "01", title: "Visit", description: "Visit the campus during enrollment period (Mondays to Fridays, 8AM–5PM)" },
  { step: "02", title: "Fill-up Form", description: "Get an enrollment form from the Registrar's Office and fill it out completely." },
  { step: "03", title: "Submit Requirements", description: "Submit all required documents listed below and the filled-out enrollment form." },
  { step: "04", title: "Complete Enrollment", description: "Proceed to the cashier for payment (if instructed) and return to the Registrar's Office to complete your enrollment, as well as getting your school ID details." },
];
 
const requirements = [
  "Photocopy of PSA Birth Certificate",
  "Original Grade 10 Report Card (Form 138) or Temporary Report Card from your previous school",
  "2 pieces 2x2 recent ID photo",
  "Certificate of Good Moral Character",
  "2 active cellular numbers (preferred to be owned by the student)",
  "1 valid email address"
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
          <h1 className="text-4xl font-extrabold mb-3">About SPIST</h1>
          <p className="text-teal-200 max-w-xl mx-auto">Learn about our school's history, values, and community.</p>
        </div>
 
        <div className="max-w-4xl mx-auto px-6 py-14 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Our History</h2>
            <p className="text-black-600 leading-relaxed">
              <span className="block mb-2">Southern Philippines Institute of Science and Technology (SPIST) was founded on December 4, 1999, by a group of experienced professionals — educators, an engineer, and a business entrepreneur — united by a shared vision of quality education. Located at Tia Maria Building, Aguinaldo Highway, Anabu 2A, Imus, Cavite, the institution began with college programs accredited under CHED and TESDA, welcoming 285 students in its first year.</span>
              <span className="block">SPIST later expanded to include Basic Education, serving both the local community and as a laboratory school for education degree programs. Guided by its Vision and Mission, the school has grown into a multi-level institution offering Pre-school, Elementary, Junior High School, Senior High School, and College. Committed to developing well-rounded, globally competitive graduates equipped for the demands of a fast-changing world.</span>
            </p>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-teal-50 rounded-2xl p-6">
            <h3 className="font-bold text-blue-800 text-lg mb-2">Mission</h3>
              <p className="text-gray-600 text-sm">SPIST is committed to provide an education that will lead the student 
                to learn and experience his dignity as a human being and to arrive at 
                a goal for which God has created him. Through its various courses, 
                extra and co-curricular activities, and work immersion, avenues are 
                opened for the formulation of socially-desirable values and attitudes, 
                acquisition of knowledge, development of skills, and enrichment of 
                potentials and capabilities.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-bold text-blue-800 text-lg mb-2">Goals</h3>
              <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
                <li>Develop every student by exposing them to various industrial technologies available in the country.</li>
                <li>Train every student to become an educated workforce and skilled worker through work immersion.</li>
                <li>Instill the attainment of quality education as a dominant source of social change in industrialization.</li>
                <li>Develop and train students to become aware of modernization through ICT application.</li>
                <li>Assist every student to internalize quality of life and desirable values towards industrialization.</li>
                <li>Hone, establish ideals, and inspire the youth to play an active role in shaping society through right decisions.</li>
              </ul>
            </div>
          </div>
 
          {/* ✅ EDIT: Core values */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h2>
            <div className="flex flex-wrap gap-3">
              {["Excellence", "Spirituality", "Service", "Innovation", "Hard Work", "Social Responsibility"].map((v) => (
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