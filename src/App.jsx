import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans overflow-x-hidden selection:bg-orange-200 selection:text-slate-900">

        {/* SOFT AMBIENT LIGHT GLOWS */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-100/40 blur-[120px]" />
          <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-orange-100/30 blur-[120px]" />
        </div>

        <Header />

        <main className="min-h-[calc(100vh-160px)] relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}