import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const regulatoryLinks = [
    { name: "Fair Practices Code", href: "#" },
    { name: "Interest Rate Policy", href: "#" },
    { name: "Ombudsman Guidelines", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      color:
        "hover:text-pink-600 hover:bg-pink-50 border-emerald-900/10 text-emerald-900/80 bg-emerald-50/40",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      color:
        "hover:text-blue-600 hover:bg-blue-50 border-emerald-900/10 text-emerald-900/80 bg-emerald-50/40",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      color:
        "hover:text-sky-700 hover:bg-sky-50 border-emerald-900/10 text-emerald-900/80 bg-emerald-50/40",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="w-full bg-[#FDFBF7] border-t border-emerald-950/10 pt-16 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pb-16">
        <div className="md:col-span-5 space-y-4">
          <h3 className="text-sm font-black uppercase tracking-widest text-emerald-950">
            Kraaj Micro Finance
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-sm">
            Building inclusive social architectures by provisioning credit
            systems directly across deep rural sectors.
          </p>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-700">
            Navigation Links
          </h4>

          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-xs sm:text-sm text-slate-600 hover:text-emerald-800 font-bold tracking-tight inline-flex items-center gap-0.5 group transition-colors"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-y-0.5 -translate-x-0.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center justify-between border-b border-emerald-900/5 pb-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-700">
              Regulatory Disclosures
            </h4>

            <div className="flex items-center gap-1.5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-all ${social.color}`}
                >
                  {social.svg}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid gap-2.5 w-full pt-1">
            {regulatoryLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ x: 3 }}
                className="text-xs sm:text-sm text-slate-600 hover:text-emerald-800 font-bold tracking-tight transition-colors flex items-center justify-between p-3 rounded-xl bg-slate-50/60 border border-slate-100/70 hover:bg-white hover:border-slate-200/80"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#02291a] border-t border-white/[0.06] py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1.5px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% SECURE NETWORK TRANSIT NODE</span>
          </div>

          <div className="text-center md:text-right text-[11px] sm:text-xs text-emerald-100/60 font-semibold tracking-tight whitespace-nowrap">
            &copy; {currentYear} Kraaj Micro Finance Limited. All Rights
            Reserved. Licensed by the Reserve Bank of India.
          </div>
        </div>
      </div>
    </footer>
  );
}