import React, { useState } from "react";
import { Coins, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-[#FDFBF7]/70 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-orange-500 flex items-center justify-center shadow-md shadow-emerald-900/10 transition-transform duration-300 group-hover:scale-110">
            <Coins className="w-5 h-5 text-white font-bold" />
          </div>

          <span className="text-xl font-bold tracking-tight text-emerald-900">
            KRAAJ <span className="text-orange-600">FINANCE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative transition-colors duration-200 group py-2 ${
                location.pathname === item.path
                  ? "text-orange-600"
                  : "text-emerald-800 hover:text-emerald-950"
              }`}
            >
              {item.label}

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-600 to-orange-500 transition-all duration-300 ${
                  location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-emerald-800 hover:text-emerald-950"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#FDFBF7]/95 border-b border-emerald-900/10 p-6 space-y-4 backdrop-blur-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left py-2 font-semibold ${
                location.pathname === item.path
                  ? "text-orange-600"
                  : "text-emerald-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}