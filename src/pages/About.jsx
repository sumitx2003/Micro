import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Target, 
  Landmark, 
  Building2, 
  MapPin, 
  Milestone, 
  Users, 
  ChevronRight, 
  ShieldCheck, 
  Eye, 
  Rocket, 
  Scale, 
  Heart, 
  Search, 
  Zap,
  Globe2,
  TrendingUp,
  Activity,
  ChevronDown,
  Navigation
} from 'lucide-react';

export default function About() {
  // 1. State Hooks
  const [activeTimelineIdx, setActiveTimelineStage] = useState(2); 
  const [activeLeadershipTab, setActiveLeadershipTab] = useState('board'); 
  const [activeValueIdx, setActiveValueIdx] = useState(null);

  // 2. Data Definitions
  const pillars = [
    { 
      icon: <Target className="w-5 h-5 text-orange-600" />, 
      title: "Our Vision", 
      desc: "Empowering rural and semi-rural households across India with clean, transparent financial opportunities. We aspire to bridge the credit gap for unorganized entrepreneurs, helping families achieve economic stability and self-reliance." 
    },
    { 
      icon: <Eye className="w-5 h-5 text-emerald-700" />, 
      title: "Our Mission", 
      desc: "To deliver reliable, completely asset-free financial inclusion support at an affordable cost. We build micro-enterprise pathways that treat underbanked communities as primary partners in sustainable economic development." 
    }
  ];

  const valueSystem = [
    { 
      title: "Financial Freedom", 
      icon: <Zap className="w-4 h-4" />,
      desc: "We prioritize local trust architectures to offer true financial freedom, providing credit avenues without the roadblock of physical assets or heavy paperwork barriers."
    },
    { 
      title: "Absolute Integrity", 
      icon: <Heart className="w-4 h-4" />,
      desc: "Operating with absolute transparency, we follow fair practices to protect the underbanked, ensuring every agreement is clear and ethical."
    },
    { 
      title: "Transparency of Data", 
      icon: <Search className="w-4 h-4" />,
      desc: "We stand firmly by open communication standards. Every metric, payment timeline, and operational transaction is kept crystal clear for our community."
    },
    { 
      title: "Regulatory Adherence", 
      icon: <Scale className="w-4 h-4" />,
      desc: "Strict adherence to safety guidelines allows us to operate securely, ensuring long-term institutional validity and reliable support."
    }
  ];

  const historicalMilestones = [
    { year: "2022", label: "Corporate Incorporation", desc: "Incorporated on 12 December, 2022, as an unlisted private Not-For-Profit company, establishing our core non-profit financial mandate." },
    { year: "2023", label: "Regional Network Setup", desc: "Launched initial physical operational clusters, deploying direct field agents across unorganized rural markets." },
    { year: "2026", label: "Active Operational Scale", desc: "Capital structures updated to an authorized capital footprint of INR 5cr+ with active operations extending to support over 1,200 active borrowers." }
  ];

  const branchOffices = [
    {
      state: "Delhi",
      type: "Registered Corporate Office",
      address: "KH NO - 199 HOUSE NO 1080, GROUND FLOOR OLD LAL DORA, VILLAGE- BAWANA, North West Delhi, Delhi - 110039"
    },
    {
      state: "Rajasthan",
      type: "Sikar Regional Node",
      address: "Wno. 11, Bhookharan Ka Bas, Rashidpura, Sikar, Rajasthan - 332315"
    },
    {
      state: "Rajasthan",
      type: "Ratangarh Regional Node",
      address: "Ashirvad Nagar, Nearby Choudhary Ka Kuva, Ratangarh, Churu, Rajasthan - 331022"
    }
  ];

  const directors = [
    { name: "MANISH DHAKA", role: "Managing Director & CEO", image: "MD.png" },
    { name: "Manish Jangir", role: "Director cum Chairman", image: "MD2.png" },
    { name: "Kailash Bhukar", role: "Executive Board Member", image: "MD1.png" },
    { name: "Ashok Kumar", role: "Independent Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256" }
  ];

  const management = [
    { name: "JATIN CHHABRA", role: "Chief Financial Controller", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256" },
    { name: "NAYAN AMBALI", role: "Head of Field Operations", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=256" },
    { name: "S.K. MALHOTRA", role: "Operational Strategy Lead", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=256" },
    { name: "RUCHI SAXENA", role: "Risk Management Underwriter", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-32 pt-12 pb-24 relative z-10">
      
      {/* SECTION 1: CORPORATE PROFILE BRAND OVERVIEW WITH ANIMATION ENGINE */}
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-orange-600">Corporate Identity</span>
            <h1 className="text-4xl sm:text-5xl font-black text-emerald-950 tracking-tight leading-[1.15]">
              Kraaj Micro Services <br />
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-orange-600 bg-clip-text text-transparent">
                Association
              </span>
            </h1>
          </div>
          <div className="text-sm sm:text-base text-emerald-900/90 font-medium space-y-4 leading-relaxed">
            <p>
              Incorporated on 12 December, 2022, Kraaj Micro Services Association operates as an unlisted private entity classified strictly as a Not-For-Profit company. Based out of North West Delhi, our organization balances structured capital configurations with an Authorized Share Capital of INR 5cr+ and a paid-up capitalization asset mesh to bring direct financial relief to unorganized sectors.
            </p>
            <p>
              With an active corporate status, Kraaj Micro Services focuses entirely on serving home-grown micro-enterprises and remote village trade clusters. By providing transparent, completely collateral-free financing systems, we turn small local initiatives into scalable, secure realities.
            </p>
          </div>
        </div>

        {/* FINANCIAL ANIMATION ENGINE SECTION */}
        <div className="md:col-span-5 relative flex justify-center items-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-orange-500/10 rounded-[36px] blur-2xl" />
          
          <div className="relative w-full h-[360px] bg-gradient-to-br from-emerald-950 via-[#012d1b] to-emerald-900 rounded-[36px] shadow-2xl border border-white/10 p-8 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1.5px,transparent_1px)] [background-size:12px_12px]" />

            <div className="flex justify-between items-center relative z-10">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl backdrop-blur-sm">
                <Activity className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                <span className="text-[10px] text-emerald-100/90 font-black uppercase tracking-wider">Live Credit Flow</span>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Est. 2022</span>
            </div>

            <div className="relative flex justify-center items-center my-auto h-40">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-44 h-44 rounded-full border border-dashed border-white/10 flex items-center justify-center"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 rounded-full border border-white/5 flex items-center justify-center"
              />

              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-xl shadow-lg text-center"
              >
                <p className="text-[9px] text-slate-300 uppercase font-black leading-none">Cap</p>
                <p className="text-xs font-black text-orange-400 mt-1">₹5 Cr+</p>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-2 left-2 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-xl shadow-lg text-center"
              >
                <p className="text-[9px] text-slate-300 uppercase font-black leading-none">Partners</p>
                <p className="text-xs font-black text-emerald-400 mt-1">1,200+</p>
              </motion.div>

              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-400 p-0.5 flex items-center justify-center shadow-lg shadow-emerald-500/20 relative z-10">
                <div className="w-full h-full rounded-full bg-emerald-950 flex items-center justify-center text-orange-400 font-black">
                  <TrendingUp className="w-6 h-6 animate-bounce" />
                </div>
              </div>
            </div>

            <div className="bg-white/95 text-emerald-950 px-5 py-3.5 rounded-2xl border border-white/20 flex items-center justify-between shadow-lg relative z-10">
              <span className="text-xs font-black tracking-tight">
                Status: Registered & Active
              </span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: VISION & MISSION CARDS - ADVANCED INTERACTIVE LAYOUT */}
      <div className="space-y-20">
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[28px] bg-white border border-slate-100 shadow-sm space-y-5 relative overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-emerald-950/[0.02] group"
            >
              <div className={`absolute top-0 bottom-0 left-0 w-[4px] transition-all duration-300 group-hover:w-[6px] ${
                idx === 0 ? 'bg-gradient-to-b from-orange-500 to-amber-500' : 'bg-gradient-to-b from-emerald-600 to-teal-600'
              }`} />
              
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner transition-transform duration-500 group-hover:rotate-[360deg] ${
                  idx === 0 ? 'bg-orange-50/80 border border-orange-100' : 'bg-emerald-50/80 border border-emerald-100'
                }`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-emerald-950 tracking-tight">{item.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium pl-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Accordion Dropdowns Panel */}
        <div className="p-8 md:p-12 rounded-[36px] bg-gradient-to-b from-[#FDFBF7] to-[#Faf6ef] border border-emerald-100/60 shadow-inner space-y-10 relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto space-y-2 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100 inline-block">Organizational DNA</span>
            <h4 className="text-2xl font-black text-emerald-950 tracking-tight">Our Dynamic Value System</h4>
          </div>

          <div className="relative grid md:grid-cols-12 gap-8 items-center pt-4">
            
            {/* Left Hand Stack (Financial Freedom & Absolute Integrity) */}
            <div className="md:col-span-4 space-y-4 relative z-10">
              {valueSystem.slice(0, 2).map((val, idx) => {
                const globalIdx = idx;
                const isOpen = activeValueIdx === globalIdx;
                return (
                  <motion.div 
                    layout
                    key={globalIdx} 
                    onClick={() => setActiveValueIdx(isOpen ? null : globalIdx)}
                    className="bg-white border border-emerald-900/5 p-5 rounded-2xl flex flex-col shadow-sm group cursor-pointer transition-colors duration-200 hover:border-emerald-200"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 border border-orange-100 shadow-inner group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                          {val.icon}
                        </div>
                        <span className="text-sm font-black text-emerald-950 tracking-tight transition-colors">{val.title}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-emerald-950 font-semibold leading-relaxed pl-2 border-l-2 border-orange-400 py-1 bg-slate-50/50 rounded-r-md">
                            {val.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Central Culture Hub Object */}
            <div className="md:col-span-4 flex flex-col justify-center items-center h-48 relative my-6 md:my-0">
              <div className="absolute w-40 h-40 rounded-full border border-emerald-600/10 animate-ping opacity-70 [animation-duration:3s]" />
              <div className="absolute w-32 h-32 rounded-full border border-orange-400/10 animate-pulse opacity-80 [animation-duration:2s]" />
              
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-emerald-800 to-emerald-950 p-1 flex items-center justify-center shadow-xl shadow-emerald-950/20 z-10 border-4 border-white">
                <div className="w-full h-full rounded-full bg-emerald-950 border border-white/10 flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Kraaj</span>
                  <span className="text-xs font-black text-white uppercase tracking-tight mt-0.5">Culture</span>
                  <span className="text-[9px] text-emerald-300/70 font-bold mt-1">Engine</span>
                </div>
              </div>
            </div>

            {/* Right Hand Stack (Transparency of Data & Regulatory Adherence) */}
            <div className="md:col-span-4 space-y-4 relative z-10">
              {valueSystem.slice(2, 4).map((val, idx) => {
                const globalIdx = idx + 2;
                const isOpen = activeValueIdx === globalIdx;
                return (
                  <motion.div 
                    layout
                    key={globalIdx} 
                    onClick={() => setActiveValueIdx(isOpen ? null : globalIdx)}
                    className="bg-white border border-emerald-900/5 p-5 rounded-2xl flex flex-col shadow-sm group cursor-pointer transition-colors duration-200 hover:border-emerald-200"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-100 shadow-inner group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                          {val.icon}
                        </div>
                        <span className="text-sm font-black text-emerald-950 tracking-tight transition-colors">{val.title}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-emerald-950 font-semibold leading-relaxed pl-2 border-l-2 border-emerald-500 py-1 bg-slate-50/50 rounded-r-md">
                            {val.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 3: CHRONOLOGICAL LOGISTICAL TIMELINE OVERVIEW */}
      <div className="space-y-12 border-t border-emerald-900/10 pt-16">
        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-orange-600">Our Growth Trajectory</span>
          <p className="text-2xl sm:text-3xl font-black text-emerald-950 tracking-tight">Milestones of Financial Inclusion</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-950 via-[#012d1b] to-emerald-950 text-white p-8 md:p-12 rounded-[36px] shadow-xl space-y-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_1px] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4 border-l-2 md:border-l-0 md:border-t-2 border-emerald-800/60 pl-6 md:pl-0 pt-0 md:pt-8">
            {historicalMilestones.map((stage, i) => (
              <div 
                key={i} 
                onClick={() => setActiveTimelineStage(i)}
                className="relative md:w-1/3 group cursor-pointer"
              >
                <div className={`absolute left-[-31px] md:left-1/2 top-1 md:top-[-41px] -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 z-20 ${
                  activeTimelineIdx === i 
                    ? 'bg-orange-500 border-white scale-125 shadow-md shadow-orange-500/50' 
                    : 'bg-emerald-950 border-emerald-700 group-hover:border-emerald-500'
                }`} />

                <div className="space-y-1 md:text-center">
                  <span className={`text-lg font-black tracking-tight block transition-colors duration-200 ${activeTimelineIdx === i ? 'text-orange-400' : 'text-slate-400'}`}>
                    {stage.year}
                  </span>
                  <p className="text-xs font-bold text-emerald-100 leading-tight">{stage.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl min-h-[100px] flex items-center justify-between transition-all duration-300">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] font-black tracking-widest uppercase text-orange-400">Timeline Node Details</span>
              <p className="text-base sm:text-lg font-bold text-slate-100 leading-snug">
                {historicalMilestones[activeTimelineIdx].desc}
              </p>
            </div>
            <div className="text-5xl font-black text-white/10 select-none font-mono hidden sm:block">
              {historicalMilestones[activeTimelineIdx].year}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: EXECUTIVE LEADERSHIP TAB MATRIX */}
      <div className="space-y-12 border-t border-emerald-900/10 pt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-orange-600">Administration Mesh</span>
            <p className="text-2xl sm:text-3xl font-black text-emerald-950 tracking-tight">Meet Our Administration Leaders</p>
          </div>

          <div className="inline-flex p-1.5 rounded-xl bg-emerald-950/5 border border-emerald-950/5 self-start">
            <button
              onClick={() => setActiveLeadershipTab('board')}
              className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${
                activeLeadershipTab === 'board'
                  ? 'bg-gradient-to-r from-emerald-800 to-emerald-950 text-white shadow-sm'
                  : 'text-emerald-900/70 hover:text-emerald-950'
              }`}
            >
              Board of Directors
            </button>
            <button
              onClick={() => setActiveLeadershipTab('management')}
              className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${
                activeLeadershipTab === 'management'
                  ? 'bg-gradient-to-r from-emerald-800 to-emerald-950 text-white shadow-sm'
                  : 'text-emerald-900/70 hover:text-emerald-950'
              }`}
            >
              Management Team
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          <AnimatePresence mode="wait">
            {(activeLeadershipTab === 'board' ? directors : management).map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="bg-white border border-emerald-900/5 p-4 rounded-[24px] shadow-sm flex flex-col space-y-4"
              >
                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="space-y-0.5">
                  <h5 className="text-sm font-black text-emerald-950 leading-tight tracking-tight uppercase">{leader.name}</h5>
                  <p className="text-xs text-orange-600 font-bold leading-normal mt-0.5">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

  {/* 5. GEOMETRIC BRANCH REGISTRY NODE REGISTRY GRID - PREMIUM DARK EDITION */}
      <div className="space-y-12 border-t border-emerald-950/10 pt-16">
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-orange-600">Location Footprint</span>
          <h2 className="text-2xl sm:text-3xl font-black text-emerald-950 tracking-tight">Verified Corporate Branch Registry</h2>
        </div>

        {/* 🌟 Full-Bleed Dark Emerald Canvas Wrapper as seen in image_32fe3a.png 🌟 */}
        <div className="bg-[#02291a] p-8 md:p-12 rounded-[32px] shadow-2xl relative overflow-hidden">
          
          {/* Subtle Graphic Matrix Grid Overlays */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1.5px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          {/* Responsive Layout Node List */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {branchOffices.map((office, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-8 rounded-[24px] bg-[#033420]/60 border border-white/[0.04] shadow-xl flex flex-col justify-between min-h-[260px] backdrop-blur-sm group"
              >
                <div className="space-y-4">
                  {/* Top Badge & Node Indicators Row */}
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {office.state}
                    </span>
                    <span className="text-[10px] text-emerald-400/40 font-black uppercase tracking-widest">
                      Node 0{idx + 1}
                    </span>
                  </div>
                  
                  {/* Branch Corporate Designation Title */}
                  <h4 className="text-lg font-black text-white tracking-tight leading-snug group-hover:text-emerald-300 transition-colors duration-200">
                    {office.type}
                  </h4>
                  
                  {/* Physical Street Directory Address Block */}
                  <p className="text-xs text-emerald-100/60 font-semibold leading-relaxed">
                    {office.address}
                  </p>
                </div>

                {/* Bottom Verification Track Alignment */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[10px] font-black text-orange-400 uppercase tracking-widest">
                  <Navigation className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> 
                  Authorized Operation Center
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>

    </div>
  );
}