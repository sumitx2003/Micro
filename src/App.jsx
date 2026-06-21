import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <Home setActivePage={setActivePage} />;
      case 'about': return <About />;
      case 'products': return <Products />;
      case 'contact': return <Contact />;
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans overflow-x-hidden selection:bg-orange-200 selection:text-slate-900">
      
      {/* SOFT AMBIENT LIGHT GLOWS (Gentle Sage & Warm Sand tones instead of harsh dark blobs) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-100/40 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-orange-100/30 blur-[120px]" />
      </div>

      <Header activePage={activePage} setActivePage={setActivePage} />
      
      <main className="min-h-[calc(100vh-160px)]">
        {renderPage()}
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}