import HeroSection from "../components/home/HeroSection";
import NewsGrid from "../components/home/NewsGrid";
import QuickLinks from "../components/home/QuickLinks";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
 
export function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16"> {/* pt-16 = space for fixed navbar */}
        <HeroSection />
        <QuickLinks />
        <NewsGrid />
      </main>
      <Footer />
    </>
  );
}