import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { About, Admissions } from "./pages/Admissions";
import ChatPage from "./pages/ChatPage";
import ScrollToTop from "./components/layout/ScrollToTop";

function AppRoutes() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route key={location.pathname} path="/" element={<Home />} />
        <Route key={location.pathname} path="/news" element={<News />} />
        <Route key={location.pathname} path="/chat" element={<ChatPage />} />
        <Route key={location.pathname} path="/admissions" element={<Admissions />} />
        <Route key={location.pathname} path="/about" element={<About />} />
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-gray-400 text-xl">Page not found</div>} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}